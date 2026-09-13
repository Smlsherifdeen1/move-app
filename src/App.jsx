import {useEffect,useMemo,useState} from 'react';
import {missions,CATEGORY_LABELS,GOAL_CATEGORIES,goalNames} from './data/missions';
import {resources} from './data/resources';

const USER='move_user', DAILY='move_daily', HISTORY='move_history', COMPLETIONS='move_mission_history';
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
const today=()=>new Date().toLocaleDateString('en-CA');
const dateLabel=()=>new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
const dayDiff=(a,b)=>Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/86400000);
const targetFor=n=>n===3?3:Math.ceil(n*.75);
const defaultUser={onboardingComplete:false,primaryGoal:'job',difficulty:'standard',categories:GOAL_CATEGORIES.job,remindersEnabled:false};
const countFor=d=>({easy:3,standard:4,hardcore:5}[d]||4);

function chooseMissions(user,history){
 const n=countFor(user.difficulty), allowed=user.categories.length?user.categories:GOAL_CATEGORIES[user.primaryGoal];
 const completed=read(COMPLETIONS,{}), seed=new Date().getDate()+new Date().getMonth()*13;
 const eligible=missions.filter(m=>allowed.includes(m.category)&&!(m.oneTime&&completed[m.id]?.length)&&(!completed[m.id]?.length||dayDiff(completed[m.id].at(-1),today())>= (m.cooldown||0)));
 const pool=(eligible.length?eligible:missions.filter(m=>allowed.includes(m.category))).sort((a,b)=>((a.id.charCodeAt(0)+seed)%11)-((b.id.charCodeAt(0)+seed)%11));
 const primary=GOAL_CATEGORIES[user.primaryGoal]||allowed;
 const pick=(filter,selected)=>pool.find(m=>filter(m)&&!selected.includes(m.id));
 const ids=[];
 // Prefer work toward the user’s declared goal, then breadth.
 for(let i=0;i<(user.difficulty==='hardcore'?3:2);i++){const m=pick(x=>primary.includes(x.category)&&x.category!=='body',ids);if(m)ids.push(m.id)}
 for(const category of ['skill','network','income','self','body']){if(ids.length>=n)break;const m=pick(x=>x.category===category,ids);if(m)ids.push(m.id)}
 for(const m of pool){if(ids.length>=n)break;if(!ids.includes(m.id))ids.push(m.id)}
 return ids.slice(0,n);
}
function getDaily(user){
 const now=today(), saved=read(DAILY,null);
 if(saved?.date===now)return saved;
 if(saved?.date){const oldHistory=read(HISTORY,{});oldHistory[saved.date]={assigned:saved.ids,completed:saved.completed||[],successful:(saved.completed||[]).length>=targetFor(saved.ids.length)};write(HISTORY,oldHistory)}
 const next={date:now,ids:chooseMissions(user,read(HISTORY,{})),completed:[]};write(DAILY,next);return next;
}
function calcStats(daily){
 const history={...read(HISTORY,{}),[daily.date]:{assigned:daily.ids,completed:daily.completed,successful:daily.completed.length>=targetFor(daily.ids.length)}};
 const dates=Object.keys(history).sort();let current=0,best=0,run=0,total=0;
 dates.forEach(d=>{const h=history[d];total+=h.completed.length;if(h.successful){run++;best=Math.max(best,run)}else run=0});
 for(let i=dates.length-1;i>=0;i--){if(history[dates[i]].successful)current++;else break}
 const week=dates.slice(-7).filter(d=>history[d].successful).length,month=new Date().toISOString().slice(0,7);
 return {history,current,best,total,week,month:dates.filter(d=>d.startsWith(month)&&history[d].successful).length};
}

function App(){
 const [user,setUser]=useState(()=>read(USER,defaultUser)); const [daily,setDaily]=useState(()=>getDaily(read(USER,defaultUser)));
 const [page,setPage]=useState('today'); const [onboard,setOnboard]=useState(user.onboardingComplete?0:1); const [notice,setNotice]=useState(null); const [detail,setDetail]=useState(null);
 useEffect(()=>{write(USER,user)},[user]);
 const assigned=useMemo(()=>daily.ids.map(id=>missions.find(m=>m.id===id)).filter(Boolean),[daily]);
 const stats=calcStats(daily), done=daily.completed.length, pct=assigned.length?Math.round(done/assigned.length*100):0;
 const complete=id=>{if(daily.completed.includes(id))return;const next={...daily,completed:[...daily.completed,id]};setDaily(next);write(DAILY,next);const history=read(COMPLETIONS,{});history[id]=[...(history[id]||[]),today()];write(COMPLETIONS,history);const reached=next.completed.length===targetFor(next.ids.length);setNotice(reached?'day':`Good. You just moved forward. ${next.ids.length-next.completed.length} missions remaining today.`)};
 const setSetting=(key,value)=>{setUser({...user,[key]:value})};
 if(onboard)return <Onboarding step={onboard} setStep={setOnboard} user={user} setUser={setUser} finish={()=>{const u={...user,onboardingComplete:true};setUser(u);setDaily(getDaily(u));setOnboard(0)}}/>;
 const openResource=category=>{setPage('resources');setDetail({resource:category})};
 return <main className="app"><header><button className="brand" onClick={()=>setPage('today')}>MOVE<span>.</span></button>{page==='today'&&<div className="day">{dateLabel()}<br/><b>🔥 Day {Math.max(1,stats.current+(stats.history[today()]?.successful?0:1))}</b></div>}</header>
 <section className="content">{page==='today'&&<Today assigned={assigned} completed={daily.completed} done={done} pct={pct} stats={stats} complete={complete} openResource={openResource} detail={detail} setDetail={setDetail}/>} {page==='progress'&&<Progress stats={stats} daily={daily}/>} {page==='resources'&&<Resources focus={detail?.resource}/>} {page==='settings'&&<Settings user={user} setSetting={setSetting} reset={()=>{if(confirm('Reset all MOVE progress? This cannot be undone.')){[USER,DAILY,HISTORY,COMPLETIONS].forEach(k=>localStorage.removeItem(k));location.reload()}}}/>}</section>
 <nav>{[['today','⌁','Today'],['progress','◔','Progress'],['resources','↗','Resources'],['settings','⚙','Settings']].map(([id,icon,label])=><button key={id} className={page===id?'active':''} onClick={()=>{setPage(id);setDetail(null)}}><i>{icon}</i>{label}</button>)}</nav>
 {notice&&<div className="toast" onClick={()=>setNotice(null)}><strong>{notice==='day'?'🔥 DAY COMPLETE':'✓ MISSION COMPLETE'}</strong><p>{notice==='day'?<>You showed up today. That’s the point.<br/><b>Current streak: {stats.current+1} days</b></>:notice}</p></div>}</main>
}

function Onboarding({step,setStep,user,setUser,finish}){const next=()=>setStep(step+1), opts=Object.entries(goalNames);const toggle=c=>setUser({...user,categories:user.categories.includes(c)?user.categories.filter(x=>x!==c):[...user.categories,c]});
 if(step===1)return <div className="onboard hero"><div className="brand large">MOVE<span>.</span></div><h1>DON’T STAY STUCK.<br/><em>MOVE.</em></h1><p>Every day, do something<br/>that moves your life forward.</p><button className="primary" onClick={next}>GET STARTED →</button></div>;
 if(step===2)return <div className="onboard"><Kicker n="01 / 04"/><h1>WHAT ARE YOU<br/>WORKING TOWARD?</h1><div className="choices">{opts.map(([id,name])=><button className={user.primaryGoal===id?'selected':''} key={id} onClick={()=>setUser({...user,primaryGoal:id,categories:GOAL_CATEGORIES[id]})}>{name}<b>↗</b></button>)}</div><button className="primary" onClick={next}>CONTINUE →</button></div>;
 if(step===3)return <div className="onboard"><Kicker n="02 / 04"/><h1>HOW MUCH CAN<br/>YOU HANDLE?</h1><div className="tiers">{[['easy','EASY','3 missions/day'],['standard','STANDARD','4 missions/day'],['hardcore','HARDCORE','5 missions/day']].map(([id,name,text])=><button className={user.difficulty===id?'selected':''} onClick={()=>setUser({...user,difficulty:id})} key={id}><b>{name}</b><span>{text}</span></button>)}</div><button className="primary" onClick={next}>CONTINUE →</button></div>;
 if(step===4)return <div className="onboard"><Kicker n="03 / 04"/><h1>WHAT SHOULD MOVE<br/>HELP YOU WITH?</h1><p className="muted">Choose at least two areas.</p><div className="chips">{Object.entries(CATEGORY_LABELS).map(([id,name])=><button className={user.categories.includes(id)?'selected':''} onClick={()=>toggle(id)} key={id}>{user.categories.includes(id)?'✓ ':''}{name}</button>)}</div><button disabled={user.categories.length<2} className="primary" onClick={next}>CONTINUE →</button></div>;
 const sample=chooseMissions(user,{}).map(id=>missions.find(m=>m.id===id));return <div className="onboard first"><Kicker n="YOUR FIRST MOVE"/><h1>Today isn’t about changing<br/>your whole life.</h1><p>Just make some progress.</p><h3>TODAY’S MISSIONS</h3>{sample.map(m=><div className="sample" key={m.id}>□ <span>{m.title}</span></div>)}<button className="primary" onClick={finish}>START MOVING →</button></div>}
const Kicker=({n})=><small className="kicker">{n}</small>;

function Today({assigned,completed,done,pct,stats,complete,openResource,detail,setDetail}){return <><div className="intro"><h1>DON’T STAY STUCK.<br/><em>MAKE SOME PROGRESS.</em></h1><div className="progressHead"><span>Today’s Progress</span><b>{pct}%</b></div><div className="bar"><i style={{width:`${pct}%`}}/></div><p className="muted">{done} / {assigned.length} completed</p></div><h3>TODAY’S MISSIONS</h3><div className="missions">{assigned.map(m=><Mission key={m.id} m={m} done={completed.includes(m.id)} complete={complete} openResource={openResource} setDetail={setDetail}/>)}</div><div className="streak">🔥 <b>{stats.current} DAY STREAK</b><span>Keep moving.</span></div>{detail?.instruction&&<Instruction m={detail.instruction} close={()=>setDetail(null)} complete={complete}/>}</>}
function Mission({m,done,complete,openResource,setDetail}){const action=()=>m.type==='resource'?openResource(m.resource):m.type==='internal'?setDetail({instruction:m}):complete(m.id);return <article className={'mission '+(done?'done':'')}><div className="missionTop"><small>{CATEGORY_LABELS[m.category]}</small>{done&&<b>✓ DONE</b>}</div><h2>{m.title}</h2><p>{m.description}</p><footer><span>◷ {m.time}</span>{!done&&<button onClick={action}>{m.type==='resource'?'FIND NOW →':m.type==='internal'?'START →':'COMPLETE'}</button>}</footer></article>}
function Instruction({m,close,complete}){return <div className="overlay"><div className="sheet"><button className="close" onClick={close}>×</button><small>{CATEGORY_LABELS[m.category]}</small><h1>{m.title}</h1><p>{m.description}</p><div className="checklist"><p>□ Set a timer for {m.time}</p><p>□ Focus on one clear outcome</p><p>□ Keep the useful result</p></div><button className="primary" onClick={()=>{complete(m.id);close()}}>MARK COMPLETE</button></div></div>}
function Progress({stats,daily}){const now=new Date(), days=Array.from({length:new Date(now.getFullYear(),now.getMonth()+1,0).getDate()},(_,i)=>i+1), todayPct=daily.ids.length?Math.round(daily.completed.length/daily.ids.length*100):0;const key=d=>`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;return <><div className="pageTitle"><small>YOUR MOMENTUM</small><h1>PROGRESS</h1></div><div className="statGrid"><Stat label="CURRENT STREAK" value={`${stats.current} DAYS`} icon="🔥"/><Stat label="BEST STREAK" value={`${stats.best} DAYS`} icon="🏆"/><Stat label="TODAY" value={`${todayPct}%`}/><Stat label="THIS WEEK" value={`${stats.week} / 7 DAYS`}/><Stat label="THIS MONTH" value={`${stats.month} DAYS`}/><Stat label="MISSIONS COMPLETED" value={stats.total}/></div><h3>{now.toLocaleString('en-US',{month:'long'}).toUpperCase()}</h3><div className="calendar">{['S','M','T','W','T','F','S'].map((x,i)=><b key={i}>{x}</b>)}{Array.from({length:new Date(now.getFullYear(),now.getMonth(),1).getDay()},(_,i)=><i key={'e'+i}/>)}{days.map(d=>{const h=stats.history[key(d)];return <span className={h?.successful?'success':h?'partial':''} key={d}>{d}{h&&<em>{h.successful?'✓':'·'}</em>}</span>})}</div><p className="muted center">A successful day means completing at least 75% of your missions.</p></>}
function Stat({label,value,icon}){return <div className="stat"><small>{icon} {label}</small><b>{value}</b></div>}
function Resources({focus}){const [category,setCategory]=useState(focus||'All');useEffect(()=>{if(focus)setCategory(focus)},[focus]);const categories=['All','Nigerian Jobs','Remote Work','Freelancing','Internships','Learn a Skill','Make Money','CV / LinkedIn / Portfolio','Interview Preparation','Scam Safety'];const displayed=category==='All'?resources:resources.filter(r=>r.category===category);return <><div className="pageTitle"><small>USEFUL PLACES TO START</small><h1>RESOURCES</h1></div><div className="resourceTabs">{categories.map(c=><button className={category===c?'selected':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>{category==='Scam Safety'?<Safety/>:<><div className="resourceList">{displayed.length?displayed.map(r=><article className="resource" key={r.name}><small>{r.category}</small><h2>{r.name}</h2><p>{r.description}</p><a href={r.url} target="_blank" rel="noreferrer">OPEN ↗</a></article>):<p className="empty">Curated resources for this area are coming soon. Explore the other categories while you build momentum.</p>}</div><Safety/></>}</>}
function Safety({compact=false}){return <section className={'safety '+(compact?'only':'')}><small>STAY SAFE</small><h2>NEVER PAY TO GET A JOB.</h2><p>Real employers do not ask for recruitment or interview fees, fake training payments, OTPs/PINs, bank passwords, cryptocurrency, or money via suspicious WhatsApp recruitment messages. Be wary of unrealistic promises. A job is never guaranteed.</p></section>}
function Settings({user,setSetting,reset}){const exportData=()=>{const blob=new Blob([JSON.stringify({user,daily:read(DAILY,{}),history:read(HISTORY,{}),missionHistory:read(COMPLETIONS,{})},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='move-progress.json';a.click();URL.revokeObjectURL(a.href)};return <><div className="pageTitle"><small>YOUR PREFERENCES</small><h1>SETTINGS</h1></div><Setting title="My Goal"><select value={user.primaryGoal} onChange={e=>setSetting('primaryGoal',e.target.value)}>{Object.entries(goalNames).map(([v,n])=><option value={v} key={v}>{n}</option>)}</select></Setting><Setting title="Daily Target"><div className="segmented">{['easy','standard','hardcore'].map(x=><button className={user.difficulty===x?'selected':''} onClick={()=>setSetting('difficulty',x)} key={x}>{x}</button>)}</div></Setting><Setting title="Categories"><div className="chips compact">{Object.entries(CATEGORY_LABELS).map(([id,n])=><button className={user.categories.includes(id)?'selected':''} key={id} onClick={()=>user.categories.length>2||!user.categories.includes(id)?setSetting('categories',user.categories.includes(id)?user.categories.filter(x=>x!==id):[...user.categories,id]):null}>{n}</button>)}</div></Setting><Setting title="Reminders"><label className="toggle"><span>Daily reminder</span><input type="checkbox" checked={user.remindersEnabled} onChange={e=>setSetting('remindersEnabled',e.target.checked)}/></label></Setting><Setting title="Data"><button className="lineButton" onClick={exportData}>Export My Progress <b>↓</b></button><button className="lineButton danger" onClick={reset}>Reset My Progress <b>→</b></button></Setting><section className="about"><b>MOVE</b><p>Don’t stay stuck. Move.</p><small>Version 1.0</small></section></>}
function Setting({title,children}){return <section className="setting"><h3>{title}</h3>{children}</section>}
export default App;

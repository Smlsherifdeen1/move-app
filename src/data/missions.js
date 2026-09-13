export const CATEGORY_LABELS={work:'Find Work',skill:'Build a Skill',income:'Find Income',self:'Build Yourself',network:'Network',body:'Body & Mind'};
export const GOAL_CATEGORIES={job:['work','self','network','body'],remote:['work','skill','network','body'],freelance:['income','skill','self','body'],skill:['skill','self','body','network'],money:['income','skill','network','body'],build:['skill','self','income','body'],unsure:['skill','self','body','network']};
export const goalNames={job:'Find a Job',remote:'Find Remote Work',freelance:'Start Freelancing',skill:'Learn a Skill',money:'Make Money',build:'Build Something',unsure:"I'm Not Sure Yet"};
export const missions=[
{id:'apply3',category:'work',title:'Apply for 3 jobs',description:'Choose focused roles and submit three quality applications.',time:'45 min',type:'resource',resource:'Nigerian Jobs',cooldown:1},
{id:'apply5',category:'work',title:'Apply for 5 jobs',description:'Make five thoughtful applications.',time:'75 min',type:'resource',resource:'Nigerian Jobs',cooldown:1},
{id:'listings',category:'work',title:'Check new job listings',description:'Save roles that match your direction.',time:'20 min',type:'resource',resource:'Nigerian Jobs',cooldown:1},
{id:'followup',category:'work',title:'Follow up on an application',description:'Send one concise, professional follow-up.',time:'15 min',type:'simple',cooldown:2},
{id:'keywords',category:'work',title:'Improve your job search keywords',description:'Refine the words you use to find suitable roles.',time:'15 min',type:'internal',cooldown:3},
{id:'learn45',category:'skill',title:'Learn for 45 minutes',description:'Spend focused time building a useful skill.',time:'45 min',type:'resource',resource:'Learn a Skill',cooldown:1},
{id:'course',category:'skill',title:'Complete one course lesson',description:'Finish a lesson and note one useful takeaway.',time:'30 min',type:'resource',resource:'Learn a Skill',cooldown:1},
{id:'excel',category:'skill',title:'Practice Excel',description:'Learn and apply one spreadsheet technique.',time:'30 min',type:'resource',resource:'Learn a Skill',cooldown:1},
{id:'project',category:'skill',title:'Build a small project',description:'Make a small, shareable thing with what you know.',time:'45 min',type:'internal',cooldown:2},
{id:'gigs',category:'income',title:'Find 3 freelance opportunities',description:'Look for three real opportunities that fit your skills.',time:'30 min',type:'resource',resource:'Freelancing',cooldown:1},
{id:'fiverr',category:'income',title:'Create a Fiverr service',description:'Outline a clear service people can buy.',time:'35 min',type:'internal',oneTime:true},
{id:'client',category:'income',title:'Contact a potential client',description:'Send one specific, useful outreach message.',time:'20 min',type:'simple',cooldown:2},
{id:'cv',category:'self',title:'Improve your CV',description:'Strengthen one section with specific results.',time:'30 min',type:'internal',cooldown:7},
{id:'linkedin',category:'self',title:'Update LinkedIn',description:'Improve your headline, experience, or skills section.',time:'25 min',type:'internal',cooldown:7},
{id:'portfolio',category:'self',title:'Create a simple portfolio',description:'Collect your best work in one place.',time:'45 min',type:'internal',oneTime:true},
{id:'interview',category:'self',title:'Practice interview questions',description:'Answer three questions aloud and refine your examples.',time:'25 min',type:'internal',cooldown:2},
{id:'contact',category:'network',title:'Contact someone in your field',description:'Ask a thoughtful question or share genuine interest.',time:'15 min',type:'simple',cooldown:2},
{id:'recruiter',category:'network',title:'Connect with a recruiter',description:'Send a short, relevant connection request.',time:'15 min',type:'simple',cooldown:3},
{id:'community',category:'network',title:'Join a relevant professional community',description:'Find a group where opportunities and ideas are shared.',time:'20 min',type:'resource',resource:'Remote Work',cooldown:7},
{id:'walk',category:'body',title:'Walk for 30 minutes',description:'Clear your head and take care of your energy.',time:'30 min',type:'simple',cooldown:1},
{id:'exercise',category:'body',title:'Exercise for 30 minutes',description:'Move your body at a sustainable pace.',time:'30 min',type:'simple',cooldown:1},
{id:'plan',category:'body',title:'Plan tomorrow',description:'Write the three things that will matter most.',time:'10 min',type:'internal',cooldown:1},
{id:'workspace',category:'body',title:'Organize your workspace',description:'Make your next focused session easier to start.',time:'15 min',type:'simple',cooldown:3}
];

export const CATEGORY_LABELS={work:'Find Work',skill:'Build a Skill',income:'Find Income',self:'Build Yourself',network:'Network',body:'Body & Mind'};
export const GOAL_CATEGORIES={job:['work','self','network','body'],remote:['work','skill','network','body'],freelance:['income','skill','self','body'],skill:['skill','self','body','network'],money:['income','skill','network','body'],build:['skill','self','income','body'],unsure:['skill','self','body','network']};
export const goalNames={job:'Find a Job',remote:'Find Remote Work',freelance:'Start Freelancing',skill:'Learn a Skill',money:'Make Money',build:'Build Something',unsure:"I'm Not Sure Yet"};

const whyById={
  apply3:'Focused applications put you in front of more employers. Quality and consistency create more interview opportunities over time.',
  apply5:'A steady application habit widens your chances of hearing back. Thoughtful applications are more useful than sending the same CV everywhere.',
  listings:'Checking fresh listings helps you apply before roles become crowded or close. Saving good roles also makes your next application session easier.',
  'save-ten-jobs':'A practical shortlist turns a vague job search into clear next actions. It gives you choices to review and tailor applications for.',
  'job-alerts':'Alerts bring relevant openings to you instead of relying on memory to search. They help you respond while a role is still active.',
  'job-board-profile':'A complete profile makes it easier for recruiters and job boards to match you with roles. It also saves time when applying later.',
  'job-fair-check':'Hiring events can reveal employers and roles that are not obvious in regular searches. Saving the details gives you time to prepare.',
  'remote-job-search':'Remote roles have specific location and eligibility requirements. A focused search helps you identify realistic options instead of wasting applications.',
  'remote-company-list':'Following suitable companies gives you a stronger pipeline than searching only when you need a job. It also helps you learn what skills they value.',
  keywords:'Better search terms surface roles that match your actual skills and goals. Small wording changes can make your search results more relevant.',
  'tailor-cv-role':'Tailoring shows an employer how your experience fits this particular role. It makes the most relevant evidence easier to notice.',
  'application-tracker':'Tracking applications prevents missed follow-ups and duplicated effort. It gives you a clear view of what needs attention next.',
  'role-research':'Knowing an employer helps you write a more relevant application and prepare for a conversation. It also helps you judge whether the role suits you.',
  'cover-letter':'A tailored letter can explain a match that a CV alone may not show. It is most useful when it connects your evidence to the employer’s needs.',
  'rejection-review':'A rejection can reveal a practical improvement for the next application. Recording one lesson keeps you from repeating the same avoidable mistake.',
  'references-list':'Prepared references let you respond quickly when an employer asks. Checking details early is more professional than scrambling at the last moment.',
  followup:'A polite follow-up keeps your application visible and can clarify the next step. It works best when it is brief and sent at a reasonable time.',
  'application-proofread':'Small errors can distract from otherwise strong experience. A final check protects the work you already put into the application.',
  learn45:'Focused practice builds usable ability better than occasional passive browsing. A longer session gives you enough time to apply what you learn.',
  course:'Finishing lessons creates a concrete record of progress and builds knowledge in sequence. A takeaway helps turn the lesson into something you can use.',
  excel:'Excel is used in many operations, finance, and admin roles. Practicing a technique makes it more likely you can demonstrate it when needed.',
  'tutorial-rebuild':'Recreating an example tests whether you understand the process, not just the video. It leaves you with a small proof of practice.',
  'design-recreate':'Rebuilding a design helps you notice spacing, hierarchy, and layout decisions. Repetition develops practical visual judgment.',
  'certificate-path':'Comparing paths prevents spending time or money on a credential that does not fit your goal. A realistic next step makes the option actionable.',
  project:'Small projects turn learning into evidence you can show. They also expose the practical gaps that a course may not reveal.',
  'spreadsheet-budget':'Building a budget sheet practices formulas on a useful real-world task. It creates a sample you can improve and show later.',
  'write-how-to':'Explaining a process clearly reveals what you actually understand. A guide can also become a useful work sample or reference.',
  'skill-notes':'Condensing notes forces you to identify the parts worth remembering. A cheat sheet makes future practice faster and more independent.',
  'presentation-practice':'Clear slides are useful in many workplace settings. Practicing them helps you organize information for someone who is new to the topic.',
  'formula-practice':'Using formulas in a sheet builds confidence beyond memorizing their names. It is practical evidence that you can work with common spreadsheet tasks.',
  'skill-drill':'Deliberate repetition makes a core task quicker and more reliable. Recording the result helps you see whether your practice is working.',
  'typing-practice':'Typing accuracy reduces small errors in applications and everyday work. Measuring it gives you a clear baseline to improve.',
  'learn-shortcut':'Keyboard shortcuts save small amounts of time repeatedly during real work. Using them immediately helps the habit stick.',
  'feedback-skill':'Specific feedback can show you what to improve next. Asking about one piece makes it easier for someone to give a useful answer.',
  'teach-back':'Explaining without notes tests whether you can use an idea, not just recognize it. It identifies gaps worth reviewing.',
  gigs:'Finding real opportunities shows which skills and services are currently being requested. A shortlist gives you concrete options to assess.',
  'proposal-draft':'A tailored proposal shows a client that you understand their task and outcome. Practicing one improves your ability to respond quickly to future work.',
  'marketplace-profile':'A clear profile helps clients understand what you offer before they contact you. Strong examples and specific skills build trust.',
  'price-research':'Comparing similar offers helps you set a price based on the market rather than guessing. It also clarifies how your service should be positioned.',
  'microtask-check':'Checking payment terms and task details helps you avoid unclear or low-value work. It makes your time decisions more informed.',
  'income-platform-review':'Comparing platforms exposes differences in fees, requirements, and available work. It helps you choose where your effort is most likely to pay off.',
  fiverr:'Defining a service turns a general skill into something a client can understand and buy. It also clarifies the result you are promising.',
  'service-menu':'A specific offer makes it easier to discuss your work with potential clients. Clear scope and timing reduce misunderstandings later.',
  'local-business-list':'Local businesses may have visible problems you can help solve. A targeted list gives you people to research and contact instead of waiting for leads.',
  'sample-deliverable':'A finished example proves what you can do more clearly than a claim. It gives potential clients something concrete to evaluate.',
  'whatsapp-catalogue':'A simple catalogue lets interested people see your services and starting prices quickly. It makes informal referrals easier to act on.',
  'invoice-template':'A reusable invoice helps you request payment clearly and professionally. Preparing it before a job prevents delays when work is complete.',
  'sales-post':'A helpful sales post practices explaining a client problem and your solution. Clear messaging makes it easier for the right people to respond.',
  'profit-check':'Calculating profit shows whether an offer is worth the time and cost involved. It helps you adjust pricing before you commit to more work.',
  client:'Direct, useful outreach can start conversations that job boards never create. Being specific makes the message easier to respond to.',
  'customer-conversation':'Listening to a potential customer helps you understand real demand before building an offer. It can reveal language and problems to use in your service.',
  'referral-request':'A warm introduction can be more credible than cold outreach. Asking clearly gives people an easy way to help if they are comfortable doing so.',
  'follow-up-lead':'Following up keeps a genuine conversation from going cold. It can surface timing or concerns that you could not learn from silence.',
  'cv-resource-review':'Good examples help you spot effective structure and wording for your own CV. Choosing one useful pattern gives you a concrete improvement to make.',
  'portfolio-platform-review':'Choosing a platform removes a decision that can delay showing your work. The right option is one you can maintain with the work you have.',
  'interview-resource-review':'Practicing common questions reduces the pressure of answering from scratch. Bullet points help you prepare examples without sounding memorized.',
  cv:'Specific results make a CV more credible and easier to scan. Improving one section is a manageable way to strengthen the whole document.',
  linkedin:'A current LinkedIn profile helps recruiters and contacts understand your direction. Small updates can make your relevant experience easier to find.',
  portfolio:'A portfolio gives employers or clients evidence beyond a list of skills. Even a simple collection makes your work easier to review.',
  interview:'Practicing aloud makes your answers clearer and less rehearsed. It helps you notice where an example needs better detail.',
  'achievement-bank':'A bank of examples makes CV updates and interview preparation faster. Writing the outcomes now prevents useful evidence from being forgotten.',
  'career-story':'A short introduction helps you explain your direction when someone asks. It gives your experience a clear thread instead of a list of jobs.',
  'portfolio-case-study':'A case study explains the value of your work, not just the finished item. It helps others understand your decisions and contribution.',
  'strengths-audit':'Specific examples turn vague strengths into credible evidence. They can guide how you describe yourself in applications and interviews.',
  'gap-plan':'Naming a gap is useful only when it leads to action. Two scheduled steps make improvement more likely than a general intention.',
  'mock-interview-record':'Watching or listening back shows habits you may miss while answering. One focused improvement is easier to practice next time.',
  'weekly-review':'A short review reveals what moved forward and what needs adjustment. It helps next week start with a clearer priority.',
  'boundary-script':'Prepared wording makes it easier to protect your time without sounding abrupt. It supports reliable work by keeping commitments realistic.',
  'professional-email':'A clear email address and signature make it easier for employers and clients to trust and contact you. It is a small detail that appears often.',
  'document-folder':'Keeping important documents together saves time during applications and requests. It also reduces the risk of sending an outdated file.',
  'profile-photo':'A clear, professional photo helps people recognize you on work profiles. It should support your profile without distracting from your experience.',
  community:'Professional communities can expose you to ideas, openings, and people in your field. Joining is a first step; useful participation comes later.',
  'event-rsvp':'Registering early makes an opportunity concrete and gives you time to prepare. Events can be a practical way to learn about people and roles.',
  'alumni-search':'Alumni may share useful context about a field or employer because of a common starting point. Identifying them makes thoughtful outreach easier.',
  'network-list':'A short list helps you approach networking with purpose rather than contacting people at random. The reason to contact each person keeps your message relevant.',
  'local-meetup-search':'Local events can create relationships that are difficult to build only online. Saving the details gives you an option to act on later.',
  contact:'A thoughtful conversation can give you information and perspective that a job listing cannot. Genuine interest is a better basis than asking strangers for favors.',
  recruiter:'A relevant connection gives a recruiter enough context to recognize your field and interests. It may lead to useful information even when there is no immediate role.',
  reconnect:'Former colleagues already know some of your work and can be valuable long-term contacts. A genuine check-in keeps the relationship human and current.',
  'informational-chat':'A short career conversation can help you understand a path before you invest heavily in it. Asking for limited time is respectful and easier to accept.',
  'thank-you-note':'Acknowledging help strengthens professional relationships. It also makes people more likely to remember a positive interaction.',
  'share-work':'Showing finished work invites feedback and makes your progress visible. A specific question gives the recipient a clear way to help.',
  'group-introduction':'A concise introduction helps community members understand who you are and what you are learning. It makes future conversations less awkward to start.',
  'mentor-question':'One focused question is easier to answer than a broad request for advice. Context helps a mentor give guidance you can actually use.',
  'referral-conversation':'Learning about a role before applying can reveal whether you are a fit and how to tailor your materials. It is more respectful than immediately asking for a referral.',
  'industry-update':'Following industry changes helps you speak more specifically about your field. Sharing one useful point can also start a relevant conversation.',
  'accountability-partner':'A defined check-in adds a deadline and another person to report to. Keeping it small makes the commitment easier to sustain.',
  'connection-followup':'A timely follow-up turns a brief meeting into a real professional connection. Referring to the conversation shows you were paying attention.',
  plan:'Planning tomorrow reduces the friction of deciding what to do when the day starts. Three priorities keep the plan realistic.',
  'breathing-reset':'A brief pause can lower immediate stress and make the next action easier to see. Writing one next step turns the reset into forward movement.',
  'morning-setup':'Preparing in advance removes small obstacles from the start of your day. It makes it easier to begin before distractions take over.',
  'energy-check':'Noticing what drains or restores you helps you plan work around your actual capacity. One recovery action is more useful than ignoring the pattern.',
  'weekly-reset':'A simple reset reduces the small tasks that compete for attention during the week. Preparation makes it easier to focus on the work that matters.',
  walk:'A walk can improve energy and create space away from a screen. It is a practical reset when concentration is low.',
  exercise:'Regular movement supports energy, sleep, and the ability to work consistently. A sustainable session is more valuable than an occasional extreme one.',
  workspace:'A clearer workspace reduces friction when you sit down to work. It makes the next focused session easier to start.',
  'water-break':'Hydration and a short pause can help you reset attention during a work block. Refilling now removes one reason to interrupt yourself later.',
  'stretch-break':'Stretching breaks up long periods in one position. It can reduce discomfort that makes focused work harder.',
  'sleep-plan':'A planned bedtime protects the rest you need for consistent energy. Deciding before you are tired makes it easier to follow through.',
  'screen-break':'Time away from screens gives your attention and eyes a chance to reset. Returning at a set time keeps the pause from drifting.',
  'healthy-meal':'A balanced meal supports steadier energy for the rest of the day. Planning it can be more practical than deciding when you are already depleted.',
  'focus-block':'A protected work block creates progress on one priority without constant context switching. It shows what you can finish when distractions are limited.',
  'outside-light':'Daylight and a change of environment can help reset your energy and attention. A short break is often enough to make the next task easier.',
  'posture-reset':'Small ergonomic adjustments can prevent discomfort during longer work sessions. Setting them now supports sustained focus.',
  'phone-boundary':'Putting the phone away removes a frequent source of interruption. A defined window lets you practice deeper focus without making a permanent rule.'
};

const make=(category,type,resource,rows)=>rows.map(([id,title,description,estimatedMinutes,cooldown=1,oneTime=false])=>({id,category,title,description,why:whyById[id],time:`${estimatedMinutes} min`,type,...(resource?{resource}:{}),cooldown,...(oneTime?{oneTime:true}:{}),estimatedMinutes}));

export const missions=[
...make('work','resource','Nigerian Jobs',[
['apply3','Apply for 3 jobs','Choose focused roles and submit three quality applications.',45],['apply5','Apply for 5 jobs','Make five thoughtful applications.',75],['listings','Check new job listings','Save roles that match your direction.',20],['save-ten-jobs','Save 10 suitable vacancies','Bookmark 10 roles you could realistically apply for this week.',30,2],['job-alerts','Set up two job alerts','Create targeted alerts for your role and preferred location or remote work.',20,30,true],['job-board-profile','Complete one job-board profile','Add your headline, experience, skills, and current contact details.',30,7],['job-fair-check','Find an upcoming hiring event','Save the date, location or link, and registration requirement for one event.',20,7]
]),
...make('work','resource','Remote Work',[
['remote-job-search','Search remote roles for 30 minutes','Save at least three remote roles with clear application requirements.',30],['remote-company-list','Research three remote-friendly companies','Save three companies whose open roles match your skills.',25,3]
]),
...make('work','internal',null,[
['keywords','Improve your job search keywords','Refine the words you use to find suitable roles.',15,3],['tailor-cv-role','Tailor your CV for one role','Match your summary and three bullet points to one job description.',25,2],['application-tracker','Update your application tracker','Record the status and next action for every application made this week.',15],['role-research','Research one target employer','Note its work, hiring needs, and one reason you are a fit.',25,3],['cover-letter','Draft a tailored cover letter','Write a one-page letter for one live vacancy.',35,2],['rejection-review','Review one unsuccessful application','Write one specific improvement to use in your next application.',15,3],['references-list','Prepare a reference list','List two people, their current details, and how they know your work.',20,14]
]),
...make('work','simple',null,[['followup','Follow up on an application','Send one concise, professional follow-up.',15,2],['application-proofread','Proofread one application','Check the CV, answers, links, and contact details before submitting.',15]]),

...make('skill','resource','Learn a Skill',[
['learn45','Learn for 45 minutes','Spend focused time building a useful skill.',45],['course','Complete one course lesson','Finish a lesson and note one useful takeaway.',30],['excel','Practice Excel','Learn and apply one spreadsheet technique.',30],['tutorial-rebuild','Rebuild one tutorial example','Follow a tutorial and reproduce its finished example yourself.',45,2],['design-recreate','Recreate one simple design','Rebuild a flyer, social post, or layout to practice visual hierarchy.',40,3],['certificate-path','Choose one certification path','Compare requirements and save a realistic next step for one certification.',25,14]
]),
...make('skill','internal',null,[
['project','Build a small project','Make a small, shareable thing with what you know.',45,2],['spreadsheet-budget','Build a simple budget spreadsheet','Create categories, enter five sample expenses, and calculate a total.',35,30,true],['write-how-to','Write a how-to guide','Create a short guide that explains one skill step by step.',30,3],['skill-notes','Turn notes into a cheat sheet','Condense one lesson into a one-page reference you can reuse.',25,3],['presentation-practice','Create three presentation slides','Make three clear slides that explain one idea to a beginner.',40,3],['formula-practice','Use three spreadsheet formulas','Apply SUM, IF, and one lookup or counting formula in a practice sheet.',35,2],['skill-drill','Complete a focused skill drill','Repeat one core task ten times and record what improved.',30,2]
]),
...make('skill','simple',null,[['typing-practice','Practice typing accuracy','Complete one 20-minute typing practice and record your accuracy.',20],['learn-shortcut','Learn five keyboard shortcuts','Use five new shortcuts while completing one real task.',20,3],['feedback-skill','Get feedback on one practice piece','Ask one person for feedback on a specific piece of work.',15,5],['teach-back','Teach back one concept','Explain one new concept aloud or in writing without looking at notes.',20,2]]),

...make('income','resource','Freelancing',[
['gigs','Find 3 freelance opportunities','Look for three real opportunities that fit your skills.',30],['proposal-draft','Draft a freelance proposal','Write a tailored proposal for one live project with a clear outcome.',30],['marketplace-profile','Improve one freelance profile','Update your bio, skills, and one work sample on a freelance platform.',30,7],['price-research','Research prices for one service','Compare five similar offers and write a fair starter price in naira.',25,7]
]),
...make('income','resource','Make Money',[
['microtask-check','Check legitimate microtask options','Review two options and save only work with clear tasks and payment terms.',20,3],['income-platform-review','Compare two income platforms','Note the task type, requirements, and fees for two suitable platforms.',25,7]
]),
...make('income','internal',null,[
['fiverr','Create a Fiverr service','Outline a clear service people can buy.',35,30,true],['service-menu','Define one service offer','Write the deliverable, turnaround time, and price range for one service.',25,7],['local-business-list','List five local businesses to approach','Find five Nigerian businesses that could use a service you can deliver.',30,5],['sample-deliverable','Create a sample deliverable','Finish one example of the work you want clients to hire you for.',45,3],['whatsapp-catalogue','Draft a WhatsApp service catalogue','List three services, starting prices, and how to contact you.',30,30,true],['invoice-template','Create a simple invoice template','Make a reusable invoice with your details, service, amount, and due date.',25,30,true],['sales-post','Write one helpful sales post','Draft a post that names a client problem, your offer, and a call to action.',25,3],['profit-check','Calculate profit on one offer','List the costs, your time, and the profit for one service or product.',20,7]
]),
...make('income','simple',null,[['client','Contact a potential client','Send one specific, useful outreach message.',20,2],['customer-conversation','Ask one customer what they need','Have a short conversation about a problem you could help solve.',20,3],['referral-request','Ask for one referral','Ask a past customer or colleague to introduce you to one potential client.',15,7],['follow-up-lead','Follow up with one warm lead','Send a polite message asking whether they need help with the discussed work.',15,3]]),

...make('self','resource','CV / LinkedIn / Portfolio',[
['cv-resource-review','Review CV examples','Save two CV examples relevant to your field and note one useful format choice.',20,7],['portfolio-platform-review','Choose a portfolio platform','Compare two portfolio options and save the one you will use.',20,14]
]),
...make('self','resource','Interview Preparation',[
['interview-resource-review','Practice with interview resources','Choose three common questions and write bullet-point answers for each.',30,2]
]),
...make('self','internal',null,[
['cv','Improve your CV','Strengthen one section with specific results.',30,7],['linkedin','Update LinkedIn','Improve your headline, experience, or skills section.',25,7],['portfolio','Create a simple portfolio','Collect your best work in one place.',45,30,true],['interview','Practice interview questions','Answer three questions aloud and refine your examples.',25,2],['achievement-bank','Write five achievement examples','Document five results using what you did, how you did it, and the outcome.',30,7],['career-story','Write your career introduction','Draft a 60-second introduction covering your strengths and direction.',20,7],['portfolio-case-study','Write one portfolio case study','Describe the problem, your contribution, and the result for one project.',35,5],['strengths-audit','Identify three work strengths','List three strengths and one concrete example for each.',20,14],['gap-plan','Make a plan for one skill gap','Choose one gap and schedule the first two actions to close it.',20,7],['mock-interview-record','Record a mock interview answer','Record one two-minute answer and note one improvement after watching it.',20,3],['weekly-review','Review your career week','Write what you completed, what stalled, and one priority for next week.',20,7],['boundary-script','Prepare a professional boundary script','Write one polite sentence for declining work you cannot deliver well.',15,14]
]),
...make('self','simple',null,[['professional-email','Improve your professional email','Update your email signature and check that your address sounds professional.',15,30],['document-folder','Organize your career documents','Put your current CV, certificates, and work samples in one named folder.',20,14],['profile-photo','Choose a professional profile photo','Select or take a clear, well-lit head-and-shoulders photo for work profiles.',20,30]]),

...make('network','resource','Remote Work',[
['community','Join a relevant professional community','Find a group where opportunities and ideas are shared.',20,7],['event-rsvp','Register for one professional event','Save one relevant online or local event and add it to your calendar.',15,7]
]),
...make('network','internal',null,[
['alumni-search','Find two alumni in your field','Identify two people from your school or training programme doing relevant work.',20,7],['network-list','Build a five-person network list','List five people to learn from and one thoughtful reason to contact each.',20,14],['local-meetup-search','Find one local career meetup','Save details for one meetup, workshop, or association in your city.',20,7]
]),
...make('network','simple',null,[
['contact','Contact someone in your field','Ask a thoughtful question or share genuine interest.',15,2],['recruiter','Connect with a recruiter','Send a short, relevant connection request.',15,3],['reconnect','Reconnect with one former colleague','Send a genuine message and ask how their work is going.',15,7],['informational-chat','Request an informational chat','Ask one professional for a 15-minute conversation about their career path.',15,5],['thank-you-note','Send a thank-you note','Thank someone who gave you advice, time, or an introduction.',10,3],['share-work','Share one completed work sample','Send one finished sample to a trusted person and ask for a specific comment.',15,5],['group-introduction','Introduce yourself in one community','Post a concise introduction with your field and what you hope to learn.',15,7],['mentor-question','Ask a mentor one focused question','Send one question that gives enough context for a useful answer.',15,5],['referral-conversation','Ask about a role before applying','Message one contact to learn about a role or team before you apply.',15,3],['industry-update','Read and share one industry update','Read one relevant update and send its key point to one professional contact.',20,3],['accountability-partner','Set an accountability check-in','Agree on one date and one goal each of you will report back on.',15,7],['connection-followup','Follow up after meeting someone','Send a message within a week that refers to your conversation.',10,2]
]),

...make('body','internal',null,[
['plan','Plan tomorrow','Write the three things that will matter most.',10],['breathing-reset','Complete a breathing reset','Spend five minutes breathing slowly, then write your next single task.',10],['morning-setup','Prepare tomorrow’s morning setup','Lay out what you need and write the first task you will start with.',10],['energy-check','Do an energy check-in','Rate your energy, identify one drain, and take one practical recovery action.',10],['weekly-reset','Do a weekly personal reset','Tidy your bag, charge devices, and prepare your top three priorities.',30,7]
]),
...make('body','simple',null,[
['walk','Walk for 30 minutes','Clear your head and take care of your energy.',30],['exercise','Exercise for 30 minutes','Move your body at a sustainable pace.',30],['workspace','Organize your workspace','Make your next focused session easier to start.',15,3],['water-break','Drink and refill water','Drink a full glass of water and refill a bottle for your next work block.',5],['stretch-break','Do a 10-minute stretch','Complete a gentle full-body stretch away from your screen.',10],['sleep-plan','Set a sleep time for tonight','Choose a realistic bedtime and set one reminder to begin winding down.',5],['screen-break','Take a screen-free break','Spend 15 minutes away from screens and return at a set time.',15],['healthy-meal','Prepare one balanced meal','Prepare or choose a meal with a protein, staple, and fruit or vegetable.',30],['focus-block','Finish one distraction-free focus block','Work on one priority for 25 minutes with notifications off.',25],['outside-light','Get 15 minutes of daylight','Spend 15 minutes outside or by daylight without scrolling.',15],['posture-reset','Reset your work posture','Adjust your chair, screen, and desk setup for a comfortable 30-minute session.',10,2],['phone-boundary','Create a phone-free work window','Put your phone out of reach for one planned 30-minute work window.',35]
])
];

const CC_KEYS = Object.freeze({
  users:'users', currentUser:'currentUser', events:'events', registrations:'registrations', clubs:'clubs', joinedClubs:'joinedClubs', announcements:'announcements', lostFound:'lostFound', notifications:'notifications', theme:'theme'
});

const sampleData = {
  users: [
    {id:'u-demo',name:'Aarav Sharma',email:'student@campusconnect.com',roll:'CSE2026-001',department:'Computer Science & Engineering',year:'1st Year',password:'student123',role:'student',avatar:'https://i.pravatar.cc/160?img=12'},
    {id:'u-admin',name:'Campus Administrator',email:'admin@campusconnect.com',roll:'ADMIN-001',department:'Administration',year:'Staff',password:'admin123',role:'admin',avatar:'https://i.pravatar.cc/160?img=47'},
    {id:'u3',name:'Meera Kapoor',email:'meera@campusconnect.com',roll:'ECE2026-014',department:'Electronics & Communication',year:'1st Year',password:'demo123',role:'student'},
    {id:'u4',name:'Rohan Verma',email:'rohan@campusconnect.com',roll:'ME2025-031',department:'Mechanical Engineering',year:'2nd Year',password:'demo123',role:'student'},
    {id:'u5',name:'Simran Kaur',email:'simran@campusconnect.com',roll:'BBA2025-019',department:'Business Administration',year:'2nd Year',password:'demo123',role:'student'},
    {id:'u6',name:'Karan Malhotra',email:'karan@campusconnect.com',roll:'CSE2024-052',department:'Computer Science & Engineering',year:'3rd Year',password:'demo123',role:'student'},
    {id:'u7',name:'Ananya Gupta',email:'ananya@campusconnect.com',roll:'CE2024-021',department:'Civil Engineering',year:'3rd Year',password:'demo123',role:'student'},
    {id:'u8',name:'Dev Patel',email:'dev@campusconnect.com',roll:'EE2023-008',department:'Electrical Engineering',year:'4th Year',password:'demo123',role:'student'},
    {id:'u9',name:'Ishita Bansal',email:'ishita@campusconnect.com',roll:'CSE2026-044',department:'Computer Science & Engineering',year:'1st Year',password:'demo123',role:'student'},
    {id:'u10',name:'Arjun Sethi',email:'arjun@campusconnect.com',roll:'MBA2024-006',department:'Management Studies',year:'4th Year',password:'demo123',role:'student'}
  ],
  events: [
    {id:'e1',title:'TechFest 2026',date:'2026-10-08',time:'10:00 AM',venue:'Innovation Arena',category:'Technical',organizer:'CSE Department',registered:184,capacity:300,description:'A full-day showcase of student projects, lightning talks, startup demos and hands-on technology experiences.',image:'assets/images/techfest.svg'},
    {id:'e2',title:'Campus Hackathon',date:'2026-10-16',time:'6:00 PM',venue:'Block C Labs',category:'Competition',organizer:'Coding Club',registered:96,capacity:120,description:'Build useful campus-first products in 18 hours with a team, mentors and a judging panel.',image:'assets/images/hackathon.svg'},
    {id:'e3',title:'Freshers Meetup',date:'2026-09-30',time:'4:30 PM',venue:'Student Commons',category:'Social',organizer:'Student Affairs',registered:212,capacity:400,description:'An easy-going welcome evening with campus tours, ice-breakers, games and student society introductions.',image:'assets/images/freshers.svg'},
    {id:'e4',title:'Cultural Night',date:'2026-10-22',time:'7:00 PM',venue:'Open Air Theatre',category:'Cultural',organizer:'Cultural Council',registered:268,capacity:600,description:'A high-energy celebration of music, dance, theatre and performances from across the campus community.',image:'assets/images/cultural.svg'},
    {id:'e5',title:'Robotics Workshop',date:'2026-10-03',time:'11:30 AM',venue:'Robotics Lab',category:'Workshop',organizer:'Robotics Club',registered:52,capacity:70,description:'Learn sensor integration, motor control and rapid prototyping through a guided mini-robot build.',image:'assets/images/robotics.svg'},
    {id:'e6',title:'Coding Contest',date:'2026-10-11',time:'2:00 PM',venue:'Online • Lab Portal',category:'Competition',organizer:'Coding Club',registered:143,capacity:200,description:'A timed algorithmic problem-solving challenge covering data structures, logic and competitive programming.',image:'assets/images/coding.svg'},
    {id:'e7',title:'Inter-College Sports Meet',date:'2026-11-05',time:'8:00 AM',venue:'University Sports Complex',category:'Sports',organizer:'Sports Council',registered:310,capacity:800,description:'Track, football, badminton and basketball fixtures bringing teams from colleges around the region.',image:'assets/images/sports.svg'},
    {id:'e8',title:'Photography Workshop',date:'2026-10-27',time:'3:30 PM',venue:'Media Studio',category:'Workshop',organizer:'Photography Club',registered:61,capacity:90,description:'Practical composition, lighting and mobile photography exercises led by the campus media team.',image:'assets/images/photo.svg'}
  ],
  clubs: [
    {id:'c1',name:'Coding Club',category:'Technical',description:'Peer-led coding practice, projects and competitive programming sessions.',mission:'Make practical computing skills accessible to every student.',activities:['Weekly coding sprints','Git & open-source clinics','Contest practice'],faculty:'Dr. Neha Arora',student:'Karan Malhotra',members:186},
    {id:'c2',name:'Robotics Club',category:'Technical',description:'Build, test and compete with autonomous and assistive robots.',mission:'Turn curiosity into working hardware.',activities:['Arduino nights','Robot builds','Inter-college competitions'],faculty:'Prof. R. Menon',student:'Dev Patel',members:74},
    {id:'c3',name:'Photography Club',category:'Creative',description:'A space for campus photography, storytelling and visual experiments.',mission:'Document campus life through thoughtful images.',activities:['Photo walks','Portrait labs','Campus magazine'],faculty:'Ms. Aditi Rao',student:'Ishita Bansal',members:98},
    {id:'c4',name:'Literary Club',category:'Literature',description:'Reading circles, spoken word, debate and campus writing.',mission:'Build a vibrant culture of reading and expression.',activities:['Book clubs','Open mics','Debate nights'],faculty:'Dr. Ritu Sood',student:'Simran Kaur',members:121},
    {id:'c5',name:'Music Club',category:'Cultural',description:'Vocalists and instrumentalists collaborating across genres.',mission:'Create inclusive spaces for making and sharing music.',activities:['Jam sessions','Concerts','Studio basics'],faculty:'Mr. Manish Bedi',student:'Meera Kapoor',members:133},
    {id:'c6',name:'Dance Club',category:'Cultural',description:'Contemporary, classical and street styles with performance teams.',mission:'Move together, perform with confidence.',activities:['Choreography labs','Showcase teams','Flash mobs'],faculty:'Ms. Naina Kakkar',student:'Ananya Gupta',members:142},
    {id:'c7',name:'Entrepreneurship Club',category:'Innovation',description:'Ideas, founder stories and workshops around starting ventures.',mission:'Help students turn problems into responsible opportunities.',activities:['Founder talks','Idea labs','Pitch practice'],faculty:'Dr. Sameer Khurana',student:'Arjun Sethi',members:88},
    {id:'c8',name:'Sports Club',category:'Sports',description:'Training, recreation and competitive teams across campus sports.',mission:'Make active campus life accessible and consistent.',activities:['Fitness sessions','League fixtures','Sports festivals'],faculty:'Coach Vivek Sharma',student:'Rohan Verma',members:206}
  ],
  announcements: [
    {id:'a1',title:'Mid-Semester Timetable Released',description:'The academic office has published the verified timetable for the upcoming mid-semester assessments.',date:'2026-09-24',category:'Examination',important:true},
    {id:'a2',title:'Library Extended Hours During Assessments',description:'Central Library will remain open until 11:00 PM from September 28 to October 18.',date:'2026-09-23',category:'Academic',important:false},
    {id:'a3',title:'TechFest Volunteer Applications Open',description:'Students can apply for operations, stage, design and technical volunteer teams.',date:'2026-09-22',category:'Event',important:true},
    {id:'a4',title:'Campus Wi-Fi Maintenance Window',description:'Planned maintenance is scheduled for the east academic blocks between 1:00 AM and 3:00 AM on September 27.',date:'2026-09-21',category:'Notice',important:false},
    {id:'a5',title:'Scholarship Document Verification Desk',description:'A help desk will support students with scholarship document verification in Admin Block Room 12.',date:'2026-09-20',category:'General',important:false},
    {id:'a6',title:'Cultural Night Auditions',description:'Auditions for the main stage performances will be held in the auditorium lobby this Friday.',date:'2026-09-19',category:'Event',important:false},
    {id:'a7',title:'New Semester Club Registrations',description:'Club orientation booths will be available near Student Commons throughout next week.',date:'2026-09-18',category:'General',important:false},
    {id:'a8',title:'Lab Safety Refresher Session',description:'First-year engineering students using shared labs must attend one of the listed safety briefings.',date:'2026-09-17',category:'Academic',important:false},
    {id:'a9',title:'Hostel Maintenance Requests',description:'Residents can now submit non-urgent maintenance requests through the student help desk.',date:'2026-09-16',category:'Notice',important:false},
    {id:'a10',title:'Coding Contest Registration Closes Soon',description:'Entries for the October coding contest close three days before the contest date.',date:'2026-09-15',category:'Event',important:true}
  ],
  lostFound: [
    {id:'l1',type:'lost',item:'Blue Water Bottle',description:'Matte blue 1L bottle with a silver cap.',location:'Library 2nd Floor',date:'2026-09-23',contact:'studentaffairs@campusconnect.com',image:'assets/images/item-bottle.svg',status:'open',owner:'u3'},
    {id:'l2',type:'found',item:'Black USB-C Charger',description:'65W charger found near the electronics lab benches.',location:'Block B Lab 3',date:'2026-09-22',contact:'rohan@campusconnect.com',image:'assets/images/item-charger.svg',status:'open',owner:'u4'},
    {id:'l3',type:'lost',item:'Student ID Card',description:'ID card in a transparent holder, name starts with S.',location:'Student Commons',date:'2026-09-22',contact:'simran@campusconnect.com',image:'assets/images/item-card.svg',status:'open',owner:'u5'},
    {id:'l4',type:'found',item:'Grey Hoodie',description:'Plain grey hoodie, medium size.',location:'Open Air Theatre',date:'2026-09-21',contact:'sportsdesk@campusconnect.com',image:'assets/images/item-hoodie.svg',status:'resolved',owner:'u6'},
    {id:'l5',type:'lost',item:'Wireless Earbuds Case',description:'White case without earbuds.',location:'Cafeteria',date:'2026-09-20',contact:'ananya@campusconnect.com',image:'assets/images/item-earbuds.svg',status:'open',owner:'u7'},
    {id:'l6',type:'found',item:'Calculator',description:'Scientific calculator found after a tutorial class.',location:'Academic Block A',date:'2026-09-19',contact:'dev@campusconnect.com',image:'assets/images/item-calc.svg',status:'open',owner:'u8'},
    {id:'l7',type:'lost',item:'Notebook',description:'Green notebook with handwritten algorithms and a CSE label.',location:'Reading Room',date:'2026-09-18',contact:'ishita@campusconnect.com',image:'assets/images/item-book.svg',status:'open',owner:'u9'},
    {id:'l8',type:'found',item:'Keychain',description:'Small metal keychain with a red fabric tag.',location:'Main Gate Shuttle Stop',date:'2026-09-17',contact:'arjun@campusconnect.com',image:'assets/images/item-key.svg',status:'open',owner:'u10'}
  ],
  notifications: [
    {id:'n1',userId:'u-demo',title:'Welcome to CampusConnect',message:'Explore events, clubs and announcements from your dashboard.',date:'2026-09-25T00:30:00',type:'info',read:false},
    {id:'n2',userId:'u-demo',title:'New announcement',message:'Mid-Semester Timetable Released.',date:'2026-09-24T09:10:00',type:'announcement',read:false},
    {id:'n3',userId:'u-demo',title:'Event reminder',message:'Freshers Meetup starts on September 30.',date:'2026-09-24T08:30:00',type:'event',read:true},
    {id:'n4',userId:'u3',title:'Club joined',message:'You joined Coding Club.',date:'2026-09-24T12:10:00',type:'club',read:false},
    {id:'n5',userId:'u4',title:'Lost & Found update',message:'The grey hoodie post has been resolved.',date:'2026-09-23T18:00:00',type:'lost',read:true},
    {id:'n6',userId:'u-demo',title:'Registration successful',message:'You registered for TechFest 2026.',date:'2026-09-23T15:20:00',type:'event',read:false},
    {id:'n7',userId:'u5',title:'New announcement',message:'Scholarship Document Verification Desk.',date:'2026-09-22T09:00:00',type:'announcement',read:false},
    {id:'n8',userId:'u6',title:'Event reminder',message:'Campus Hackathon registration is nearing capacity.',date:'2026-09-21T14:00:00',type:'event',read:false},
    {id:'n9',userId:'u7',title:'Club joined',message:'You joined Photography Club.',date:'2026-09-20T10:15:00',type:'club',read:true},
    {id:'n10',userId:'u8',title:'New announcement',message:'Library Extended Hours During Assessments.',date:'2026-09-19T11:30:00',type:'announcement',read:false}
  ]
};

function getData(key,fallback=[]){
  try{const raw=localStorage.getItem(key); return raw===null?fallback:JSON.parse(raw)}catch{return fallback}
}
function saveData(key,value){localStorage.setItem(key,JSON.stringify(value)); return value}
function updateData(key,updater,fallback=[]){const current=getData(key,fallback); const next=updater(current); return saveData(key,next)}
function deleteData(key,predicate,fallback=[]){return updateData(key,list=>list.filter(item=>!predicate(item)),fallback)}
function uid(prefix='id'){return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}
function escapeHTML(value=''){return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}
function formatDate(value){const d=new Date(`${value}T12:00:00`); return Number.isNaN(d.getTime())?value:d.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})}
function formatDateTime(value){const d=new Date(value); return Number.isNaN(d.getTime())?value:d.toLocaleString(undefined,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}
function getCurrentUser(){return getData(CC_KEYS.currentUser,null)}
function setCurrentUser(user){saveData(CC_KEYS.currentUser,user)}
function getRegistrations(){return getData(CC_KEYS.registrations,{})}
function getJoinedClubs(){return getData(CC_KEYS.joinedClubs,{})}
function userRegistrations(userId=getCurrentUser()?.id){if(!userId)return []; return getRegistrations()[userId]||[]}
function userJoinedClubs(userId=getCurrentUser()?.id){if(!userId)return []; return getJoinedClubs()[userId]||[]}
function isRegistered(eventId,userId=getCurrentUser()?.id){return userRegistrations(userId).includes(eventId)}
function isJoined(clubId,userId=getCurrentUser()?.id){return userJoinedClubs(userId).includes(clubId)}

function initStorage(){
  const entries=[['users',sampleData.users],['events',sampleData.events],['clubs',sampleData.clubs],['announcements',sampleData.announcements],['lostFound',sampleData.lostFound],['notifications',sampleData.notifications]];
  entries.forEach(([name,data])=>{const key=CC_KEYS[name]; if(localStorage.getItem(key)===null)saveData(key,data)});
  if(localStorage.getItem(CC_KEYS.registrations)===null)saveData(CC_KEYS.registrations,{'u-demo':['e1','e3']});
  if(localStorage.getItem(CC_KEYS.joinedClubs)===null)saveData(CC_KEYS.joinedClubs,{'u-demo':['c1','c5']});
  if(localStorage.getItem(CC_KEYS.currentUser)===null)localStorage.removeItem(CC_KEYS.currentUser);
}

function initTheme(){
  const theme=localStorage.getItem(CC_KEYS.theme)||'light'; document.documentElement.dataset.theme=theme;
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
    btn.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');
    btn.textContent=theme==='dark'?'☀':'◐';
    btn.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';localStorage.setItem(CC_KEYS.theme,next);document.documentElement.dataset.theme=next;document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.textContent=next==='dark'?'☀':'◐')})
  });
}
function navActive(){const page=location.pathname.split('/').pop()||'index.html'; document.querySelectorAll('[data-nav]').forEach(a=>{a.classList.toggle('active',a.getAttribute('href')===page)})}
function initPublicNav(){
  const btn=document.querySelector('[data-mobile-nav]'), nav=document.querySelector('.main-nav');
  if(btn&&nav)btn.addEventListener('click',()=>nav.classList.toggle('open'));
  navActive();
}
function initSidebar(){
  const btn=document.querySelector('[data-sidebar-toggle]'), sidebar=document.querySelector('.sidebar');
  if(btn&&sidebar)btn.addEventListener('click',()=>sidebar.classList.toggle('open'));
  navActive();
  document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>sidebar?.classList.remove('open')))
}
function renderUserUI(){
  const user=getCurrentUser();
  document.querySelectorAll('[data-user-name]').forEach(el=>el.textContent=user?.name||'Guest');
  document.querySelectorAll('[data-user-email]').forEach(el=>el.textContent=user?.email||'Not signed in');
  document.querySelectorAll('[data-user-roll]').forEach(el=>el.textContent=user?.roll||'Not available');
  document.querySelectorAll('[data-user-avatar]').forEach(img=>{img.src=user?.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name||'Guest')}&background=4f46e5&color=fff`;img.alt=user?.name||'Guest'});
  document.querySelectorAll('[data-auth-only]').forEach(el=>el.classList.toggle('hidden',!user));
  document.querySelectorAll('[data-guest-only]').forEach(el=>el.classList.toggle('hidden',!!user));
  const unread=(getData(CC_KEYS.notifications,[]).filter(n=>n.userId===user?.id&&!n.read).length)||0;
  document.querySelectorAll('[data-notification-count]').forEach(el=>{el.textContent=unread>99?'99+':String(unread);el.classList.toggle('hidden',unread===0)})
}
function requireAuth(role=null){const user=getCurrentUser();if(!user){location.href='login.html';return false}if(role&&user.role!==role){location.href='dashboard.html';return false}return true}
function logout(){localStorage.removeItem(CC_KEYS.currentUser);showToast('You have been logged out.','info');setTimeout(()=>location.href='index.html',350)}
function addNotification(message,title='CampusConnect',type='info',userId=getCurrentUser()?.id){if(!userId)return;const list=getData(CC_KEYS.notifications,[]);list.unshift({id:uid('n'),userId,title,message,date:new Date().toISOString(),type,read:false});saveData(CC_KEYS.notifications,list);renderUserUI()}
function showToast(message,type='info'){const stack=document.querySelector('.toast-stack')||document.body.appendChild(Object.assign(document.createElement('div'),{className:'toast-stack'}));const toast=document.createElement('div');toast.className=`toast ${type}`;toast.innerHTML=`<div>${type==='success'?'✓':type==='error'?'!':'i'}</div><div>${escapeHTML(message)}</div>`;stack.appendChild(toast);setTimeout(()=>{toast.remove();if(!stack.children.length)stack.remove()},3200)}
function openModal(content,{title='Details',onSubmit=null,submitText='Save',danger=false}={}){
  let backdrop=document.getElementById('global-modal');if(!backdrop){backdrop=document.createElement('div');backdrop.id='global-modal';backdrop.className='modal-backdrop';document.body.appendChild(backdrop)}
  backdrop.innerHTML=`<div class="modal" role="dialog" aria-modal="true"><div class="modal-header"><h3>${escapeHTML(title)}</h3><button class="icon-btn" data-close-modal aria-label="Close">×</button></div><div class="modal-body">${content}</div>${onSubmit?`<div class="modal-footer"><button class="btn btn-secondary" data-close-modal>Cancel</button><button class="btn ${danger?'btn-danger':'btn-primary'}" data-modal-submit>${escapeHTML(submitText)}</button></div>`:''}</div>`;
  backdrop.classList.add('open'); backdrop.addEventListener('click',ev=>{if(ev.target===backdrop)closeModal()},{once:true});backdrop.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModal));
  if(onSubmit)backdrop.querySelector('[data-modal-submit]').addEventListener('click',()=>onSubmit(backdrop));
  document.addEventListener('keydown',escModal,{once:true});
  return backdrop;
}
function escModal(e){if(e.key==='Escape')closeModal()}
function closeModal(){document.getElementById('global-modal')?.classList.remove('open')}
function confirmAction(message,onConfirm,{danger=false,title='Are you sure?'}={}){openModal(`<p>${escapeHTML(message)}</p>`,{title,submitText:danger?'Delete':'Confirm',danger,onSubmit:()=>{closeModal();onConfirm()}})}
function emptyState(title,message,actionHTML=''){return `<div class="empty-state"><div class="empty-icon">⌘</div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(message)}</p>${actionHTML}</div>`}
function pageInit(){
  initStorage();initTheme();renderUserUI();initPublicNav();initSidebar();initCounters();
  document.querySelectorAll('[data-logout]').forEach(btn=>btn.addEventListener('click',logout));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  requestAnimationFrame(()=>setTimeout(()=>document.querySelector('.page-loading')?.classList.add('hide'),180));
}

document.addEventListener('DOMContentLoaded',pageInit);

function initCounters(){const counters=document.querySelectorAll('[data-counter]');if(!counters.length||!('IntersectionObserver' in window))return counters.forEach(el=>el.textContent=Number(el.dataset.counter).toLocaleString()+'+');const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.counter),start=performance.now();function tick(now){const p=Math.min((now-start)/1100,1);el.textContent=Math.floor(p*target).toLocaleString()+'+';if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io.unobserve(el)})},{threshold:.4});counters.forEach(c=>io.observe(c))}

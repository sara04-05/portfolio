const $=s=>document.querySelector(s);
// ---------- Theme
const root=document.documentElement,mq=matchMedia('(prefers-color-scheme: light)');
const curTheme=()=>root.dataset.theme||(mq.matches?'light':'dark');
const paintBtn=()=>{const b=$('#themeBtn');if(b)b.textContent=curTheme()==='light'?'☾ dark':'☀ light'};
try{const t=localStorage.getItem('sara-theme');if(t==='light'||t==='dark')root.dataset.theme=t}catch(e){}
document.addEventListener('DOMContentLoaded',paintBtn);paintBtn();mq.addEventListener&&mq.addEventListener('change',paintBtn);
$('#themeBtn').onclick=()=>{const n=curTheme()==='light'?'dark':'light';root.dataset.theme=n;try{localStorage.setItem('sara-theme',n)}catch(e){}paintBtn()};
const ICONS={
 splanner:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M7 14h2M11 14h2M15 14h2M7 18h2"/>',
 board:'<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
 lab:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9l2 2-2 2M12 13h4"/>',
 skills:'<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6c6 0 6 6 10 6M7 18c6 0 6-6 10-6"/>',
 path:'<path d="M3 10l9-5 9 5-9 5z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/>',
 log:'<path d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3"/>',
 term:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 gh:'<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'
};
const APPS=[["board","Board","site map"],["lab","Projects","from GitHub"],["skills","Skills","wired to projects"],["path","Path","education"],["splanner","Splanner","live app"],["term","Terminal","try 'help'"],["mail","Contact","say hi"],["gh","GitHub","sara04-05"]];
const TIPS={board:"This is Sara's circuit board. Each chip opens a part of the site.",lab:"These are real projects from Sara's GitHub. Click a card to see the code.",skills:"Click a skill and I'll patch a cable to every project that uses it.",splanner:"Splanner is Sara's study, task and money planner. Open the live site from here.",path:"Sara is in her second year at FIEK. Robots are coming soon!",log:"Sara's blog. Click a title to expand it.",term:"Type 'help'. There's a secret command too.",mail:"Leave a message and Sara will get back to you.",gh:"Opening GitHub in a new tab."};
$('#apps').innerHTML=APPS.map(([k,n,s])=>{const inner=`<svg viewBox="0 0 24 24" fill="none" stroke="#ffd9a8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg>${n}`;
  return k==='gh'?`<a class="app" href="https://github.com/sara04-05" target="_blank" rel="noopener" data-tip="gh">${inner}</a>`:`<button class="app" data-app="${k}">${inner}</button>`}).join('');

const say=t=>{$('#bubble').textContent=t};
addEventListener('pointermove',e=>{const r=$('#bolt').getBoundingClientRect();const cx=r.left+r.width/2,cy=r.top+r.height*.4;const dx=Math.max(-3,Math.min(3,(e.clientX-cx)/80)),dy=Math.max(-3,Math.min(3,(e.clientY-cy)/80));['#eyeL','#eyeR'].forEach((s,i)=>{$(s).setAttribute('cx',(i?74:46)+dx);$(s).setAttribute('cy',50+dy)})});
const FACTS=["Splanner is Sara's favourite project. It's live at splanner.xo.je.","ElevUra is an AI career coach Sara built in PHP and JavaScript.","Sara's NASA picture app uses FastAPI and Streamlit.","This whole OS is plain HTML, CSS and JavaScript.","Try the terminal and type 'dance'."];let fi=0;
$('#bolt').onclick=()=>say(FACTS[fi++%FACTS.length]);
const tickClock=()=>{$('#clock').textContent=new Date().toTimeString().slice(0,5)};tickClock();setInterval(tickClock,10000);

// ---------- Data (from github.com/sara04-05, public repos)
const GH='https://github.com/sara04-05/';
const P=[
 {t:"Splanner",r:"",live:"https://splanner.xo.je",k:"Live web app · my favourite",c:"web",d:"A study, task and money planner where anyone can make a private account. Seven notebook pages (day, week, month, year, study, tasks and expenses), email sign-up codes, Google Calendar sync and dark mode.",s:["PHP","MySQL","JavaScript","HTML/CSS"]},
 {t:"ElevUra AI",r:"JSON-Derulo",k:"Full-stack web app",c:"web",d:"AI career platform with a CV writer, resume rater, mock interviews and a career-coach dashboard.",s:["PHP","JavaScript","HTML/CSS","MySQL","Docker"]},
 {t:"City Care",r:"champion-trials",k:"PHP web app",c:"web",d:"Citizens report local issues on an interactive map. Admin panel, blog and four switchable colour \"houses\".",s:["PHP","MySQL","JavaScript","HTML/CSS"]},
 {t:"Medical Clinic theme",r:"wp-personal.project",k:"WordPress theme",c:"wp",d:"Custom, responsive WordPress theme with appointments, doctors, services and a chat page.",s:["WordPress","PHP","HTML/CSS"]},
 {t:"Movies Management System",r:"PHP-main",k:"PHP + SQL",c:"web",d:"Manage a movie catalogue with a database backend. Final project of a PHP course.",s:["PHP","MySQL","HTML/CSS"]},
 {t:"Astronomy Picture of the Day",r:"python_prj",k:"Python API + app",c:"py",d:"FastAPI backend and Streamlit app for NASA's APOD, with gallery, search, SQLite and tests.",s:["Python","FastAPI","SQL"]},
 {t:"Book Management",r:"Python-advanced",k:"Python",c:"py",d:"Book management app from an advanced Python course, plus 16 lessons of exercises.",s:["Python","SQL"]},
 {t:"Sara's Digital Library",r:"Best-student-project",k:"Front-end site",c:"web",d:"Online library with sign-up, log-in and book pages.",s:["HTML/CSS","JavaScript"]},
 {t:"Scholar",r:"Personal-project",k:"Front-end site",c:"web",d:"Online courses site for web and cybersecurity degrees.",s:["HTML/CSS","JavaScript"]},
 {t:"Melodix",r:"GroupProject",k:"Group project",c:"web",d:"Team-built streaming site with sign-up, artist pages and a player.",s:["HTML/CSS","JavaScript"]},
 {t:"Number Systems tutor",r:"study2",k:"Study tool",c:"web",d:"Interactive tutor for binary, octal and hex conversions from my Digital Systems course.",s:["JavaScript","HTML/CSS"]},
 {t:"Trig Memory Trainer",r:"study",k:"Study tool",c:"web",d:"Practise the unit circle until it sticks.",s:["HTML/CSS","JavaScript"]},
 {t:"FIEK C++ coursework",r:"Fiek-bachelor",k:"University",c:"cpp",d:"Two semesters of C++ exercises, labs and assignments, plus more practice in Cpp2.",s:["C++"]}
];
const SK=["HTML/CSS","JavaScript","PHP","MySQL","WordPress","Python","FastAPI","C++","Docker"];
const SKILLLVL={"HTML/CSS":"daily","JavaScript":"daily","PHP":"strong","MySQL":"strong","WordPress":"strong","Python":"strong","FastAPI":"growing","C++":"growing","Docker":"new"};

// ---------- Boot
const BOOT=["SARA-OS BIOS v2.0","Loading 13 projects ................ OK","Wiring skills to projects .......... OK","Powering circuit board ............. OK","Calibrating Bolt ................... OK","","Welcome."];
let bi=0,booted=false;const bootT=setInterval(()=>{if(bi>=BOOT.length){clearInterval(bootT);setTimeout(endBoot,450);return}$('#bootText').textContent+=BOOT[bi++]+"\n"},240);
function endBoot(){if(booted)return;booted=true;clearInterval(bootT);$('#boot').remove()}
$('#skip').onclick=endBoot;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)endBoot();

// ---------- Windows
let z=60,offset=0;const open={};
function win(key,title,html,after,wide){if(open[key]){open[key].style.zIndex=++z;return open[key]}
  const w=document.createElement('section');w.className='win'+(wide?' wide':'');w.setAttribute('role','dialog');w.setAttribute('aria-label',title);
  const o=(offset++%5)*28,ww=wide?940:680;w.style.left=Math.max(10,innerWidth/2-ww/2+o)+'px';w.style.top=(60+o)+'px';w.style.zIndex=++z;
  w.innerHTML=`<header><span>${title}</span><button aria-label="Close ${title}">x</button></header><div class="body">${html}</div>`;
  document.body.appendChild(w);open[key]=w;
  w.querySelector('header button').onclick=()=>{w.remove();delete open[key]};
  w.addEventListener('pointerdown',()=>w.style.zIndex=++z);
  const h=w.querySelector('header');h.addEventListener('pointerdown',e=>{if(e.target.tagName==='BUTTON'||innerWidth<=760)return;const sx=e.clientX-w.offsetLeft,sy=e.clientY-w.offsetTop;h.setPointerCapture(e.pointerId);
    const mv=ev=>{w.style.left=Math.max(0,Math.min(innerWidth-120,ev.clientX-sx))+'px';w.style.top=Math.max(40,Math.min(innerHeight-40,ev.clientY-sy))+'px'};
    const up=()=>{h.removeEventListener('pointermove',mv);h.removeEventListener('pointerup',up)};h.addEventListener('pointermove',mv);h.addEventListener('pointerup',up)});
  after&&after(w);return w}

// ---------- Board (circuit)
function boardSVG(pid){
  const C=[["U1","PROJECTS","13 builds",80,70,170,90,"lab",410,215],["U2","SKILLS","patch bay",80,300,170,90,"skills",410,300],["U3","PATH","education",730,70,170,90,"path",590,215],["U4","SPLANNER","live app",730,300,170,90,"splanner",590,300],["U5","TERMINAL","",300,420,150,60,"term",470,330],["J1","CONTACT","",560,420,150,60,"mail",530,330]];
  let tr='',pu='',co='';
  C.forEach(([r,l,s,x,y,w,h,t,fx,fy],i)=>{const tx=x<500?x+w:x,ty=y+h/2;let d;
    if(y>=400){const cx=x+w/2;d=`M${fx} ${fy} V${fy+40} H${cx} V${y}`}else{const mx=(fx+tx)/2;d=`M${fx} ${fy} H${mx} L${mx+(tx>fx?20:-20)} ${ty} H${tx}`}
    tr+=`<path class="trace" d="${d}"/><circle cx="${tx}" cy="${y>=400?y:ty}" r="7" fill="#d8ad4c"/>`;pu+=`<path class="pulse" d="${d}" style="animation-delay:${i*.45}s"/>`;
    let pins='';for(let k=0;k<4;k++){pins+=`<rect class="pin" x="${x+18+k*(w-36)/3-4}" y="${y-8}" width="8" height="8"/><rect class="pin" x="${x+18+k*(w-36)/3-4}" y="${y+h}" width="8" height="8"/>`}
    co+=`<g class="comp" tabindex="0" role="button" aria-label="Open ${l}" data-t="${t}" data-i="${i}">${pins}<rect class="body" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/><text x="${x+12}" y="${y+22}" font-size="18" fill="#d8ad4c">${r}</text><text x="${x+w/2}" y="${y+h/2+(s?6:10)}" text-anchor="middle" font-size="${h>70?32:26}">${l}</text>${s?`<text x="${x+w/2}" y="${y+h/2+28}" text-anchor="middle" font-size="18" fill="#c3b4d8">${s}</text>`:''}</g>`});
  let mp='';for(let k=0;k<8;k++){mp+=`<rect x="${422+k*20}" y="180" width="8" height="10"/><rect x="${422+k*20}" y="330" width="8" height="10"/>`}for(let k=0;k<6;k++){mp+=`<rect x="400" y="${200+k*22}" width="10" height="8"/><rect x="590" y="${200+k*22}" width="10" height="8"/>`}
  const leds=C.map((c,i)=>`<rect x="940" y="${130+i*36}" width="22" height="14" rx="3" fill="#222"/><circle class="led" data-led="${i}" cx="951" cy="${137+i*36}" r="5" fill="#333"/><text x="932" y="${143+i*36}" text-anchor="end" font-family="VT323" font-size="16" fill="#c3b4d8">D${i+1}</text>`).join('');
  return `<svg viewBox="0 0 1000 520" aria-label="Circuit board: a central SARA chip connected by traces to chips for each part of the site">
    <defs><pattern id="via${pid}" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="rgba(216,173,76,.18)"/></pattern></defs>
    <rect width="1000" height="520" fill="url(#via${pid})"/>
    <g fill="#c9cbd2"><circle cx="24" cy="24" r="10"/><circle cx="976" cy="24" r="10"/><circle cx="24" cy="496" r="10"/><circle cx="976" cy="496" r="10"/></g>
    <g fill="#3d2160"><circle cx="24" cy="24" r="5"/><circle cx="976" cy="24" r="5"/><circle cx="24" cy="496" r="5"/><circle cx="976" cy="496" r="5"/></g>
    ${tr}${pu}<g class="pin">${mp}</g>
    <rect x="410" y="190" width="180" height="140" rx="8" fill="#151018" stroke="#000" stroke-width="2"/><circle cx="428" cy="208" r="6" fill="none" stroke="#555"/>
    <text x="500" y="262" text-anchor="middle" font-family="VT323" font-size="56" fill="#f4effa">SARA</text>
    <text x="500" y="290" text-anchor="middle" font-family="VT323" font-size="18" fill="#c3b4d8">EAR · YEAR 2 · FIEK</text>
    <text x="500" y="312" text-anchor="middle" font-family="VT323" font-size="17" fill="#d8ad4c">WEB + ROBOTICS SoC</text>
    ${co}${leds}
    <text x="40" y="502" font-family="VT323" font-size="18" fill="#c3b4d8">SARA-PCB REV 2.0 · PRISHTINA</text>
    <text x="960" y="502" text-anchor="end" font-family="VT323" font-size="18" fill="#c3b4d8">CLICK A CHIP ▸</text></svg>`}
const LC=['#ff5a5a','#5cf0a0','#6ab8ff','#ffd36a','#ff7ad9','#5cf0a0'];

// ---------- Patch bay
function bayHTML(){return `<div class="bay"><svg class="cables" aria-hidden="true"></svg>
  <div class="col">${SK.map(s=>`<button class="jack" data-s="${s}"><i></i>${s}<span class="lvl">${SKILLLVL[s]}</span></button>`).join('')}</div>
  <div class="col right">${P.map((p,i)=>`<div class="jack" data-p="${i}"><i></i>${p.t}</div>`).join('')}</div></div>`}
function wireBay(w){const bay=w.querySelector('.bay'),svg=bay.querySelector('.cables');const active=new Set(['PHP']);const COL=['var(--c1)','var(--c2)','var(--c3)','var(--c4)','var(--c5)'];
  const draw=()=>{const b=bay.getBoundingClientRect();let html='',ci=0;bay.querySelectorAll('[data-p]').forEach(x=>x.classList.remove('on'));
    bay.querySelectorAll('[data-s]').forEach(x=>x.classList.toggle('on',active.has(x.dataset.s)));
    active.forEach(s=>{const sb=bay.querySelector(`[data-s="${s}"] i`).getBoundingClientRect();const col=COL[ci++%COL.length];
      P.forEach((p,i)=>{if(!p.s.includes(s))return;const pe=bay.querySelector(`[data-p="${i}"]`),pb=pe.querySelector('i').getBoundingClientRect();
        const x1=sb.left+8-b.left,y1=sb.top+8-b.top,x2=pb.left+8-b.left,y2=pb.top+8-b.top,sag=40+Math.abs(y2-y1)*.15;
        html+=`<path d="M${x1} ${y1} C ${x1+50} ${y1+sag}, ${x2-50} ${y2+sag}, ${x2} ${y2}" style="stroke:${col}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>`;pe.classList.add('on')})});
    svg.innerHTML=html;const n=bay.querySelectorAll('[data-p].on').length;say(active.size?`${[...active].join(' + ')} → used in ${n} project${n===1?'':'s'}.`:"Click a skill to patch it.")};
  bay.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const s=b.dataset.s;active.has(s)?active.delete(s):active.add(s);draw()});
  requestAnimationFrame(draw);new ResizeObserver(draw).observe(bay)}

// ---------- Apps
function wireBoard(w){w.querySelectorAll('.comp').forEach(g=>{const i=+g.dataset.i,on=v=>{const l=w.querySelector(`[data-led="${i}"]`);l.setAttribute('fill',v?LC[i]:'#333');l.style.filter=v?`drop-shadow(0 0 6px ${LC[i]})`:'none'};
     g.addEventListener('mouseenter',()=>on(1));g.addEventListener('mouseleave',()=>on(0));g.addEventListener('focus',()=>on(1));g.addEventListener('blur',()=>on(0));
     const go=()=>{say(TIPS[g.dataset.t]);RENDER[g.dataset.t]()};g.addEventListener('click',go);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})})}
const RENDER={
 board:()=>win('board','Board.app',`<h2>Sara's board</h2><p class="lede">Every chip is a part of the site. Click one to open it.</p><div class="board">${boardSVG('w')}</div>`,wireBoard,true),
 lab:()=>win('lab','Projects.app',`<h2>Projects</h2><p class="lede">Websites and apps I built. Every card links to the code or the live site.</p>
   <div class="filters" role="group" aria-label="Filter projects">${[["all","All"],["web","Web apps"],["wp","WordPress"],["py","Python"],["cpp","C++"]].map(([k,n],i)=>`<button data-f="${k}" class="${i?'':'on'}">${n}</button>`).join('')}</div>
   <div class="cards">${P.map(p=>`<article class="card" data-c="${p.c}"><span class="kind">${p.k}</span><h3>${p.t}</h3><p>${p.d}</p><div class="chips">${p.s.map(x=>`<span>${x}</span>`).join('')}</div>${p.live?`<a href="${p.live}" target="_blank" rel="noopener">open live site ↗</a>`:""}${p.r?`<a href="${GH}${p.r}" target="_blank" rel="noopener">view code ↗</a>`:""}</article>`).join('')}</div>`,w=>{
   w.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{w.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('on',x===b));w.querySelectorAll('.card').forEach(c=>c.hidden=b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f)})},true),
 skills:()=>win('skills','Skills.app',`<h2>Skills, wired to projects</h2><p class="lede">Click a skill to patch a cable to every project that uses it. Click again to unplug.</p>${bayHTML()}
   <div class="studying"><b>Studying now at FIEK</b><p style="margin:4px 0 0">Electronics, automation and robotics: circuits, digital systems, C++ and control. Robotics projects will plug into this board as I build them. Next languages: C# and Java.</p></div>`,wireBay,true),
 path:()=>win('path','Path.app',`<h2>My path</h2><p class="lede">Education, certificates, work and what comes next.</p><div class="pathgrid">
   <section><h3>Education</h3><ul class="tl">
     <li class="now"><b>2025 – now · FIEK, University of Prishtina</b>Faculty of Electrical and Computer Engineering, Electronics, Automation &amp; Robotics. 2nd year. Finished C++ in first year.</li>
     <li><b>2022 – 2025 · High school</b>Went straight on to FIEK after graduating.</li></ul></section>
   <section><h3>Certificates</h3><ul class="tl">
     <li><b>Front-end developer · Digital School</b>HTML, CSS and JavaScript.</li>
     <li><b>Back-end developer · Digital School</b>PHP and WordPress.</li>
     <li><b>Python · Digital School</b></li></ul></section>
   <section><h3>Work</h3><ul class="tl">
     <li class="now"><b>Now · IT, Prishtinaticket</b></li>
     <li><b>Before · Call agent, Prishtinaticket</b></li>
     <li><b>Before · Call-centre agent</b>At three different companies.</li></ul></section>
   <section><h3>Hackathons</h3><ul class="tl">
     <li><b>Digital School Kosovo hackathons</b>Participant.</li>
     <li><b>Gjirafa AI hackathon</b>Participant.</li></ul></section>
   <section><h3>Milestones</h3><ul class="tl">
     <li><b>Oct 2024 · First line of code</b>Started with HTML, CSS and JavaScript.</li>
     <li class="now"><b>Proudest of · Splanner</b>Live at splanner.xo.je.</li></ul></section>
   <section><h3>Next</h3><ul class="tl">
     <li><b>First robotics &amp; electronics projects</b></li>
     <li><b>Learning C# and Java</b></li>
     <li class="now"><b>Goal · Embedded systems engineer</b></li></ul></section>
   </div>`,null,true),
 splanner:()=>win('splanner','Splanner.app',`<h2>Splanner</h2><p class="lede">My favourite project: a study, task and money planner in one notebook.</p><a class="cta primary" href="https://splanner.xo.je" target="_blank" rel="noopener" style="margin:4px 0 16px">Open splanner.xo.je ↗</a>
   <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr))">${[["Day","Hour-by-hour plan with study, class, work and free-time blocks."],["Week","All seven days side by side."],["Month","Calendar with daily spending and deadlines."],["Year","Monthly totals and savings."],["Study","Subjects, chapters, exam countdowns and progress bars."],["Tasks","To-dos grouped into overdue, today and later."],["Expenses","Weekly budget and spending by category."]].map(([t,d])=>`<article class="card"><h3>${t}</h3><p>${d}</p></article>`).join('')}</div>
   <p style="margin-top:14px">Private accounts with hashed passwords and email sign-up codes, Google Calendar sync for the hour-by-hour plan, and a dark mode. Built with PHP, MySQL and JavaScript.</p>`,null,true),
 term:()=>win('term','Terminal',`<div class="term"><div class="out" id="out">SARA-OS terminal. Type 'help'.\n</div><form id="tf"><span>&gt;&nbsp;</span><input id="tin" aria-label="Command" autocomplete="off"></form></div>`,w=>{const i=w.querySelector('#tin');i.focus();w.querySelector('#tf').onsubmit=e=>{e.preventDefault();cmd(i.value.trim().toLowerCase());i.value=''}}),
 mail:()=>win('mail','Contact.app',`<h2>Say hi</h2><form id="mf" style="display:grid;gap:8px"><label for="mn">Name</label><input id="mn" class="field" required><label for="mm">Message</label><textarea id="mm" rows="4" class="field" required></textarea><button class="app" style="font-size:22px">Send ▸</button><p id="ms" hidden>Message queued! (Prototype only, nothing was sent.)</p></form><p style="margin-top:10px">Or find me on <a href="https://github.com/sara04-05" target="_blank" rel="noopener">GitHub ↗</a></p>`,w=>w.querySelector('#mf').onsubmit=e=>{e.preventDefault();w.querySelector('#ms').hidden=false;say("Sent! Sara will reply soon.")})
};
document.querySelectorAll('.app[data-app]').forEach(b=>b.onclick=()=>{say(TIPS[b.dataset.app]);RENDER[b.dataset.app]()});
document.querySelector('[data-tip="gh"]').addEventListener('click',()=>say(TIPS.gh));


// ---------- Home page
$('#homeBoard').innerHTML=boardSVG('h');wireBoard($('#homeBoard'));
const FEAT=[[0,'<rect x="30" y="14" width="110" height="92" rx="6" fill="none" stroke="#ffd9a8" stroke-width="2"/><path d="M30 34h110M58 14v-6M112 14v-6" stroke="#ffd9a8" stroke-width="2"/><g fill="#9ee6d0"><rect x="40" y="44" width="14" height="12" rx="2"/><rect x="62" y="44" width="14" height="12" rx="2" fill="#ff8a6b"/><rect x="84" y="44" width="14" height="12" rx="2"/><rect x="40" y="64" width="14" height="12" rx="2"/><rect x="62" y="64" width="14" height="12" rx="2"/><rect x="106" y="64" width="14" height="12" rx="2" fill="#ffd9a8"/><rect x="40" y="84" width="14" height="12" rx="2"/></g><path d="M170 96V70M194 96V52M218 96V78M242 96V40" stroke="#9ee6d0" stroke-width="12"/><path d="M160 96h96" stroke="#ffd9a8" stroke-width="2"/>'],[1,'<rect x="20" y="18" width="120" height="84" rx="6" fill="none" stroke="#ffd9a8" stroke-width="2"/><path d="M32 34h60M32 46h90M32 58h70M32 70h80" stroke="#9ee6d0" stroke-width="3"/><circle cx="210" cy="60" r="30" fill="none" stroke="#ff8a6b" stroke-width="3"/><path d="M196 60l10 10 18-20" stroke="#ff8a6b" stroke-width="3" fill="none"/>'],[2,'<path d="M20 100 L80 40 L140 80 L200 30 L280 70" stroke="#3a2f4a" stroke-width="18" fill="none"/><path d="M20 100 L80 40 L140 80 L200 30 L280 70" stroke="#ffd9a8" stroke-width="2" fill="none" stroke-dasharray="6 6"/><path d="M140 70c0-12 18-12 18 0 0 10-9 18-9 18s-9-8-9-18z" fill="#ff8a6b"/><path d="M80 30c0-12 18-12 18 0 0 10-9 18-9 18s-9-8-9-18z" fill="#9ee6d0"/>']];
$('#feat').innerHTML=FEAT.map(([i,art])=>{const p=P[i];return `<article class="fcard"><div class="shot"><svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${art}</svg></div><span class="kind">${p.k}</span><h3>${p.t}</h3><p>${p.d}</p><div class="chips">${p.s.map(x=>`<span>${x}</span>`).join('')}</div><div class="row">${p.live?`<a href="${p.live}" target="_blank" rel="noopener">open live site ↗</a>`:""}${p.r?`<a href="${GH}${p.r}" target="_blank" rel="noopener">view code ↗</a>`:""}</div></article>`}).join('');
$('#tk').innerHTML=SK.map(s=>`<span${SKILLLVL[s]==='new'||SKILLLVL[s]==='growing'?' class="learn"':''}>${s}<i>${SKILLLVL[s]}</i></span>`).join('')+['C#','Java','Embedded C'].map(s=>`<span class="learn">${s}<i>next</i></span>`).join('');
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{const k=b.dataset.open;say(TIPS[k]);RENDER[k]()});

function cmd(c){const o=$('#out');const R={help:"commands: about, skills, projects, school, work, certs, splanner, github, board, contact, clear",about:"Sara. 2nd-year Electronics, Automation & Robotics student at FIEK, IT at Prishtinaticket, aiming to be an embedded systems engineer. Speaks English and Albanian.",skills:SK.join(" · "),projects:P.map(p=>"- "+p.t).join("\n"),school:"FIEK, University of Prishtina. Electronics, Automation & Robotics (2025-now). High school 2022-2025.",work:"IT at Prishtinaticket (now). Before: call-centre agent at three companies.",certs:"Digital School: front-end developer, back-end developer (PHP, WordPress), Python.",splanner:"opening splanner.app ... live at splanner.xo.je",github:"github.com/sara04-05",board:"opening the board...",contact:"open the Contact app",dance:"Bolt is dancing! \\(^_^)/"};
  if(c==='clear'){o.textContent='';return}if(c==='dance')wiggle();if(c==='board')RENDER.board();if(c==='splanner')RENDER.splanner();
  o.textContent+=`> ${c}\n${R[c]||"unknown command. try 'help'"}\n`;o.parentElement.scrollTop=1e9}
function wiggle(){$('#bolt').animate([{transform:'rotate(0)'},{transform:'rotate(-8deg)'},{transform:'rotate(8deg)'},{transform:'rotate(0)'}],{duration:500,iterations:4});say("Wheee!")}

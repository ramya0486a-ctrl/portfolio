const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('navMenu');
toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.textContent=opened?'×':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';nav.querySelectorAll('a').forEach(a=>a.classList.remove('active'));link.classList.add('active');}));
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.id;nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>observer.observe(section));
const scene=document.getElementById('heroScene');
if(window.matchMedia('(pointer:fine)').matches){scene.addEventListener('pointermove',e=>{const r=scene.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;scene.style.backgroundPosition=`calc(50% + ${x*-12}px) calc(43% + ${y*-8}px)`;});scene.addEventListener('pointerleave',()=>scene.style.backgroundPosition='center 43%');}
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('copyEmail').addEventListener('click',async()=>{const status=document.getElementById('copyStatus');try{await navigator.clipboard.writeText('ramya@example.com');status.textContent='Copied!';}catch{status.textContent='Email: ramya@example.com';}setTimeout(()=>status.textContent='',2200)});

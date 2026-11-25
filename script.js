// Frontend-only informational demo. Replace sample impact figures with verified data before launch.
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('show');menuBtn.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
const counters=document.querySelectorAll('[data-count]');
const animate=(el)=>{const target=Number(el.dataset.count);const start=performance.now();const duration=1300;function frame(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.floor(target*(1-Math.pow(1-p,3))).toLocaleString('en-IN')+'+';if(p<1)requestAnimationFrame(frame);}requestAnimationFrame(frame);};
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){animate(entry.target);observer.unobserve(entry.target);}}),{threshold:.35});counters.forEach(c=>observer.observe(c));}else counters.forEach(animate);

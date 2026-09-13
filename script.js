const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');menu.onclick=()=>links.classList.toggle('open');
document.querySelectorAll('.navlinks a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const cursor=document.querySelector('.cursor');document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.style.opacity=1});
document.querySelectorAll('a,button').forEach(e=>{e.onmouseenter=()=>{cursor.style.width='34px';cursor.style.height='34px'};e.onmouseleave=()=>{cursor.style.width='18px';cursor.style.height='18px'}});

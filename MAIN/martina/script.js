const works=[
 {file:"_CASIO_ Técnica mixta, 60 x 60 cm. 2025.jpg",title:"CASIO",meta:"Técnica mixta · 60 × 60 cm",year:"2025"},
 {file:"_767_ Óleo sobre fibrofácil. 1 m. 2025_.jpg",title:"767",meta:"Óleo sobre fibrofácil · 1 m",year:"2025"},
 {file:"_En ruta_ Óleo sobre tela. 60 x 60cm. 2026_.jpg",title:"En ruta",meta:"Óleo sobre tela · 60 × 60 cm",year:"2026"},
 {file:"_Kóoch_ Óleo sobre tela. 1m x 70 cm. 2026.jpg",title:"Kóoch",meta:"Óleo sobre tela · 100 × 70 cm",year:"2026"},
 {file:"_Lágrimas de oro_ Óleo sobre fibrofácil. 2 m aprox. 2026_.jpg",title:"Lágrimas de oro",meta:"Óleo sobre fibrofácil · 2 m aprox.",year:"2026"},
 {file:"_Marea de miradas_ Óleo sobre chapa, 100 ojos pintados. 2025.jpg",title:"Marea de miradas",meta:"Óleo sobre chapa · 100 ojos pintados",year:"2025"},
 {file:"_Marihuanna y cáfe_ Óleo sobre madera, 15 x 20 cm. 2025.jpg",title:"Marihuanna y café",meta:"Óleo sobre madera · 15 × 20 cm",year:"2025"},
 {file:"_Reflejo_ óleo sobre tela, 20 x 30 cm. 2026_.jpg",title:"Reflejo",meta:"Óleo sobre tela · 20 × 30 cm",year:"2026"},
 {file:"_Controlla_ óleo sobre madera. 10 x 15 cm. 2026.jpg",title:"Controlla",meta:"Óleo sobre madera · 10 × 15 cm",year:"2026"},
 {file:"_Sin título_ Óleo sobre tela, 20 x 30 cm. 2026.jpg",title:"Sin título",meta:"Óleo sobre tela · 20 × 30 cm",year:"2026"},
 {file:"_Sin título_ Óleo sobre tela. 10 x 15 cm. 2026.jpg",title:"Sin título",meta:"Óleo sobre tela · 10 × 15 cm",year:"2026"},
 {file:"_Sín título_ Óleo sobre tela. 20 x 30 cm. 2025.jpg",title:"Sin título",meta:"Óleo sobre tela · 20 × 30 cm",year:"2025"}
];
const grid=document.querySelector("#works-grid");grid.innerHTML=works.map(w=>`<article class="work-card"><button class="work-image-button" type="button" data-full="Fotos obras/${w.file}" data-title="${w.title} · ${w.meta} · ${w.year}" aria-label="Ampliar ${w.title}"><img src="Fotos obras/${w.file}" alt="${w.title}, obra de Martina Acevedo" loading="lazy"></button><div class="work-info"><div><h3>${w.title}</h3><p>${w.meta}</p></div><span>${w.year}</span></div></article>`).join("");
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".site-nav");toggle.addEventListener("click",()=>{const open=nav.classList.toggle("is-open");toggle.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false")}));
const buttons=[...document.querySelectorAll(".work-image-button")],box=document.querySelector(".lightbox"),image=box.querySelector("img"),caption=box.querySelector("figcaption");let active=0;function show(i){active=(i+buttons.length)%buttons.length;const b=buttons[active];image.src=b.dataset.full;image.alt=b.querySelector("img").alt;caption.textContent=b.dataset.title}buttons.forEach((b,i)=>b.addEventListener("click",()=>{show(i);box.showModal()}));box.querySelector(".lightbox-close").addEventListener("click",()=>box.close());box.querySelector(".lightbox-prev").addEventListener("click",()=>show(active-1));box.querySelector(".lightbox-next").addEventListener("click",()=>show(active+1));box.addEventListener("click",e=>{if(e.target===box)box.close()});box.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(active-1);if(e.key==="ArrowRight")show(active+1)});

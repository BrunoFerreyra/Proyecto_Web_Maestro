export function createProductCard(p, { onAdd }){
  const article = document.createElement('article');
  article.className = 'group bg-white rounded-2xl p-3 shadow-soft border border-neutral-200 hover:border-amber-500/60 transition flex flex-col';
  article.innerHTML = `
    <a class="block" href="#/producto/${encodeURIComponent(p.id)}">
      <div class="aspect-[5/6] bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img class="w-full h-full object-cover" alt="${p.nombre}" src="${p.imagen}" />
      </div>
    </a>
    <div class="mt-3 flex-1 flex flex-col">
      <h4 class="font-semibold leading-tight text-[1.05rem] sm:text-base">${p.nombre}</h4>
      <p class="text-xs text-neutral-500">${p.marca} • ${p.familia}</p>
      <div class="mt-2 flex items-center justify-between">
        <span class="font-bold"></span>
        <button class="addBtn rounded-full px-3 py-1 min-h-[44px] bg-amber-500 text-white font-semibold hover:bg-amber-400">Agregar</button>
      </div>
    </div>`;
  const price = article.querySelector('span.font-bold');
  price.textContent = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(p.precio);
  article.querySelector('.addBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    onAdd && onAdd(p);
  });
  return article;
}

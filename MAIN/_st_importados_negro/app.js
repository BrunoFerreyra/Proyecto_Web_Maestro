import { MOCK, MOCK_ORDERS, nextId as _nextId } from './data.js';
import { createProductCard } from './components/card.js';
import { createOrderCard } from './components/order.js';

let nextId = _nextId;

let state = {
  productos: [...MOCK],
  filtroTexto: '',
  filtroFamilia: '',
  orden: 'destacados',
  carrito: JSON.parse(localStorage.getItem('st.cart') || '[]'),
  tab: 'productos'
};

const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)];
const formatPrice = n => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);

function persistCart(){ localStorage.setItem('st.cart', JSON.stringify(state.carrito)); }
function cartCount(){ return state.carrito.reduce((acc, it)=>acc + it.cant, 0); }
function cartTotal(){ return state.carrito.reduce((acc, it)=>acc + it.cant * it.precio, 0); }

function router(){
  const h = location.hash || '#/';
  $('#navCatalog')?.classList.toggle('active', h === '#/' || h.startsWith('#/producto'));
  $('#navAdmin')?.classList.toggle('active', h.startsWith('#/admin'));
  $('#viewCatalog').classList.add('hidden');
  $('#viewDetail').classList.add('hidden');
  $('#viewAdmin').classList.add('hidden');
  if(h === '#/' || h === ''){
    $('#viewCatalog').classList.remove('hidden');
    renderGrid();
  } else if(h.startsWith('#/producto/')){
    const id = decodeURIComponent(h.split('/')[2] || '');
    renderDetail(id);
    $('#viewDetail').classList.remove('hidden');
  } else if(h.startsWith('#/admin')){
    $('#viewAdmin').classList.remove('hidden');
    renderAdmin();
  } else {
    $('#viewCatalog').classList.remove('hidden');
  }
}
window.addEventListener('hashchange', router);

function getFiltered(){
  let list = [...state.productos];
  const t = state.filtroTexto.trim().toLowerCase();
  if(t){ list = list.filter(p => (p.nombre+' '+p.marca).toLowerCase().includes(t)); }
  if(state.filtroFamilia){ list = list.filter(p => p.familia === state.filtroFamilia); }
  switch(state.orden){
    case 'precio_asc': list.sort((a,b)=>a.precio-b.precio); break;
    case 'precio_desc': list.sort((a,b)=>b.precio-a.precio); break;
    case 'nombre_asc': list.sort((a,b)=>a.nombre.localeCompare(b.nombre)); break;
  }
  return list;
}

function renderGrid(){
  const grid = $('#grid');
  grid.innerHTML = '';
  const data = getFiltered();
  $('#emptyState').classList.toggle('hidden', data.length !== 0);
  data.forEach(p => grid.appendChild(createProductCard(p, { onAdd: addToCart })));
}

function renderDetail(id){
  const p = state.productos.find(x=>x.id===id);
  const wrap = $('#detailWrap');
  if(!p){ wrap.innerHTML = '<div class="text-neutral-500">Producto no encontrado.</div>'; return; }
  wrap.innerHTML = `
    <div class="bg-white rounded-2xl p-4 border border-neutral-200">
      <div class="aspect-[5/6] bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-full object-cover" />
      </div>
      <div class="mt-2 text-xs text-neutral-500">ID: ${p.id}</div>
    </div>
    <div class="bg-white rounded-2xl p-4 border border-neutral-200 flex flex-col">
      <h2 class="text-2xl font-semibold">${p.nombre}</h2>
      <p class="text-neutral-600">${p.marca} • ${p.familia}</p>
      <div class="mt-3 text-3xl font-bold">${formatPrice(p.precio)}</div>
      <div class="mt-1 text-sm ${p.stock>0?'text-emerald-600':'text-rose-600'}">${p.stock>0?`En stock (${p.stock})`:'Sin stock'}</div>
      <p class="mt-4 text-neutral-800 leading-relaxed">${p.descripcion || ''}</p>
      <div class="mt-6 flex gap-3">
        <button class="px-4 py-2 min-h-[44px] rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400" id="btnAddDetail">Agregar al carrito</button>
        <button class="px-4 py-2 min-h-[44px] rounded-xl bg-neutral-100 border border-neutral-200" onclick="location.hash='#/'">Seguir viendo</button>
      </div>
    </div>`;
  $('#btnAddDetail').onclick = ()=> addToCart(p);
}

function addToCart(p){
  const found = state.carrito.find(i => i.id === p.id);
  if(found){ found.cant++; }
  else { state.carrito.push({ id: p.id, nombre: p.nombre, precio: p.precio, imagen: p.imagen, cant: 1 }); }
  persistCart();
  updateCartUI();
  openCart();
}
function changeQty(id, delta){
  const it = state.carrito.find(i=>i.id===id);
  if(!it) return;
  it.cant += delta;
  if(it.cant<=0){ state.carrito = state.carrito.filter(i=>i.id!==id); }
  persistCart();
  updateCartUI();
}
function updateCartUI(){
  $('#cartCount').textContent = `(${cartCount()})`;
  $('#cartTotal').textContent = formatPrice(cartTotal());
  const list = $('#cartList');
  list.innerHTML='';
  if(state.carrito.length===0){
    list.innerHTML = '<div class="text-neutral-500 text-center py-12">Tu carrito está vacío</div>';
    $('#checkoutBtn').disabled = true; return;
  }
  $('#checkoutBtn').disabled = false;
  state.carrito.forEach(it=>{
    const row = document.createElement('div');
    row.className = 'flex gap-3 items-center border border-neutral-200 rounded-xl p-3';
    row.innerHTML = `
      <div class="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img src="${it.imagen}" alt="${it.nombre}" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1">
        <div class="font-semibold leading-tight">${it.nombre}</div>
        <div class="text-sm text-neutral-600">${formatPrice(it.precio)}</div>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-200" data-act="dec" data-id="${it.id}">−</button>
        <span class="min-w-6 text-center">${it.cant}</span>
        <button class="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-200" data-act="inc" data-id="${it.id}">+</button>
      </div>`;
    list.appendChild(row);
  });
  $('#cartList').onclick = (e)=>{
    const btn = e.target.closest('button[data-act]');
    if(!btn) return; const id = btn.getAttribute('data-id'); const act = btn.getAttribute('data-act');
    changeQty(id, act==='inc'? +1 : -1);
  };
}

const drawer = $('#cartDrawer');
const backdrop = $('#backdrop');
function openCart(){ drawer.style.transform = 'translateX(0)'; backdrop.classList.remove('pointer-events-none'); requestAnimationFrame(()=> backdrop.style.opacity = 1); }
function closeCart(){ drawer.style.transform = 'translateX(100%)'; backdrop.style.opacity = 0; setTimeout(()=> backdrop.classList.add('pointer-events-none'), 200); }

function renderAdmin(){
  $$('.admTab').forEach(b=>{
    b.classList.remove('active');
    b.onclick = ()=>{ state.tab = b.dataset.tab; showAdmTab(); };
  });
  showAdmTab();
  renderAdmProductos();
  renderOrders();
  $('#btnAddProd').onclick = addProdPrompt;
}

function showAdmTab(){
  $$('.admTab').forEach(b=> b.classList.toggle('active', b.dataset.tab===state.tab));
  $('#tab_productos').classList.toggle('hidden', state.tab!=='productos');
  $('#tab_ordenes').classList.toggle('hidden', state.tab!=='ordenes');
  $('#tab_config').classList.toggle('hidden', state.tab!=='config');
}

function renderAdmProductos(){
  const tbody = $('#admBody');
  tbody.innerHTML='';
  state.productos.forEach(p=>{
    const tr = document.createElement('tr');
    tr.className = 'border-t border-neutral-200';
    tr.innerHTML = `
      <td class="p-3"><img src="${p.imagen}" alt="${p.nombre}" class="w-14 h-14 object-cover rounded-lg"/></td>
      <td class="p-3">${p.nombre}</td>
      <td class="p-3">${p.marca}</td>
      <td class="p-3">${p.familia}</td>
      <td class="p-3">
        <input type="number" class="w-28 bg-white border border-neutral-300 rounded-lg px-2 py-1" value="${p.precio}" data-id="${p.id}" data-field="precio" />
      </td>
      <td class="p-3">
        <input type="number" class="w-24 bg-white border border-neutral-300 rounded-lg px-2 py-1" value="${p.stock}" data-id="${p.id}" data-field="stock" />
      </td>
      <td class="p-3">
        <div class="flex gap-2">
          <button class="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-200" data-act="save" data-id="${p.id}">Guardar</button>
          <button class="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-200" data-act="del" data-id="${p.id}">Eliminar</button>
          <a class="px-2 py-1 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-400" href="#/producto/${p.id}">Ver</a>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });

  tbody.onclick = (e)=>{
    const btn = e.target.closest('button[data-act]');
    if(btn){
      const id = btn.getAttribute('data-id');
      const act = btn.getAttribute('data-act');
      if(act==='del') delProd(id);
      if(act==='save') saveRow(id);
    }
  };
}

function saveRow(id){
  const precio = parseInt($(`input[data-id="${id}"][data-field="precio"]`).value||'0',10);
  const stock = parseInt($(`input[data-id="${id}"][data-field="stock"]`).value||'0',10);
  const p = state.productos.find(x=>x.id===id);
  if(!p) return;
  p.precio = precio; p.stock = stock;
  renderGrid();
  alert('Cambios guardados (demo).');
}

function delProd(id){
  if(!confirm('¿Eliminar producto?')) return;
  state.productos = state.productos.filter(p=>p.id!==id);
  renderAdmProductos();
  renderGrid();
}

function addProdPrompt(){
  const nombre = prompt('Nombre del producto:'); if(!nombre) return;
  const id = (nombre.toLowerCase().replace(/[^a-z0-9]+/g,'-') + '-' + (++nextId));
  const marca = prompt('Marca:') || 'Genérica';
  const precio = parseInt(prompt('Precio (ARS):')||'0',10);
  const stock = parseInt(prompt('Stock:')||'0',10);
  const familia = prompt('Familia:') || 'Cítrico';
  const imagen = prompt('Ruta imagen:') || 'img/placeholder.jpg';
  state.productos.push({ id, nombre, marca, precio, stock, familia, imagen, descripcion: '' });
  renderAdmProductos(); renderGrid();
}

function renderOrders(){
  const wrap = $('#ordersWrap');
  wrap.innerHTML = '';
  MOCK_ORDERS.forEach(o=> wrap.appendChild(createOrderCard(o)));
}

$('#openCartBtn').addEventListener('click', openCart);
$('#closeCartBtn').addEventListener('click', closeCart);
$('#backdrop').addEventListener('click', closeCart);

$('#searchInput').addEventListener('input', (e)=>{ state.filtroTexto = e.target.value; renderGrid(); });
$('#familySelect').addEventListener('change', (e)=>{ state.filtroFamilia = e.target.value; renderGrid(); });
$('#orderSelect').addEventListener('change', (e)=>{ state.orden = e.target.value; renderGrid(); });

$('#checkoutBtn').addEventListener('click', ()=>{
  alert('Checkout simulado.');
});

function updateCartBadges(){ $('#cartCount').textContent = `(${cartCount()})`; }
updateCartUI();
router();

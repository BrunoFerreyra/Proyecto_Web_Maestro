export function createOrderCard(o){
  const div = document.createElement('div');
  div.className = 'border border-neutral-200 rounded-xl p-3 flex items-center gap-3 bg-white';
  div.innerHTML = `
    <div class="text-sm text-neutral-500">#${o.id}</div>
    <div class="flex-1">
      <div class="font-semibold">${o.nombre} — ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(o.total)} • ${o.items} item(s)</div>
      <div class="text-xs text-neutral-500">Fecha: ${o.fecha}</div>
    </div>
    <span class="px-2 py-1 rounded-full text-xs font-semibold border border-neutral-300 text-neutral-700">${o.estado}</span>
  `;
  return div;
}

export function createOrderCard(o){
  const div = document.createElement('div');
  div.className = 'border border-zinc-800 rounded-xl p-3 flex items-center gap-3';
  div.innerHTML = `
    <div class="text-sm text-yellow-300/80">#${o.id}</div>
    <div class="flex-1">
      <div class="font-semibold">${o.nombre} — ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(o.total)} • ${o.items} item(s)</div>
      <div class="text-xs text-yellow-300/70">Fecha: ${o.fecha}</div>
    </div>
    <span class="px-2 py-1 rounded-full text-xs font-semibold border">${o.estado}</span>
  `;
  return div;
}
// Ano automático
document.getElementById('year').textContent = new Date().getFullYear();

// Fundo “grid” levemente animado (linhas neon deslocando devagar)
const c = document.getElementById('grid');
const ctx = c.getContext('2d');
function resize(){ c.width = window.innerWidth; c.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

let t = 0;
function draw(){
  ctx.clearRect(0,0,c.width,c.height);

  // fundo suave
  const g = ctx.createLinearGradient(0,0,c.width,c.height);
  g.addColorStop(0,'rgba(34,211,238,0.06)');   // var(--accent)
  g.addColorStop(1,'rgba(139,92,246,0.06)');   // var(--accent2)
  ctx.fillStyle = g;
  ctx.fillRect(0,0,c.width,c.height);

  // grid
  const gap = 40; // distância entre linhas
  ctx.lineWidth = 1;
  for(let x = (t%gap); x < c.width; x += gap){
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,c.height); ctx.stroke();
  }
  for(let y = ((t*0.8)%gap); y < c.height; y += gap){
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y); ctx.stroke();
  }

  // linhas neon diagonais bem discretas
  ctx.globalCompositeOperation = 'lighter';
  ctx.strokeStyle = 'rgba(34,211,238,0.12)';
  ctx.beginPath();
  ctx.moveTo(-c.height + (t*0.6)% (c.width + c.height), 0);
  ctx.lineTo((t*0.6)% (c.width + c.height), c.height);
  ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';

  t += 0.35;
  requestAnimationFrame(draw);
}
draw();

/* TODOs rápidos:
   1) Substitua o avatar em /assets/avatar.jpg
   2) Edite nome, título e mini-bio no <section class="profile">
   3) Troque os href dos links (GitHub, Portfólio, LinkedIn, Stack, Email, WhatsApp)
   4) Ajuste badges do stack conforme sua realidade
*/

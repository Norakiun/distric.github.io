// Bancos de imágenes extraídos de Unsplash
const nuevosImgs = [
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop'
];

const vendidosImgs = [
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop'
];

const ofertasImgs = [
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop'
];

// Función para rellenar las cuadrículas de zapatillas
function fill(id, imgs){
  let g = document.getElementById(id);
  for(let i = 1; i <= 8; i++){
    g.innerHTML += `
      <div class="card">
        <img src="${imgs[i-1]}" alt="District Sneaker ${i}">
        <div class="info">
          <h4>District Sneaker ${i}</h4>
          <p class="price">S/${199 + i * 12}</p>
        </div>
      </div>`;
  }
}

// Inicializar las secciones de productos
fill('g1', nuevosImgs);
fill('g2', vendidosImgs);
fill('g3', ofertasImgs);

// Control del carrusel de imágenes de fondo en el Hero (Rotación automática cada 4s)
let slides = document.querySelectorAll('.slide'), c = 0;
setInterval(() => {
  slides[c].classList.remove('active');
  c = (c + 1) % slides.length;
  slides[c].classList.add('active');
}, 4000);

// Control de apertura/cierre del menú de navegación móvil (tipo hamburguesa)
function toggleMenu(){
  document.getElementById('menu').classList.toggle('show');
}
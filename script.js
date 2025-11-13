// Valentino's Anime Gear - demo product data (placeholder images only)
const PRODUCTS = [
  // The Slayers - two shirts, one per cast member
  { id: 1, title: "Slayers Retro Tee - Lina", series: "The Slayers", category: "shirts", img: "slayers_lina.png", desc: "Classic 90s inspired tee — demo placeholder" },
  { id: 2, title: "Slayers Retro Tee - Gourry", series: "The Slayers", category: "shirts", img: "slayers_gourry.png", desc: "Classic 90s inspired tee — demo placeholder" },

  // Bubblegum Crisis
  { id: 3, title: "BC Cyber Hoodie", series: "Bubblegum Crisis", category: "hoodies", img: "images/bubblegum_hoodie_1.jpg", desc: "Cyberpunk-style hoodie — placeholder image" },

  // Gunsmith Cats
  { id: 4, title: "Gunsmith Patrol Pants", series: "Gunsmith Cats", category: "pants", img: "images/gunsmith_pants_1.jpg", desc: "Tactical-styled pants — placeholder image" },

  // Shadow Skill
  { id: 5, title: "Shadow Skill Light Jacket", series: "Shadow Skill", category: "jackets", img: "images/shadowskill_jacket_1.jpg", desc: "Light battle jacket, 90s vibe — placeholder image" },

  // New Dominion Tank Police
  { id: 6, title: "Tank Police Team Tee", series: "New Dominion Tank Police", category: "shirts", img: "images/dominion_shirt_1.jpg", desc: "Squad tee — placeholder image" },

  // Akira
  { id: 7, title: "Neo-Tokyo Hoodie", series: "Akira", category: "hoodies", img: "images/akira_hoodie_1.jpg", desc: "Neo-Tokyo style hoodie — placeholder image" },

  // Ninja Scroll
  { id: 8, title: "Ninja Scroll Track Pants", series: "Ninja Scroll", category: "pants", img: "images/ninja_pants_1.jpg", desc: "Ninja-inspired pants — placeholder image" },

  // Clamp School Detectives
  { id: 9, title: "Clamp School Sweater", series: "Clamp School Detectives", category: "sweaters", img: "images/clamp_sweater_1.jpg", desc: "Preppy sweater — placeholder image" }
];

// DOM references
const grid = document.getElementById('productGrid');
const catFilter = document.getElementById('categoryFilter');
const seriesFilter = document.getElementById('seriesFilter');
const search = document.getElementById('search');
const wishCount = document.getElementById('wishCount');

let wishlist = new Set(JSON.parse(localStorage.getItem('valentinos-wish')||'[]'));

function render(){
  grid.innerHTML = '';
  const q = (search && search.value) ? search.value.trim().toLowerCase() : '';
  const cat = catFilter ? catFilter.value : 'all';
  const series = seriesFilter ? seriesFilter.value : 'all';
  const items = PRODUCTS.filter(p=>{
    if(cat !== 'all' && p.category !== cat) return false;
    if(series !== 'all' && p.series !== series) return false;
    if(q && !(p.title.toLowerCase().includes(q) || p.series.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))) return false;
    return true;
  });
  items.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="body">
        <div class="title">${p.title}</div>
        <div class="series">${p.series}</div>
        <div class="muted">${p.desc}</div>
        <div class="actions">
          <button class="view" data-id="${p.id}">View</button>
          <button class="wish" data-id="${p.id}">${wishlist.has(p.id)?'Saved':'Save'}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  wishCount.textContent = wishlist.size;
}

// modal logic
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSeries = document.getElementById('modalSeries');
const modalCategory = document.getElementById('modalCategory');
const addWish = document.getElementById('addWish');
const viewSource = document.getElementById('viewSource');

document.addEventListener('click', e=>{
  if(e.target.matches('.view')) {
    const id = +e.target.dataset.id;
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    modalImage.src = p.img;
    modalTitle.textContent = p.title;
    modalDesc.text




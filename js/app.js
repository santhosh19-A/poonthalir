/**
 * Poonthalir - Core Application Engine (Vanilla JS)
 * Adaptive Cross-Device Product Showcase & WhatsApp Ordering.
 */
import { WHATSAPP_NUMBER, PRODUCTS } from './products.js';

let selectedProduct = PRODUCTS[0]; // Poonthalir Root Strengthening Shampoo
let activeImageIndex = 0;
let activeInfoTab = 'ingredients';

window.activeImageIndex = activeImageIndex;

const tabOrder = ['ingredients', 'benefits', 'howToUse'];

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBotanicalShowcaseParallax();
  renderProductsGrid();
  bindRouteEvents();
  handleRoute();
});

function initBotanicalShowcaseParallax() {
  const showcase = document.getElementById('floatingBotanicalShowcase');
  if (!showcase) return;

  const logoWrap = showcase.querySelector('.showcase-logo-wrap');
  const productNodes = showcase.querySelectorAll('.showcase-product');

  if (!logoWrap || !productNodes.length) return;

  const handleMove = (event) => {
    const rect = showcase.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    const offsetX = px * 18;
    const offsetY = py * 18;

    logoWrap.style.setProperty('--pointer-x', `${offsetX}px`);
    logoWrap.style.setProperty('--pointer-y', `${offsetY}px`);

    productNodes.forEach((node, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      node.style.transform = node.style.transform || '';
      const x = offsetX * (0.35 + index * 0.08) * direction;
      const y = offsetY * (0.25 + index * 0.06);
      node.style.transform += ` translate(${x}px, ${y}px)`;
    });
  };

  const resetParallax = () => {
    logoWrap.style.setProperty('--pointer-x', '0px');
    logoWrap.style.setProperty('--pointer-y', '0px');

    productNodes.forEach((node) => {
      node.style.transform = '';
    });
  };

  showcase.addEventListener('pointermove', handleMove);
  showcase.addEventListener('pointerleave', resetParallax);
}

function bindRouteEvents() {
  window.addEventListener('popstate', handleRoute);
  window.addEventListener('hashchange', handleRoute);
}

function createProductSlug(name) {
  return String(name || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getCurrentRoute() {
  const hashRoute = (window.location.hash || '').replace(/^#\/?/, '');
  const pathRoute = decodeURIComponent(window.location.pathname || '/').replace(/\\/g, '/').replace(/\/+$/, '') || '/';
  const routeCandidate = hashRoute ? `/${hashRoute}` : pathRoute;

  const segments = routeCandidate.split('/').filter(Boolean);
  const productIndex = segments.indexOf('product');
  if (productIndex !== -1 && productIndex + 1 < segments.length) {
    const slug = segments[productIndex + 1].replace(/index\.html$/i, '').trim();
    if (slug) {
      return { type: 'product', slug };
    }
  }

  if (routeCandidate.startsWith('/product/')) {
    const slug = routeCandidate.replace('/product/', '').trim();
    return { type: 'product', slug };
  }

  return { type: 'home' };
}

function handleRoute() {
  const route = getCurrentRoute();

  if (route.type === 'product') {
    const product = PRODUCTS.find((item) => createProductSlug(item.name) === route.slug);
    if (!product) {
      window.location.href = '/';
      return;
    }

    selectedProduct = product;
    activeImageIndex = 0;
    activeInfoTab = 'ingredients';
    renderProductDetailsPage(product);
    return;
  }

  // Homepage route: leave homepage content intact and do not inject the detail section.
  const detailSection = document.getElementById('productDetailsSection');
  if (detailSection) {
    detailSection.classList.add('hidden');
  }
}

function getProductRouteUrl(slug) {
  if (window.location.protocol === 'file:') {
    return `product/${slug}/index.html`;
  }

  return `/product/${slug}`;
}

function getRelativeHomeRoute() {
  const currentPath = (window.location.pathname || '/').replace(/\\/g, '/');

  if (currentPath.includes('/product/')) {
    return '../../index.html';
  }

  if (currentPath.includes('/products/')) {
    return '../index.html';
  }

  return './index.html';
}

function navigateToProduct(productId) {
  const product = PRODUCTS.find((item) => item.id === productId) || PRODUCTS[0];
  const slug = createProductSlug(product.name);
  const target = getProductRouteUrl(slug);
  window.location.href = target;
}

function goBackToProducts() {
  window.location.href = getRelativeHomeRoute();
}

/* STICKY HEADER & MOBILE DRAWER TOGGLE */
function initNavigation() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNavDrawer');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }
}

/* HELPER: Render Product Placeholder HTML */
function renderProductPlaceholder(type, name, size) {
  return `
    <div style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg, #FFE5EC, #FFF0F4); padding:16px;">
      <div style="display:flex; flex-direction:column; align-items:center; transform:scale(0.95);">
        <div style="width:14px; height:18px; background:linear-gradient(90deg,#E2B150,#FFD700); border-radius:3px 3px 0 0;"></div>
        <div style="width:24px; height:8px; background:#e0e0e0; border-radius:2px;"></div>
        <div style="width:72px; height:120px; background:linear-gradient(180deg, #F56F9A, #C94F72); border-radius:18px; border:2px solid #fff; box-shadow:0 8px 20px rgba(201,79,114,0.3); display:flex; flex-direction:column; align-items:center; justify-content:space-between; padding:8px; position:relative; overflow:hidden;">
          <div style="width:100%; background:rgba(255,255,255,0.92); border-radius:8px; padding:4px 2px; text-align:center; margin-top:6px; z-index:2;">
            <div style="font-family:var(--font-serif); font-size:8px; font-weight:800; color:#164B2D;">Poonthalir</div>
            <div style="font-size:5px; font-weight:700; color:#C94F72; text-transform:uppercase;">${name || 'NATURAL'}</div>
          </div>
          <div style="font-size:12px; z-index:2;">🌿</div>
          <div style="font-size:5px; color:#fff; font-weight:700; z-index:2;">${size || '100ml'}</div>
        </div>
      </div>
    </div>
  `;
}

/* RENDER CLEAN PRODUCT CARDS FOR HOMEPAGE */
function renderProductsGrid() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => {
    const productHref = getProductRouteUrl(createProductSlug(p.name));

    return `
      <div class="product-card">
        <a href="${productHref}" class="product-image-box" aria-label="View ${p.name}" onclick="openProductDetail(${p.id}); return false;">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : renderProductPlaceholder(p.placeholderType, p.name, p.size)}
        </a>

        <div class="product-info">
          <div>
            <a href="${productHref}" class="product-title" onclick="openProductDetail(${p.id}); return false;">${p.name}</a>
            <div class="product-desc">${p.shortDescription}</div>
          </div>

          <div>
            <div class="product-price-row">
              <span class="product-price">${p.price}</span>
              <span style="font-size:0.8rem; font-weight:600; color:#666;">${p.size}</span>
            </div>

            <a href="${productHref}" class="view-product-btn" onclick="openProductDetail(${p.id}); return false;">
              View Product
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* OPEN DEDICATED PRODUCT DETAILS VIEW */
window.openProductDetail = function(productId) {
  navigateToProduct(productId);
};

window.goBackToProducts = function() {
  goBackToProducts();
};

/* RENDER PRODUCT DETAILS PAGE & RESPONSIVE GALLERY */
function renderProductDetailsPage(p) {
  const container = document.getElementById('productDetailsContainer');
  if (!container) return;

  const imagesList = p.images && p.images.length > 0 ? p.images : [p.image];
  const activeImg = imagesList[activeImageIndex] || p.image;

  // Pre-filled WhatsApp message
  const cleanPhone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const waMsg = `Hello Poonthalir,%0A%0AI would like to order:%0A%0AProduct: ${encodeURIComponent(p.name)}%0ASize: ${encodeURIComponent(p.size)}%0A%0APlease share the order details.`;
  const whatsappURL = `https://wa.me/${cleanPhone}?text=${waMsg}`;

  const currentTabIndex = tabOrder.indexOf(activeInfoTab);

  container.innerHTML = `
    <div style="margin-bottom: 18px;">
      <button class="btn-secondary" onclick="goBackToProducts()" style="padding: 10px 18px; font-size: 0.88rem;">
        ← Back to Products
      </button>
    </div>

    <!-- MAIN PRODUCT DETAILS GRID -->
    <div class="product-detail-main-grid">
      
      <!-- LEFT: RESPONSIVE IMAGE GALLERY WITH CLICK-TO-ZOOM -->
      <div>
        <div class="gallery-main-stage">
          ${imagesList.length > 1 ? `
            <button class="gallery-nav-btn gallery-nav-prev" type="button" aria-label="Previous image" onclick="event.stopPropagation(); switchGalleryImgByDelta(-1);">&#8249;</button>
            <button class="gallery-nav-btn gallery-nav-next" type="button" aria-label="Next image" onclick="event.stopPropagation(); switchGalleryImgByDelta(1);">&#8250;</button>
          ` : ''}

          <div class="gallery-main-viewport" onclick="openImageZoomModal('${activeImg}', '${p.name.replace(/'/g, "\\'")}')" title="Click to open fullscreen zoom">
            <div class="zoom-hint-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              <span>Click to Zoom</span>
            </div>
            ${activeImg ? `<img src="${activeImg}" alt="${p.name}" class="gallery-main-img" />` : renderProductPlaceholder(p.placeholderType, p.name, p.size)}
          </div>
        </div>

        ${imagesList.length > 1 ? `
          <div class="gallery-thumbnails-row">
            ${imagesList.map((img, idx) => `
              <button class="gallery-thumb-btn ${idx === activeImageIndex ? 'active' : ''}" onclick="switchGalleryImg(${idx})">
                <img src="${img}" class="gallery-thumb-img" alt="Thumbnail ${idx + 1}" />
              </button>
            `).join('')}
          </div>
          <div class="gallery-dots" aria-label="Image navigation">
            ${imagesList.map((img, idx) => `
              <button type="button" class="gallery-dot ${idx === activeImageIndex ? 'active' : ''}" aria-label="View image ${idx + 1}" onclick="switchGalleryImg(${idx})"></button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- RIGHT: PRODUCT INFO & ORDER NOW BUTTON -->
      <div class="product-detail-copy-panel">
        <span class="product-size-badge">${p.size}</span>
        <h1 class="product-detail-title">${p.name}</h1>
        <p style="font-size:1.1rem; font-weight:600; color:#C94F72; margin-bottom:14px;">${p.shortDescription}</p>
        <div class="price-detail-current">${p.price}</div>

        <p style="font-size:0.95rem; color:#555; line-height:1.6; margin-bottom:24px;">
          ${p.description}
        </p>

        <!-- ORDER NOW ON WHATSAPP BUTTON -->
        <a href="${whatsappURL}" target="_blank" class="whatsapp-order-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          ORDER NOW ON WHATSAPP
        </a>
      </div>

    </div>

    <!-- INTERACTIVE SECTION: INGREDIENTS | BENEFITS | HOW TO USE TABS & TOUCH SWIPE -->
    <div style="margin-top:36px;">
      <div class="info-tabs-header">
        <button class="info-tab-btn ${activeInfoTab === 'ingredients' ? 'active' : ''}" onclick="switchInfoTab('ingredients')">
          🌿 Ingredients
        </button>
        <button class="info-tab-btn ${activeInfoTab === 'benefits' ? 'active' : ''}" onclick="switchInfoTab('benefits')">
          ✨ Benefits
        </button>
        <button class="info-tab-btn ${activeInfoTab === 'howToUse' ? 'active' : ''}" onclick="switchInfoTab('howToUse')">
          💧 How to Use
        </button>
      </div>

      <!-- TAB CONTENT PANEL WITH TOUCH SWIPE HANDLER -->
      <div id="infoTabPanel" class="info-tab-content-panel">
        ${renderInfoTabContent(p)}
      </div>

      <!-- Mobile Pagination Indicators -->
      <div class="mobile-swipe-indicator">
        <span class="swipe-dot ${currentTabIndex === 0 ? 'active' : ''}"></span>
        <span class="swipe-dot ${currentTabIndex === 1 ? 'active' : ''}"></span>
        <span class="swipe-dot ${currentTabIndex === 2 ? 'active' : ''}"></span>
      </div>
    </div>

    <!-- PROMINENT ORDER NOW BOX AT BOTTOM -->
    <div class="order-now-cta-box">
      <div style="font-size:2.5rem; margin-bottom:8px;">🌸</div>
      <h3 style="font-family:var(--font-serif); font-size:clamp(1.5rem, 4vw, 2rem); font-weight:800; color:#164B2D; margin-bottom:6px;">Ready to order ${p.name}?</h3>
      <p style="font-size:1rem; color:#555; margin-bottom:16px;">Size: ${p.size} • ${p.price}</p>

      <a href="${whatsappURL}" target="_blank" class="whatsapp-order-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        ORDER NOW ON WHATSAPP
      </a>
    </div>
  `;

  // Attach touch swipe listener on panel
  setTimeout(() => {
    initTabSwipeGestures();
    initGallerySwipeGestures();
  }, 50);
}

/* MOBILE TOUCH SWIPE GESTURE HANDLER FOR MAIN GALLERY */
function initGallerySwipeGestures() {
  const gallery = document.querySelector('.gallery-main-viewport');
  if (!gallery || !selectedProduct || !selectedProduct.images || selectedProduct.images.length < 2) return;

  let startX = 0;
  let startY = 0;

  gallery.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  gallery.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      const total = selectedProduct.images.length;
      if (diffX > 0) {
        switchGalleryImg((activeImageIndex + 1) % total);
      } else {
        switchGalleryImg((activeImageIndex - 1 + total) % total);
      }
    }
  }, { passive: true });
}

/* RENDER CONTENT FOR INGREDIENTS / BENEFITS / HOW TO USE TABS */
function renderInfoTabContent(p) {
  if (activeInfoTab === 'ingredients') {
    return `
      <div>
        <h3 style="font-family:var(--font-serif); font-size:1.5rem; font-weight:800; color:#164B2D; margin-bottom:16px;">INGREDIENTS</h3>
        
        <div class="ingredients-grid">
          ${(p.ingredientsList || []).map(ing => `
            <div class="ingredient-card">
              <span style="font-size:1.4rem;">🌿</span>
              <span style="font-weight:700; font-size:0.95rem; color:#164B2D;">${ing}</span>
            </div>
          `).join('')}
        </div>

        ${p.ingredientNotes ? `
          <div style="margin-top:20px; padding:14px 18px; background:#FFF5F6; border-left:4px solid #F56F9A; border-radius:12px; font-weight:600; color:#C94F72; font-size:0.9rem;">
            ✨ ${p.ingredientNotes}
          </div>
        ` : ''}
      </div>
    `;
  }

  if (activeInfoTab === 'benefits') {
    return `
      <div>
        <h3 style="font-family:var(--font-serif); font-size:1.5rem; font-weight:800; color:#164B2D; margin-bottom:18px;">BENEFITS</h3>
        
        <div class="benefits-cards-grid">
          ${(p.benefitsList || []).map((b, idx) => `
            <div class="benefit-detail-card">
              <div style="width:36px; height:36px; border-radius:50%; background:#FFE5EC; color:#C94F72; display:flex; align-items:center; justify-content:center; font-weight:800; flex-shrink:0;">
                ${idx + 1}
              </div>
              <div>
                <h4 style="font-size:1.05rem; font-weight:700; color:#164B2D; margin-bottom:4px;">${b.title}</h4>
                <p style="font-size:0.88rem; color:#555; line-height:1.45;">${b.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // How to Use Tab
  return `
    <div>
      <h3 style="font-family:var(--font-serif); font-size:1.5rem; font-weight:800; color:#164B2D; margin-bottom:18px;">HOW TO USE</h3>
      
      <div class="howtouse-steps-grid">
        ${(p.howToUseSteps || []).map(step => `
          <div class="step-card">
            <span class="step-badge">${step.step}</span>
            <h4 style="font-size:1.05rem; font-weight:700; color:#164B2D; margin-bottom:6px;">${step.title}</h4>
            <p style="font-size:0.88rem; color:#555; line-height:1.45;">${step.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* MOBILE TOUCH SWIPE GESTURE HANDLER */
function initTabSwipeGestures() {
  const panel = document.getElementById('infoTabPanel');
  if (!panel) return;

  let startX = 0;
  let startY = 0;

  panel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  panel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > 40 && Math.abs(diffY) < 80) {
      const currentIndex = tabOrder.indexOf(activeInfoTab);
      if (diffX > 0 && currentIndex < tabOrder.length - 1) {
        window.switchInfoTab(tabOrder[currentIndex + 1]);
      } else if (diffX < 0 && currentIndex > 0) {
        window.switchInfoTab(tabOrder[currentIndex - 1]);
      }
    }
  }, { passive: true });
}

/* INTERACTION HELPERS */
window.switchGalleryImgByDelta = function(delta) {
  const total = selectedProduct && selectedProduct.images ? selectedProduct.images.length : 1;
  if (!total) return;

  const nextIndex = (activeImageIndex + delta + total) % total;
  window.switchGalleryImg(nextIndex);
};

window.switchGalleryImg = function(index) {
  const total = selectedProduct && selectedProduct.images ? selectedProduct.images.length : 1;
  activeImageIndex = ((index % total) + total) % total;
  window.activeImageIndex = activeImageIndex;
  renderProductDetailsPage(selectedProduct);
};

window.switchInfoTab = function(tabName) {
  activeInfoTab = tabName;
  renderProductDetailsPage(selectedProduct);
};

window.scrollToSection = function(id) {
  const elem = document.getElementById(id);
  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
};

/* FULLSCREEN IMAGE ZOOM LIGHTBOX LOGIC */
let modalZoomScale = 1;

window.openImageZoomModal = function(imgSrc, title = 'Product View') {
  const modal = document.getElementById('imageZoomModal');
  const img = document.getElementById('zoomModalImg');
  const titleElem = document.getElementById('zoomModalTitle');
  if (!modal || !img) return;

  img.src = imgSrc;
  if (titleElem) titleElem.textContent = title;
  modalZoomScale = 1;
  img.style.transform = `scale(${modalZoomScale})`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeImageZoomModal = function() {
  const modal = document.getElementById('imageZoomModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
};

window.adjustModalZoom = function(delta) {
  const img = document.getElementById('zoomModalImg');
  if (!img) return;
  modalZoomScale = Math.min(Math.max(0.5, modalZoomScale + delta), 3.5);
  img.style.transform = `scale(${modalZoomScale})`;
};

window.resetModalZoom = function() {
  const img = document.getElementById('zoomModalImg');
  if (!img) return;
  modalZoomScale = 1;
  img.style.transform = `scale(1)`;
};

// Keyboard listener for Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeImageZoomModal();
  }
});


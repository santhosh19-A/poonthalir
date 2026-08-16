/**
 * Poonthalir - Centralized Product & Brand Dataset
 * Simple, elegant product showcase data.
 * Official WhatsApp Number: +91 81228 29370
 */

function resolveAssetPath(relativePath) {
  const currentPath = (window.location.pathname || '/').replace(/\\/g, '/');
  const normalized = relativePath.replace(/^\/+/, '');

  if (currentPath.includes('/product/')) {
    return `../../${normalized}`;
  }

  if (currentPath.includes('/products/')) {
    return `../${normalized}`;
  }

  return normalized;
}

// CENTRAL WHATSAPP CONFIGURATION
export const WHATSAPP_NUMBER = "919677374237"; 

export const BRAND_INFO = {
  name: "Poonthalir",
  tagline: "Pure Nature. Pure Beauty.",
  subtitle: "NATURAL • PURE • NOURISHING",
  description: "Discover natural products crafted with care from nature’s finest herbal ingredients.",
  email: "poonthalir971@gmail.com",
  phone: "+91 81228 29370",
  whatsapp: "+91 96773 74237",
  instagram: "@poonthalir_nature",
  address: "Tamil Nadu, India"
};

export const PRODUCTS = [
  {
    id: 101,
    name: "Root Strengthening Shampoo",
    category: "Hair Care",
    size: "100ml",
    price: "₹179",
    image: resolveAssetPath('images/shampoo-main.jpg'),
    imageAlt: "Poonthalir Root Strengthening Shampoo bottle",
    images: [
      resolveAssetPath('images/shampoo-main.jpg'),
      resolveAssetPath('images/shampoo-benefits.jpg'),
      resolveAssetPath('images/shampoo-ingredients.jpg'),
      resolveAssetPath('images/shampoo-howtouse.jpg')
    ],
    shortDescription: "Natural care for strong, shiny and healthy hair.",
    description: "Deeply hydrates & soothes scalp with Rice water, Flax seed, Cinnamon & Essential oils. Promotes strong, smooth & resilient hair growth.",
    ingredientsList: [
      "Rice water",
      "Flax seed",
      "Cinnamon",
      "Herbal extracts",
      "Natural surfactant",
      "Essential oil"
    ],
    ingredientNotes: "Flax seed and a gentle shampoo base.",
    benefitsList: [
      { title: "Cleanses Hair & Scalp", desc: "Cleanses hair and scalp with natural ingredients." },
      { title: "Strengthens Hair", desc: "Helps strengthen hair and support a healthy-looking appearance." },
      { title: "Reduces Split Ends", desc: "Helps reduce the appearance of split ends and hair breakage." },
      { title: "Enhances Shine", desc: "Helps enhance natural shine and softness." }
    ],
    howToUseSteps: [
      { step: "Step 1", title: "Apply to wet hair", desc: "Apply to wet hair and gently massage into the scalp." },
      { step: "Step 2", title: "Rinse thoroughly", desc: "Rinse thoroughly and follow with a conditioner if required." },
      { step: "Step 3", title: "Use regularly", desc: "Use regularly for best results." }
    ]
  },
  {
    id: 102,
    name: "Aura Glow Gel",
    category: "Skin Care",
    size: "50g",
    price: "₹249",
    image: resolveAssetPath('images/gel-main.jpeg'),
    imageAlt: "Poonthalir Aura Glow Gel jar",
    images: [
      resolveAssetPath('images/gel-main.jpeg'),
      resolveAssetPath('images/gel-benefits.jpeg'),
      resolveAssetPath('images/gel-ingrediants.jpeg'),
      resolveAssetPath('images/gel-howtouse.jpeg')
    ],
    shortDescription: "Brightening herbal gel for a smooth, naturally radiant glow.",
    description: "A luxurious skin-loving gel infused with saffron, aloe vera, floral waters and herbal extracts to hydrate, soothe and revive your skin with a healthy, radiant finish.",
    ingredientsList: [
      "Pure Organic Aloe Vera Gel",
      "Kashmiri Saffron",
      "Natural Floral Waters",
      "Kumkumadi Infusion",
      "Pure Plant Glycerin",
      "Herbal skin care actives"
    ],
    ingredientNotes: "Crafted with skin-nourishing botanical ingredients to support glow and hydration.",
    benefitsList: [
      { title: "Instantly hydrates", desc: "Delivers deep hydration and refreshes the skin instantly." },
      { title: "Enhances natural glow", desc: "Helps brighten the complexion and boost natural radiance." },
      { title: "Soothes irritation", desc: "Calms redness and helps restore a comfortable skin feel." },
      { title: "Improves texture", desc: "Helps refine skin texture and promote a smooth, even tone." }
    ],
    howToUseSteps: [
      { step: "Step 1", title: "Take a small amount", desc: "Take a small amount of Aura Glow Gel and gently apply to your skin." },
      { step: "Step 2", title: "Apply evenly", desc: "Apply evenly on clean face and neck. Massage gently in circular motion until fully absorbed." },
      { step: "Step 3", title: "Use daily", desc: "Use twice daily for best results — in the morning and before bedtime." }
    ]
  }
];

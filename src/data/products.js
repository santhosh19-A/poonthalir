// Poonthalir Product Data Store
// All product information, placeholder image paths, pricing, ratings, and categories are centralized here.
// When actual product images are provided, update the `image` path field in this file.

export const BRAND_INFO = {
  name: "Poonthalir",
  tagline: "Pure Nature. Pure Beauty.",
  subtitle: "NATURAL • PURE • NOURISHING",
  description: "Discover handcrafted natural products made from nature's finest herbal ingredients.",
  foundedYear: "2026",
  email: "poonthalir971@gmail.com",
  phone: "+91 81228 29370",
  whatsapp: "+91 96773 74237",
  address: "Coimbatore, Tamil Nadu, India"
};

export const CATEGORIES = [
  {
    id: "face-care",
    name: "Face Care",
    count: "12 Products",
    description: "Gentle herbal cleansers, serums & glowing creams",
    icon: "Sparkles",
    bgGradient: "from-pink-100 to-rose-50",
    imagePlaceholder: "face-care-placeholder"
  },
  {
    id: "hair-care",
    name: "Hair Care",
    count: "8 Products",
    description: "Nourishing oils, shampoos & herbal masks",
    icon: "Flower2",
    bgGradient: "from-emerald-50 to-teal-50",
    imagePlaceholder: "hair-care-placeholder"
  },
  {
    id: "body-care",
    name: "Body Care",
    count: "10 Products",
    description: "Hydrating scrubs, lotions & herbal soaps",
    icon: "Heart",
    bgGradient: "from-amber-50 to-pink-50",
    imagePlaceholder: "body-care-placeholder"
  },
  {
    id: "herbal-products",
    name: "Herbal Products",
    count: "15 Products",
    description: "Pure traditional botanical formulas",
    icon: "Leaf",
    bgGradient: "from-green-50 to-emerald-50",
    imagePlaceholder: "herbal-placeholder"
  },
  {
    id: "natural-oils",
    name: "Natural Oils",
    count: "7 Products",
    description: "Cold-pressed essential & beauty oils",
    icon: "Droplets",
    bgGradient: "from-rose-50 to-orange-50",
    imagePlaceholder: "oils-placeholder"
  },
  {
    id: "wellness",
    name: "Wellness",
    count: "9 Products",
    description: "Holistic self-care & bath elixirs",
    icon: "Sun",
    bgGradient: "from-pink-50 to-purple-50",
    imagePlaceholder: "wellness-placeholder"
  }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Herbal Face Wash",
    variant: "Aloe Vera & Rose",
    category: "face-care",
    price: 399,
    originalPrice: 499,
    rating: 4.8,
    reviews: 125,
    isBestSeller: true,
    isNew: false,
    badge: "Bestseller",
    size: "200 ml",
    image: "/src/assets/images/products/herbal-face-wash.png",
    placeholderType: "face-wash",
    bottleColor: "#F56F9A",
    capColor: "#E2B150",
    shortDescription: "Soothes skin, deep cleanses pores & leaves a delicate floral hydration glow.",
    description: "Formulated with pure organic Aloe Vera gel, wild Rose petal extract, and Indian Madder (Manjistha). Gently washes away impurities while maintaining your skin's natural moisture barrier.",
    keyIngredients: ["Organic Aloe Vera", "Damask Rose Water", "Manjistha", "Vetiver Root Extract"],
    inStock: true
  },
  {
    id: 2,
    name: "Glowing Face Serum",
    variant: "Vitamin C & Rosehip",
    category: "face-care",
    price: 599,
    originalPrice: 749,
    rating: 4.9,
    reviews: 98,
    isBestSeller: true,
    isNew: true,
    badge: "Top Rated",
    size: "30 ml",
    image: "/src/assets/images/products/glowing-face-serum.png",
    placeholderType: "serum",
    bottleColor: "#E85D88",
    capColor: "#D4AF37",
    shortDescription: "Ultra-concentrated botanical serum for luminous, clear, and radiant skin texture.",
    description: "A fast-absorbing elixir enriched with Rosehip Seed Oil, Wild Amla Vitamin C, and Saffron. Fades dark spots, boosts collagen production, and restores youthfulness.",
    keyIngredients: ["Cold-Pressed Rosehip Oil", "Amla Extract (Natural Vit C)", "Kashmiri Saffron", "Gotu Kola"],
    inStock: true
  },
  {
    id: 3,
    name: "Nourishing Face Cream",
    variant: "Rose & Sandalwood",
    category: "face-care",
    price: 499,
    originalPrice: 599,
    rating: 4.7,
    reviews: 110,
    isBestSeller: false,
    isNew: false,
    badge: "Customer Favorite",
    size: "50 g",
    image: "/src/assets/images/products/nourishing-face-cream.png",
    placeholderType: "cream-jar",
    bottleColor: "#C94F72",
    capColor: "#C59B27",
    shortDescription: "Rich velvet moisturizer that locks in moisture and softens fine lines naturally.",
    description: "Creamy blend of Pure Mysore Sandalwood oil, Rose Petal infusion, and Sheabutter. Deeply nourishes dry skin and protects against environmental stress.",
    keyIngredients: ["Mysore Sandalwood Oil", "Damask Rose Oil", "Raw Shea Butter", "Jojoba Seed Oil"],
    inStock: true
  },
  {
    id: 4,
    name: "Herbal Face Scrub",
    variant: "Walnut & Rose Petals",
    category: "face-care",
    price: 349,
    originalPrice: 429,
    rating: 4.8,
    reviews: 87,
    isBestSeller: false,
    isNew: true,
    badge: "Gentle Exfoliant",
    size: "100 g",
    image: "/src/assets/images/products/herbal-face-scrub.png",
    placeholderType: "scrub-tube",
    bottleColor: "#F56F9A",
    capColor: "#164B2D",
    shortDescription: "Exfoliates dead skin cells, reveals velvety softness without stripping natural oils.",
    description: "Finely ground walnut shell powder combined with crushed Rose petals and Sweet Almond oil. Smooths rough texture and unclogs stubborn pores.",
    keyIngredients: ["Walnut Shell Powder", "Crushed Rose Petals", "Sweet Almond Oil", "Turmeric Root"],
    inStock: true
  },
  {
    id: 5,
    name: "Kumkumadi Night Elixir",
    variant: "Saffron & 26 Ayurvedic Herbs",
    category: "natural-oils",
    price: 899,
    originalPrice: 1199,
    rating: 5.0,
    reviews: 64,
    isBestSeller: true,
    isNew: true,
    badge: "Luxury Oil",
    size: "15 ml",
    image: "/src/assets/images/products/kumkumadi-elixir.png",
    placeholderType: "dropper-luxury",
    bottleColor: "#B5395B",
    capColor: "#FFD700",
    shortDescription: "Traditional miracle oil formulated for overnight complexion transformation.",
    description: "Authentic 100% Ayurvedic night treatment crafted with Saffron, Sandalwood, Lotus pollen, and Milk. Promotes golden complexion clarity.",
    keyIngredients: ["Kashmiri Kumkuma (Saffron)", "Padmaka (Lotus)", "Chandan (Sandalwood)", "Manjistha"],
    inStock: true
  },
  {
    id: 6,
    name: "Pure Damask Rose Water",
    variant: "Steam Distilled Hydrosol",
    category: "face-care",
    price: 299,
    originalPrice: 349,
    rating: 4.9,
    reviews: 142,
    isBestSeller: true,
    isNew: false,
    badge: "100% Pure",
    size: "200 ml",
    image: "/src/assets/images/products/rose-water.png",
    placeholderType: "spray-bottle",
    bottleColor: "#F3A6BA",
    capColor: "#164B2D",
    shortDescription: "Instantly refreshes, balances pH level, and tones tired skin with pure rose essence.",
    description: "Handpicked early morning Damask roses steam-distilled to capture pure aromatic rose water. Zero artificial alcohol or fragrances.",
    keyIngredients: ["100% Steam-Distilled Rose Petal Hydrosol"],
    inStock: true
  },
  {
    id: 7,
    name: "Bhringraj & Amla Hair Oil",
    variant: "Intensive Root Nourishment",
    category: "hair-care",
    price: 449,
    originalPrice: 549,
    rating: 4.8,
    reviews: 79,
    isBestSeller: false,
    isNew: false,
    badge: "Hair Secret",
    size: "200 ml",
    image: "/src/assets/images/products/hair-oil.png",
    placeholderType: "hair-oil-bottle",
    bottleColor: "#164B2D",
    capColor: "#D4AF37",
    shortDescription: "Strengthens hair roots, curbs hair fall, and encourages lustrous dark growth.",
    description: "Slow-cooked Sesame oil infused with Bhringraj, Fresh Amla juice, Neem, and Hibiscus leaves. Ancient traditional formula for luscious hair.",
    keyIngredients: ["Bhringraj Leaves", "Wild Amla", "Curry Leaves", "Cold-Pressed Sesame Oil"],
    inStock: true
  },
  {
    id: 8,
    name: "Herbal Body Scrub Soap",
    variant: "Wild Turmeric & Neem",
    category: "body-care",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviews: 156,
    isBestSeller: false,
    isNew: false,
    badge: "Eco Bar",
    size: "125 g",
    image: "/src/assets/images/products/body-soap.png",
    placeholderType: "soap-bar",
    bottleColor: "#D49B59",
    capColor: "#164B2D",
    shortDescription: "Cold-processed botanical bar that clarifies skin and leaves a refreshing scent.",
    description: "Handcrafted bath bar made with Kasturi Manjal (Wild Turmeric), Neem oil, Coconut butter, and essential oils.",
    keyIngredients: ["Kasturi Turmeric", "Fresh Neem Juice", "Cold-Pressed Coconut Oil"],
    inStock: true
  }
];

export const BRAND_BENEFITS = [
  {
    id: 1,
    title: "100% Natural",
    subtitle: "Pure plant & floral extracts",
    iconName: "Leaf"
  },
  {
    id: 2,
    title: "Cruelty Free",
    subtitle: "Never tested on animals",
    iconName: "HeartHandshake"
  },
  {
    id: 3,
    title: "Paraben Free",
    subtitle: "Zero harmful chemicals",
    iconName: "ShieldCheck"
  },
  {
    id: 4,
    title: "Eco Friendly",
    subtitle: "Sustainable bio-packaging",
    iconName: "Recycle"
  },
  {
    id: 5,
    title: "Handcrafted with Care",
    subtitle: "Made in small artisanal batches",
    iconName: "Sparkles"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya Ramesh",
    location: "Chennai",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    title: "Gentle on skin, smells divine!",
    review: "The Herbal Face Wash and Glowing Serum completely changed my skincare routine! My skin feels so soft, hydrated, and naturally radiant. Love that it's 100% organic."
  },
  {
    id: 2,
    name: "Priya Sundaram",
    location: "Bengaluru",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    title: "Authentic herbal aroma & pure results",
    review: "Poonthalir products feel so high-end and pure. The Sandalwood Face Cream feels luxurious like a spa treatment at home. The packaging is gorgeous!"
  },
  {
    id: 3,
    name: "Meera Krishnan",
    location: "Kochi",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    title: "My favorite natural brand!",
    review: "I've been using their Damask Rose Water and Face Scrub for two months now. Zero breakouts, super fresh feel, and prompt delivery. Highly recommended!"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    imagePlaceholder: "insta-roses",
    title: "Fresh Damask Roses",
    likes: "1.2k",
    comments: "45"
  },
  {
    id: 2,
    imagePlaceholder: "insta-serum",
    title: "Glowing Serum Drops",
    likes: "2.4k",
    comments: "89"
  },
  {
    id: 3,
    imagePlaceholder: "insta-ingredients",
    title: "Artisanal Herbal Infusions",
    likes: "980",
    comments: "32"
  },
  {
    id: 4,
    imagePlaceholder: "insta-packaging",
    title: "Eco-Friendly Packaging",
    likes: "1.5k",
    comments: "67"
  },
  {
    id: 5,
    imagePlaceholder: "insta-routine",
    title: "Morning Skincare Ritual",
    likes: "3.1k",
    comments: "112"
  },
  {
    id: 6,
    imagePlaceholder: "insta-garden",
    title: "Organic Herb Gardens",
    likes: "1.8k",
    comments: "54"
  }
];

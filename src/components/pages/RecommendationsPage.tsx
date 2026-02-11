import { ExternalLink, Search, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo, ChangeEvent } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Product {
  name: string;
  description: string;
  reason: string;
  category: string;
  image: string;
  amazonUrl: string;
  categoryGroup: string;
}

const ALL_PRODUCTS: Product[] = [
  // Skincare & Grooming
  {
    name: 'Minimalist Dull Skin, Dark Spots & Uneven Tone Treatment 10% Vitamin C Face Serum',
    description: 'A lightweight vitamin C serum formulated with 10% Ethyl Ascorbic Acid to support brighter, more even-looking skin.',
    reason: 'Uses a stable vitamin C derivative (Ethyl Ascorbic Acid) that fits well into everyday routines. Gentle, fragrance-free formula designed to feel comfortable on different skin types.',
    category: 'Skincare',
    image: 'https://m.media-amazon.com/images/I/717Kb7GUFyL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/3O559IL',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'Cetaphil Moisturising Cream 100 g for Dry & Sensitive Skin',
    description: 'A rich, nourishing moisturizing cream designed to provide long-lasting hydration while supporting the skin\'s natural barrier.',
    reason: 'Offers deep, long-lasting hydration without feeling heavy, making it suitable for daily use. A fragrance-free, dermatologist-recommended formula.',
    category: 'Skincare',
    image: 'https://m.media-amazon.com/images/I/615fFn0PrZL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/4kfMG8i',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'Cetaphil Gentle Skin Cleanser for Dry, Normal Sensitive Skin',
    description: 'A mild, non-comedogenic cleanser designed to gently cleanse while maintaining the skin\'s natural moisture balance.',
    reason: 'Gentle micellar technology effectively removes dirt, makeup, and impurities without stripping the skin. Clinically tested hydration.',
    category: 'Skincare',
    image: 'https://smytten-image.gumlet.io/discover_product/1693549715_1692163522_cetaphil.avif',
    amazonUrl: 'https://amzn.to/45HEgkm',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'Plum 3% Niacinamide & Rice Water Face Toner',
    description: 'Alcohol-free toner formulated with 3% niacinamide and rice water to support clearer, smoother-looking skin.',
    reason: 'Uses niacinamide, rice ferment, and oat extract to help balance skin. Alcohol-free, non-comedogenic, and pH-balanced.',
    category: 'Skincare',
    image: 'https://m.media-amazon.com/images/I/41BNihr3HwL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/45RAJQt',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++',
    description: 'Lightweight, water-gel sunscreen with SPF 50 PA++++ designed to provide broad-spectrum protection while keeping skin hydrated.',
    reason: 'Offers high UVA and UVB protection in a gel texture that feels easy to wear every day. Fragrance-free, non-greasy.',
    category: 'Skincare',
    image: 'https://m.media-amazon.com/images/I/61r7v2ziqPL._SL1080_.jpg',
    amazonUrl: 'https://amzn.to/46zX59h',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'The Ordinary Glycolic Acid 7% Exfoliating Toner',
    description: 'Exfoliating toner formulated with 7% glycolic acid to help smooth skin texture and support a more even-looking skin tone.',
    reason: 'Uses glycolic acid with soothing plant extracts like Tasmanian pepperberry and aloe to balance exfoliation and comfort.',
    category: 'Skincare',
    image: 'https://m.media-amazon.com/images/I/5147PCBYBnL._SL1080_.jpg',
    amazonUrl: 'https://amzn.to/4r1xYVl',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'L\'Oreal Paris Fresh Hyaluron Moisture 72HR Conditioner',
    description: 'Lightweight conditioner powered by hyaluronic acid to help hydrate dry, dull hair without weighing it down.',
    reason: 'Uses hyaluronic acid–inspired skincare technology to support long-lasting hydration and reduce frizz.',
    category: 'Hair Care',
    image: 'https://m.media-amazon.com/images/I/511fPrnY+bL._SL1500_.jpg',
    amazonUrl: 'https://amzn.to/4a9kSPT',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'Neutrogena Hydro Boost Hyaluronic Acid Face Moisturizer',
    description: 'Lightweight, water-gel moisturizer formulated with hyaluronic acid to help replenish and lock in hydration.',
    reason: 'Powered by hyaluronic acid, known for helping the skin retain moisture. Lightweight water-gel texture absorbs quickly.',
    category: 'Skincare',
    image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/1826371-Neutrogena-Hydro-Boost-Water-Gel-Review-1296x728-Header-c0dcdf.jpg?w=1575',
    amazonUrl: 'https://amzn.to/3LRLsDL',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'La Roche-Posay Anthelios Sunscreen UVMune 400 Oil Control Gel Cream SPF50+',
    description: 'Matte finish invisible sunscreen for oily, blemish & acne-prone skin with broad-spectrum SPF 50+ protection.',
    reason: 'Powered by Mexoryl 400, an advanced UV filter developed to improve protection against long UVA rays. Gel-cream texture absorbs quickly.',
    category: 'Skincare',
    image: 'https://m.media-amazon.com/images/I/51WC+UB8NFL._SX522_.jpg',
    amazonUrl: 'https://amzn.to/4c77Ovw',
    categoryGroup: 'skincare-grooming'
  },
  {
    name: 'Beardo Beard Growth Duo | Beard & Hair Growth Oil',
    description: 'Grooming tool and care solution designed to support healthier-looking beard growth and improve the appearance of patchy areas.',
    reason: 'Supports fuller-looking beard growth by stimulating the skin and hair follicles. Helps reduce the appearance of patchiness.',
    category: 'Grooming',
    image: 'https://beardo.in/cdn/shop/files/1_db396662-b60a-4480-a6e3-e1daaeb9d35f.jpg?v=1762752447&width=1946',
    amazonUrl: 'https://amzn.to/4roawB7',
    categoryGroup: 'skincare-grooming'
  },
  // Wellness & Supplements
  {
    name: 'Neuherbs Omega-3 Fish Oil Capsules',
    description: 'High-quality omega-3 supplement supporting heart and brain health.',
    reason: 'Sourced with deep-sea fish with good EPA/DHA ratio. Important for those who don\'t consume enough fatty fish in their diet.',
    category: 'Supplements',
    image: 'https://m.media-amazon.com/images/I/716XShje6tL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/4kl077i',
    categoryGroup: 'wellness-supplements'
  },
  {
    name: 'Himalaya Ashwagandha Tablets',
    description: 'Traditional Ayurvedic adaptogen for stress management and overall wellness.',
    reason: 'Well-established brand with quality control. Ashwagandha is backed by research for stress reduction and energy support.',
    category: 'Supplements',
    image: 'https://m.media-amazon.com/images/I/81GL5NJov3L._SX679_.jpg',
    amazonUrl: 'https://amzn.to/4rsGaxq',
    categoryGroup: 'wellness-supplements'
  },
  {
    name: 'Carbamide Forte Vitamin D3 K2 Supplement',
    description: 'Essential Vitamin K2 MK7 to support bone & heart health.',
    reason: 'Combines Vitamin D3, Vitamin K2 MK7, and K2 D3 vitamin supplement synergy to help calcium reach the bones instead of arteries.',
    category: 'Supplements',
    image: 'https://m.media-amazon.com/images/I/71bQqgqf2oL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/46jpsZf',
    categoryGroup: 'wellness-supplements'
  },
  {
    name: 'Organic India Tulsi Green Tea',
    description: 'Caffeine-free herbal tea combining tulsi with green tea benefits.',
    reason: 'Great for daily wellness routine. Tulsi is traditionally used for stress relief and overall vitality.',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1566373104181-133b57c9fd98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2OTk4MTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amazonUrl: 'https://amzn.to/4qPO6Je',
    categoryGroup: 'wellness-supplements'
  },
  // Style & Fashion
  {
    name: 'Nike Mens Court Vision Low Sneaker',
    description: 'A classic low-top sneaker inspired by retro basketball style, designed for everyday wear with a clean and versatile look.',
    reason: ' • Durable upper construction for long-lasting wear • Low-cut silhouette offers a sleek and comfortable fit • Cushioned insole provides everyday comfort and support',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/61o+sbSxY5L._SX679_.jpg',
    amazonUrl: 'https://amzn.to/46In3HG',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Nike Unisex Precision 8 Basketball Shoe',
    description: 'A performance-focused basketball shoe built for agility, control, and on-court comfort.',
    reason: ' • Lightweight design enhances speed and movement • Responsive cushioning supports quick direction changes • Durable outsole pattern improves grip on court surfaces',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/61CPqCoF4wL._SY879_.jpg',
    amazonUrl: 'https://amzn.to/3Mpkwv6',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Nike Mens Promina Running Shoes',
    description: 'Lightweight running shoes designed to provide everyday comfort, breathability, and responsive cushioning for active movement.',
    reason: ' • Lightweight construction supports natural running motion • Cushioned midsole enhances comfort during workouts • Breathable upper helps keep feet cool and dry',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/610aPX1IWYL._SY879_.jpg',
    amazonUrl: 'https://amzn.to/4qz4Jbj',
    categoryGroup: 'style-fashion'
  }, 
  {
    name: 'Nike Men Court Vision Lo Nn Sports Shoes',
    description: 'A modern take on classic basketball sneakers, combining retro style with updated materials for everyday wear.',
    reason: ' • Inspired by old-school basketball design • Comfortable padding around collar and tongue • Durable rubber outsole for reliable traction',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/613l8ZN8TfL._SY879_.jpg',
    amazonUrl: 'https://amzn.to/4revJ0V',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Nike Revolution 7 Running Shoes',
    description: 'Comfortable, versatile running shoes suitable for daily wear and light exercise.',
    reason: 'Good cushioning and support for everyday activities. Durable construction and widely available in India.',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/716VrN1qnsL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/3OBzyyx',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'adidas Men\'s Streeet Icon Lite Sneakers',
    description: 'Casual lifestyle sneakers designed for lightweight comfort and effortless street-ready style.',
    reason: ' • Lightweight construction for all-day wear • Breathable upper enhances comfort • Versatile design pairs well with casual outfits',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/61EJ+pyRz8L._SY695_.jpg',
    amazonUrl: 'https://amzn.to/4qA77yD',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'adidas Men Sportswear Sports Shoes Grand Court',
    description: 'A timeless tennis-inspired sneaker built for daily comfort with a clean and minimal aesthetic.',
    reason: ' • Classic court-inspired design • Cushioned midsole for added comfort • Durable outsole suitable for everyday use',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/61ApsXY65cL._SY695_.jpg',
    amazonUrl: 'https://amzn.to/4aqBukJ',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'adidas Womens Grand Court 2.0 Tennis Shoe',
    description: 'A sleek and stylish tennis-inspired sneaker designed for comfort and versatile everyday wear.',
    reason: ' • Soft cushioning provides enhanced comfort • Durable outsole for everyday traction • Clean, minimalist design suitable for multiple outfits',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/31Z3RlD03mL._SY695_.jpg',
    amazonUrl: 'https://amzn.to/4aqW3xH',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Nike Revolution Running Shoes',
    description: 'Comfortable, versatile running shoes suitable for daily wear and light exercise.',
    reason: 'Good cushioning and support for everyday activities. Durable construction and widely available in India.',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/71Dnm6wpn+L._SX679_.jpg',
    amazonUrl: 'https://amzn.to/4a9WMTz',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Adidas Ultraboost Sneakers',
    description: 'Premium comfort sneakers with responsive cushioning technology.',
    reason: 'Exceptional comfort for all-day wear. Stylish enough for casual outings while providing excellent foot support.',
    category: 'Footwear',
    image: 'https://m.media-amazon.com/images/I/41DO-+a4oiL._SY695_.jpg',
    amazonUrl: 'https://amzn.to/3ZOYC7C',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Bata Comfit Men Slip-on Sneaker',
    description: 'Affordable, comfortable everyday shoes for work and casual occasions.',
    reason: 'Reliable Indian brand with good value for money. Comfortable for long hours of wear.',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1616663308968-58162d332720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBsZWF0aGVyJTIwc2hvZXMlMjBicm93bnxlbnwxfHx8fDE3Njk5ODEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amazonUrl: 'https://amzn.to/4bzzyZw',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Wildcraft Nylon 44 Ltrs Casual Backpack',
    description: 'Durable, ergonomic backpack for daily commute and travel.',
    reason: 'Well-designed with good organization pockets. Comfortable for daily use and built to last.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1760909148912-1f3f45ab3f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY5OTgxMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amazonUrl: 'https://amzn.to/3Mc9TM5',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Casio Vintage A-158WA-1Q Digital Grey Dial Unisex Watch Silver Metal Strap (D011)',
    description: 'A timeless digital watch featuring a grey dial and stainless steel strap, designed with a classic retro aesthetic suitable for everyday wear.',
    reason: ' • Iconic vintage design with digital display • Lightweight stainless steel strap for comfortable daily wear • Includes essential features like alarm, stopwatch, and backlight',
    category: 'Watches',
    image: 'https://m.media-amazon.com/images/I/61ybeKQto8L._SY879_.jpg',
    amazonUrl: 'https://amzn.to/4aqCS6T',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Casio Unisex Vintage A168WA-1WDF Black Digital Dial Silver Stainless Steel Band (D131)',
    description: 'A retro-inspired digital watch with a black dial and silver stainless steel band, combining functionality with classic style.',
    reason: ' • Electroluminescent backlight for easy readability • Durable stainless steel band with adjustable clasp • Built-in alarm, stopwatch, and calendar functions',
    category: 'Watches',
    image: 'https://m.media-amazon.com/images/I/511gHFVWqpL._SX679_.jpg',
    amazonUrl: 'https://amzn.to/4aLeDSg',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'Casio G-Shock DW-5600UE-1DR Digital Dial Black Resin Strap Men\'s Watch Shock Resistant (G1514)',
    description: 'A rugged and durable digital watch designed for tough environments, featuring a shock-resistant build and bold sporty look.',
    reason: ' • Shock-resistant construction for enhanced durability • Water resistant design suitable for daily and outdoor use • Reliable digital display with multiple timekeeping functions',
    category: 'Watches',
    image: 'https://m.media-amazon.com/images/I/61VHmmU8SAL._SL1100_.jpg',
    amazonUrl: 'https://amzn.to/4kzTLAX',
    categoryGroup: 'style-fashion'
  },
  {
    name: 'TIMEX Classics Analog Watch for Men with Round Dial & Water Resistant Man\'s Wrist Watches',
    description: 'A classic analog wristwatch featuring a round dial and water-resistant build, crafted for timeless everyday elegance.',
    reason: ' • Clean analog display for a sophisticated look • Water-resistant construction for daily reliability • Comfortable strap designed for long wear',
    category: 'Watches',
    image: 'https://m.media-amazon.com/images/I/71Kx6rgmlRS._SX679_.jpg',
    amazonUrl: 'https://amzn.to/4aPE0BB',
    categoryGroup: 'style-fashion'
  },
  // Books & Personal Growth
  {
    name: 'Atomic Habits by James Clear',
    description: 'Practical guide to building good habits and breaking bad ones through small changes.',
    reason: 'One of the most practical books on habit formation. Clear, actionable advice backed by research.',
    category: 'Personal Growth',
    image: 'https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG9taWMlMjBoYWJpdHMlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY5OTgxMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amazonUrl: 'https://amzn.to/4c2RsnG',
    categoryGroup: 'books-growth'
  },
  {
    name: 'The Psychology of Money by Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness through the lens of psychology.',
    reason: 'Excellent for understanding financial behavior and decision-making. Relevant for all income levels.',
    category: 'Personal Finance',
    image: 'https://m.media-amazon.com/images/I/71XEsXS5RlL._SL1500_.jpg',
    amazonUrl: 'https://amzn.to/4aahUt7',
    categoryGroup: 'books-growth'
  },
  {
    name: 'Deep Work by Cal Newport',
    description: 'Rules for focused success in a distracted world.',
    reason: 'Essential read for improving productivity and concentration. Particularly relevant in our digital age.',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1711185895262-f14ad4d4eeac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amazonUrl: 'https://amzn.to/3M40shS',
    categoryGroup: 'books-growth'
  },
  {
    name: 'The 5 AM Club by Robin Sharma',
    description: 'Guide to owning your morning and elevating your life through early rising routines.',
    reason: 'Practical framework for morning routines. Helpful for those looking to optimize their daily schedule.',
    category: 'Personal Growth',
    image: 'https://images.unsplash.com/photo-1613926161474-fcc7a939e051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGdyb3d0aCUyMGJvb2tzJTIwc3RhY2t8ZW58MXx8fHwxNzY5OTgxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amazonUrl: 'https://amzn.to/4rt2irs',
    categoryGroup: 'books-growth'
  }
];

export function RecommendationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'skincare-grooming': false,
    'wellness-supplements': false,
    'style-fashion': false,
    'books-growth': false
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on search
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return ALL_PRODUCTS;
    
    const query = searchQuery.toLowerCase();
    return ALL_PRODUCTS.filter((product) => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group products by category
  const productsByCategory = useMemo(() => {
    const groups: Record<string, Product[]> = {
      'skincare-grooming': [],
      'wellness-supplements': [],
      'style-fashion': [],
      'books-growth': []
    };

    filteredProducts.forEach((product) => {
      groups[product.categoryGroup].push(product);
    });

    return groups;
  }, [filteredProducts]);

  const categoryTitles: Record<string, string> = {
    'skincare-grooming': 'Skincare & Grooming',
    'wellness-supplements': 'Wellness & Supplements',
    'style-fashion': 'Style & Fashion',
    'books-growth': 'Books & Personal Growth'
  };

  const categoryDescriptions: Record<string, string> = {
    'skincare-grooming': 'Quality skincare and grooming products that work. We focus on gentle, effective formulations from trusted brands.',
    'wellness-supplements': 'Supplements and wellness products to support your health goals. Always consult with healthcare professionals before use.',
    'style-fashion': 'Comfortable, practical everyday essentials. We focus on quality footwear and accessories that offer good value.',
    'books-growth': 'Personal growth books that offer practical insights and actionable advice for real-world applicability.'
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const ITEMS_PER_ROW = 4;
  const INITIAL_ROWS = 2;
  const INITIAL_ITEMS = ITEMS_PER_ROW * INITIAL_ROWS;

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Search */}
      <section className="bg-[#F5F1E8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl tracking-tight text-[#2D3748] mb-4">
              Our Recommendations
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Carefully curated products to help you build better daily routines.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search products by name, category, or description..."
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border-2 border-[#E5E1D8] focus:border-[#9CAF88] focus:outline-none text-[#2D3748] placeholder-[#9CA3AF] transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Count */}
      {searchQuery && (
        <div className="bg-white border-b border-[#E5E1D8] py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[#6B7280]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
            </p>
          </div>
        </div>
      )}

      {/* Products by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(productsByCategory).map(([categoryId, products], catIndex) => {
          if (products.length === 0) return null;
          
          const isExpanded = expandedCategories[categoryId];
          const displayProducts = isExpanded ? products : products.slice(0, INITIAL_ITEMS);
          const hasMore = products.length > INITIAL_ITEMS;

          return (
            <motion.section
              key={categoryId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl tracking-tight text-[#2D3748] mb-2">
                  {categoryTitles[categoryId]}
                </h2>
                <p className="text-[#6B7280]">
                  {categoryDescriptions[categoryId]}
                </p>
              </div>

              {/* Product Grid - 4 columns desktop, 2 columns mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                {displayProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-[#E5E1D8] rounded-lg overflow-hidden hover:border-[#9CAF88] hover:shadow-lg transition-all"
                  >
                    {/* Product Image */}
                    <div className="relative h-40 md:h-48 bg-white overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 md:p-4"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-3 md:p-4 bg-[#F5F1E8]">
                      {/* Category Badge - Hidden on mobile */}
                      <span className="hidden md:inline-block text-xs text-[#9CAF88] bg-white px-2 py-1 rounded mb-2">
                        {product.category}
                      </span>

                      {/* Product Name */}
                      <h3 className="text-xs md:text-sm text-[#2D3748] mb-2 line-clamp-2 min-h-[32px] md:min-h-[40px]">
                        {product.name}
                      </h3>

                      {/* Product Description - Hidden on mobile */}
                      <p className="hidden md:block text-xs text-[#6B7280] line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* See more link - Desktop only */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="hidden md:inline-block text-xs text-[#9CAF88] hover:text-[#8A9E78] hover:underline transition-colors mb-3"
                      >
                        See more
                      </button>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2">
                        {/* View Details Button - Mobile Only */}
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="md:hidden w-full px-3 py-2 text-xs bg-[#F5F1E8] text-[#2D3748] rounded hover:bg-[#E5E1D8] transition-colors"
                        >
                          View Details
                        </button>

                        {/* View on Amazon Link */}
                        <a
                          href={product.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center md:justify-start gap-1 text-xs text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
                        >
                          <span>View on Amazon</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* See More Button */}
              {hasMore && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <button
                    onClick={() => toggleCategory(categoryId)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#9CAF88] text-white rounded-lg hover:bg-[#8A9E78] transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'See More'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </motion.div>
              )}
            </motion.section>
          );
        })}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-[#6B7280] mb-2">No products found</p>
            <p className="text-sm text-[#9CA3AF]">Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <section className="py-12 bg-[#FAF9F7] border-t border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-xl text-[#2D3748] mb-4">Important Note</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
              These recommendations are based on research and user reviews, but individual results may vary.
              For supplements and wellness products, always consult healthcare professionals before use,
              especially if you have existing health conditions or take medications.
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Product links are affiliate links—we may earn a small commission if you make a purchase,
              at no extra cost to you. This helps us maintain the site and continue providing helpful content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details Modal - Mobile Only */}
      {selectedProduct && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full max-h-[85vh] rounded-t-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-[#E5E1D8] p-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-medium text-[#2D3748]">Product Details</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-[#F5F1E8] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#6B7280]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-72px)] p-4">
              {/* Product Image */}
              <div className="relative h-64 bg-[#F5F1E8] rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              {/* Category Badge */}
              <span className="inline-block text-xs text-[#9CAF88] bg-[#F5F1E8] px-3 py-1 rounded mb-3">
                {selectedProduct.category}
              </span>

              {/* Product Name */}
              <h4 className="text-base font-medium text-[#2D3748] mb-3">
                {selectedProduct.name}
              </h4>

              {/* Product Description */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-[#2D3748] mb-2">Description</h5>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Why We Recommend */}
              <div className="mb-6">
                <h5 className="text-sm font-medium text-[#2D3748] mb-2">Why We Recommend</h5>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {selectedProduct.reason}
                </p>
              </div>

              {/* View on Amazon Button */}
              <a
                href={selectedProduct.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#9CAF88] text-white rounded-lg hover:bg-[#8A9E78] transition-colors"
              >
                <span>View on Amazon</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Product Details Modal - Desktop */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden md:flex fixed inset-0 bg-black/50 z-50 items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-[#E5E1D8] p-4 flex items-start justify-between z-10">
                <div className="flex-1 pr-4">
                  <span className="inline-block text-xs text-[#9CAF88] bg-[#F5F1E8] px-2 py-1 rounded mb-2">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-lg md:text-xl text-[#2D3748]">
                    {selectedProduct.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-shrink-0 p-2 hover:bg-[#F5F1E8] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#6B7280]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Product Image */}
                {selectedProduct.image && (
                  <div className="mb-6 bg-[#F5F1E8] rounded-lg overflow-hidden">
                    <div className="relative w-full h-64">
                      <ImageWithFallback
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                )}

                {/* Combined Description + Reason */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-[#2D3748] mb-3">About This Product</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
                    {selectedProduct.description}
                  </p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {selectedProduct.reason}
                  </p>
                </div>

                {/* Amazon Link */}
                <a 
                  href={selectedProduct.amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#9CAF88] hover:bg-[#8A9E78] py-3 rounded-lg transition-colors"
                >
                  <span>View on Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
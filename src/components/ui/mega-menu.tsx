import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Package, Dumbbell, Heart, Zap, Brain, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Organize supplements by category
const categories = [
  {
    id: 'proteins',
    name: 'Proteins',
    icon: <Package className="w-5 h-5" />,
    description: 'Premium protein supplements for muscle growth and recovery',
    subcategories: [
      { name: 'Whey Protein', href: '/category/whey-protein' },
      { name: 'Mass Gainers', href: '/category/mass-gainers' },
      { name: 'Casein', href: '/category/casein' },
      { name: 'Plant Protein', href: '/category/plant-protein' }
    ]
  },
  {
    id: 'pre-workout',
    name: 'Pre-Workout',
    icon: <Zap className="w-5 h-5" />,
    description: 'Energy and focus enhancers for maximum performance',
    subcategories: [
      { name: 'Pre-Workout', href: '/category/pre-workout' },
      { name: 'Energy Boosters', href: '/category/energy-boosters' },
      { name: 'Focus Enhancers', href: '/category/focus-enhancers' },
      { name: 'Pump Products', href: '/category/pump-products' }
    ]
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Health',
    icon: <Heart className="w-5 h-5" />,
    description: 'Essential vitamins and supplements for overall wellness',
    subcategories: [
      { name: 'Multivitamins', href: '/category/multivitamins' },
      { name: 'Minerals', href: '/category/minerals' },
      { name: 'Fish Oil', href: '/category/fish-oil' },
      { name: 'Joint Support', href: '/category/joint-support' }
    ]
  }
];

const supplements = [
  {
    name: "Premium Whey Protein",
    description: "High-quality protein blend with essential amino acids",
    price: "$49.99",
    image: "https://i.imgur.com/Ru6yYWd.png",
    category: "proteins"
  },
  {
    name: "Mass Gainer Elite",
    description: "Premium mass gainer with complex carbs",
    price: "$54.99",
    image: "https://i.imgur.com/HwqYOlr.png",
    category: "proteins"
  },
  {
    name: "Pre-Workout Plus",
    description: "Advanced formula for maximum performance",
    price: "$39.99",
    image: "https://i.imgur.com/2P3e7hK.png",
    category: "pre-workout"
  },
  {
    name: "BCAA Energy",
    description: "Branched-chain amino acids for muscle recovery",
    price: "$34.99",
    image: "https://i.imgur.com/fjKLOOz.png",
    category: "pre-workout"
  },
  {
    name: "Omega-3 Ultra",
    description: "Pure fish oil for heart and brain health",
    price: "$29.99",
    image: "https://i.imgur.com/ow28j6V.png",
    category: "vitamins"
  },
  {
    name: "Vitamin D3+K2",
    description: "Essential vitamins for bone health",
    price: "$24.99",
    image: "https://i.imgur.com/QizzLxN.png",
    category: "vitamins"
  }
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const getFeaturedProducts = (categoryId: string) => {
    return supplements.filter(product => product.category === categoryId).slice(0, 2);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-2 bg-accent-green text-white rounded-full hover:bg-accent-green/90 transition-colors"
        aria-expanded={isOpen}
        aria-controls="mega-menu"
      >
        Shop Now
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mega Menu */}
            <motion.div
              id="mega-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-screen max-w-6xl bg-[#0A0D16] border border-border rounded-lg shadow-xl z-50"
              role="menu"
            >
              <div className="flex divide-x divide-border">
                {/* Categories */}
                <div className="w-64 p-4 space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        activeCategory.id === category.id
                          ? 'bg-accent-green/10 text-accent-green'
                          : 'hover:bg-white/5'
                      }`}
                      role="menuitem"
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Featured Products */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Featured Products</h3>
                      <div className="space-y-4">
                        {getFeaturedProducts(activeCategory.id).map((product) => (
                          <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                            onClick={() => {
                              navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`);
                              setIsOpen(false);
                            }}
                          >
                            <div className="w-20 h-20 bg-[#1a1f36] rounded-lg p-2 group-hover:scale-105 transition-transform">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-accent-green transition-colors">
                                {product.name}
                              </h4>
                              <p className="text-sm text-text-secondary mb-1">
                                {product.description}
                              </p>
                              <span className="text-accent-green font-medium">
                                {product.price}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {activeCategory.subcategories.map((subcategory) => (
                          <motion.button
                            key={subcategory.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-3 text-left rounded-lg hover:bg-white/5 transition-colors text-text-secondary hover:text-white"
                            onClick={() => {
                              navigate(subcategory.href);
                              setIsOpen(false);
                            }}
                          >
                            {subcategory.name}
                          </motion.button>
                        ))}
                      </div>

                      <div className="mt-8 p-4 bg-accent-green/10 rounded-lg border border-accent-green/20">
                        <h4 className="font-medium text-accent-green mb-2">
                          {activeCategory.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {activeCategory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-[#1a1f36] rounded-b-lg border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => {
                        navigate('/products');
                        setIsOpen(false);
                      }}
                      className="text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      View All Products
                    </button>
                    <button 
                      onClick={() => {
                        navigate('/offers');
                        setIsOpen(false);
                      }}
                      className="text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      Special Offers
                    </button>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-accent-green hover:text-accent-green/80 transition-colors"
                  >
                    Close Menu
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
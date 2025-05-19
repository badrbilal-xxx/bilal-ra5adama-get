import { motion } from 'framer-motion';
import { Search, Filter, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 'nova-automatic',
    name: 'Nova Automatic',
    category: 'Automatic',
    price: '$48,900',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stellar-gmt',
    name: 'Stellar GMT',
    category: 'GMT',
    price: '$52,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gmt-master-ii',
    name: 'GMT-Master II',
    category: 'GMT',
    price: '$180',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All', 'Automatic', 'GMT', 'Chronograph', 'Dress'];

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Collection</h1>
          <p className="text-text-secondary">
            Discover our curated selection of luxury timepieces, each crafted with precision and excellence.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search watches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1a1f36] border border-border rounded-lg focus:outline-none focus:border-accent-green"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 overflow-x-auto pb-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-accent-green text-white border-accent-green'
                    : 'border-border text-text-secondary hover:border-accent-green/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1f36] rounded-lg overflow-hidden border border-border hover:border-accent-green/30 transition-colors cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-accent-green">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent-yellow fill-current" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-accent-purple">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
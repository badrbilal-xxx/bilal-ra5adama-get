import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Shield, Clock, Package, Award, Check, Info } from 'lucide-react';
import { useState } from 'react';
import { CheckoutForm } from '@/components/ui/checkout-form';
import type { CheckoutFormData } from '@/lib/checkout';

const supplements = {
  'premium-whey-protein': {
    id: 'premium-whey-protein',
    name: 'Premium Whey Protein',
    price: '$49.99',
    rating: 4.9,
    reviews: 128,
    description: 'Our Premium Whey Protein is crafted from the highest quality whey protein isolate, providing 24g of protein per serving with minimal fat and zero added sugars. Perfect for muscle recovery and growth.',
    benefits: [
      'Supports muscle growth and recovery',
      'Enhanced with BCAAs and glutamine',
      'Easy to digest formula',
      'Mixes instantly without clumps'
    ],
    image: "https://i.imgur.com/Ru6yYWd.png"
  },
  'mass-gainer-elite': {
    id: 'mass-gainer-elite',
    name: 'Mass Gainer Elite',
    price: '$54.99',
    rating: 4.8,
    reviews: 96,
    description: 'Mass Gainer Elite is a premium weight gain formula designed for athletes and bodybuilders looking to build serious mass. Each serving delivers 1,250 calories, 50g of protein, and 250g of complex carbohydrates to support muscle growth and recovery.',
    benefits: [
      'High-calorie formula for rapid mass gain',
      'Complex carbs for sustained energy',
      'Added digestive enzymes for better absorption',
      'Rich in vitamins and minerals'
    ],
    image: "https://i.imgur.com/HwqYOlr.png"
  }
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const supplement = supplements[id || ''];
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckoutSuccess = (orderData: CheckoutFormData) => {
    console.log('Order processed:', orderData);
    // Here you would typically send the order to your backend
  };

  if (!supplement) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-accent-green hover:text-accent-green/80 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </motion.button>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a1f36] rounded-lg p-8 flex items-center justify-center"
          >
            <img
              src={supplement.image}
              alt={supplement.name}
              className="max-w-full max-h-[400px] object-contain"
            />
          </motion.div>

          {/* Product Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-yellow fill-current" />
                  <span className="font-medium">{supplement.rating}</span>
                </div>
                <span className="text-text-secondary">({supplement.reviews} reviews)</span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{supplement.name}</h1>
              <p className="text-3xl font-bold text-accent-green mb-6">{supplement.price}</p>
              <p className="text-text-secondary leading-relaxed mb-6">{supplement.description}</p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <h3 className="font-medium">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {supplement.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent-green" />
                      <span className="text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-accent-green hover:bg-accent-green/90 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCheckout(true)}
                  className="bg-accent-green/10 hover:bg-accent-green/20 text-accent-green py-3 px-6 rounded-lg transition-colors"
                >
                  Buy Now
                </motion.button>
              </div>

              {showCheckout && (
                <CheckoutForm
                  product={{
                    id: supplement.id,
                    name: supplement.name,
                    price: supplement.price,
                    image: supplement.image
                  }}
                  onClose={() => setShowCheckout(false)}
                  onSuccess={handleCheckoutSuccess}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
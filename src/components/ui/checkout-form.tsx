import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Truck, Lock, DollarSign, Package, Shield, X } from 'lucide-react';
import { checkoutSchema, type CheckoutFormData } from '@/lib/checkout';

interface CheckoutFormProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    quantity?: number;
  };
  onClose: () => void;
  onSuccess?: (orderData: CheckoutFormData) => void;
}

export function CheckoutForm({ product, onClose, onSuccess }: CheckoutFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<CheckoutFormData>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    paymentMethod: 'card',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (stepNumber: number) => {
    const fieldsToValidate = stepNumber === 1 
      ? ['firstName', 'lastName', 'email', 'phone']
      : ['address', 'city', 'state', 'zip', 'country'];

    const stepSchema = checkoutSchema.pick(
      Object.fromEntries(fieldsToValidate.map(field => [field, true])) as any
    );

    try {
      stepSchema.parse(formData);
      return true;
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      error.errors.forEach((err: any) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = checkoutSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      onSuccess?.(validatedData);
      setStep(3);
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      error.errors.forEach((err: any) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-[#0A0D16] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-accent-green text-white' : 'bg-[#1a1f36] text-text-secondary'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-20 h-1 ${
                      step > s ? 'bg-accent-green' : 'bg-[#1a1f36]'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                              errors.firstName ? 'border-red-500' : 'border-border'
                            } rounded-lg focus:outline-none focus:border-accent-green`}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                              errors.lastName ? 'border-red-500' : 'border-border'
                            } rounded-lg focus:outline-none focus:border-accent-green`}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                            errors.email ? 'border-red-500' : 'border-border'
                          } rounded-lg focus:outline-none focus:border-accent-green`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                            errors.phone ? 'border-red-500' : 'border-border'
                          } rounded-lg focus:outline-none focus:border-accent-green`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (validateStep(1)) setStep(2);
                        }}
                        className="w-full bg-accent-green hover:bg-accent-green/90 text-white py-3 rounded-lg transition-colors"
                      >
                        Continue to Shipping
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium mb-2">Street Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                            errors.address ? 'border-red-500' : 'border-border'
                          } rounded-lg focus:outline-none focus:border-accent-green`}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Apartment, suite, etc. (optional)
                        </label>
                        <input
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-[#1a1f36] border border-border rounded-lg focus:outline-none focus:border-accent-green"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                              errors.city ? 'border-red-500' : 'border-border'
                            } rounded-lg focus:outline-none focus:border-accent-green`}
                          />
                          {errors.city && (
                            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                              errors.state ? 'border-red-500' : 'border-border'
                            } rounded-lg focus:outline-none focus:border-accent-green`}
                          />
                          {errors.state && (
                            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">ZIP Code</label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-[#1a1f36] border ${
                              errors.zip ? 'border-red-500' : 'border-border'
                            } rounded-lg focus:outline-none focus:border-accent-green`}
                          />
                          {errors.zip && (
                            <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Country</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#1a1f36] border border-border rounded-lg focus:outline-none focus:border-accent-green"
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="GB">United Kingdom</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Payment Method</label>
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 p-4 border border-border rounded-lg cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={formData.paymentMethod === 'card'}
                                onChange={handleChange}
                                className="text-accent-green"
                              />
                              <CreditCard className="w-5 h-5" />
                              <span>Credit Card</span>
                            </label>
                            <label className="flex items-center gap-2 p-4 border border-border rounded-lg cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={formData.paymentMethod === 'cod'}
                                onChange={handleChange}
                                className="text-accent-green"
                              />
                              <DollarSign className="w-5 h-5" />
                              <span>Cash on Delivery</span>
                            </label>
                          </div>
                        </div>

                        {formData.paymentMethod === 'card' && (
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Card Number</label>
                              <input
                                type="text"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 bg-[#1a1f36] border border-border rounded-lg focus:outline-none focus:border-accent-green"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium mb-2">Expiry Date</label>
                                <input
                                  type="text"
                                  name="cardExpiry"
                                  placeholder="MM/YY"
                                  className="w-full px-4 py-2 bg-[#1a1f36] border border-border rounded-lg focus:outline-none focus:border-accent-green"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">CVC</label>
                                <input
                                  type="text"
                                  name="cardCvc"
                                  placeholder="123"
                                  className="w-full px-4 py-2 bg-[#1a1f36] border border-border rounded-lg focus:outline-none focus:border-accent-green"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 border border-border hover:border-accent-green/30 text-white py-3 rounded-lg transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-accent-green hover:bg-accent-green/90 text-white py-3 rounded-lg transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? 'Processing...' : 'Complete Order'}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="w-8 h-8 text-accent-green" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Order Confirmed!</h3>
                      <p className="text-text-secondary mb-6">
                        Thank you for your purchase. We'll send you shipping confirmation soon.
                      </p>
                      <button
                        type="button"
                        onClick={onClose}
                        className="bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-lg transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-[#1a1f36] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-accent-green font-medium">{product.price}</p>
                  {product.quantity && (
                    <p className="text-text-secondary">Quantity: {product.quantity}</p>
                  )}
                </div>
              </div>

              <div className="py-6 space-y-4 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span>{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tax</span>
                  <span>Calculated at next step</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{product.price}</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Shield className="w-4 h-4" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Truck className="w-4 h-4" />
                  <span>Free shipping on all orders</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Lock className="w-4 h-4" />
                  <span>SSL encrypted payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
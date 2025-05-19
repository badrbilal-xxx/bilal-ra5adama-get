import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h1>
          <p className="text-text-secondary">
            Have questions about our timepieces? We're here to help you find the perfect watch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1f36] p-8 rounded-lg border border-border"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-primary border border-border rounded-lg focus:outline-none focus:border-accent-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-primary border border-border rounded-lg focus:outline-none focus:border-accent-green"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-primary border border-border rounded-lg focus:outline-none focus:border-accent-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-primary border border-border rounded-lg focus:outline-none focus:border-accent-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-primary border border-border rounded-lg focus:outline-none focus:border-accent-green"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent-green hover:bg-accent-green/90 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#1a1f36] p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-green/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email</p>
                    <p>contact@morcoaura.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-green/10 rounded-lg">
                    <Phone className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-green/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Address</p>
                    <p>123 Luxury Lane, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-[#1a1f36] p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#1a1f36] p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-accent-green/10 rounded-lg hover:bg-accent-green/20 transition-colors">
                  <Facebook className="w-6 h-6 text-accent-green" />
                </a>
                <a href="#" className="p-3 bg-accent-green/10 rounded-lg hover:bg-accent-green/20 transition-colors">
                  <Twitter className="w-6 h-6 text-accent-green" />
                </a>
                <a href="#" className="p-3 bg-accent-green/10 rounded-lg hover:bg-accent-green/20 transition-colors">
                  <Instagram className="w-6 h-6 text-accent-green" />
                </a>
                <a href="#" className="p-3 bg-accent-green/10 rounded-lg hover:bg-accent-green/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-accent-green" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
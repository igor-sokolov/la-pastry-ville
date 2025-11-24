import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[--color-burgundy] mb-4">Get in Touch</h2>
          <p className="text-[--color-charcoal] max-w-2xl mx-auto opacity-90">
            Have questions or want to place an order? Reach out via Instagram DM or contact us directly!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-[--color-burgundy] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[--color-burgundy] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[--color-charcoal] mb-1">Phone</h4>
                  <p className="text-[--color-charcoal] opacity-80">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[--color-burgundy] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[--color-charcoal] mb-1">Email</h4>
                  <p className="text-[--color-charcoal] opacity-80">hello@lapastryville.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[--color-burgundy] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[--color-charcoal] mb-1">Operating Hours</h4>
                  <p className="text-[--color-charcoal] opacity-80">
                    Monday - Saturday: 7:00 AM - 7:00 PM<br />
                    Sunday: 8:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[--color-burgundy] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[--color-charcoal] mb-1">Delivery Area</h4>
                  <p className="text-[--color-charcoal] opacity-80">
                    We deliver throughout the city.<br />
                    Dark kitchen location - Delivery & Pickup only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[--color-cream] p-8 rounded-lg">
            <h3 className="text-[--color-burgundy] mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[--color-charcoal] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-[--color-beige] focus:outline-none focus:ring-2 focus:ring-[--color-burgundy]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[--color-charcoal] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-[--color-beige] focus:outline-none focus:ring-2 focus:ring-[--color-burgundy]"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[--color-charcoal] mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[--color-beige] focus:outline-none focus:ring-2 focus:ring-[--color-burgundy] resize-none"
                  placeholder="Tell us about your order or inquiry..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[--color-burgundy] text-white py-3 rounded-full hover:bg-[--color-burgundy-dark] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
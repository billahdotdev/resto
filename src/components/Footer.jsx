import { Facebook, Instagram, Twitter, MessageCircle, Phone, MapPin } from "lucide-react"

const Footer = () => {
  // Phone number for contact
  const phoneNumber = "+8801712345678"

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Resto</h3>
            <p className="text-gray-400 mb-4">
              Experience the authentic flavors of Bangladesh with a modern twist at Dhaka's premier dining destination.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>+880 1712 345678</span>
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com/?q=Gulshan+Avenue,+Dhaka+1212,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span>Find Us</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#special-offers" className="text-gray-400 hover:text-white transition-colors">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>14:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>11:00 - 23:00</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Holiday Hours</h4>
              <p className="text-gray-400 text-sm">
                We are open during most holidays. Please call to confirm our holiday hours.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on special events, exclusive offers, and seasonal menus.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our restaurant.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Resto. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed with <span className="text-red-500">♥</span> in Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


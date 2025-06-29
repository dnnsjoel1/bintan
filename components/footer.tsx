import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-earth-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">The Residence Bintan</h3>
            <p className="mb-4 text-sand-light">Experience luxury beachfront living in a tropical paradise.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sand-light hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-sand-light hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-sand-light hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Villas & Suites", href: "#villas" },
                { name: "Dining", href: "#dining" },
                { name: "Wellness & Spa", href: "#wellness" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sand-light hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <span className="text-sand-light">Jalan Teluk Bakau, Lagoi, Bintan Resorts, Bintan, Indonesia</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <span className="text-sand-light">+62 770 692 818</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <span className="text-sand-light">reservations-bintan@theresidence.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sand-light mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-earth text-white border border-earth-light rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-black font-medium py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-earth-light mt-12 pt-6 text-center text-sand-light">
          <p>&copy; {new Date().getFullYear()} The Residence Bintan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

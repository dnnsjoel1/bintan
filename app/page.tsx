"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ChevronLeft,
  Utensils,
  Waves,
  Palmtree,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useMobile } from "@/hooks/use-mobile"

const heroImages = [
  {
    src: "/images/hero-1.png",
    alt: "Luxury pool area with lounge chairs at The Residence Bintan",
  },
  {
    src: "/images/hero-2.png",
    alt: "Modern villa with private pool at The Residence Bintan",
  },
  {
    src: "/images/hero-3.png",
    alt: "Pristine white sand beach at The Residence Bintan",
  },
]

const galleryImages = [
  {
    src: "/images/hero-1.png",
    alt: "Luxury pool area with lounge chairs",
    category: "Amenities",
  },
  {
    src: "/images/hero-2.png",
    alt: "Modern villa with private pool",
    category: "Villas",
  },
  {
    src: "/images/hero-3.png",
    alt: "Pristine white sand beach",
    category: "Beach",
  },
  {
    src: "/images/pool.png",
    alt: "Infinity pool with ocean view",
    category: "Amenities",
  },
]

const villaTypes = [
  {
    name: "Beachfront Villa",
    description: "Direct beach access with panoramic ocean views",
    price: "From $450 per night",
    image: "/images/hero-2.png",
  },
  {
    name: "Garden Pool Villa",
    description: "Secluded villa surrounded by lush tropical gardens",
    price: "From $350 per night",
    image: "/images/pool.png",
  },
  {
    name: "Ocean View Suite",
    description: "Spacious suite with stunning views of the sea",
    price: "From $280 per night",
    image: "/images/hero-1.png",
  },
]

const diningOptions = [
  {
    name: "The Dining Room",
    description: "All-day dining featuring international cuisine with local influences",
    icon: <Utensils className="h-8 w-8 text-gold-dark" />,
  },
  {
    name: "Beach Club",
    description: "Casual beachfront dining with fresh seafood and tropical cocktails",
    icon: <Waves className="h-8 w-8 text-ocean-dark" />,
  },
  {
    name: "Rica Rica",
    description: "Fine dining restaurant showcasing authentic Indonesian flavors",
    icon: <Palmtree className="h-8 w-8 text-earth-dark" />,
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")
  const isMobile = useMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }

  const openLightbox = (src: string) => {
    setLightboxImage(src)
    setShowLightbox(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setShowLightbox(false)
    document.body.style.overflow = "auto"
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="relative">
      <Navbar />

      {/* Booking CTA Button */}
      <Button
        className="booking-btn bg-gold hover:bg-gold-dark text-black font-semibold"
        size={isMobile ? "default" : "lg"}
      >
        Book Now
      </Button>

      {/* Hero Section with Image Slider */}
      <section className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentSlide].src || "/placeholder.svg"}
              alt={heroImages[currentSlide].alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Residence Bintan
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience luxury beachfront living in a tropical paradise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-gold hover:bg-gold-dark text-black font-semibold" size="lg">
              Discover More
            </Button>
          </motion.div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-gold" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-sand-light">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Welcome to Paradise</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-earth-dark leading-relaxed mb-8">
              Nestled on the eastern coast of Bintan Island, The Residence Bintan offers an idyllic escape where luxury
              meets natural beauty. Our resort combines traditional Indonesian architecture with contemporary design to
              create a sanctuary of elegance and comfort.
            </p>
            <p className="text-lg text-earth-dark leading-relaxed">
              With pristine beaches, crystal-clear waters, and lush tropical gardens, our resort provides the perfect
              setting for relaxation, adventure, and unforgettable memories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Location",
                description: "Just 1 hour by ferry from Singapore",
                icon: <MapPin className="h-10 w-10 text-gold" />,
              },
              {
                title: "Accommodations",
                description: "55 luxurious villas and suites",
                icon: <Palmtree className="h-10 w-10 text-gold" />,
              },
              {
                title: "Experience",
                description: "Personalized service and authentic local experiences",
                icon: <Waves className="h-10 w-10 text-gold" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-earth-dark">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Villas & Suites Section */}
      <section id="villas" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Villas & Suites</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-earth-dark max-w-3xl mx-auto">
              Discover our collection of luxurious accommodations, each designed to provide the ultimate comfort while
              embracing the natural beauty of Bintan Island.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {villaTypes.map((villa, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className="relative h-64">
                  <Image src={villa.image || "/placeholder.svg"} alt={villa.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{villa.name}</h3>
                  <p className="text-earth-dark mb-4">{villa.description}</p>
                  <p className="text-gold-dark font-semibold mb-4">{villa.price}</p>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-20 bg-earth-light/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Dining Experiences</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-earth-dark max-w-3xl mx-auto">
              Indulge in a culinary journey that celebrates local flavors and international cuisine, prepared with the
              freshest ingredients and served in stunning settings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={fadeInUpVariants}
              >
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-2">{option.name}</h3>
                <p className="text-earth-dark">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Spa Section */}
      <section id="wellness" className="py-20 bg-ocean-light/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Wellness & Spa</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-lg text-earth-dark leading-relaxed mb-6">
                Rejuvenate your body and mind at our spa sanctuary, where ancient healing traditions meet modern
                wellness techniques. Our skilled therapists offer a range of treatments designed to restore balance and
                promote well-being.
              </p>
              <p className="text-lg text-earth-dark leading-relaxed mb-8">
                From traditional Indonesian massages to holistic wellness programs, each experience is tailored to your
                individual needs, ensuring complete relaxation and renewal.
              </p>
              <Button className="bg-ocean hover:bg-ocean-dark text-white">Explore Treatments</Button>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <Image src="/images/pool.png" alt="Spa and wellness facilities" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Gallery</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-earth-dark max-w-3xl mx-auto">
              Explore the beauty and luxury of The Residence Bintan through our gallery of images.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={fadeInUpVariants}
                onClick={() => openLightbox(image.src)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="gallery-overlay">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-black/50 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sand-light">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Contact Us</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-earth-dark max-w-3xl mx-auto">
              We're here to assist you with any inquiries or to help you plan your perfect stay at The Residence Bintan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gold mr-3" />
                    <p>Jalan Teluk Bakau, Lagoi, Bintan Resorts, Bintan, Indonesia</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold mr-3" />
                    <p>+62 770 692 818</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold mr-3" />
                    <p>reservations-bintan@theresidence.com</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-serif font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-earth hover:text-gold transition-colors">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-earth hover:text-gold transition-colors">
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-earth hover:text-gold transition-colors">
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-black font-semibold">Send Message</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery image"
              width={1000}
              height={600}
              className="object-contain max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

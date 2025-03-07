import { ArrowRight, Phone, MessageCircle } from "lucide-react"

const Hero = () => {
  // Phone number for contact
  const phoneNumber = "+8801712345678"
  const whatsAppMessage = encodeURIComponent("Hello Resto, I would like to make a reservation.")

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
            Fine Dining in Dhaka
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Experience Authentic Bengali Cuisine
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Authentic flavors with a modern twist at Resto, where every meal tells a story of Bangladesh's rich culinary
            heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              View Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Reserve via WhatsApp
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white hover:bg-gray-100 text-emerald-600 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-white"
                loading="lazy"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-white"
                loading="lazy"
              />
              <img
                src="https://randomuser.me/api/portraits/women/24.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-white"
                loading="lazy"
              />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-white text-sm">500+ happy customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


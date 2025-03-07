import { Clock, Tag, ArrowRight } from "lucide-react"

const SpecialOffers = () => {
  const offers = [
    {
      title: "Weekend Brunch Special",
      description:
        "Enjoy our special weekend brunch menu featuring a fusion of traditional Bangladeshi breakfast items and international favorites. Perfect for a relaxing weekend with family and friends.",
      time: "Every Saturday & Sunday, 10:00 AM - 2:00 PM",
      discount: "20% off on selected items",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Book Brunch",
    },
    {
      title: "Business Lunch",
      description:
        "A quick and satisfying lunch menu designed for professionals. Includes a starter, main course, and dessert. Perfect for business meetings or a quick lunch break.",
      time: "Weekdays, 12:00 PM - 3:00 PM",
      discount: "15% off for corporate groups",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Reserve Lunch",
    },
    {
      title: "Family Dinner Package",
      description:
        "A special family feast with a selection of our signature dishes, perfect for sharing with your loved ones. Includes appetizers, main courses, sides, and desserts.",
      time: "Daily, 6:00 PM - 10:00 PM",
      discount: "Free dessert for groups of 4 or more",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      cta: "Book Family Dinner",
    },
    {
      title: "Seasonal Tasting Menu",
      description:
        "Experience the best of seasonal Bangladeshi ingredients with our chef's special tasting menu. A culinary journey through the diverse flavors of Bangladesh.",
      time: "Friday & Saturday, 7:00 PM - 10:00 PM",
      discount: "Complimentary wine pairing",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Reserve Tasting",
    },
  ]

  return (
    <section id="special-offers" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
            Limited Time Offers
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Dining Experiences</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our limited-time promotions and special dining experiences. Perfect for celebrations,
            business meetings, or simply treating yourself to something special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-2 rounded-bl-lg">
                  Limited Time
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                <div className="flex items-center text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{offer.time}</span>
                </div>

                <div className="flex items-center text-emerald-600 mb-4">
                  <Tag className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{offer.discount}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                >
                  {offer.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Private Events & Catering</h3>
            <p className="text-gray-600 mb-6">
              Planning a special event? Let us take care of the food! We offer catering services and private dining
              options for birthdays, anniversaries, corporate events, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Book Private Event
              </a>
              <a
                href="tel:+8801712345678"
                className="inline-block bg-white border border-emerald-600 hover:bg-emerald-50 text-emerald-600 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Call for Catering
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers


"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Farhan Ahmed",
      role: "Food Blogger",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Resto offers an exceptional dining experience with authentic Bangladeshi flavors. The Kacchi Biryani is simply outstanding, and the service is impeccable. Every visit feels like a culinary journey through the rich traditions of Bangladesh.",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "I've been coming to Resto for years, and they never disappoint. The ambiance is perfect for both casual dining and special occasions. Their attention to detail and commitment to authentic flavors make every meal memorable. Highly recommended!",
    },
    {
      id: 3,
      name: "Rafiq Islam",
      role: "Corporate Executive",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 4,
      text: "Resto is our go-to place for business lunches. The menu offers great variety, and the staff is always accommodating to our needs. The private dining area is perfect for discussions, and the Business Lunch menu is both delicious and efficient.",
    },
    {
      id: 4,
      name: "Samira Khan",
      role: "Food Critic",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      rating: 5,
      text: "A culinary gem in Dhaka that beautifully balances traditional recipes with modern presentation. Their attention to detail is evident in every dish. The chef's innovative approach to Bengali cuisine makes Resto stand out in the city's dining scene.",
    },
    {
      id: 5,
      name: "Kamal Hossain",
      role: "Chef",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      rating: 5,
      text: "As a chef myself, I appreciate the technical excellence and respect for ingredients at Resto. Their commitment to preserving authentic flavors while innovating is commendable. The Chingri Malai Curry is perhaps the best I've had in Dhaka.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their dining experience
            at Resto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute top-8 left-8 text-emerald-100">
              <Quote size={60} />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-emerald-100"
                />
              </div>

              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating ? "fill-current text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].text}"</p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  currentIndex === index ? "bg-emerald-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Star className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">15,000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">13+ Years</h3>
            <p className="text-gray-600">Of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


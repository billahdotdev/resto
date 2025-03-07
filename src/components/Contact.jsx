"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Check } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowConfirmation(true)

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: "",
      })
    }, 1500)
  }

  // Phone number for contact
  const phoneNumber = "+8801712345678"

  // Format date for WhatsApp message
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

  // Create WhatsApp message with reservation details
  const createWhatsAppMessage = () => {
    const message = `
Hello Resto,

I would like to make a reservation with the following details:

Name: ${formData.name}
Date: ${formatDate(formData.date)}
Time: ${formData.time}
Number of guests: ${formData.guests}
${formData.message ? `Special requests: ${formData.message}` : ""}

Please confirm my reservation.
Thank you!
    `.trim()

    return encodeURIComponent(message)
  }

  // Handle WhatsApp reservation
  const handleWhatsAppReservation = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${createWhatsAppMessage()}`, "_blank")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact & Reservations</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Make a reservation or get in touch with us. We look forward to serving you an unforgettable dining
            experience. For immediate assistance, call us directly or send a message via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {showConfirmation ? (
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reservation Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your reservation request. For faster confirmation, you can send your details directly
                  via WhatsApp. Our team will call you shortly to confirm your reservation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${createWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Send via WhatsApp
                  </a>
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    <Calendar className="h-5 w-5" />
                    Make Another Reservation
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Reserve a Table</h3>

                {submitMessage && (
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      submitMessage.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+880 1712 345678"
                      />
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7+">7+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Any special requests or dietary requirements?"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        "Processing..."
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          Reserve Now
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppReservation}
                      className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Reserve via WhatsApp
                    </button>
                  </div>
                </form>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Gulshan Avenue, Dhaka 1212, Bangladesh</p>
                    <a
                      href="https://maps.google.com/?q=Gulshan+Avenue,+Dhaka+1212,+Bangladesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+880 2 9876543</p>
                    <a
                      href="tel:+8801712345678"
                      className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-1 inline-block"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@resto-dhaka.com</p>
                    <a
                      href="mailto:info@resto-dhaka.com"
                      className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-1 inline-block"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday - Thursday: 11:00 AM - 11:00 PM
                      <br />
                      Friday: 2:00 PM - 11:00 PM
                      <br />
                      Saturday - Sunday: 11:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.41258591533382!3d23.79059192468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f7b9bf49%3A0x7a6b7dd72dcfaa2c!2sGulshan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1647881016556!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const phoneNumber = "+8801712345678"
const whatsAppMessage = encodeURIComponent("Hello Resto, I would like to make a reservation after viewing your menu.")

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("mains")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Beverages" },
  ]

  const menuItems = {
    starters: [
      {
        name: "Shorshe Ilish",
        description: "Hilsa fish marinated in mustard sauce, a Bengali delicacy",
        price: "৳450",
        image:
          "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        tags: ["spicy", "fish", "popular"],
      },
      {
        name: "Dhakai Fuchka",
        description: "Crispy hollow puri filled with spiced mashed potatoes and tamarind water",
        price: "৳220",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["street food", "vegetarian", "popular"],
      },
      {
        name: "Chicken Pakora",
        description: "Spiced chicken fritters served with mint chutney",
        price: "৳320",
        image:
          "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        tags: ["chicken", "fried", "appetizer"],
      },
      {
        name: "Vegetable Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: "৳180",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["vegetarian", "fried", "appetizer"],
      },
    ],
    mains: [
      {
        name: "Kacchi Biryani",
        description: "Fragrant rice cooked with tender meat, aromatic spices, and saffron",
        price: "৳550",
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["rice", "meat", "signature", "popular"],
      },
      {
        name: "Bhuna Khichuri",
        description: "Traditional rice and lentil preparation with seasonal vegetables",
        price: "৳380",
        image:
          "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
        tags: ["rice", "vegetarian", "comfort food"],
      },
      {
        name: "Beef Rezala",
        description: "Slow-cooked beef in a rich, creamy yogurt-based gravy",
        price: "৳480",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["beef", "creamy", "spicy"],
      },
      {
        name: "Chingri Malai Curry",
        description: "Prawns cooked in coconut milk with subtle spices",
        price: "৳650",
        image:
          "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        tags: ["seafood", "creamy", "signature"],
      },
      {
        name: "Shorshe Begun",
        description: "Eggplant cooked in a mustard sauce, a Bengali vegetarian delicacy",
        price: "৳320",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["vegetarian", "spicy", "traditional"],
      },
      {
        name: "Morog Polao",
        description: "Fragrant rice cooked with chicken and aromatic spices",
        price: "৳420",
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["rice", "chicken", "festive"],
      },
    ],
    desserts: [
      {
        name: "Mishti Doi",
        description: "Sweet yogurt dessert with caramelized flavor",
        price: "৳180",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        tags: ["yogurt", "sweet", "traditional"],
      },
      {
        name: "Patishapta",
        description: "Rice flour crepes filled with coconut and date palm jaggery",
        price: "৳220",
        image:
          "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80",
        tags: ["crepe", "sweet", "festive"],
      },
      {
        name: "Roshogolla",
        description: "Soft cheese dumplings soaked in sugar syrup",
        price: "৳150",
        image:
          "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["cheese", "sweet", "popular"],
      },
      {
        name: "Shondesh",
        description: "Traditional Bengali sweet made from milk and sugar",
        price: "৳200",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        tags: ["milk", "sweet", "traditional"],
      },
    ],
    drinks: [
      {
        name: "Borhani",
        description: "Spiced yogurt drink, a Dhaka specialty",
        price: "৳120",
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        tags: ["yogurt", "spiced", "traditional"],
      },
      {
        name: "Sugarcane Juice",
        description: "Fresh pressed sugarcane with a hint of lime and ginger",
        price: "৳150",
        image:
          "https://images.unsplash.com/photo-1596392301391-8a8641869d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["fresh", "sweet", "refreshing"],
      },
      {
        name: "Masala Chai",
        description: "Spiced tea with cardamom, cinnamon, and ginger",
        price: "৳100",
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        tags: ["tea", "spiced", "hot"],
      },
      {
        name: "Mango Lassi",
        description: "Creamy yogurt drink blended with fresh mango and cardamom",
        price: "৳180",
        image:
          "https://images.unsplash.com/photo-1605191737945-62eafde9759a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        tags: ["yogurt", "fruit", "refreshing"],
      },
    ],
  }

  // Filter menu items based on search term
  const filteredMenuItems = menuItems[activeCategory].filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
  )

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
            Our Culinary Offerings
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Menu</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring the finest ingredients and authentic flavors of Bangladesh.
            Each dish tells a story of our rich culinary heritage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {filteredMenuItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No menu items found. Try a different search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                  {item.tags && item.tags.includes("popular") && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold">
                      Popular
                    </div>
                  )}
                  {item.tags && item.tags.includes("signature") && (
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 text-xs font-bold">
                      Chef's Special
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-emerald-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Reserve via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu


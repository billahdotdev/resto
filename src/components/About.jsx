const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resto restaurant interior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-emerald-600 font-bold text-xl">13+</p>
                <p className="text-gray-600 text-sm">Years of Excellence</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-emerald-600 font-bold text-xl">50+</p>
                <p className="text-gray-600 text-sm">Authentic Dishes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-emerald-600 font-bold text-xl">20+</p>
                <p className="text-gray-600 text-sm">Expert Chefs</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
              About Resto
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Culinary Journey</h2>
            <div className="w-20 h-1 bg-emerald-600 mb-6"></div>

            <p className="text-gray-600 mb-6">
              Founded in 2010, Resto has been serving the people of Dhaka with authentic Bangladeshi cuisine reimagined
              through a contemporary lens. Our journey began with a simple mission: to create a dining experience that
              honors traditional flavors while embracing modern culinary techniques.
            </p>

            <p className="text-gray-600 mb-6">
              Located in the heart of Dhaka, our restaurant offers a warm and inviting atmosphere where friends and
              family can gather to enjoy exceptional food, impeccable service, and memorable moments. Each dish tells a
              story of Bangladesh's rich culinary heritage, carefully prepared by our team of experienced chefs who are
              passionate about preserving authentic flavors.
            </p>

            <p className="text-gray-600 mb-6">
              We source the freshest ingredients from local farmers and suppliers, ensuring that every meal not only
              tastes exceptional but also supports our community. Our commitment to quality and sustainability has made
              Resto a beloved destination for both locals and visitors seeking an authentic taste of Bangladesh.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To create exceptional dining experiences that celebrate Bangladeshi culinary heritage while innovating
                  for the future.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be recognized globally as an ambassador of Bangladeshi cuisine, showcasing its richness and
                  diversity to the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


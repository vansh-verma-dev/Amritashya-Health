import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Navbar/>
        <section className="bg-[#F8F6EF] py-16">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-4">
                <Phone className="text-green-700" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-4">
                <Mail className="text-green-700" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-gray-600">
                    support@amritashya.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-4">
                <MapPin className="text-green-700" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Address</h3>
                  <p className="text-gray-600">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-4">
                <Clock className="text-green-700" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Working Hours</h3>
                  <p className="text-gray-600">
                    Mon - Sat : 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="bg-white p-8 rounded-2xl shadow">

            <h2 className="text-3xl font-bold text-green-900 mb-6">
              Send Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
    <Footer/>
    </>
  
  );
};

export default Contact;
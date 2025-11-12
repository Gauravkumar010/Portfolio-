import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
         .then(() => {
      // 2️⃣ Send auto-reply to the user
      return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_ID, // auto-reply template ID
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    })
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully 🚀");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
 <section id="contact" className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Centered Contact Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">Contact</h2>
     
    </div>

    {/* Contact Container */}
    <div className="rounded-3xl flex flex-col md:flex-row items-start justify-between p-10 shadow-md bg-white">
      
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 mb-10 md:mb-0"
      >
        <div className="flex items-center mb-6">
          <FaEnvelope className="text-4xl text-pink-500 mr-3" />
          <h2 className="text-4xl font-bold text-gray-800">
            Let’s Work Together
          </h2>
        </div>
        <p className="text-gray-700 text-lg mr-5 text-left leading-relaxed">
          Have a project idea or collaboration in mind? Feel free to reach out,
          I will get back to you soon.
        </p>
      </motion.div>

      {/* Right Section - Form */}
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="md:w-1/2 space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message *"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:ring-2 focus:ring-pink-500 outline-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`mt-3 inline-block border-2 border-gray-800 font-semibold px-8 py-3 rounded-full shadow-sm hover:bg-gray-800 hover:text-white transition-all ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </motion.form>
    </div>
  </div>
</section>

  );
}

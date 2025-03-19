import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        import.meta.env.VITE_PUBLIC_KEY,
        e.target
      )
      .then((response) => {
        alert("Message sent!!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! something went wrong!! Please try again!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen justify-center flex items-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Name..."
              name="name"
              className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              placeholder="example@gmail.com"
              name="email"
              className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              required
              rows={5}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
              placeholder="Write to us..."
              name="message"
              className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 244, 0.4)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

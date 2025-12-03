import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Get In Touch</h1>
      <p className="section-subtitle mb-12">
        I'd love to hear from you. Feel free to reach out!
      </p>

      <div className="max-w-2xl mx-auto">
        {submitted && (
          <div className="mb-6 p-4 bg-accent text-primary-light rounded-lg font-semibold">
            Thanks for your message! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-primary-light text-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-primary-light text-primary"
              placeholder="Your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-primary-light text-primary resize-none"
              placeholder="Your message"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

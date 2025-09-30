import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#4F46E5]">Touch</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#4F46E5]">
              Let's Connect
            </h3>
            <p className="text-[#B0B0B0] mb-8 leading-relaxed">
              I'm currently available for freelance work and full-time
              opportunities. If you have a project that needs creative solutions
              or just want to discuss technology, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-[#1F1F1F] p-3 rounded-lg group-hover:bg-[#4F46E5]/20 group-hover:border group-hover:border-[#4F46E5]/30 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-[#4F46E5] group-hover:text-[#4F46E5] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Phone</p>
                  <p className="text-[#EAEAEA] text-lg font-medium">
                    +91 9924864810
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-[#1F1F1F] p-3 rounded-lg group-hover:bg-[#4F46E5]/20 group-hover:border group-hover:border-[#4F46E5]/30 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-[#4F46E5] group-hover:text-[#4F46E5] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Email</p>
                  <p className="text-[#EAEAEA] text-lg font-medium">
                    malaykothadiya555@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-[#1F1F1F] p-3 rounded-lg group-hover:bg-[#4F46E5]/20 group-hover:border group-hover:border-[#4F46E5]/30 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-[#4F46E5] group-hover:text-[#4F46E5] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Location</p>
                  <p className="text-[#EAEAEA] text-lg font-medium">
                    Opera Royal, Kamrej, Surat
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A]">
              <h4 className="text-[#4F46E5] font-semibold mb-3">
                Response Time
              </h4>
              <p className="text-[#B0B0B0] text-sm">
                I typically respond to all messages within 24 hours. For urgent
                inquiries, feel free to call or text me directly.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#B0B0B0] mb-2 text-sm font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-[#EAEAEA] focus:outline-none focus:ring-2 hover:border-[#4F46E5] focus:ring-[#4F46E5] focus:border-transparent transition-all duration-300 placeholder-[#666666]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#B0B0B0] mb-2 text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#4F46E5] rounded-lg px-4 py-3 text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all duration-300 placeholder-[#666666]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#B0B0B0] mb-2 text-sm font-medium"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#4F46E5] rounded-lg px-4 py-3 text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all duration-300 placeholder-[#666666]"
                  placeholder="What's this regarding?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#B0B0B0] mb-2 text-sm font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#4F46E5] rounded-lg px-4 py-3 text-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all duration-300 resize-none placeholder-[#666666]"
                  placeholder="Tell me about your project, questions, or how I can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full bg-[#4F46E5] hover:bg-[#4F46E5]/90 disabled:bg-[#2A2A2A] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-[#4F46E5]/25 disabled:shadow-none group"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {submitStatus === "success" && (
                <div className="bg-[#4F46E5]/20 border border-[#4F46E5]/30 text-[#4F46E5] px-4 py-3 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Thank you for your message! I'll get back to you within 24
                    hours.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

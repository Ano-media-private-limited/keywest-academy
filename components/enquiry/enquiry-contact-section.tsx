"use client"

import { useState } from "react"

export default function EnquiryContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    preferredTime: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess("🎉 Your enquiry has been sent successfully! We will contact you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        preferredTime: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact-form" className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20 lg:py-24">
      <div className="max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div className="w-full p-4 md:p-6 lg:p-8">
            <div className="w-full">
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
                  Start Your Journey Today
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans">
                  Fill out the form below and our admissions team will contact you within 24 hours to discuss your goals
                  and answer any questions.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <a
                  href="tel:9811020094"
                  className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-foreground/60 mb-1">Call Us</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground text-center break-words px-1">
                    9811020094<br className="sm:hidden" />, 9899116884
                  </p>
                </a>

                <a
                  href="mailto:info@keywestacademy.in"
                  className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all hover:scale-105 group sm:col-span-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-foreground/60 mb-1">Email Us</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground text-center break-all px-1 w-full">
                    info@keywestacademy.in
                  </p>
                </a>

                <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg border-2 border-primary/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-foreground/60 mb-1">Hours</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground text-center">Mon-Sat 10AM-7PM</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Course Interest */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground/80 mb-2">
                      Course Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a course</option>
                      <optgroup label="Our Courses">
                        <option value="star-2026">STAR 2026 Course</option>
                        <option value="level-1">Level 1 - Professional Makeup Course</option>
                        <option value="level-2">Level 2 - Masters in Makeup Artistry Course</option>
                        <option value="level-3">Level 3 - MasterPro Artistry Certification</option>
                        <option value="level-4">Level 4 - Global Elite Artistry Program</option>
                        <option value="level-5">Level 5 - Cosmetology Course</option>
                      </optgroup>
                      <optgroup label="Masterclass">
                        <option value="self-makeup">Self Makeup Course</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground/80 mb-2">
                    Preferred Contact Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (10am - 1pm)</option>
                    <option value="afternoon">Afternoon (2pm - 5pm)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your goals and any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2
    ${loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-2xl hover:scale-[1.02]"}`}
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                  {!loading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </button>

                {/* Status Messages */}
                {loading && (
                  <p className="text-blue-400 text-sm font-medium text-center mt-3">
                    Sending your enquiry... please wait ⏳
                  </p>
                )}

                {success && (
                  <p className="text-green-400 text-sm font-medium text-center mt-3">
                    {success}
                  </p>
                )}

                {error && (
                  <p className="text-red-400 text-sm font-medium text-center mt-3">
                    {error}
                  </p>
                )}


              </form>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] xl:h-[750px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1409102699618!2d77.2439945!3d28.565531099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30542a1faab%3A0x8b1484a15cec53e6!2sKeywest%20Academy!5e0!3m2!1sen!2sin!4v1763656281930!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Keywest Academy Location"
            />

            {/* Location Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border-2 border-primary/20">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl text-foreground mb-1 lg:mb-2">
                    Visit Our Campus
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-foreground/70 mb-0.5 lg:mb-1 break-words">
                    Building no. 63, 2nd floor
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-foreground/70 break-words">
                    Lajpat Nagar 3, New Delhi - 110057
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

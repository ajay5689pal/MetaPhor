import React from "react";

export default function WebAgencyHomepage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">
            Meta<span className="text-cyan-400">Phor</span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 pt-20 pb-28 gap-16">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 mb-6 backdrop-blur-md">
            🚀 Trusted by Growing Businesses Worldwide
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Stunning Websites
            <br />
            That <span className="text-cyan-400">Grow</span>
            <br /> Your Business.
          </h2>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">
            We design modern, fast, and premium websites for startups,
            brands, and small businesses that want to stand out online.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
          <a
  href="https://wa.me/916393043014?text=Hello!%20I%20am%20interested%20in%20getting%20a%20professional%20website%20for%20my%20business."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-lg shadow-cyan-500/30 inline-block"
>
  Book a Free Call
</a>

            <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 flex-wrap">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">150+</h3>
              <p className="text-gray-400 mt-1">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">98%</h3>
              <p className="text-gray-400 mt-1">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">5+ Yrs</h3>
              <p className="text-gray-400 mt-1">Industry Experience</p>
            </div>
          </div>
        </div>

        {/* Right Hero Visual */}
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-xl shadow-2xl">
            {/* Browser Top */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Fake Website UI */}
            <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-3xl p-6 md:p-8 h-[420px] md:h-[500px] flex flex-col justify-between relative overflow-hidden">
              {/* Floating Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan-300/10 rounded-full blur-3xl"></div>

              {/* Top Nav */}
              <div className="flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                <div>
                  <h3 className="font-bold text-lg">MetaPhor Dashboard</h3>
                  <p className="text-xs text-white/70">Modern Web Experience</p>
                </div>

                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    📊
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    ⚡
                  </div>
                </div>
              </div>

              {/* Main Hero Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition duration-300">
                  <div>
                    <div className="inline-flex px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-100 text-xs mb-4">
                      🚀 Premium Development
                    </div>

                    <h3 className="text-2xl font-bold leading-tight mb-4">
                      Beautiful Websites
                      <br />
                      That Convert.
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed">
                      Stunning animations, responsive layouts, and lightning-fast performance for modern brands.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold">
                      N
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Trusted by 150+ Clients</p>
                      <p className="text-xs text-white/60">Worldwide Business Solutions</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-black/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:-translate-y-1 transition duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold">Performance</h4>
                      <span className="text-cyan-300">98%</span>
                    </div>

                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-cyan-400 rounded-full"></div>
                    </div>

                    <p className="text-xs text-white/60 mt-3">
                      Optimized for speed and SEO ranking.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-2xl p-5 backdrop-blur-md border border-white/10 hover:scale-105 transition duration-300">
                      <div className="text-3xl mb-3">⚡</div>
                      <h4 className="font-bold text-sm">Fast Loading</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Ultra optimized
                      </p>
                    </div>

                    <div className="bg-black/20 rounded-2xl p-5 backdrop-blur-md border border-white/10 hover:scale-105 transition duration-300">
                      <div className="text-3xl mb-3">📱</div>
                      <h4 className="font-bold text-sm">Responsive</h4>
                      <p className="text-xs text-white/60 mt-1">
                        All devices ready
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:scale-[1.02] transition duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg">Client Growth</h4>
                        <p className="text-white/60 text-sm mt-1">
                          Increased online reach by 300%
                        </p>
                      </div>

                      <div className="text-4xl font-bold text-cyan-300">
                        +300%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-8 md:px-16 pb-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6 backdrop-blur-md">
            ✨ Premium Features & Services
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Everything Your Business
            <br />
            Needs To <span className="text-cyan-400">Grow Online</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            We create high-performance websites with modern technologies, premium UI/UX,
            SEO optimization, and conversion-focused strategies that help businesses attract
            more customers and dominate online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Premium UI/UX Design',
              desc: 'Modern, visually stunning interfaces designed to increase user engagement and conversions.',
              icon: '🎨',
              points: ['Modern Layouts', 'Interactive Elements', 'Luxury Design Feel'],
            },
            {
              title: 'Lightning Fast Speed',
              desc: 'Optimized websites with blazing fast performance and smooth loading experience.',
              icon: '⚡',
              points: ['Fast Loading', 'Optimized Assets', 'Performance Focused'],
            },
            {
              title: 'Mobile Responsive',
              desc: 'Perfectly responsive websites that look amazing across all devices and screens.',
              icon: '📱',
              points: ['Mobile Friendly', 'Tablet Optimized', 'Cross Browser Support'],
            },
            {
              title: 'SEO Optimization',
              desc: 'Search engine optimized structure to improve Google rankings and online visibility.',
              icon: '📈',
              points: ['Google Ranking', 'SEO Structure', 'Meta Optimization'],
            },
            {
              title: 'Business Automation',
              desc: 'Integrated forms, WhatsApp chats, lead systems, and automation for customer handling.',
              icon: '🤖',
              points: ['WhatsApp Integration', 'Lead Capture', 'Smart Automation'],
            },
            {
              title: '24/7 Support & Security',
              desc: 'Reliable technical support, maintenance, and advanced security protection.',
              icon: '🛡️',
              points: ['Technical Support', 'Website Security', 'Regular Updates'],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:-translate-y-3 transition duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/20 mb-6 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                  {item.desc}
                </p>

                <div className="space-y-3">
                  {item.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-cyan-300 text-sm font-semibold">
                    Included In Every Project
                  </span>

                  <div className="text-xl group-hover:translate-x-1 transition duration-300">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Showcase */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
            <h3 className="text-5xl font-extrabold text-cyan-300 mb-3">150+</h3>
            <p className="text-xl font-semibold mb-3">Successful Projects</p>
            <p className="text-gray-400 leading-relaxed">
              Delivered premium websites for startups, brands, agencies, and local businesses worldwide.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
            <h3 className="text-5xl font-extrabold text-purple-300 mb-3">98%</h3>
            <p className="text-xl font-semibold mb-3">Client Satisfaction</p>
            <p className="text-gray-400 leading-relaxed">
              Our clients love the quality, responsiveness, and premium experience we provide.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
            <h3 className="text-5xl font-extrabold text-emerald-300 mb-3">24/7</h3>
            <p className="text-xl font-semibold mb-3">Dedicated Support</p>
            <p className="text-gray-400 leading-relaxed">
              Continuous support, maintenance, updates, and assistance whenever your business needs it.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-8 md:px-16 pb-28">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Ankur Yadav',
              role: 'Restaurant Owner',
              review:
                'Their team transformed our online presence completely. We started getting customer inquiries within days.',
            },
            {
              name: 'Ayush Verma',
              role: 'Fashion & Beautic',
              review:
                'Extremely professional work. The website feels premium and our conversions increased significantly.',
            },
            {
              name: 'Rohan Sharmna',
              role: 'Photo Studio',
              review:
                'Fast delivery, modern animations, and excellent support. Highly recommended for businesses.',
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:-translate-y-2 transition"
            >
              <div className="flex gap-1 mb-5 text-cyan-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>⭐</span>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                &ldquo;{review.review}&rdquo;
              </p>

              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 md:px-16 pb-28">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-10 md:p-16 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready To Build
            <br />
            Your Dream Website?
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Let’s create a stunning online presence for your business that attracts more customers and boosts growth.
          </p>

          <a
            href="https://wa.me/916393043014?text=Hello%20MetaPhor!%20I%20am%20interested%20in%20getting%20a%20professional%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-lg shadow-cyan-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current">
              <path d="M19.11 17.2c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.73.92-.89 1.11-.17.19-.33.22-.62.08-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.43-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.1 2.44.9 1.45 2.57 3.57 6.21 5 .87.38 1.55.61 2.08.78.87.28 1.66.24 2.28.15.7-.1 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
              <path d="M16.03 3C8.85 3 3 8.73 3 15.8c0 2.27.6 4.48 1.74 6.42L3 29l6.99-1.82a13.1 13.1 0 0 0 6.04 1.47h.01c7.18 0 13.03-5.73 13.03-12.8C29.06 8.73 23.21 3 16.03 3zm0 23.5c-1.94 0-3.84-.51-5.5-1.47l-.39-.23-4.15 1.08 1.11-4.02-.25-.41a10.58 10.58 0 0 1-1.63-5.64c0-5.84 4.84-10.59 10.8-10.59 5.95 0 10.79 4.75 10.79 10.59 0 5.84-4.84 10.59-10.78 10.59z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-8 md:px-16 py-14 backdrop-blur-md bg-white/5">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Meta<span className="text-cyan-400">Phor</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              We help startups and small businesses build stunning, modern, and conversion-focused websites.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#" className="hover:text-white transition">Services</a>
              <a href="#" className="hover:text-white transition">Projects</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Contact Us</h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <a
                href="mailto:ajay5688pal@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <span>📧</span>
                Ajay5688pal@gmail.com
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
            rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <span>🔗</span>
                LinkedIn Profile
              </a>

              <a
                href="https://wa.me/916393043014?text=Hello%20MetaPhor!%20I%20am%20interested%20in%20getting%20a%20professional%20website%20for%20my%20business."
                target="_blank"
            rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M19.11 17.2c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.73.92-.89 1.11-.17.19-.33.22-.62.08-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.43-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.1 2.44.9 1.45 2.57 3.57 6.21 5 .87.38 1.55.61 2.08.78.87.28 1.66.24 2.28.15.7-.1 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
                  <path d="M16.03 3C8.85 3 3 8.73 3 15.8c0 2.27.6 4.48 1.74 6.42L3 29l6.99-1.82a13.1 13.1 0 0 0 6.04 1.47h.01c7.18 0 13.03-5.73 13.03-12.8C29.06 8.73 23.21 3 16.03 3zm0 23.5c-1.94 0-3.84-.51-5.5-1.47l-.39-.23-4.15 1.08 1.11-4.02-.25-.41a10.58 10.58 0 0 1-1.63-5.64c0-5.84 4.84-10.59 10.8-10.59 5.95 0 10.79 4.75 10.79 10.59 0 5.84-4.84 10.59-10.78 10.59z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2024 MetaPhor Agency. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916393043014?text=Hello%20MetaPhor!%20I%20am%20interested%20in%20getting%20a%20professional%20website%20for%20my%20business."
        target="_blank"
            rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M19.11 17.2c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.73.92-.89 1.11-.17.19-.33.22-.62.08-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.43-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.1 2.44.9 1.45 2.57 3.57 6.21 5 .87.38 1.55.61 2.08.78.87.28 1.66.24 2.28.15.7-.1 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
          <path d="M16.03 3C8.85 3 3 8.73 3 15.8c0 2.27.6 4.48 1.74 6.42L3 29l6.99-1.82a13.1 13.1 0 0 0 6.04 1.47h.01c7.18 0 13.03-5.73 13.03-12.8C29.06 8.73 23.21 3 16.03 3zm0 23.5c-1.94 0-3.84-.51-5.5-1.47l-.39-.23-4.15 1.08 1.11-4.02-.25-.41a10.58 10.58 0 0 1-1.63-5.64c0-5.84 4.84-10.59 10.8-10.59 5.95 0 10.79 4.75 10.79 10.59 0 5.84-4.84 10.59-10.78 10.59z"/>
        </svg>
      </a>
    </div>
  );
}

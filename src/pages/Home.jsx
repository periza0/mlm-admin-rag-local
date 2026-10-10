import logo from "../assets/logo1.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#f8f9fc]" />

        {/* Rings */}
        <div className="absolute top-[5%] left-[10%] md:left-[20%] h-[220px] w-[220px] md:h-[420px] md:w-[420px] rounded-full border-[30px] md:border-[55px] border-blue-500/15 blur-[20px]" />

        <div className="absolute top-[25%] left-[15%] md:left-[30%] h-[280px] w-[280px] md:h-[520px] md:w-[520px] rounded-full border-[35px] md:border-[65px] border-blue-600/20 blur-[25px]" />

        <div className="absolute top-[5%] left-[45%] h-[120px] w-[120px] md:h-[220px] md:w-[220px] rounded-full border-[20px] md:border-[45px] border-blue-400/15 blur-[15px]" />

        <div className="absolute bottom-[5%] right-[0%] md:right-[5%] h-[180px] w-[180px] md:h-[350px] md:w-[350px] rounded-full border-[25px] md:border-[50px] border-blue-500/10 blur-[20px]" />

        <div className="absolute top-[10%] right-[-10%] md:right-[-5%] h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full border-[20px] md:border-[40px] border-blue-400/10 blur-[15px]" />

        <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full border-[20px] md:border-[40px] border-blue-400/20 blur-md" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <img
            src={logo}
            alt="MLM Sports Club"
            className="w-[150px] md:w-[200px] lg:w-[250px]"
          />

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-[#0b3046]">
            MLM Sports Club
          </h1>
        </div>
      </section>


      {/* Location Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-[#0b3046]">
            Find Us
          </h2>

          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.5122123026767!2d74.8875625!3d31.674562499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919638cb3f35e67%3A0x35afb4ae18f4f586!2sMLM%20Sports%20Club!5e0!3m2!1sen!2sin!4v1780656593739!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         className="rounded-3xl shadow-xl"
         title="MLM Sports Club Location"
         />
         {/* Rating Section */}
<div className="mt-10 text-center">
  <div className="flex justify-center items-center gap-2 text-3xl">
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
  </div>

  <h3 className="mt-3 text-2xl font-semibold text-[#0b3046]">
    Loved your experience?
  </h3>

  <p className="mt-2 text-slate-600">
    Share your feedback and help others discover MLM Sports Club.
  </p>

  <a
    href="https://www.google.com/maps/place/MLM+Sports+Club/@31.6744489,74.886806,17.72z/data=!4m8!3m7!1s0x3919638cb3f35e67:0x35afb4ae18f4f586!8m2!3d31.6745625!4d74.8875625!9m1!1b1!16s%2Fg%2F11srmc7650?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 px-8 py-3 rounded-full bg-[#0b3046] text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
  >
    Leave a Google Review
  </a>
</div>
        </div>
    </section>
    <footer className="py-8 text-center text-slate-500 bg-white"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
  </>
);
}

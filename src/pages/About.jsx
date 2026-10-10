export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 md:px-6 pt-40 pb-16 md:py-24">
      {/* Background Circles */}
      <div className="absolute top-20 left-0 h-40 w-40 md:h-64 md:w-64 rounded-full bg-white/20 blur-3xl" />

      <div className="absolute bottom-20 right-0 h-48 w-48 md:h-72 md:w-72 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-6 md:p-14 shadow-xl">
          
          <h1 className="mb-6 md:mb-8 text-center text-3xl md:text-5xl font-bold text-[#0b3046]">
            About Us
          </h1>
          
          <p className="mb-8 text-base md:text-lg leading-relaxed text-[#18344a]">
            <span className="font-semibold">
              MLM (Mohan Lal Memorial) Sports Club
            </span>{" "}
            is a premier sports and fitness destination dedicated to providing
            world-class facilities for athletes and fitness enthusiasts.
          </p>

          <div className="space-y-6 text-[#18344a]">
            <div>
              <h3 className="font-semibold text-lg md:text-xl text-[#0b3046]">
                Premium Badminton Courts
              </h3>
              <p className="leading-relaxed">
                4 premium synthetic badminton courts with wooden subflooring
                designed for enhanced comfort, performance, and injury
                prevention.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg md:text-xl text-[#0b3046]">
                Running Track & Training Areas
              </h3>
              <p className="leading-relaxed">
                Dedicated spaces for fitness training, conditioning, endurance
                building, and athletic development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg md:text-xl text-[#0b3046]">
                Juice Bar
              </h3>
              <p className="leading-relaxed">
                Fresh juices, healthy refreshments, and recovery drinks to keep
                athletes energized throughout the day.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg md:text-xl text-[#0b3046]">
                Sports Equipment Shop
              </h3>
              <p className="leading-relaxed">
                Quality badminton gear from Yonex, accessories, apparel, and
                sports essentials available under one roof.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3046]">
              Fuel Your Passion.
            </h2>
          </div>
          <div className="mt-8 flex justify-center">
  <a
    href="mailto:mlmsportsclub0@gmail.com"
    className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0b3046] transition hover:scale-105"
  >
    Sponsor Our Monthly Tournaments
  </a>
</div>

          <div className="mt-16 text-center">
             <h5 className="text-xl md:text-2xl font-bold text-[#0b3046]">
              Stay Connected
            </h5>

  <p className="mt-3 text-slate-600">
    Follow MLM Sports Club for training updates, tournament highlights,
    achievements, and club events.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="https://instagram.com/mlmsportsclub"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:scale-105"
    >
      Instagram
    </a>

    <a
      href="https://facebook.com/MLMsportsclub/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-[#1877F2] px-8 py-3 text-white font-semibold shadow-lg transition hover:scale-105"
    >
      Facebook
    </a>

    
    
  </div>
</div>
        </div>
      </div>
      
      <footer className="py-8 text-center text-slate-500"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
    </section>
  );
}
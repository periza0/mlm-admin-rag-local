import districtLogo from "../assets/district1.png";
export default function Membership() {
  return (
<section className="pt-48 pb-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0b3046] mb-14">
      Membership Plans
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-3xl border border-slate-200 p-8 text-center shadow-lg">
        <h3 className="text-2xl font-semibold text-[#0b3046]">
          Monthly
        </h3>
        <p className="mt-4 text-4xl font-bold text-blue-600">
          ₹1,500
        </p>
        <p className="mt-2 text-slate-600">
          Per member
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 text-center shadow-lg">
        <h3 className="text-2xl font-semibold text-[#0b3046]">
          3 Months
        </h3>
        <p className="mt-4 text-4xl font-bold text-blue-600">
          ₹4,200
        </p>
        <p className="mt-2 text-slate-600">
          Per member
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 text-center shadow-lg">
        <h3 className="text-2xl font-semibold text-[#0b3046]">
          6 Months
        </h3>
        <p className="mt-4 text-4xl font-bold text-blue-600">
          ₹7,200
        </p>
        <p className="mt-2 text-slate-600">
          Per member
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 text-center shadow-lg">
        <h3 className="text-2xl font-semibold text-[#0b3046]">
          Annual
        </h3>
        <p className="mt-4 text-4xl font-bold text-blue-600">
          ₹12,000
        </p>
        <p className="mt-2 text-slate-600">
          Per member
        </p>
      </div>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2">
      <div className="rounded-3xl bg-[#0b3046] p-8 text-white shadow-xl">
        <h3 className="text-2xl font-semibold">
          Guest Fee
        </h3>
        <p className="mt-3 text-4xl font-bold">
          ₹300
        </p>
        <p className="mt-2 text-slate-600">
          Extra Person in Membership Plan for a Day
        </p>
      </div>
      <div className="relative rounded-3xl bg-[#0b3046] p-8 text-white shadow-xl">
  
  <a
    href="https://www.district.in/play/mlm-sports-club-mlm-sports-club-amritsar-slots-booking"
    target="_blank"
    rel="noreferrer"
    className="absolute top-6 right-6 hover:scale-105 transition"
  >
    <img
      src={districtLogo}
      alt="District"
      className="h-18 w-auto rounded-xl"
    />
  </a>

  <h3 className="text-2xl font-semibold">
    Pay & Play
  </h3>

  <p className="mt-3 text-4xl font-bold">
    ₹500
  </p>

  <p className="mt-2 text-white/80">
    One court · One hour
  </p>
</div>
    </div>
    <div className="mt-14 rounded-3xl bg-[#0b3046] p-8 text-white text-center shadow-xl">
  <h3 className="text-2xl font-semibold">
    Contact Us
  </h3>

  <p className="mt-3 text-lg text-white/90">
    For memberships, court bookings, and coaching enquiries
  </p>

  <a
    href="tel:+91 6239 390 167"
    className="mt-4 inline-block text-3xl font-bold hover:opacity-80 transition"
  >
    +91 6239 390 167
  </a>
  <a
    href="tel:+91 9888079568"
    className="mt-4 inline-block text-3xl font-bold hover:opacity-80 transition"
  >
    , +91 9888079568
  </a>
</div>
    <div className="mt-14 rounded-3xl bg-slate-50 p-8 border border-slate-200">
      <h3 className="text-2xl font-semibold text-[#0b3046] mb-4">
        Important Information
      </h3>

      <ul className="space-y-3 text-slate-700">
        <li>Only non-marking shoes are allowed on court.</li>
        <li>Smoking and drinking are strictly prohibited.</li>
        <li>Shoes and rackets are available on rent.</li>
      </ul>
    </div>
  </div>
  <footer className="py-8 text-center text-slate-500"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
</section>
);
}
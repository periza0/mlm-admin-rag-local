import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import districtLogo from "../assets/district1.png";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className="
          flex
          flex-wrap
          justify-center
          gap-2
          md:gap-3
          rounded-[28px]
          border border-white/30
          bg-white/20
          px-4 md:px-8
          py-3 md:py-4
          backdrop-blur-xl
          shadow-lg
        "
      >
        <Link
          to="/"
          className="rounded-full px-3 md:px-5 py-2 text-sm md:text-base text-slate-700 transition hover:bg-white/40"
        >
          Home
        </Link>
        
        <Link
          to="/achievements"
          className="rounded-full px-3 md:px-5 py-2 text-sm md:text-base text-slate-700 transition hover:bg-white/40"
        >
          Achievements
        </Link>
        <Link
          to="/gallery"
          className="rounded-full px-3 md:px-5 py-2 text-sm md:text-base text-slate-700 transition hover:bg-white/40"
        >
          Gallery
        </Link>

        <Link
          to="/coaching"
          className="rounded-full px-3 md:px-5 py-2 text-sm md:text-base text-slate-700 transition hover:bg-white/40"
        >
          Coaching
        </Link>

        <Link
          to="/membership"
          className="rounded-full px-3 md:px-5 py-2 text-sm md:text-base text-slate-700 transition hover:bg-white/40"
        >
          Membership
        </Link>



        <Link
          to="/about"
          className="rounded-full px-3 md:px-5 py-2 text-sm md:text-base text-slate-700 transition hover:bg-white/40"
        >
          About Us
        </Link>
        <a
  href="https://wa.me/916239390167"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full"
>
  <FaWhatsapp />
  WhatsApp
</a>
<a
  href="https://www.district.in/play/mlm-sports-club-mlm-sports-club-amritsar-slots-booking"
  target="_blank"
  rel="noreferrer"
  className="hover:scale-105 transition"
>
  <img
    src={districtLogo}
    alt="District"
    className="h-12 w-auto rounded-full"
  />
</a>
      </nav>
    </header>
  );
}
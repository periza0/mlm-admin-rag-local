import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { API_URL } from "../config";
import { fetchJsonWithFallback } from "../lib/apiCache";
import "swiper/css";
import "swiper/css/navigation";



import { useState, useEffect } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  async function fetchImages(active = true) {
    try {
      const { data, fromCache } =
        await fetchJsonWithFallback(
          `${API_URL}/api/gallery`,
          "mlm:gallery"
        );

      if (!active) {
        return;
      }

      setImages(Array.isArray(data) ? data : []);
      setLoadError(
        fromCache
          ? "Showing saved gallery photos while the live data catches up."
          : ""
      );
    } catch (error) {
      console.log(error);

      if (active) {
        setLoadError("Gallery is temporarily unavailable.");
      }
    } finally {
      if (active) {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    let active = true;

    fetchImages(active);

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen px-4 md:px-6 pt-40 pb-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-6 md:p-10 shadow-xl">

          <h1 className="mb-8 text-center text-3xl md:text-5xl font-bold text-[#0b3046]">
            Gallery
          </h1>
          {isLoading && (
            <p className="mb-8 text-center text-slate-600">
              Loading gallery...
            </p>
          )}
          {loadError && (
            <p className="mb-8 text-center text-slate-600">
              {loadError}
            </p>
          )}

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="rounded-[24px]"
          >
          {images.map((image) => (
  <SwiperSlide key={image._id}>
    <img
      src={image.image}
      alt="Gallery"
      className="h-[300px] md:h-[600px] w-full object-cover"
    />
  </SwiperSlide>
  ))}
          </Swiper>

        </div>
      </div>
      <footer className="py-8 text-center text-slate-500"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
    </section>
  );
}

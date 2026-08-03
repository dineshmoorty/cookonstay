import Image from "next/image";
import { Camera } from "lucide-react";

export default function GalleryHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-orange-50
        via-white
        to-white
        py-20
        sm:py-24
        lg:py-28
      " style={{padding: "20px"}}
    >
      {/* Background */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-orange-200/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          top-0
          h-96
          w-96
          rounded-full
          bg-amber-200/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-full
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}

        <div className="mx-auto max-w-full text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-100
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-600
            " style={{padding: "5px 10px"}}
          >
            <Camera size={16} />

            CookOnStay Gallery
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-5xl
            "style={{padding: "5px 10px"}}
          >
            Food, Moments &
            <span className="text-orange-500">
              {" "}Memories.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-full
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "style={{padding: "5px 10px"}}
          >
            A glimpse into the food we prepare, the people we serve
            and the moments that have shaped the CookOnStay journey.
          </p>
        </div>

        {/* COLLAGE */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-full
            grid-cols-2
            gap-3
            sm:gap-4
            lg:grid-cols-4
          "
        >
          {/* Large Image */}

          <div
            className="
              relative
              col-span-2
              row-span-2
              h-[300px]
              overflow-hidden
              rounded-[28px]
              sm:h-[440px]
            "
          >
            <Image
              src="/images/gallery/hero-main.webp"
              alt="CookOnStay South Indian food"
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "
            />

            <div className="absolute bottom-6 left-6 text-white">

              <p className="text-sm font-medium text-white/80">
                Made Fresh
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                South Indian Favourites
              </h2>

            </div>
          </div>

          {/* Image 2 */}

          <GalleryImage
            src="/images/gallery/hero-2.webp"
            alt="CookOnStay food"
          />

          {/* Image 3 */}

          <GalleryImage
            src="/images/gallery/hero-3.webp"
            alt="CookOnStay meal"
          />

          {/* Image 4 */}

          <GalleryImage
            src="/images/gallery/hero-4.webp"
            alt="CookOnStay event"
          />

          {/* Last Tile */}
          <div
            className="
              group
              relative
              min-h-[140px]
              overflow-hidden
              rounded-[24px]
              sm:min-h-[210px]
            "
          >
            <Image
              src="/images/gallery/last.webp"
              alt="Every Plate Has a Story - CookOnStay"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Soft Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-black/5
                to-transparent
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function GalleryImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="
        relative
        min-h-[140px]
        overflow-hidden
        rounded-[24px]
        sm:min-h-[210px]
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />
    </div>
  );
}

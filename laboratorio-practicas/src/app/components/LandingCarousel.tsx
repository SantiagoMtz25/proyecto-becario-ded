interface LandingCarouselProps {
  showFullDescription: boolean;
  setShowFullDescription: (value: boolean) => void;
  title: string[];
  description: string[];
}

const LandingCarousel: React.FC<LandingCarouselProps> = ({
  showFullDescription,
  setShowFullDescription,
  title,
  description,
}) => {
  return (
    <>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-2xl md:h-96">
          {title.map((itemTitle, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-start justify-end px-4 pb-10 pl-16 duration-700 ease-in-out"
              data-carousel-item
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(145,145,145,0.5) 100%, rgba(255,255,255,0) 100%), url(https://www.coe.int/documents/16695/63022230/0/ecd788db-d4c0-3688-bab2-630843f09f17)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col gap-2 text-left pl-2 sm:w-3/4 md:w-3/4 lg:w-3/5">
                <h1 className="text-gray-200 text-4xl md:text-4xl lg:text-5xl font-black leading-tight tracking">
                  {itemTitle}
                </h1>
                <h2 className="text-white font-extralight leading-6">
                  {showFullDescription ? (
                    <>
                      {description[index]}
                      <button
                        onClick={() => setShowFullDescription(false)}
                        className="select-none rounded-lg bg-indigo_blue ml-2 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                      >
                        Leer Menos
                      </button>
                    </>
                  ) : (
                    <>
                      {description[index].slice(0, 200)}...
                      {description[index].length > 200 && (
                        <button
                          onClick={() => setShowFullDescription(true)}
                          data-ripple-light="true"
                          type="button"
                          className="select-none rounded-lg bg-indigo_blue ml-2 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                        >
                          Leer Más
                        </button>
                      )}
                    </>
                  )}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {title.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default LandingCarousel;
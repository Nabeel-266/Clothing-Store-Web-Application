import React, { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BOLD\u00A0STATEMENTS",
      subtitle: "Define Your Identity",
      description: "Curated collections that speak louder than words",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
      theme: "rustic",
    },
    {
      title: "URBAN\u00A0LEGACY",
      subtitle: "Street Meets Elegance",
      description: "Where contemporary fashion meets timeless design",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80",
      theme: "grounded",
    },
    {
      title: "TIMELESS\u00A0THREADS",
      subtitle: "Classic Redefined",
      description: "Premium quality that transcends seasons",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=80",
      theme: "sand",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getThemeColors = (theme) => {
    const themes = {
      rustic: {
        primary: "#b96146",
        light: "#c7816b",
        dark: "#944e38",
      },
      grounded: {
        primary: "#a3675c",
        light: "#b6857c",
        dark: "#835249",
      },
      sand: {
        primary: "#b88e47",
        light: "#c6a56c",
        dark: "#937239",
      },
      granite: {
        primary: "#768b74",
        light: "#91a290",
        dark: "#5e6f5d",
      },
    };
    return themes[theme] || themes.rustic;
  };

  const colors = getThemeColors(slides[currentSlide].theme);

  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden bg-[#101310]">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-1500 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
            zIndex: index === currentSlide ? 2 : 1,
          }}
        >
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-black/85 via-black/60 to-black/85"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#101310] via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Animated Background Circles */}
      {/* <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-pulse-custom"
        style={{ background: colors.primary }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 animate-pulse-custom-delayed"
        style={{ background: colors.light }}
      ></div> */}

      {/* Main Content */}
      <div className="relative z-10 h-full max-w-7xl mx-[14rem] px-6 md:px-12 flex flex-col justify-center">
        {/* Top Badge */}
        <div className="flex items-center gap-4 mb-8 animate-slide-down">
          <div
            className="h-[2px] w-16 animate-expand-line"
            style={{ background: colors.primary }}
          ></div>
          <span
            className="text-[1rem] md:text-[1.2rem] font-medium tracking-[0.25em] uppercase"
            style={{
              color: colors.primary,
            }}
          >
            New Collection 2026
          </span>
          <div
            className="h-[2px] w-16 animate-expand-line-delay"
            style={{ background: colors.primary }}
          ></div>
        </div>

        {/* Main Title */}
        <h1
          className="text-[5rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[6.5rem] font-normal leading-[0.9] tracking-tight uppercase mb-6 animate-slide-up font-righteous text-lightest"
          style={{
            textShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.4)",
          }}
        >
          {slides[currentSlide].title.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-4">
              {word}
            </span>
          ))}
        </h1>

        {/* Accent Line */}
        <div className="flex items-center gap-4 mb-8 animate-slide-up-delay">
          <div
            className="h-1 w-32 animate-expand-bar"
            style={{ background: colors.primary }}
          ></div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#475346] to-transparent max-w-md"></div>
        </div>

        {/* Subtitle */}
        <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.4rem] text-light font-normal font-montAlter tracking-wide mb-3 animate-slide-up-delay-2">
          {slides[currentSlide].subtitle}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-[1.4rem] max-w-2xl mb-12 text-granite-200 leading-relaxed animate-slide-up-delay-3">
          {slides[currentSlide].description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-slide-up-delay-4">
          <button
            className="group relative px-12 py-5 font-semibold font-montAlter text-lightest text-[1.2rem] tracking-wider uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{
              background: colors.primary,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Shop Now
              <svg
                className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <button
            className="cta-secondary group relative px-12 py-5 font-semibold font-montAlter text-lightest text-[1.2rem] tracking-wider uppercase border-2 transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{
              borderColor: colors.primary,
              color: colors.primary,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(10px)",
              "--hover-bg": colors.primary,
            }}
          >
            Explore Collections
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-1 transition-all duration-500"
              style={{
                width: index === currentSlide ? "80px" : "40px",
                background: index === currentSlide ? colors.primary : "#475346",
              }}
            >
              {index === currentSlide && (
                <div
                  className="absolute inset-0 animate-progress-bar"
                  style={{ background: "#fcfcfc" }}
                ></div>
              )}
              <span
                className="absolute -top-10 left-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: "var(--font-parkinsans)",
                  color: colors.primary,
                }}
              >
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <div className="flex justify-center items-center gap-4 animate-fade-in-delayed">
          {/* Decorative Lines */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-[0.2rem] h-22 bg-linear-to-b from-transparent via-granite-500 to-transparent"></div>
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: colors.primary }}
            ></div>
            <div className="w-[0.2rem] h-22 bg-linear-to-b from-transparent via-granite-500 to-transparent"></div>
          </div>

          {/* Vertical Text */}
          <div
            className="text-[0.9rem] font-bold tracking-[0.5em] uppercase"
            style={{
              fontFamily: "var(--font-parkinsans)",
              color: "#768b74",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Premium Quality
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-granite-800 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-righteous)",
                    color: "#fcfcfc",
                  }}
                >
                  500+
                </div>
                <div
                  className="text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-parkinsans)",
                    color: "#91a290",
                  }}
                >
                  Products
                </div>
              </div>
              <div className="h-10 w-[1px] bg-[#475346]"></div>
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-righteous)",
                    color: "#fcfcfc",
                  }}
                >
                  50+
                </div>
                <div
                  className="text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-parkinsans)",
                    color: "#91a290",
                  }}
                >
                  Brands
                </div>
              </div>
              <div className="h-10 w-[1px] bg-[#475346]"></div>
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-righteous)",
                    color: "#fcfcfc",
                  }}
                >
                  24/7
                </div>
                <div
                  className="text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-parkinsans)",
                    color: "#91a290",
                  }}
                >
                  Support
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex flex-col items-center gap-2 animate-bounce-gentle">
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{
                  fontFamily: "var(--font-parkinsans)",
                  color: "#768b74",
                }}
              >
                Scroll
              </span>
              <div
                className="w-[2px] h-16 bg-linear-to-b animate-scroll-line"
                style={{
                  background: `linear-gradient(to bottom, ${colors.primary}, transparent)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

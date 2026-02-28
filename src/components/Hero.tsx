export default function Hero() {
  return (
    <section className="relative bg-dark pt-16 pb-20 md:pt-[100px] md:pb-[120px] px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,168,56,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(232,168,56,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-content mx-auto relative">
        <p className="fade-up fade-up-1 text-accent text-[0.8rem] font-bold uppercase tracking-[3px] mb-6">
          Growth-Driven Marketing
        </p>
        <h1 className="fade-up fade-up-2 font-display text-[clamp(2.8rem,6vw,5rem)] font-extrabold text-white leading-[1.1] max-w-[780px] mb-6">
          We Build Brands That People Actually Remember
        </h1>
        <p className="fade-up fade-up-3 text-[1.15rem] text-[rgba(255,255,255,0.6)] max-w-[540px] mb-10">
          Strategic marketing that turns unknown startups into industry leaders.
          We combine data-driven insights with creative excellence to deliver
          measurable growth.
        </p>
        <div className="fade-up fade-up-4 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-accent text-dark px-9 py-4 rounded-[10px] font-bold hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,168,56,0.3)] transition-all duration-300"
          >
            Start Your Project &rarr;
          </a>
          <a
            href="#about"
            className="border-[1.5px] border-[rgba(255,255,255,0.25)] text-white px-9 py-4 rounded-[10px] font-bold hover:border-white hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

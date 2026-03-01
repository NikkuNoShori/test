import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '94%', label: 'Client Retention' },
  { value: '3.2\u00d7', label: 'Avg. ROI Increase' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="bg-white py-[72px] md:py-[100px] px-6">
      <div
        ref={ref}
        className="reveal max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
      >
        {/* Visual block */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-dark to-dark-mid flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(232,168,56,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(232,168,56,0.08)_0%,transparent_60%)] pointer-events-none" />
          <span className="font-display text-[5rem] max-md:text-[3.5rem] font-bold text-accent relative">
            12+
          </span>
          <span className="text-[0.8rem] font-bold uppercase tracking-[3px] text-[rgba(255,255,255,0.6)] relative">
            Years of Experience
          </span>
        </div>

        {/* Text content */}
        <div>
          <p className="text-accent text-[0.8rem] font-bold uppercase tracking-[3px] mb-4">
            About Us
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-bold text-dark leading-[1.2] mb-6">
            Crafting Digital Experiences That Drive Results
          </h2>
          <p className="text-body-light mb-4">
            We&rsquo;re a team of strategists, designers, and marketers who
            believe that every brand has a unique story worth telling. Our
            approach combines creative thinking with analytical precision.
          </p>
          <p className="text-body-light mb-8">
            From startups to established enterprises, we&rsquo;ve helped
            businesses across industries build lasting connections with their
            audiences and achieve sustainable growth.
          </p>

          <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
            <div className="flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-[2rem] font-bold text-dark block">
                    {stat.value}
                  </span>
                  <span className="text-body-light text-[0.85rem]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-lg bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

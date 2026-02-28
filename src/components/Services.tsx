import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: '\ud83c\udfaf',
    title: 'Brand Strategy',
    description:
      'We define your brand positioning, voice, and visual identity to create a cohesive presence that resonates with your target audience.',
  },
  {
    icon: '\ud83c\udfa8',
    title: 'Web Design',
    description:
      'Beautiful, conversion-focused websites built with modern technologies that deliver exceptional user experiences across all devices.',
  },
  {
    icon: '\ud83d\udcc8',
    title: 'Growth Marketing',
    description:
      'Data-driven campaigns across search, social, and content channels that deliver measurable ROI and sustainable growth.',
  },
  {
    icon: '\u270d\ufe0f',
    title: 'Content Creation',
    description:
      'Compelling stories, articles, and visual content that engages your audience and establishes thought leadership in your industry.',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" className="bg-light py-[72px] md:py-[100px] px-6">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <p className="text-accent text-[0.8rem] font-bold uppercase tracking-[3px] mb-4">
          What We Do
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-bold text-dark leading-[1.2] mb-3">
          Services Built for Growth
        </h2>
        <p className="text-body-light mb-12 max-w-[540px]">
          Comprehensive solutions designed to elevate your brand and accelerate
          your business growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-xl px-7 py-10 border border-[rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(26,26,46,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-[52px] h-[52px] rounded-xl bg-[rgba(232,168,56,0.12)] flex items-center justify-center text-[1.4rem] mb-5">
                {service.icon}
              </div>
              <h3 className="font-display text-[1.25rem] font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-body-light text-[0.92rem] leading-[1.7]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

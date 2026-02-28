import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote:
      'Working with this team transformed our brand completely. Our engagement rates tripled within the first quarter, and we\'ve seen consistent growth ever since.',
    name: 'Sarah Chen',
    title: 'CEO, TechFlow',
    initials: 'SC',
  },
  {
    quote:
      'Their strategic approach to marketing is unlike anything we\'ve experienced. They don\'t just execute \u2014 they think deeply about what will actually move the needle.',
    name: 'Marcus Rivera',
    title: 'Founder, Bloom Health',
    initials: 'MR',
  },
  {
    quote:
      'The ROI we\'ve seen has been exceptional. They delivered a complete rebrand and growth strategy that exceeded every metric we set. Truly world-class work.',
    name: 'Emily Park',
    title: 'CMO, Elevate SaaS',
    initials: 'EP',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section
      id="testimonials"
      className="bg-dark py-[72px] md:py-[100px] px-6"
    >
      <div ref={ref} className="reveal max-w-content mx-auto">
        <p className="text-accent text-[0.8rem] font-bold uppercase tracking-[3px] mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-bold text-white leading-[1.2] mb-3">
          What Our Clients Say
        </h2>
        <p className="text-[rgba(255,255,255,0.5)] mb-12 max-w-[540px]">
          Don&rsquo;t just take our word for it &mdash; hear from the brands
          we&rsquo;ve helped grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-9 hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(232,168,56,0.2)] transition-all duration-300"
            >
              <div className="text-accent text-[0.9rem] tracking-[2px] mb-4">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <blockquote className="text-[rgba(255,255,255,0.75)] italic leading-[1.75] mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-dark font-bold text-[0.8rem] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-[0.95rem]">
                    {t.name}
                  </div>
                  <div className="text-[rgba(255,255,255,0.4)] text-[0.8rem]">
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

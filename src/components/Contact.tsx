import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
  { icon: '\ud83d\udce7', label: 'Email', detail: 'hello@stellar.com' },
  {
    icon: '\ud83d\udccd',
    label: 'Office',
    detail: '123 Creative Ave, San Francisco, CA',
  },
  { icon: '\ud83d\udcde', label: 'Phone', detail: '+1 (555) 123-4567' },
]

const inputClasses =
  'w-full px-4 py-3.5 border-[1.5px] border-[rgba(0,0,0,0.08)] rounded-lg bg-white text-dark outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,168,56,0.12)] transition-all duration-200'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="bg-white py-[72px] md:py-[100px] px-6">
      <div
        ref={ref}
        className="reveal max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20"
      >
        {/* Left column — Info */}
        <div>
          <p className="text-accent text-[0.8rem] font-bold uppercase tracking-[3px] mb-4">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-bold text-dark leading-[1.2] mb-3">
            Let&rsquo;s Start a Conversation
          </h2>
          <p className="text-body-light mb-10">
            Ready to take your brand to the next level? Reach out and
            let&rsquo;s discuss how we can help.
          </p>

          <div className="flex flex-col gap-7">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(232,168,56,0.12)] flex items-center justify-center text-[1.2rem] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-dark text-[0.95rem]">
                    {item.label}
                  </div>
                  <div className="text-body-light text-[0.9rem]">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Form */}
        <div className="bg-light rounded-xl p-8 md:p-11">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[0.85rem] font-semibold text-dark mb-2">
                  First Name
                </label>
                <input type="text" className={inputClasses} />
              </div>
              <div>
                <label className="block text-[0.85rem] font-semibold text-dark mb-2">
                  Last Name
                </label>
                <input type="text" className={inputClasses} />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[0.85rem] font-semibold text-dark mb-2">
                Email Address
              </label>
              <input type="email" className={inputClasses} />
            </div>

            <div className="mb-4">
              <label className="block text-[0.85rem] font-semibold text-dark mb-2">
                What do you need help with?
              </label>
              <select className={inputClasses}>
                <option value="">Select a service...</option>
                <option>Brand Strategy</option>
                <option>Web Design</option>
                <option>Growth Marketing</option>
                <option>Content Creation</option>
                <option>Something Else</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[0.85rem] font-semibold text-dark mb-2">
                Tell us about your project
              </label>
              <textarea
                className={`${inputClasses} min-h-[120px] resize-y`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-dark text-white py-4 rounded-[10px] font-bold hover:bg-dark-mid hover:-translate-y-px hover:shadow-[0_4px_24px_rgba(26,26,46,0.2)] transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

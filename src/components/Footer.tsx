const footerLinks = {
  services: ['Brand Strategy', 'Web Design', 'Growth Marketing', 'Content Creation'],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  connect: ['LinkedIn', 'Twitter / X', 'Instagram', 'Dribbble'],
}

export default function Footer() {
  return (
    <footer className="bg-dark text-[rgba(255,255,255,0.5)] pt-16 pb-8 px-6">
      <div className="max-w-content mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <a href="#" className="font-display text-[1.4rem] font-bold text-white">
              Stellar<span className="text-accent">.</span>
            </a>
            <p className="text-[0.9rem] mt-4 max-w-[280px]">
              Strategic marketing that transforms brands and drives measurable
              growth for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[0.85rem] uppercase font-bold tracking-[1.5px] mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-[0.9rem] hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[0.85rem] uppercase font-bold tracking-[1.5px] mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.9rem] hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[0.85rem] uppercase font-bold tracking-[1.5px] mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.connect.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[0.9rem] hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.82rem]">
            <p>&copy; 2026 Stellar. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

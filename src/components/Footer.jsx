import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";

const socialLinks = [
  { href: "https://github.com/Kale-Kode", icon: <SlSocialGithub /> },
  { href: "https://www.linkedin.com/in/kaile-liu-a0163a279/", icon: <SlSocialLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-8 text-blue-50 font-general">
      <div className="container flex flex-col items-center justify-between px-4">
        <div className="flex items-center justify-between">
            <p className="text-center text-sm font-light md:text-left">
            @Kaile Liu 2024.
            </p>
            <div className="flex justify-start gap-2 ml-2">
            {socialLinks.map((link, index) => (
                <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-50 transition-colors duration-500 ease-in-out hover:text-blue-300"
                >
                {link.icon}
                </a>
            ))}
            </div>
        </div>
        <p className="text-center mt-1 text-sm font-light opacity-95">Built by yours truly with Next.js, Tailwind CSS, and spiced up with GSAP. Deployed with Vercel.</p>
      </div>
    </footer>
  );
};

export default Footer;
import footerGrid from "/footer-grid.svg";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/panic.at_rebisco/",
    Icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Izumi456",
    Icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernando-jose-ordiales-0164802b7/",
    Icon: FaLinkedinIn,
  },
];

const Footer = () => {
  return (
    <div className="relative h-[32rem] w-full md:h-[24rem]">
      <img src={footerGrid} alt="" className="h-full w-full" />

      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center">
        <h2 className="text-center text-[1.75rem] font-bold leading-tight tracking-tight text-text-white sm:text-[2rem]">
          Ready to take <span className="text-text-purple">your</span> digital{" "}
          <br /> <span>presence to the next Level?</span>
        </h2>
        <p className="mt-3 text-center text-sm tracking-tight text-text-light-gray">
          Reach out to me today and lets discuss how can I help you achieve your
          goals.
        </p>
      </div>

      <div className="absolute bottom-0 flex w-full justify-between gap-4 p-5 max-md:flex-col">
        <p className="flex w-full items-center justify-start gap-1 whitespace-pre text-xs text-text-light-gray md:gap-2 md:text-sm">
          Copyright <AiOutlineCopyright /> 2026 Fernando Ordiales
        </p>

        <div className="flex w-full items-center justify-end max-md:justify-start">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-purple"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

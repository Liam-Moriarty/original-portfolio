import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PageHeader = ({ title, children }) => (
  <header className="pt-24 md:pt-28">
    <Link
      to="/"
      className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-text-light-gray/60 transition-colors hover:text-text-purple"
    >
      <FaArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-1" />
      Home
    </Link>

    <h1 className="mt-8 font-mono text-[1.75rem] lowercase leading-none text-text-white sm:text-[2.25rem]">
      {title}
    </h1>

    {children && (
      <p className="mt-8 max-w-xl text-sm leading-relaxed text-text-light-gray">
        {children}
      </p>
    )}
  </header>
);

export default PageHeader;

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
    <p className="text-xs uppercase tracking-widest text-text-light-gray/70">404</p>
    <h1 className="text-[2rem] font-semibold leading-tight tracking-tight text-text-white sm:text-4xl">
      That project doesn&apos;t exist
    </h1>
    <p className="max-w-md text-base text-text-light-gray">
      The link may be out of date. Everything I&apos;ve shipped is still on the
      home page.
    </p>
    <Link
      to="/#recentProjects"
      className="group mt-2 inline-flex items-center gap-2 text-sm text-text-light-gray transition-colors hover:text-text-purple"
    >
      <FaArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-1" />
      All projects
    </Link>
  </div>
);

export default NotFound;

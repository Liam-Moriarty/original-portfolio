import footerGrid from "/footer-grid.svg";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaInstagramSquare, FaTiktok, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full md:h-[30rem] h-[40rem] relative">
      <img src={footerGrid} alt="footer" className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center w-full h-full flex-col">
        <h2 className="text-text-white font-bold text-4xl tracking-tight text-center">
          Ready to take <span className="text-text-purple">your</span> digital{" "}
          <br /> <span>presence to the next Level?</span>
        </h2>
        <p className="text-text-light-gray text-base tracking-tight text-center">
          Reach out to me today and lets discuss how can I help you achieve your
          goals.
        </p>
      </div>

      <div className="absolute bottom-0 w-full flex justify-between p-5 gap-4 max-md:flex-col">
        <p className="w-full flex md:gap-2 justify-start items-center gap-1 md:text-base text-xs whitespace-pre">
          Copyright <AiOutlineCopyright /> 2025 Fernando Ordiales
        </p>
        <div className="flex items-center w-full justify-end max-md:justify-start ">
          <div className="flex justify-center items-center md:gap-3 gap-1 text-purple-bg ">
            <div className="p-1 bg-text-light-gray rounded-md">
              <FaInstagramSquare />
            </div>
            <div className="p-1 bg-text-light-gray rounded-md">
              <FaTiktok />
            </div>
            <div className="p-1 bg-text-light-gray rounded-md">
              <FaFacebookSquare />
            </div>
            <div className="p-1 bg-text-light-gray rounded-md">
              <FaSquareXTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

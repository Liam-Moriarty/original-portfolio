import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import codeImg from "/b5.svg";
import antiSocial from "/anti-social.png";
import dashboard from "/currentProject.png";
import dataAnalysis1 from "/data-analytics1.png";
import sticker from "/sticker.png";
import codeSnap from "/codeSnap.png";

// import dataAnalysis2 from "/dashboard.png";
// import dashboard from "/dashboard.png";

import { CardDemo } from "../components/ui/AnimatedCard";

const Skeleton = ({ img, component }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent ">
    {img && <img src={img} alt="" className="object-cover w-full h-full" />}
    {component}
  </div>
);
export const gridItems = [
  {
    title: "About Me",
    description:
      "Junior AI Software Engineer building AI-powered products on Google Cloud, with a frontend background in React, Next.js and Vue and an eye for interfaces that feel considered.",
    header: <Skeleton img={antiSocial} />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Tech Stack",
    description:
      "Full-stack across Next.js, React and Vue on the frontend, Node, Fastify and Spring Boot on the backend, shipped on Google Cloud with Docker and Kubernetes.",
    header: <Skeleton component={<CardDemo />} />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton img={codeImg} />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Currently building an ERP System",
    description:
      "Currently developing a comprehensive ERP system to streamline and optimize business processes with advanced features and user-friendly interfaces.",
    header: <Skeleton img={dashboard} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Alchemy: Converting Numbers into Meaningful Strategies.",
    description: "Knowledge on basic fundamentals of data analytics",
    header: <Skeleton img={dataAnalysis1} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Backend development with JavaScript",
    description:
      "Crafting powerful server-side solutions that drive seamless functionality and performance.",
    header: <Skeleton img={codeSnap} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Design Philosophy",
    description:
      "I focus on creating user-friendly and visually appealing interfaces by balancing aesthetics and functionality. My design process involves understanding user needs and using modern tools to deliver intuitive, responsive solutions.",
    header: <Skeleton img={sticker} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

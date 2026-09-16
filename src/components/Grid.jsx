import { gridItems } from "../data/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import SectionLabel from "./ui/SectionLabel";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-20 py-14">
      <SectionLabel index="01" title="About" rule={false} />
      <BentoGrid className="mx-auto md:auto-rows-[22rem]">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

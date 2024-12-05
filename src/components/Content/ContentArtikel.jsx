import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ContentArtikel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-5">Artikel Populer</h1>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Accordion 1"
          // className="bg-purple-700 text-white hover:bg-white hover:text-[#d8901e] !important transition-colors duration-300"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion 2"
          // className="bg-purple-700 text-white hover:bg-white hover:text-[#d8901e] !important transition-colors duration-300"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Accordion 3"
          // className="bg-purple-700 text-white hover:bg-white hover:text-[#d8901e] !important transition-colors duration-300"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

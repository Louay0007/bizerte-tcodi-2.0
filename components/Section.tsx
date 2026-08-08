import TextWithPattern from "./TextWithPattern";

const Section = ({
  title,
  description,
  children,
  id,
  className = "",
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`bg-dark flex flex-col py-8 sm:py-10 md:py-12 px-3 sm:px-4 ${className}`}
    >
      <TextWithPattern title={title} description={description} />

      {children}
    </section>
  );
};

export default Section;

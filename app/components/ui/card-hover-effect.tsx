import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    imageLink: string;
    tags: string[];
    overview:string;
    challenges:any[];
    solution:string;
    result:string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 mx-2 sm:mx-20", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block  rounded-3xl bg-gradient-to-t from-[#330867] to-[#0072ff] "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="">
          <CardTitle>{item.title}</CardTitle>
          <TagsSection items={item.tags} />
            <div className="flex flex-col md:flex-row">
              <img
                src={item.imageLink}
                alt={item.title}
                className="rounded-xl border border-gray-600 w-full md:max-w-[30vw] h-fit"
              />
              <div className="md:ml-5 hidden sm:block text-gray-300">
                <p className="font-semibold">Overview:</p>
                <p className="mb-2">{item.overview}</p>
                <p className="font-semibold">Challenges:</p>
                <ul className="list-disc mb-2">
                  {item?.challenges?.map((content)=>{
                    return <li className="ml-5" key={content}>{content}</li>
                  })}
                </ul>
                <p className="font-semibold">Solution:</p>
                <p className="mb-2">{item?.solution}</p>
                <p className="font-semibold">Results:</p>
                <p className="mb-2">{item?.result}</p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-[20px] font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-[14px] tracking-wide leading-relaxed mt-5",
        className
      )}
    >
      {children}
    </p>
  );
};

export const TagsSection = ({ items }: { items: string[] }) => {
  return (
    <div className="flex flex-wrap">
      {items.map((tag, index) => {
        return (
          <p
            key={index}
            className="px-2 py-1 ml-[-5px] mb-5 bg-gray-800 rounded-xl text-[14px]"
          >
            {tag}
          </p>
        );
      })}
    </div>
  );
};

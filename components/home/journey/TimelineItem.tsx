import { motion } from "framer-motion";

type TimelineItemProps = {
  item: {
    icon: string;
    date: string;
    title: string;
    location: string;
    description: string;
  };
  reverse: boolean;
  index: number;
};

export default function TimelineItem({
  item,
  reverse,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center`}
      initial={{ opacity: 0, x: reverse ? 48 : -48, y: 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Card */}
      <div className="w-full md:w-1/2" style={{padding: "0px 30px"}}>
        <motion.div
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-orange-300 hover:shadow-xl"
          style={{ padding: "10px" }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
        >
          <span className="text-sm font-semibold text-orange-500">
            {item.date}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 font-medium text-orange-600">
            📍 {item.location}
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <motion.div
        className="z-10 my-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-orange-500 bg-white text-3xl shadow-lg ring-8 ring-orange-50 md:absolute md:left-1/2 md:-translate-x-1/2"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.08 + 0.1 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-1 rounded-full border border-orange-200"
          animate={{ scale: [1, 1.28], opacity: [0.7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: index * 0.2 }}
        />
        {item.icon}
      </motion.div>

      {/* Empty Side */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

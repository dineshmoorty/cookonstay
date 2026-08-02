import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function BulkOrderCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <article
      className="
        group
        rounded-[28px]
        border
        border-orange-100
        bg-white/80
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-200
        hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)]
      " style={{ padding: "20px" }}
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl bg-orange-100 text-orange-600
          transition-transform duration-300
          group-hover:scale-110
        " style={{ margin: "10px 0px" }}
      >
        <Icon size={26} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}
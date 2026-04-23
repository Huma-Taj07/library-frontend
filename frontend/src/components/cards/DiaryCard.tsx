import { FiCalendar, FiClock, FiTag } from "react-icons/fi";

interface DiaryCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: number;
}

export default function DiaryCard({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  readTime,
}: DiaryCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a href={`/diaries/${id}`} className="diary-card">
      {/* Category Badge */}
      <div className="diary-card__category">{category.replace("-", " ")}</div>

      <h3 className="diary-card__title">{title}</h3>

      <p className="diary-card__excerpt">{excerpt}</p>

      {/* Meta Information */}
      <div className="diary-card__meta">
        <span>
          <FiCalendar size={14} /> {formattedDate}
        </span>
        <span>
          <FiClock size={14} /> {readTime} min
        </span>
      </div>
    </a>
  );
}

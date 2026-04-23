import { FiArrowRight } from "react-icons/fi";

interface DestinationCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  color: string;
}

export default function DestinationCard({
  id,
  name,
  image,
  description,
  color,
}: DestinationCardProps) {
  return (
    <a href={`/destinations/${id}`} className="destination-card">
      <div className="destination-card__content">
        <h3 className="destination-card__title">{name}</h3>
        <p className="destination-card__description">{description}</p>
        <span className="destination-card__link">
          Explore <FiArrowRight size={18} />
        </span>
      </div>
    </a>
  );
}

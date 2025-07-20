interface CardProps {
  title: string;
  imageUrl: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, rating }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-64">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-yellow-500">Rating: {rating}/5</p>
    </div>
  );
};

export default Card;
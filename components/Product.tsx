interface ProductProps {
  data: {
    description: string;
    thumbnail: string;
    thumbnailAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  const { description, thumbnail, thumbnailAlt, rating } = data;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <img
        className="rounded-lg shadow-lg shadow-black"
        src={thumbnail}
        alt={thumbnailAlt}
      />
      <p className="text-gray-700">{description}</p>
      <div className="text-blue-500 font-bold">{rating}</div>
    </div>
  );
};
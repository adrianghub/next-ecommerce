import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from 'utils/formatPrice';
import { ProductDetailsProps } from './ProductDetails';

type ProductCardProps = Pick<
  ProductDetailsProps,
  'title' | 'imgSrc' | 'category' | 'price' | 'id'
>;

export const ProductCard = ({
  id,
  title,
  imgSrc,
  category,
  price,
}: ProductCardProps) => {
  return (
    <div className="w-full p-4 my-4 bg-white md:p-5 lg:p-6">
      <div className="flex flex-col items-center justify-between w-full h-full ">
        <div className="block w-full px-2 py-4 bg-white rounded-lg ">
          <Image
            src={imgSrc}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
            alt={title}
          />
        </div>
        <div>
          <Link href={`/products/product/${id}`}>
            <a className="font-sans text-lg font-bold text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-emerald-500 to-emerald-800 text-neutral-800">
              {title}
            </a>
          </Link>
          <h4 className="mb-4 text-center font-narrow text-neutral-500">
            {category}
          </h4>
        </div>
        <div className="flex items-baseline justify-between w-full mt-4">
          <button>Add to card</button>
          <p className="font-sans font-bold text-right text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
            {formatPrice.format(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

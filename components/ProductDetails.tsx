import React from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { formatPrice } from '../utils/formatPrice';

export interface ProductDetailsProps {
  page?: string;
  id: number | string;
  title: string;
  imgSrc: string;
  desc?: string;
  price: number;
  rating: number;
  category: string;
  longDesc: string;
}

interface ProductProps {
  data: ProductDetailsProps;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.desc}
        canonical={`https://queenstory-shop-jkjloayc9-pawelpikus.vercel.app/products/item/${data.id}`}
        openGraph={{
          url: `https://queenstory-shop-jkjloayc9-pawelpikus.vercel.app/products/item/${data.id}`,
          title: data.title,
          description: data.desc,
          images: [
            {
              url: data.imgSrc,
              alt: data.title,
              type: `image/jpeg`,
            },
          ],
          site_name: `Queen Story Shop`,
        }}
      />
      <div className="flex flex-col items-start justify-between w-full p-4 my-12 bg-white md:p-5 lg:p-6">
        <div className="flex flex-col justify-center w-full gap-8 md:flex-row md:items-center md:justify-between ">
          <div className="block my-12 bg-white md:w-1/2">
            <Image
              src={data.imgSrc}
              layout="responsive"
              width={16}
              height={9}
              objectFit="contain"
              alt={data.title}
            />
          </div>
          <article className="prose md:w-1/2 prose-neutral">
            <h1 className="mb-0 text-2xl text-center md:text-left ">
              {data.title}
            </h1>
            <h3 className="m-0 text-center md:text-left font-narrow text-neutral-500">
              {data.category}
            </h3>
            <div className="flex items-baseline justify-between w-full">
              <p className="px-1 py-0.5 font-semibold rounded-md text-neutral-600 bg-neutral-200">
                {data.rating} &#9733;
              </p>

              <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
                {formatPrice.format(data.price / 100)}
              </p>
            </div>
            <p>{data.desc}</p>
            <button>Dodaj do koszyka</button>
          </article>
        </div>

        <div className="w-full mt-8 border-t-4 border-neutral-50">
          <article className="p-4 my-12 prose prose-neutral">
            <p>{data.longDesc}</p>
          </article>
        </div>
      </div>
    </>
  );
};

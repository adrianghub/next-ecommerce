import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { ProductDetails, ProductSkeleton } from 'components';
import { StoreAPIResponse } from 'interfaces';

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback, back } = useRouter();

  if (!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto sm:w-11/12">
      <button
        className="p-4 font-extrabold bg-transparent tSext-2xl w-fit hover:text-emerald-600 rounded-4xl"
        type="button"
        onClick={() => back()}
      >
        &#8592; Back
      </button>
      {isFallback ? (
        <ProductSkeleton />
      ) : (
        <ProductDetails
          data={{
            id: data.id,
            title: data.title,
            imgSrc: data.image,
            category: data.category,
            price: data.price,
            desc: data.description,
            longDesc: data.longDescription,
            rating: data.rating.rate,
          }}
        />
      )}
    </div>
  );
};

export default ProductPage;
const NUMBER_OF_STATIC_PRODUCTS = 25;

export const getStaticPaths = async () => {
  const paths = Array.from({ length: NUMBER_OF_STATIC_PRODUCTS }, (_, i) => ({
    params: { productId: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params.productId}`,
  );
  const data: StoreAPIResponse | null = await res.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

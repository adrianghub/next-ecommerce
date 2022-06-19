export const Background = () => {
  return (
    <div className="w-full text-gray-900 flex flex-col items-center justify-center mx-auto bg-center bg-cover h-[300px]">
      <h2 className="mb-8 text-5xl font-extrabold tracking-wider uppercase sm:text-7xl">
        {` `}
        <span className="hidden mr-24 sm:inline-block opacity-75 w-24 h-[1px] bg-gray-100"></span>
        {` `}
        STORE{` `}
        <span className="hidden ml-24 sm:inline-block opacity-75 w-24 h-[1px] bg-neutral-100"></span>
      </h2>

      <p className="text-2xl sm:text-4xl font-narrow ">Next.Ecommerce.</p>
    </div>
  );
};

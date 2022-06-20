export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-4 my-4 rounded-lg shadow-md bg-neutral-100">
      <div className="flex flex-col items-center h-full gap-6 py-4 animate-pulse ">
        <div className="h-48 rounded-lg bg-neutral-300 w-36"></div>
        <div className="flex flex-col space-y-3">
          <div className="h-6 rounded-md bg-neutral-300 w-36"></div>
          <div className="self-end w-24 h-6 rounded-md bg-neutral-300 "></div>
        </div>
      </div>
    </div>
  );
};

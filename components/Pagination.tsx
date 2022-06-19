import Link from 'next/link';

const LEFT_RIGHT = 2;

type PaginationProps = {
  activePage: number;
  totalPages: number | undefined;
  minPageLimit: number;
  maxPageLimit: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

export const Pagination = ({
  onNextClick,
  onPrevClick,
  activePage,
  minPageLimit,
  maxPageLimit,
  totalPages,
}: PaginationProps) => {
  const currentPageNum = activePage || 0;
  const totalPagesNum = totalPages || 2;

  const pages = [...new Array(totalPagesNum - 2)].map((_, i) => i + 1);

  const handlePrevClick = () => {
    onPrevClick();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <div className="mt-12 mb-8 border-neutral-200">
      <div className="flex items-center justify-center w-full md:gap-4">
        {!activePage ? (
          <div className="font-bold text-neutral-500">Loading...</div>
        ) : (
          <>
            <Link
              scroll={false}
              href={
                currentPageNum > 1
                  ? `/products/${currentPageNum - 1}`
                  : `/products/1`
              }
            >
              <button
                onClick={handlePrevClick}
                className={` ${
                  currentPageNum <= 1
                    ? `pointer-events-none text-neutral-400`
                    : null
                }   font-semibold p-3 transition-colors hover:text-emerald-600`}
              >
                Previous
              </button>
            </Link>
            <div className="items-baseline hidden sm:flex">
              <Link scroll={false} href={`/products/1`}>
                <button
                  onClick={handlePrevClick}
                  className={`${
                    currentPageNum === 1
                      ? `text-emerald-700 border-t-2 border-emerald-600`
                      : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                  } inline-flex items-center p-2 text-sm font-extrabold  border-t-2`}
                >
                  1
                </button>
              </Link>

              {minPageLimit > LEFT_RIGHT + 1 ? <div>&hellip;</div> : null}
              {pages.map((page) => {
                if (
                  page < maxPageLimit - LEFT_RIGHT &&
                  page >= minPageLimit - LEFT_RIGHT
                ) {
                  return (
                    <Link
                      scroll={false}
                      key={page}
                      href={`/products/${page + 1}`}
                    >
                      <a
                        className={`${
                          currentPageNum === page + 1
                            ? `text-emerald-700 border-t-2 border-emerald-600`
                            : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                        } inline-flex items-center p-2 text-sm font-extrabold  border-t-2`}
                      >
                        {page + 1}
                      </a>
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
              {pages.length > maxPageLimit - (LEFT_RIGHT + 1) ? (
                <div>&hellip;</div>
              ) : null}

              <Link scroll={false} href={`/products/${totalPages}`}>
                <a
                  className={`${
                    activePage === totalPages
                      ? `text-emerald-700 border-t-2 border-emerald-600`
                      : `text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300`
                  } inline-flex items-center p-2 text-sm font-extrabold  border-t-2`}
                >
                  {totalPages}
                </a>
              </Link>
            </div>

            <Link
              scroll={false}
              href={
                totalPages && currentPageNum < totalPages
                  ? `/products/${currentPageNum + 1}`
                  : `/products/${totalPages}`
              }
            >
              <button
                onClick={handleNextClick}
                className={` ${
                  currentPageNum === totalPages
                    ? `pointer-events-none text-neutral-400`
                    : null
                } p-3 font-semibold transition-colors hover:text-emerald-600`}
              >
                Next
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

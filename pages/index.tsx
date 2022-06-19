import { Background } from 'components';
import Link from 'next/link';

const Home = () => (
  <div className="flex flex-col items-center translate-y-1/2">
    <Background />
    <div className="transition -translate-y-[300px] hover:-translate-y-[310px] w-fit">
      <Link href={`products/1`}>
        <a className="px-5 py-5 font-bold text-white border-none rounded shadow-2xl lg:text-xl lg:px-10 lg:py-5 bg-neutral-800">
          All products
        </a>
      </Link>
    </div>
  </div>
);

export default Home;

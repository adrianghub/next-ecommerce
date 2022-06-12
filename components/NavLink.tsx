import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  to: string;
  text: string;
  additionalClasses?: string;
}

export const NavLink = ({ to, text, additionalClasses }: ActiveLinkProps) => {
  const { pathname } = useRouter();
  const isSelected = pathname === to;
  const selectedClasses = 'selected';
  const classes =
    isSelected && additionalClasses
      ? `${selectedClasses} ${additionalClasses}`
      : isSelected
      ? selectedClasses
      : additionalClasses
      ? additionalClasses
      : '';

  return (
    <Link href={to} passHref>
      <a className={`block py-2 pr-4 pl-3 md:bg-transparent md:p-0 ${classes}`}>
        {text}
      </a>
    </Link>
  );
};

import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  to: string;
  text: string;
  additionalClasses?: string;
  additionalSelectedClasses?: string;
}

export const NavLink = ({
  to,
  text,
  additionalClasses,
  additionalSelectedClasses,
}: ActiveLinkProps) => {
  const { pathname } = useRouter();
  const isSelected = pathname === to;
  const selectedClasses = `${
    additionalSelectedClasses ? additionalSelectedClasses : ''
  }`;
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
      <a className={`${!isSelected ? 'border-transparent' : 'text-indigo-700'} ${classes}`}>
        {text}
      </a>
    </Link>
  );
};

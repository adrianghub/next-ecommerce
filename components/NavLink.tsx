import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  to: string;
  text: string;
  additionalClasses?: string;
}

export const NavLink = ({
  to,
  text,
  additionalClasses,
}: ActiveLinkProps) => {
  const { pathname } = useRouter();
  const isSelected = pathname === to;
  const classes =
    isSelected && additionalClasses
      ? `selected ${additionalClasses}`
      : isSelected
      ? 'selected'
      : additionalClasses
      ? additionalClasses
      : '';

  return (
    <Link href={to} passHref>
      <a className={classes}>{text}</a>
    </Link>
  );
};

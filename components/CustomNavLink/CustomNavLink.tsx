import Link from "next/link";

interface CustomNavLinkProps {
  href: string;
  pathName: string;
  exact: boolean;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  href,
  exact,
  pathName,
  children,
}) => {
  const isActive = pathName === href && exact;
  return (
    <Link
      href={href}
      className={`text-[1.7rem] font-medium py-2 mx-6 font-sans tracking-wide  hover:text-custom-red-light-2   ${
        isActive ? "  text-custom-white" : " text-custom-black-1"
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomNavLink;

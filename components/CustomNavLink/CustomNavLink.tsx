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
      className={`text-[1.7rem] font-medium py-2 mx-6 font-sans tracking-wide text-custom-black hover:text-custom-black-1 border-b-4  ${
        isActive ? "border-b-4 border-custom-red-light-2" : "border-transparent"
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomNavLink;

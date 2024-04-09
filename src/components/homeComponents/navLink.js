import Link from "next/link";

const NavLink = (props) => {
  const { pathName, pageTitle, pageDescription } = props;

  return (
    <Link
      href={pathName}
      className="group rounded-lg border border-transparent px-5 py-4 transition duration-300 hover:scale-110 hover:border-gray-300 hover:dark:border-neutral-700"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>{pageTitle}</h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{pageDescription}</p>
    </Link>
  );
};

export default NavLink;

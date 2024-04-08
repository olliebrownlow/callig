import Link from "next/link";

const NavLink = (props) => {
  const { pathName, pageTitle, pageDescription } = props;

  return (
    <Link
      href={pathName}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold group-hover:text-3xl`}>
        {pageTitle}
      </h2>
      <p
        className={`m-0 max-w-[30ch] text-sm opacity-50 group-hover:text-base`}
      >
        {pageDescription}
      </p>
    </Link>
  );
};

export default NavLink;

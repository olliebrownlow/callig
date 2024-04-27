import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center text-center pt-28">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Uh oh! 404 Page not found
      </h2>
      <p className={`m-2 mt-4 max-w-[30ch] text-xl opacity-70`}>
        Looks like you've tried to navigate to the wrong place
      </p>
      <Link
        data-testid="goHome"
        className={`border-2 border-indigo-900 rounded m-0 p-8 mt-8 text-sm`}
        href="/"
      >
        RETURN HOME
      </Link>
    </div>
  );
}

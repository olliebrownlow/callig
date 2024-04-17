import navLinks from "../config/navLinks";
import NavLink from "../components/homeComponents/navLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1
        data-testid="homepage-title"
        className={`font-mono text-center mb-3 text-7xl`}
      >
        Carolina Calligraphy
      </h1>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {navLinks.map((link) => (
          <NavLink
            key={link.pageTitle}
            pathName={link.pathName}
            pageTitle={link.pageTitle}
            pageDescription={link.pageDescription}
          />
        ))}
      </div>
    </main>
  );
}

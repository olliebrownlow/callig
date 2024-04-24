export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col pt-28">
      <h1
        data-testid="homepage-title"
        className={`font-sans text-center mb-3 text-4xl`}
      >
        Contact Details
      </h1>

      <div className="grid text-left pl-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className={`mb-3 pt-12 text-2xl font-semibold`}>Telephone</h2>
        <p
          className={`ml-2 mt-2 max-w-[30ch] text-xl opacity-90`}
        >
          Carolina: 07980 987 788
        </p>
        <h2 className={`mb-3 pt-12 text-2xl font-semibold`}>Email</h2>
        <p
          className={`ml-2 mt-2 max-w-[30ch] text-xl opacity-90`}
        >
          carolinacalligraphy@gmail.com
        </p>
      </div>
    </div>
  );
}

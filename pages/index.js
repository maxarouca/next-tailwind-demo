export default function Home() {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="w-screen h-screen font-sans lg:bg-bg-pattern bg-cover bg-center bg-no-repeat lg:flex lg:flex-row lg:justify-center lg:items-center">
        <div className="lg:w-1/2">
          <img src="images/logo.svg" alt="Logo" className="m-8 lg:ml-0 " />
          <img
            src="images/hero-mobile.jpg"
            alt="Hero image"
            className="w-full lg:hidden"
          />
          <h1 className="mb-9 mt-12 text-4xl text-center lg:text-left uppercase leading-tight text-dark tracking-widest font-semibold">
            <span className="text-light font-light">We're</span> coming soon
          </h1>
          <p className="px-9 text-light mb-9 lg:px-0">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <div className="relative flex flex-row px-9 lg:px-0 w-full">
            <input
              type="text"
              placeholder="Email Address"
              className="border border-light rounded-full h-14 w-full p-4 pr-24 placeholder-light focus:border-soft focus:border-2 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-light to-soft absolute flex flex-row justify-center right-9 lg:right-0 h-14 w-20 py-4 px-7 rounded-full focus:outline-none hover:opacity-80 transition-opacity hover:shadow-xl ">
              <img src="images/icon-arrow.svg" alt="Icon arrow button" />
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-hero-background bg-cover bg-center bg-no-repeat w-3/5"></div>
    </div>
  );
}

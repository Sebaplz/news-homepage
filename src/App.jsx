import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="m-5 grid gap-5 lg:grid-cols-3">
        <div className="h-72 bg-image-web-mobile  bg-cover lg:col-span-2 lg:row-span-1 lg:h-96 lg:bg-image-web-desktop"></div>
        <div className="flex w-3/4 items-center lg:col-span-1 lg:row-span-1 lg:row-start-2">
          <h1 className="text-5xl font-extrabold">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="flex flex-col justify-between lg:col-span-1 lg:row-span-1 lg:row-start-2">
          <p className="text-[#5D5F79]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="mt-5 w-44 bg-[#F15E50] py-3 px-7 uppercase tracking-widest text-white hover:bg-black"
          >
            read more
          </a>
        </div>
        <div className="bg-black p-10 text-white lg:col-span-1 lg:row-span-2">
          <h2 className="text-4xl font-bold text-[#E9AB53]">New</h2>
          <div className="my-6">
            <a href="#" className="text-xl font-bold hover:text-[#E9AB53]">
              Hydrogen VS Electric cars
            </a>
            <p className="mt-2 text-[#C5C6CE]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="my-6 border-t border-[#C5C6CE] pt-5">
            <a href="#" className="mt-5 text-xl font-bold hover:text-[#E9AB53]">
              The Downsides of AI Artistry
            </a>
            <p className="mt-2 text-[#C5C6CE]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="my-6 border-t border-[#C5C6CE] pt-5">
            <a
              href="#"
              className="mt-5  text-xl font-bold hover:text-[#E9AB53]"
            >
              Is VC Funding Drying Up?
            </a>
            <p className="mt-2 text-[#C5C6CE]">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="mt-10 flex">
          <img
            src="/images/image-retro-pcs.jpg"
            alt="PC retro"
            className="w-28 lg:h-40"
          />
          <div className="flex flex-col justify-between px-5">
            <h2 className="text-4xl font-extrabold text-[#C5C6CE] ">01</h2>
            <a href="#" className="text-xl font-extrabold hover:text-[#E9AB53]">
              Reviving Retro PCs
            </a>
            <p className="text-lg text-[#5D5F79]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="mt-10 flex">
          <img
            src="/images/image-top-laptops.jpg"
            alt="PC retro"
            className="w-28 lg:h-40"
          />
          <div className="flex flex-col justify-between px-5">
            <h2 className="text-4xl font-extrabold text-[#C5C6CE] ">02</h2>
            <a href="#" className="text-xl font-extrabold hover:text-[#E9AB53]">
              Top 10 Laptops of 2022
            </a>
            <p className="text-lg text-[#5D5F79]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="mt-10 flex">
          <img
            src="/images/image-gaming-growth.jpg"
            alt="PC retro"
            className="w-28 lg:h-40"
          />
          <div className="flex flex-col justify-between px-5">
            <h2 className="text-4xl font-extrabold text-[#C5C6CE] ">03</h2>
            <a href="#" className="text-xl font-extrabold hover:text-[#E9AB53]">
              The Growth of Gaming
            </a>
            <p className="text-lg text-[#5D5F79]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

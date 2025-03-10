import useWindowWidth from "../hooks/Width";

export default function Introduction() {
  const windowWidth = useWindowWidth();

  return (
    <section
      id="intro"
      className={`h-screen w-full flex items-center ${
        windowWidth < 768 ? "bg-header-mobile" : "bg-header-desktop"
      } bg-cover bg-center px-8`}>
      <div className="text-white md:bg-blue-950 p-5 rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold max-w-screen">MLConstruction</h1>
        <h2 className="text-xl mt-4 max-w-screen">Delivering Excellence in Every Build</h2>
      </div>
    </section>
  );
}

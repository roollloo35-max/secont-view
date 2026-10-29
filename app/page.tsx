
import Header from "./components/Header";
import Bunner from "./components/bunner/bunner";
import About from "./components/about/about";
import Solution from "./components/solution/solution";
import HowWork from "./components/how_work/how_work";
import Architecture from "./components/architecture/architecture";


export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <main className="">
          <Header />
          <Bunner />
          <About />
          <Solution />
          <HowWork />

          <Architecture />
      </main>
    </div>
  );
}

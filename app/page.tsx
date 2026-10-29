
import Header from "./components/Header";
import Bunner from "./components/bunner/bunner";
import About from "./components/about/about";
import Solution from "./components/solution/solution";
import HowWork from "./components/how_work/how_work";
import Checks from "./components/cheсks/checks";
import Architecture from "./components/architecture/architecture";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";



export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <main className="">
          <Header />
          <Bunner />
          <About />
          <Solution />
          <HowWork />
          <Checks />
          <Architecture />
          <Team />
          <Footer />
      </main>
    </div>
  );
}

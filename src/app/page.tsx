import Hero from "./components/Hero/Hero";
import Hire from "./components/Hire/Hire";
import Work from "./components/Work/Work";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Work/>
      <div className="divider"></div>
      <Hire/>
    </>
  );
}

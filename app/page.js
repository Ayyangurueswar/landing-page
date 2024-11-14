import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ingridients from "./components/Ingridients";
import NewArrivals from "./components/NewArrivals";
import News from "./components/News";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <NewArrivals />
      <About />
      <Ingridients />
      <Stats />
      <News />
      <Footer />
    </>
  );
}

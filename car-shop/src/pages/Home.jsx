import { useEffect } from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Cars - Home";
  }, []);

  return (
    <>
      <Header />
      <Gallery />
      <Services />
      <Carousel />
      <Footer />
    </>
  );
}

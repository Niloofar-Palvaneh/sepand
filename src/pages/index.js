import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import Bests from "@/components/ui/Bests";
import Count from "@/components/ui/Count";
import Gallery from "@/components/ui/Gallery";
import OurServises from "@/components/ui/OurServises";
import Rank from "@/components/ui/Rank";
import Slider from "@/components/ui/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider/>
      <OurServises/>
      <Count/>
      <Rank/>
      <Bests/>
      <Gallery/>
      <Footer />
    </>
  )
}

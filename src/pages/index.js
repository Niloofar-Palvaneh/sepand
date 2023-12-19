import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import Bests from "@/components/ui/Bests";
import Count from "@/components/ui/Count";
import Gallery from "@/components/ui/Gallery";
import NewArticles from "@/components/ui/NewArticles";
import OurServises from "@/components/ui/OurServises";
import Rank from "@/components/ui/Rank";
import Slider from "@/components/ui/Slider";
import Validity from "@/components/ui/Validity";

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
      <NewArticles/>
      <Validity/>
      <Footer />
    </>
  )
}

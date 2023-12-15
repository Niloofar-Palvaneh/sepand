import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import OurServises from "@/components/ui/OurServises";
import Slider from "@/components/ui/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider/>
      <OurServises/>
      <Footer />
    </>
  )
}

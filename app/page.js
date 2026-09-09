import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Steps />
      <Testimonials />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
}

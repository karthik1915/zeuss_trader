import NavBar from "@/app/components/navBar";
import HeroText from "@/app/components/herotext";
import Services from "@/app/components/services";
import AboutUs from "@/app/components/about";
import Courses from "@/app/components/courses";
import ProvidedServices from "@/app/components/topics";
import Gallery from "@/app/components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ContactOverlay, WhatsAppOverlay } from "./components/overlays";

const NavBarLinks: [string, string][] = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#about", "About Us"],
  ["#gallery", "Gallery"],
  ["/blogs", "Blogs"],
  ["#contact", "Contact"],
];

export default function Home() {
  return (
    <main className="font-VarelaRound overflow-x-hidden">
      <div
        id="home"
        className="h-[80vh] w-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/background1.webp')" }}
      >
        <NavBar>{NavBarLinks}</NavBar>
        <div className="mx-auto grid h-full w-screen max-w-7xl grid-rows-[70px,1fr]">
          <HeroText />
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <Services />
        <AboutUs />
        <Courses />
        <ProvidedServices />
        <Gallery />
        <Contact />
      </div>
      <Footer />
      <ContactOverlay />
      <WhatsAppOverlay />
    </main>
  );
}

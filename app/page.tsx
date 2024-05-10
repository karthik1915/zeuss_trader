import NavBar from "@/app/components/navBar";
import HeroText from "@/app/components/heroText";
import Services from "@/app/components/services";
import AboutUs from "@/app/components/about";
import Courses from "@/app/components/topics";
import ProvidedServices from "@/app/components/providedServices";
import Gallery from "@/app/components/gallery";
import ContactOverlay, { WhatsAppOverlay } from "./components/overlays";
import Contact from "./components/contact";
import Footer from "./components/footer";

const NavBarLinks: [string, string][] = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#about", "About Us"],
  ["#gallery", "Gallery"],
  ["#testimonials", "Testimonials"],
  ["#contact", "Contact"],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden font-VarelaRound">
      <div
        id="home"
        className="h-[80vh] w-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/background.png')" }}
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

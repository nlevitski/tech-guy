import About from "@/components/landing/About";
import Contacts from "@/components/landing/Contacts";
import Footer from "@/components/landing/Footer";
import Guarantees from "@/components/landing/Guarantees";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Works from "@/components/landing/Works";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Works />
        <Guarantees />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

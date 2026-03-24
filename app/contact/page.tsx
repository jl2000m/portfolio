import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's talk. Projects, collaborations, and conversations about e-commerce, applied AI, and product.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}

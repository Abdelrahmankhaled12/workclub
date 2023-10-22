import { ButtonTop, Features, Footer, Header, Hero, Partners, Simply, Subscribers, Team } from "@/components";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Partners />
      <Simply />
      <Features />
      <Team />
      <Subscribers />
      <ButtonTop />
      <Footer />
    </div>
  )
}

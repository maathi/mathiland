import Contact from "../components/contact"
import Footer from "../components/footer"
import Intro from "../components/intro"
import Menu from "../components/menu"
import Projects from "../components/projects"
import Quote from "../components/quotes"
import Techs from "../components/techs"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title>Mathiland | Home</title>
      </Head>
      <Quote />
      <Menu />
      <div className="main-content">
        <Intro />
        <Techs />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

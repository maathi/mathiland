import Image from "next/image"
import { FaTwitter, FaGithubAlt, FaYoutube } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Intro from "../components/intro"
import Projects from "../components/projects"
import Quote from "../components/quotes"
import Techs from "../components/techs"

export default function Home() {
  return (
    <>
      <Quote />
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

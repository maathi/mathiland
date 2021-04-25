import { FaTwitter, FaGithubAlt } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { sendEvent } from "../utils/event"

export default function Intro() {
  return (
    <section id="intro">
      <div>
        <div id="card" className="color">
          <img
            src="img/mathi.jpg"
            onMouseDown={() => {
              sendEvent("pic")
            }}
          ></img>
          <p>zoomer | full stack developper | future ninja</p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/kitsutsukix"
                target="_blank"
                rel="noreferrer"
                className="twitter"
                onMouseDown={() => {
                  sendEvent("twitter")
                }}
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maathi"
                target="_blank"
                rel="noreferrer"
                className="github"
                onMouseDown={() => {
                  sendEvent("github")
                }}
              >
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a
                href="mailto:mahdi221b@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="mail"
                onMouseDown={() => {
                  sendEvent("mail")
                }}
              >
                <MdMail />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>
          Hey <span id="wave">👋</span>, I'm mathi, a software developer.
        </h1>
        <p>
          I have a tremendous passion for solving real world problems through
          technology. I find great joy in creating software that has the
          potential to make people's lives somehow easier.
        </p>
      </div>
    </section>
  )
}

import { FaExternalLinkAlt } from "react-icons/fa"
// import { AiFillSetting } from "react-icons/ai"
import React from "react"
import { FiGithub } from "react-icons/fi"

import {
  Postgres,
  Node,
  Graphql,
  ReactIcon,
  Jwt,
  Mongodb,
  Redux,
  Express,
  Sass,
  Typescript,
  Css,
} from "./common/icons"
import { sendEvent } from "../utils/event"

function Projects() {
  let prjs = [
    {
      id: 1,
      title: "Horu",
      img: "horu-screenshot.png",
      github: "horu",
      desc: "Horu (who are you) is a simple analytic tool made with love.",
      tools: [
        <Postgres />,
        <Node />,
        <Express />,
        <ReactIcon />,
        <Typescript />,
        <Sass />,
      ],
    },
    {
      id: 2,
      title: "Artz",
      img: "artz-screenshot.png",
      website: "https://artz.netlify.com/",
      github: "artz",
      desc: "Artz allows users to create nice paintings using Canvas API and share them with the world.",
      tools: [
        <Postgres />,
        <Node />,
        <Graphql />,
        <Jwt />,
        <ReactIcon />,
        <Css />,
      ],
    },
    {
      id: 3,
      title: "Junkzone",
      img: "junkzone-screenshot.png",
      website: "https://junkzone.netlify.com",
      github: "junkzone",
      desc: "An E-commerce website built with MERN stack.",
      tools: [
        <Mongodb />,
        <Node />,
        <Express />,
        <Jwt />,
        <ReactIcon />,
        <Redux />,
        <Sass />,
      ],
    },
  ]

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="prjs">
        {prjs.map((p) => (
          <div key={p.id} className="prj">
            <div id="wrapper">
              <img src={"img/" + p.img} alt="Avatar"></img>
            </div>

            <div>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>

              <ul className="tools">
                {p.tools?.map((t) => {
                  return (
                    <React.Fragment key={Math.random()}>{t}</React.Fragment>
                  )
                })}
              </ul>

              <ul className="links">
                <a
                  href={"https://github.com/maathi/" + p.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseDown={() => {
                    sendEvent(p.title + "g")
                  }}
                >
                  <FiGithub />
                </a>
                {p.website ? (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noreferrer"
                    onMouseDown={() => {
                      sendEvent(p.title)
                    }}
                  >
                    <FaExternalLinkAlt />
                  </a>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button
        onMouseDown={() => {
          window.open("https://github.com/maathi/")
          sendEvent("githubp")
        }}
      >
        Find more on github
      </button>
    </section>
  )
}

export default Projects

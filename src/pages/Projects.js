import Table from "react-bootstrap/Table";
import Project from "../components/Project";
import { Github, BoxArrowRight } from "react-bootstrap-icons";

function Projects() {
  return (
    <div className="jumbotron container">
      <h1 className="display-4">Project index</h1>
      <p className="lead">
        This page contains some of the publically available the projects I have
        done, the <Github /> icon will take you to the repo and the{" "}
        <BoxArrowRight /> icon will take you to the web page.
      </p>
      <hr className="my-4" />

      <Table className="Table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <Project
            name="Hydrametry Software"
            description="Homepage for Hydrametry Software, we're making a game, check it
              out!"
            link="https://hydrametry.com/"
          />
          <Project
            name="Overwatch Profile Builder"
            description="Developed backend for users creating profiles using a web server, storing user profile data using MySQL,
communicating between virtual machines through RabbitMQ using PHP and AMQP, scripted data collection
from 3rd party data source, deployment script that deploys the system across a given network."
            link="https://github.com/urasurasuras/it490"
          />
          <Project
            name="3D Game Programming"
            description="3D endless first person survival shooter, with features such as first person camera rotation and character
movement, collision detection, 2D and 3D rendering pipelines, entity system, level editor and loading to and
from user configured files. Programmed in the C programming language using the gf3d framework along with
Vulkan Graphics API & SDL 2"
            link="https://github.com/urasurasuras/gf3d"
          />
          <Project
            name="IS 117"
            description="This repository is the first one to contain the first few
              assignments for this class. It contains assignments 1-3 in
              individual folders"
            link="https://github.com/urasurasuras/is117"
          />

          {/* <tr>
            <th scope="row">3</th>
            <td>How the Tnternet Works</td>
            <td>
              This webpage goes through how the Internet works. It also has a
              "GitHub Pages" page
            </td>
            <td>
              <a href="https://github.com/urasurasuras/HowTheInternetWorks">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://urasurasuras.github.io/HowTheInternetWorks/">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>History of the Internet</td>
            <td>History of the Internet. Team project (empty content)</td>
            <td>
              <a href="https://github.com/urasurasuras/IS117---History-of-the-Internet">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://urasurasuras.github.io/IS117---History-of-the-Internet/">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Cloud Technology </td>
            <td>
              Informational webpage about Docker, Kubernetes, containerization
              and cloud technology. Team project (empty content)
            </td>
            <td>
              <a href="https://github.com/urasurasuras/is117-dockerpage">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://urasurasuras.github.io/is117-dockerpage//">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>The Internet </td>
            <td>
              Combination of "How the Internet Works" and "History of the
              Internet" web pages
            </td>
            <td>
              <a href="https://github.com/urasurasuras/is117-the-internet">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://urasurasuras.github.io/is117-the-internet/">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </a>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default Projects;

import Table from "react-bootstrap/Table";
import Project from "../components/Project";
import { BoxArrowRight } from "react-bootstrap-icons";

function Projects() {
  return (
    <div className="jumbotron container">
      <h1 className="display-4">Project index</h1>
      <p className="lead">
        This page contains some of the publically available the projects I have
        done, the <BoxArrowRight /> icon will take you to the web page.
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
            name="2D Game Programming"
            description="The 2v2 top-down arena fighter game is an exciting multiplayer game that can be played using either a keyboard, a mouse, or a controller. The game features various systems that enhance the gameplay experience, including controller support, local multiplayer, objectives, powerups, player interaction, multiple interactive levels, and a level editor. Programmed in the C programming language using the gf3d framework along with SDL 2"
            link="https://github.com/urasurasuras/gf2d"
          />
          <Project
            name="Cards of Betrayal"
            description="Original digital card game. This Unity project is a demo which can only be played locally by players taking turns. Rules of play are available in the README of the project."
            link="https://github.com/urasurasuras/Cards-of-Betrayal"
          />
        </tbody>
      </Table>
    </div>
  );
}

export default Projects;

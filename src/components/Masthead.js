import { Endpoints } from "../variables/Endpoints";

function Masthead(props) {
  // const dispatch = useDispatch();

  // dispatch({ type: "makeNewBadge" });
  return (
    <header className="masthead" id="home">
      <div className="container h-100">
        <div className="row h-100 align-items-center  ">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              Portfolio
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-normal mb-5">
              Thanks for stopping by my portfolio page! <br />
              As an aspiring fullstack developer, I have experience with a wide
              range of technologies and frameworks.
              <br />
              Check out my work to see what I can create!
              <br />
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href={Endpoints.Portfolio}
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;

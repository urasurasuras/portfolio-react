function Lodge() {
  // This embed is straight from Sketchfab
  return (
    <div className="jumbotron container">
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Lodge_Sprint3"
          frameBorder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/ddf14799b71a40618db10f36283bd520/embed"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/lodge-sprint3-ddf14799b71a40618db10f36283bd520?utm_medium=embed&utm_campaign=share-popup&utm_content=ddf14799b71a40618db10f36283bd520"
            target="_blank"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Lodge_Sprint3{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/uo7?utm_medium=embed&utm_campaign=share-popup&utm_content=ddf14799b71a40618db10f36283bd520"
            target="_blank"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            uo7{" "}
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ddf14799b71a40618db10f36283bd520"
            target="_blank"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </div>
  );
}

export default Lodge;

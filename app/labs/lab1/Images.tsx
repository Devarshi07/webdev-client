export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          alt="Starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          height="200px"
          alt="Tesla Bot (Optimus) humanoid robot"
        />
        <br />
        Loading another image from the internet:
        <br />
        <img
          id="wd-ai-image"
          src="https://science.nasa.gov/wp-content/uploads/2023/09/web-first-images-release.png"
          width="200px"
          alt="Webb's First Deep Field"
        />

        <h4>Skyline R34</h4>
        <img
          id="wd-your-image"
          src="/images/skyliner34.jpg"
          height="300px"
          alt="Skyline R34"
        />
      </div>
    );
  }
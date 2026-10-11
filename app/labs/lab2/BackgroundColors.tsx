export default function BackgroundColors() {
    return (
      <div id="wd-css-background-colors">
        <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but{" "}
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
        <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
          This sample paragraph has a yellow background and black text
        </p>


        <h4 className="wd-bg-color-yellow wd-fg-color-black">
        Yellow background with black text stays readable
        </h4>
        <p className="wd-bg-color-gray wd-fg-color-black">
            A light gray background with black text is another readable pairing, 
            while{" "}
            <span className="wd-bg-color-blue wd-fg-color-white">blue needs white text instead</span>
        </p>
      </div>
    );
  }
export default function Dimensions() {
    return (
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
        </div>
        <br />
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box is declared as 120px wide and 60px tall, so this long
          sentence wraps and spills out past the yellow background.
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <div className="wd-dimension-wide wd-bg-color-gray">Short Sentence</div>
        <br />
        <div className="wd-dimension-wide wd-bg-color-gray">
            This box has a much longer sentence inside it, but its width and
            height are fixed so the box does not grow to fit the text.
        </div>
      </div>
    );
  }
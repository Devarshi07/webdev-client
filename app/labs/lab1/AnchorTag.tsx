export default function AnchorTag() {
    return (
      <>
        <h4>Anchor tag</h4>
        Please{" "}
        <a href="https://www.lipsum.com" id="wd-lipsum">
          click here
        </a>{" "}
        to get dummy text
        <br />
        <a href="https://github.com/Devarshi07" id="wd-github">
          GitHub
        </a>

        <br />
        <h4>Absolute URL (CNN News)</h4>
        <a href="https://www.cnn.com/" id="wd-your-link">cnn.com</a>

        <br />
        <h4>Github</h4>

        <a
        href="https://github.com/Devarshi07"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github"
        >
        Github (new tab)
        </a>

        <br />
        <h4>Absolute URL (MDN Reference)</h4>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          id="wd-ai-link"
        >
          MDN: table element
        </a>

      </>
    );
  }
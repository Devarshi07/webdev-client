"use client";

export default function YourForm() {
  return (
    <div id="wd-your-form-section">
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Text Fields</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input
          type="text"
          id="wd-your-first-name"
          placeholder="Jane"
          defaultValue="Jane"
          title="Your given name"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input
          type="text"
          id="wd-your-last-name"
          placeholder="Doe"
          defaultValue="Doe"
          title="Your family name"
        />
        <br />
        <label htmlFor="wd-your-password">Password: </label>
        <input
          type="password"
          id="wd-your-password"
          placeholder="sample-password"
          defaultValue="sample-password"
          title="Your password"
        />
        <br />

        <h5>Text Box</h5>
        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={6}
          defaultValue="SAMPLE: I am a graduate student and I want to understand the full path a request travels — from the markup and styling in the browser, through React state and routing, down to the API and the database behind it. Replace this placeholder with your own reason for taking the course."
        />
        <br />

        <h5>Radio Buttons</h5>
        <label>Class standing:</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-junior" />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label>
        <br />
        <br />
        <label>Enrollment:</label>
        <br />
        <input
          type="radio"
          name="wd-your-enrollment"
          id="wd-your-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <br />
        <input type="radio" name="wd-your-enrollment" id="wd-your-part-time" />
        <label htmlFor="wd-your-part-time">Part-time</label>
        <br />

        <h5>Checkboxes</h5>
        <label>Interests:</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-backend"
          defaultChecked
        />
        <label htmlFor="wd-your-backend">Backend engineering</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-distributed"
        />
        <label htmlFor="wd-your-distributed">Distributed systems</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-ml"
          defaultChecked
        />
        <label htmlFor="wd-your-ml">Machine learning</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-open-source"
        />
        <label htmlFor="wd-your-open-source">Open source</label>
        <br />

        <h5>Dropdowns</h5>
        <label htmlFor="wd-your-major">Major: </label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="SES">Software Engineering Systems</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Systems</option>
        </select>
        <br />
        <br />
        <label htmlFor="wd-your-topics">
          Topics I want to deepen this term:{" "}
        </label>
        <br />
        <select multiple id="wd-your-topics" defaultValue={["REACT", "MONGODB"]}>
          <option value="HTML">HTML and CSS</option>
          <option value="REACT">React and Next.js</option>
          <option value="NODE">Node.js and Express</option>
          <option value="MONGODB">MongoDB</option>
          <option value="DEPLOY">Deployment and CI</option>
        </select>
        <br />

        <h5>Other Field Types</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          id="wd-your-email"
          placeholder="jane@university.edu"
          defaultValue="jane@university.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2026}
          max={2030}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input
          type="date"
          id="wd-your-start-date"
          defaultValue="2025-09-02"
          min="2020-01-01"
          max="2030-12-31"
        />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0&ndash;10):{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          defaultValue="9"
          min="0"
          max="10"
        />
        <br />

        <h5>Buttons</h5>
        <button id="wd-your-save" type="submit">
          Save
        </button>{" "}
        <button id="wd-your-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

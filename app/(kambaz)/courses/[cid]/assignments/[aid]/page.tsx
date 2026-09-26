import Link from "next/link";

export default async function AssignmentEditor({
    params}: {
    params: Promise<{ cid: string; aid: string }>;
  }) {
    const { cid } = await params;
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description" 
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running in Vercel.
The landing page should include the following:
- your full name and section
- Links to each of the lab Assignments
- Links to the Kambaz application
- Links to all relevant source code repositories
The Kambaz application should include a link to navigate back to the landing page." rows={15} cols={100} />
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
              </td>
              <td>
                <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="Dropbox">Dropbox</option>
                </select>
                <br />
                <label>Online Entry Options</label>
                <br />
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
              </td>
            </tr>

            <tr>
              <td align="right" valign="top">
              <label>Assign</label>
              </td>
              <td>
              <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <input id="wd-assign-to" defaultValue="Everyone" />
                <br />
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input type="date" id="wd-due-date" defaultValue="2026-05-13" />
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="wd-available-from">Available from</label>
                      </td>
                      <td>
                      <label htmlFor="wd-available-until">Until</label>
                        
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input type="date" id="wd-available-from" defaultValue="2026-05-06"/>
                      </td>
                      <td>
                        <input type="date" id="wd-available-until" defaultValue="2026-05-20"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
          Cancel
        </Link>{" "}
        <Link href={`/courses/${cid}/assignments`} id="wd-save">
          Save
        </Link>
      </div>
    );
  }
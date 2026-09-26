export default function Tables() {
    return (
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th align="center">Topic</th>
              <th align="center">Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td align="center">HTML</td>
              <td align="center">2/3/21</td>
              <td align="right">85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td align="center">CSS</td>
              <td align="center">2/10/21</td>
              <td align="right">90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td align="center">JavaScript</td>
              <td align="center">2/17/21</td>
              <td align="right">95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td align="center">DOM Manipulation</td>
              <td align="center">2/24/21</td>
              <td align="right">88</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td align="center">React Components</td>
              <td align="center">3/3/21</td>
              <td align="right">92</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td align="center">State and Hooks</td>
              <td align="center">3/10/21</td>
              <td align="right">78</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td align="center">Routing</td>
              <td align="center">3/17/21</td>
              <td align="right">94</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td align="center">Redux</td>
              <td align="center">3/24/21</td>
              <td align="right">86</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td align="center">Node and Express</td>
              <td align="center">3/31/21</td>
              <td align="right">91</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td align="center">MongoDB</td>
              <td align="center">4/7/21</td>
              <td align="right">97</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td align="right">89.6</td>
            </tr>
          </tfoot>
        </table>

        <h4>2026 Courses</h4>
        <table id="wd-your-table" border={1} width="100%">
            <thead>
                <tr>
                    <th align="center">Course Code</th>
                    <th align="center">Course Name</th>
                    <th align="center">Semester</th>
                    <th align="center">Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ENCP 6964</td>
                    <td align="center">Co-op Work Experience</td>
                    <td align="center">Spring 2026</td>
                    <td align="right">A</td>
                </tr>
                <tr>
                    <td>CS 5610</td>
                    <td align="center">Web Development</td>
                    <td align="center">Fall 2026</td>
                    <td align="right">TBD</td>
                </tr>
                <tr>
                    <td>IE 6600</td>
                    <td align="center">Computation and Visualization</td>
                    <td align="center">Fall 2026</td>
                    <td align="right">TBD</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>Average</td>
                    <td align="right">TBD</td>
                </tr>
            </tfoot>
        </table>
      </div>

      
    );
  }
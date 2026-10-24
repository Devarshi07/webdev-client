export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const projectCar = { model: "Nissan Skyline GT-R R34", cylinders: 6 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      projectCar = {JSON.stringify(projectCar)} <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}

export default function VariableTypes() {
  const numberVariable = 123;
  const floatingPointNumber = 234.345;
  const stringVariable = "Hello World!";
  const booleanVariable = true;
  const isNumber = typeof numberVariable;
  const isString = typeof stringVariable;
  const isBoolean = typeof booleanVariable;
  const favoriteCar = "Nissan Skyline GT-R R34";
  const jerseyNumber = 10;
  const sampleCount = 42;
  const sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variable Types</h4>
      numberVariable = {numberVariable} <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable} <br />
      booleanVariable = {booleanVariable + ""} <br />
      isNumber = {isNumber} <br />
      isString = {isString} <br />
      isBoolean = {isBoolean} <br />
      favoriteCar = {favoriteCar} <br />
      typeof favoriteCar = {typeof favoriteCar} <br />
      jerseyNumber = {jerseyNumber} <br />
      typeof jerseyNumber = {typeof jerseyNumber} <br />
      sampleCount = {sampleCount} <br />
      typeof sampleCount = {typeof sampleCount} <br />
      sampleLabel = {sampleLabel} <br />
      typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}

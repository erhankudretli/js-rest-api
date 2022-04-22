/*
 *This is a basic example of getting data and show them on the HTML Page
 */
const userAction = async () => {
  const response = await fetch("https://swapi.dev/api/planets/");
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson´
  console.log(myJson.results);
  let myData = myJson.results;

  //console.log(x[0].name);

  return myData;
};

const showMyData = (myData) => {
  document.getElementById("content").innerHTML = myData.map(
    (planet) =>
      `
    <tr>
    <th scope="row">1</th>
    <td>${planet.name}</td>
    <td>${planet.rotation_period}</td>
    <td>${planet.diameter}</td>
    </tr>
    `
  );
};

userAction().then((myData) => showMyData(myData));

// Dummy user count and flavor percentages. In a real application, these would come from a server.
let userCount = 1234;
let flavorPercentages = {
  1: 40,
  2: 30,
  3: 30
};

document.getElementById('userCount').textContent = userCount;

let percentagesDiv = document.getElementById('percentages');
for (let flavor in flavorPercentages) {
  let p = document.createElement('p');
  p.textContent = `Taste ${flavor}: ${flavorPercentages[flavor]}%`;
  percentagesDiv.appendChild(p);
}

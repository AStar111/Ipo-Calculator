//Simple Addition Calculator

//Btn event listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //Input
  let S1 = +document.getElementById("S1").value;
  let S2 = +document.getElementById("S2").value;
  let S3 = +document.getElementById("S3").value;

  //Process
  let S = (S1 + S2 + S3) / 2;

  let area = Math.sqrt(S * (S - S1) * (S - S2) * (S - S3));

  //Output
  document.getElementById("output").innerHTML = area;
}

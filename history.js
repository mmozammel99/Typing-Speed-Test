const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, wpm) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");
  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <br/>
  <p>You took: <span class="bold">  ${timeTaken}  </span> seconds</p>
  <br/>
  <p>You made <span class="bold red">  ${errorCount}  </span> mistakes</p>
  <br/>
  <p>Your speed <span class="bold red">${wpm}</span> WPM</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, wpm });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
console.log(test);
    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <br/>
  <p>You took: <span class="bold">  ${test.timeTaken}  </span> seconds</p>
  <br/>
    <p>You made <span class="bold red">  ${test.errorCount} </span> mistakes</p>
    <br/>
    <p>Your speed <span class="bold red">${test.wpm} </span>WPM</p>
  `;

    histories.appendChild(newRow);
  });
}

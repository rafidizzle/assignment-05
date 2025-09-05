// heart feature
const navbarHeartCount = document.querySelector(
  ".navbar .flex > .flex.items-center span"
);

let count = 0;

const cardHearts = document.querySelectorAll(".fa-heart");

for (let i = 0; i < cardHearts.length; i++) {
  cardHearts[i].addEventListener("click", () => {
    count++;
    navbarHeartCount.textContent = count;
  });
}

const CallHistoryData = [];

// call feature
//number1
document.getElementById("call-btn").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling  National Emergency Number at 999`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;

  const data = {
    name: "National Emergency Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number2
document.getElementById("call-btn2").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling  Police Helpline Number at 999`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;

  const data = {
    name: "Police Helpline Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number3
document.getElementById("call-btn3").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling  Fire Service Number at 999`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Fire Service",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number4
document.getElementById("call-btn4").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling Ambulance Service Number at 1994-999999`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Ambulance Service",
    number: "1994-999999",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number5
document.getElementById("call-btn5").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling  Women & Child Helpline at 109`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Women & Child Helpline",
    number: "109",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number6
document.getElementById("call-btn6").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`Anti-Corruption Helpline at 106`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Anti-Corruption Helpline",
    number: "106",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number7
document.getElementById("call-btn7").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling Electricity Helpline at 16216`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Electricity Helpline",
    number: "16216",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number8
document.getElementById("call-btn8").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`calling  Brac Helpline at 16445`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Brac Helpline",
    number: "16445",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});
//number9
document.getElementById("call-btn9").addEventListener("click", function () {
  let balance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (balance < 20) {
    alert("insufficient balance");
    return;
  }
  alert(`Calling Bangladesh Railway Helpline at 163`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
  const data = {
    name: "Bangladesh Railway",
    number: "163",
    date: new Date().toLocaleTimeString(),
  };
  CallHistoryData.push(data);

  const HistoryContainer = document.getElementById("History-container");
  HistoryContainer.innerText = "";
  for (const data of CallHistoryData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="flex gap-5 bg-gray-100 rounded-md p-2 mt-3">
              <div>
                <h1 class="hind-madurai-semibold md:text-[18px]">
                  ${data.name}
                </h1>
                <p>${data.number}</p>
              </div>
              <div><p>${data.date}</p></div>
            </div>`;

    HistoryContainer.appendChild(div);
  }
});

//clear button;
let historyData = [];
const history = document.getElementById("History-container");
const ClearBtn = document.getElementById("clear-btn");
ClearBtn.addEventListener("click", function () {
  history.innerHTML = " ";
  historyData = [];
});
//copy feature

const navbarCopyCount = document.querySelector("#navbar-copy");

let count1 = 0;

const cardCopy = document.querySelectorAll(".copy-btn");

for (let i = 0; i < cardCopy.length; i++) {
  cardCopy[i].addEventListener("click", () => {
    count1++;
    navbarCopyCount.textContent = count1;
  });
}

function copyText() {
  let text = document.getElementById("cardText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}
function copyText4() {
  let text = document.getElementById("cardText4").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}
function copyText5() {
  let text = document.getElementById("cardText5").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}
function copyText6() {
  let text = document.getElementById("cardText6").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}
function copyText7() {
  let text = document.getElementById("cardText7").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}
function copyText8() {
  let text = document.getElementById("cardText8").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}
function copyText9() {
  let text = document.getElementById("cardText9").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied: " + text);
  });
}

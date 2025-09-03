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
  alert(`Bangladesh Railway Helpline at 163`);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - 20;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});

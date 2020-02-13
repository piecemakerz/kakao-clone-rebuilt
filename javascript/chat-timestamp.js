const chatContainer = document.querySelector(".chat");
const chatTimeText = chatContainer.querySelector(".chat__timestamp");

function getTime() {
  const curDate = new Date();
  const year = curDate.getFullYear();
  const month = curDate.getMonth();
  const date = curDate.getDate();
  const day = curDate.getDay();

  chatTimeText.innerText = `${dayFullNames[day]}, ${monthFullNames[month]} \
${date} ${year}`;
}

function init() {
  getTime();
}

init();

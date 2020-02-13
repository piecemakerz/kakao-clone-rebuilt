const chatsContainer = document.querySelector(".chats__list");
const chatsTimeText = chatsContainer.querySelector(".chats__chat__timestamp");

function getTime() {
  const curDate = new Date();
  const month = curDate.getMonth();
  const date = curDate.getDay();
  chatsTimeText.innerText = `${monthNames[month]} ${date}`;
}

function init() {
  getTime();
}

init();

const clockTitle = document.querySelector(".js-clock");

function ChristmasComing() {
  const date = new Date();
  const Christmas = new Date(2021, 11, 25, 0, 0, 0, 0); //지정월은 -1
  const Countdown = Christmas - date;
  const DATES = String(Math.ceil(Countdown / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  ); ///날짜
  const Hours = String(
    Math.ceil((Countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0"); ///시간: 날짜의 나머지 부분의 몫을 구한다.
  const MINUTES = String(
    Math.ceil((Countdown % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0"); ///분: 시간의 나머지 부분의 몫을 구한다.
  const SECONDS = String(Math.ceil((Countdown % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  ); ///초: 분의 나머지 부분을 구한다.

  clockTitle.innerText = `${DATES}d:${Hours}h:${MINUTES}m:${SECONDS}s`;
}

ChristmasComing();
setInterval(ChristmasComing, 1000);

const errorHeading = document.querySelector("h1");

//fetch data and return json
async function fetchLaunch() {
  try {
    const response = await fetch(
      "https://api.spacexdata.com/v3/launches/latest"
    );
    const recentLaunch = await response.json();
    createLaunchDetails(recentLaunch);
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchLaunch();

//populate the recent launch card
function createLaunchDetails(recentLaunch) {
  // console.log(recentLaunch);

  //name
  const launchHeading = document.querySelector("h2");
  launchHeading.innerHTML = recentLaunch.mission_name;

  const launchNumber = document.querySelector(".flight-number");
  launchNumber.innerHTML =
    `<p class="underline ">Flight Number:</p>` + recentLaunch.flight_number;

  //details
  const launchDetail = document.querySelector(".details");
  launchDetail.innerHTML =
    `<p class="underline ">Mission Details:</p>` + recentLaunch.details;

  //date
  const launchDate = document.querySelector(".launch-date");
  launchDate.innerHTML =
    `<p class="fontMedium launch-date">Launch Date (Local):</p>` +
    recentLaunch.launch_date_local.slice(0, 10);

  //image
  const newImg = document.querySelector(".image");
  const imgPath = recentLaunch.links.mission_patch;
  newImg.style.backgroundImage = `url(${imgPath})`;
}

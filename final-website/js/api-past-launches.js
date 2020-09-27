const errorHeading = document.querySelector("h1");

//fetching data and return json
async function fetchPastLaunch() {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/launches");
    const result = await response.json();
    displayLaunch(result);
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchPastLaunch();

//populate the launch card
function displayLaunch(result) {
  // console.log(result);

  const launchContainer = document.querySelector(".row");

  let html = "";
  for (let i = 0; i < result.length; i++) {
    //upcomming launches skipped, displayed on another page
    if (result[i].upcoming === true) {
      continue;
    }

    html += `<div class="column">
                <div class="card">
                    <h2>${result[i].mission_name}</h2>
                    <p class="center"><b class="underline ">Flight Number:</b> ${
                      result[i].flight_number
                    }</p>
                    <img class="smallImage" src="${
                      result[i].links.mission_patch
                    }">
                    <p ><b class="underline">Launch Date (local):</b> ${result[
                      i
                    ].launch_date_local.slice(0, 10)}</p>
                    <p >Read more in: <b class="underline red"><a class="cardLink" href= ${
                      result[i].links.article_link
                    } target='_blank'>the Article</a></b></p>
                </div>
            </div>`;
  }
  launchContainer.innerHTML = html;
}

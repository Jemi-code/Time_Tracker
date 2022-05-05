let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let pale = "hsl(236, 100%, 87%)";
let desat = "hsl(235, 45%, 61%)";

fetch('data.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    appendData(data);
})
.catch((err) => {
    console.log(`Error: ${err}`);
});

let appendData = (data) => {
    const mainContainer = document.getElementById("myData");

    for(let i = 0; i < data.length; i++){
        let div = document.createElement("div");
        div.setAttribute("id", "card");

        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "inCard");

        let title = document.createElement("h3");
        title.setAttribute("id", "title");
        title.innerHTML = data[i].title;

        let ellips = document.createElement("img");
        ellips.setAttribute("src", "images/icon-ellipsis.svg")

        let timCurr = document.createElement("h4");
        timCurr.setAttribute("id", "current");

        let timPrev = document.createElement("p");
        timPrev.setAttribute("id", "previous");

        timCurr.innerHTML = `${data[i]["timeframes"]["weekly"]["current"]}hrs`;
            timPrev.innerHTML = `Last Week - ${data[i]["timeframes"]["weekly"]["previous"]}hrs`;

        weekly.addEventListener('click', () => {
            timCurr.innerHTML = `${data[i]["timeframes"]["weekly"]["current"]}hrs`;
            timPrev.innerHTML = `Last Week - ${data[i]["timeframes"]["weekly"]["previous"]}hrs`;
            weekly.style.color = pale;
            daily.style.color = desat;
            monthly.style.color = desat;
        });

        daily.addEventListener('click', () => {
            timCurr.innerHTML = `${data[i]["timeframes"]["daily"]["current"]}hrs`;
            timPrev.innerHTML = `Yesterday - ${data[i]["timeframes"]["daily"]["previous"]}hrs`;
            daily.style.color = pale;
            weekly.style.color = desat;
            monthly.style.color = desat;
        });

        monthly.addEventListener('click', () => {
            timCurr.innerHTML = `${data[i]["timeframes"]["monthly"]["current"]}hrs`;
            timPrev.innerHTML = `Monthly - ${data[i]["timeframes"]["monthly"]["previous"]}hrs`;
            monthly.style.color = pale;
            daily.style.color = desat;
            weekly.style.color = desat;
        });

        innerDiv.appendChild(title);
        innerDiv.appendChild(ellips);
        innerDiv.appendChild(timCurr);
        innerDiv.appendChild(timPrev);

        div.appendChild(innerDiv);

        mainContainer.appendChild(div);
    }
}


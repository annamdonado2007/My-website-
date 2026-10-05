/* =================================
   ANNIVERSARY DATE
================================= */

/*
   CHANGE THIS DATE!

   Put the date you and Annabell started
   dating inside the quotes.

   Example:

   const startDate = new Date("2025-10-01T00:00:00");

   The website will automatically count
   the days, hours, minutes, and seconds
   since that date.
*/

const startDate = new Date("2025-10-03T00:06:30");


/* =================================
   LIVE RELATIONSHIP TIMER
================================= */

function updateTimer() {

    const now = new Date();

    const difference = now - startDate;

    if (difference < 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


/*
   Update every second
*/

updateTimer();

setInterval(updateTimer, 1000);


/* =================================
   LOVE NOTES
================================= */

const loveNotes = {

    1:
        "Amor, I hope you always know how special you are to me. You are not just my girlfriend. You are my princess and someone who has become such an important part of my life.",

    2:
        "One year with you has given me so many memories that I will always keep close to my heart. I am grateful for every laugh, every conversation, and every moment we've shared.",

    3:
        "I'm sorry for the times I've hurt you. I never want you to feel like your feelings don't matter to me. You matter to me more than I can explain, and I truly am sorry. ♡",

    4:
        "Happy one year anniversary, my princess. Thank you for being Annabell, for being you, and for being someone I get to love. This is only chapter one of our very long story. ♥"
};


/* =================================
   OPEN LOVE NOTE
================================= */

function openNote(number) {

    const modal = document.getElementById("noteModal");

    const noteText = document.getElementById("noteText");

    noteText.textContent = loveNotes[number];

    modal.classList.add("show");

}


/* =================================
   CLOSE LOVE NOTE
================================= */

function closeNote() {

    const modal = document.getElementById("noteModal");

    modal.classList.remove("show");

}


/* =================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("noteModal");

    if (event.target === modal) {
        closeNote();
    }

});


/* =================================
   ESCAPE KEY CLOSES MODAL
================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeNote();
    }

});


/* =================================
   CONSOLE MESSAGE
================================= */

console.log("A special website for Annabell ♡");
console.log("Made with love by Ulises.");
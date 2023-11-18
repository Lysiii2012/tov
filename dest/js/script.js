function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

    var currentValue = parseInt(sessionStorage.getItem("randomNumber")) || 0;

    sessionStorage.setItem("randomNumber", currentValue - 1);

    document.getElementById("random-number").innerHTML = " " + randomNumber + "";
}

window.onload = function() {
    generateRandomNumber(); 
};
document.addEventListener("DOMContentLoaded", function() {
    var recentPur = [
      ["Аліна "],
      ["Галина "],
      ["Діна "],
      ["Алевтіна "],
      ["Евгенія "],
      ["Серафіма "],
      ["Валентина "],
      ["Людмила "],
      ["Марія "],
      
    ];
    let randPur = Math.floor(Math.random() * 10);
    let timeRand = Math.round(Math.random() * 29) + 1;
    document.getElementById("notify-1").innerHTML = recentPur[randPur][0];
    document.getElementById("notify-3").innerHTML = timeRand + " секунди тому";
    
    setInterval(function () {
        let customSocialProof = document.querySelector(".custom-social-proof");
        customSocialProof.style.display = (customSocialProof.style.display === "none") ? "block" : "none";
    
        if (customSocialProof.style.display === "none") {
            let randPur = Math.floor(Math.random() * recentPur.length);
            document.getElementById("notify-1").innerHTML = recentPur[randPur][0];
            document.getElementById("notify-3").innerHTML = timeRand + " секунди тому";
        }
    }, 8000);
    document.querySelector(".hide").addEventListener("click", function () {
        document.querySelector(".custom-social-proof").style.display = "none";
    });
    
    setTimeout(function () {
        window.addEventListener("popstate", function (event) {
            if (event.state && event.state.wisepops === "exit-intent") {
                showCliamLayer();
            }
        });
    }, 5000);
    
    if (!window.history.state || window.history.state.wisepops !== "normal-intent") {
        window.history.replaceState({wisepops: "exit-intent"}, "");
        window.history.pushState({wisepops: "normal-intent"}, "");
    }
    
})
let rocketTop = 0;
let rocketLeft = 0;

window.addEventListener("load", function(){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");

    takeOff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
    });

    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.") 
            flightStatus.innerHTML = "The shuttle has landed";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
            rocket.style.top = 0;
            rocket.style.left = 0;
            rocketTop = 0;
            rocketLeft = 0;
    });

    abortMission.addEventListener("click", function(){
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
            rocket.style.top = 0;
            rocket.style.left = 0;
            rocketTop = 0;
            rocketLeft = 0;            
        }
    });

    up.addEventListener("click", function(){
        if (rocketTop > 0) {
            rocketTop -= 10;
            rocket.style.top = rocketTop + "px";
            currentHeight = parseInt(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentHeight + 10000;        
        }
    });
    
    down.addEventListener("click", function(){
        if (rocketTop < 250) {
            rocketTop += 10;
            rocket.style.top = rocketTop + "px";
            currentHeight = parseInt(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentHeight - 10000;
        }
    });

    right.addEventListener("click", function(){
        if (rocketLeft < 310) {
            rocketLeft += 10;
            rocket.style.left = rocketLeft + "px";            
        }
    });

    left.addEventListener("click", function(){
        if (rocketLeft > -310) {
            rocketLeft -= 10;
            rocket.style.left = rocketLeft + "px";
        }
    });

});

// Write your JavaScript code here.
// Remember to pay attention to page loading!

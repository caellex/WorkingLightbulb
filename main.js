checkState()
var lightToggle = false;

function toggleBulb() {
    document.getElementById('topBulb').innerHTML = /*HTML*/ `
            <div class="bulb topBulb borderTop" style="box-shadow: ${lightToggle ? "0px 0px 200px black; " : "0px 0px 200px yellow; "};">
            <div class="center"><button onclick="checkState()">${lightToggle ? "Turn On" : "Turn off"}</button></div>    
                `
}

function checkState() {
    lightToggle = !lightToggle;
    toggleBulb();
}
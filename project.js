//modaled after: https://webflow.com/made-in-webflow/website/relume-timeline-cloneable
function OnResize() {
    console.clear();
    //Get container width of SmallWidthTimeline
    const TempElement = document.getElementById("SmallWidthTimeline");
    var width = TempElement.offsetWidth;
    if (width == 0) {
        const TempElement = document.getElementById("BigWidthTimeline");
        width = TempElement.offsetWidth;
    }

    //Hides none active timeline and sets var timeline to active one
    if (width > 768) { //Big
        document.getElementById("SmallWidthTimeline").style.display = "none";
        document.getElementById("BigWidthTimeline").style.display = "block";
        var timeline = document.getElementById("BigWidthTimeline");






    } else { // Samll
        document.getElementById("BigWidthTimeline").style.display = "none";
        document.getElementById("SmallWidthTimeline").style.display = "block";
        var timeline = document.getElementById("SmallWidthTimeline");

        // Create a vertical line element
        var verticalLine = document.createElement("div");
        verticalLine.classList.add("vertical-line");




        
    }

    
    


}

window.addEventListener('load', OnResize);
window.addEventListener('resize', OnResize);
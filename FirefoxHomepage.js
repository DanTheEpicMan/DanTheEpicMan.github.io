function getPercent() {
    EndDate = 1725616800000; // Sep 6 6:00 AM 2024
    TotalTime  = 6825600000; // From Jun 19 6:00 AM 2024 to Sep 6 6:00 AM 2024
    NowTime = new Date().getTime(); //Now
    TimeLeft = EndDate - NowTime;
    Percent = (TimeLeft / TotalTime) * 100;
    return Percent.toFixed(6);
}

function formatSearch(search) {
    baseText = "https://www.google.com/search?client=firefox-b-1-d&q=";
    finalString = baseText + search.replace(" ", "+");
    if (search.includes('.') && !search.includes(' ')) {
        finalString = search;
        if (!search.startsWith("http")) {
            finalString = "https://" + finalString;
        }
        finalString = customRedirect(finalString);
    }
    console.log(finalString);
    window.location.href = finalString;
}

function customRedirect(string) {
    if (string == "https://github.com") {
        return "https://github.com/DanTheEpicMan/"; //not trying to self plug or anything, just dont like github default homepage
    }
    return string;
}
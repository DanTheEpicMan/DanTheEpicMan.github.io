function getPercent() {
    EndDate = 1725616800; // Sep 6 6:00 AM 2024
    TotalTime  = 6825600; // From Jun 19 6:00 AM 2024 to Sep 6 6:00 AM 2024
    NowTime = Math.round(new Date().getTime() / 1000); //Now
    TimeLeft = EndDate - NowTime;
    Percent = (TimeLeft / TotalTime) * 100;
    return Percent.toFixed(4);
}
function RaiderIOFunction(realm, charactername) {
    fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${charactername}&fields=mythic_plus_scores_by_season%3Acurrent`)
        .then((response) => response.json())
        .then((RaiderData) => {
            const Score = document.getElementById(`${charactername}Score`);
            Score.innerHTML = RaiderData.mythic_plus_scores_by_season[0].scores.all;

        })
}

function MPlusCutOff() {
    fetch("https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-tww-1&region=eu")
        .then((response) => response.json())
        .then((ScoreData) => {
            const MScore = document.getElementById("mPlusCut");
            MScore.innerHTML = ScoreData.cutoffs.p999.all.quantileMinValue;

        })
}

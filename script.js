const scoreObject = {
    cutOffScore: 0,
    mPlusScore: 0,
    scoreToTitle: 0,
};

function RaiderIOFunction(realm, charactername) {
    fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${charactername}&fields=mythic_plus_scores_by_season%3Acurrent`)
        .then((response) => response.json())
        .then((RaiderData) => {
            scoreObject.mPlusScore = RaiderData.mythic_plus_scores_by_season[0].scores.all;}

        )
}

function MPlusCutOff() {
    fetch("https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-tww-1&region=eu")
        .then((response) => response.json())
        .then((ScoreData) => {
            scoreObject.cutOffScore = ScoreData.cutoffs.p999.all.quantileMinValue;

        })
}

function setInnerText(id, value) {
    id.innerText = value;
    console.log(`${id}`)
}

function LookUpScoreRange(){
    scoreObject.scoreToTitle = scoreObject.cutOffScore - scoreObject.mPlusScore;
}
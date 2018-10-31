var friends = require("../data/friends");
var express = require('express');

var router = express.Router();

router.get('/api/friends', function(req, res){


        res.json(friends);
});


router.post('/api/friends', function(req, res){
    var user =  {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
      console.log("New User Scores " + user.scores);

var newSurveyScore = user.scores
// holds score differences between users
var scoresDiff = [];
//save the index of the best match
var bestMatch = 0;
//pseudo code 
//Need the difference in scores between Our new survey and someone elses to find a friend

// We to find the difference betwenen  the new survey results and the people who already have taken
for(var friendIndex = 0; friendIndex < friends.length; friendIndex ++) {
    var difference = 0 
    console.log("Saved friend " +  friends[friendIndex].scores);
    //for each person in friends array compare their scores.
    for(var scoreIndex = 0; scoreIndex < newSurveyScore.length; scoreIndex ++) {
        //loop through newSurveyScore and compare
    
        difference = difference +( (Math.abs(parseInt(friends[friendIndex].scores[scoreIndex]) - parseInt(newSurveyScore[scoreIndex]))))
    }
    //push score into score diffference array
    scoresDiff.push(difference)
    console.log(difference);
}
//find the lowest score from all friends
for(var i = 0; i < scoresDiff.length; i++){
    if(scoresDiff[i] <= scoresDiff[bestMatch]){
        bestMatch = i ;

    }
}

var yourMatch = friends[bestMatch]
    
friends.push(user)
res.json(yourMatch);
})
module.exports = router
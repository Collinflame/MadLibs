var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post(`/story`, function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render(`story`, {
    newStory: newStory,
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  });
})

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else if (formData.storyChoice === "Random") {
    return randomStory(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Today me and ${formData.name} are going to ${formData.name2}'s house!
  ${formData.name2} welcomes us in their ${formData.adjective} ${formData.color} home.
  ${formData.name2} shows us their ${formData.noun}, then we go to their room.
  We played ${formData.videogame} and ate some ${formData.food}.
  Then, ${formData.name2} was acting ${formData.adjective2} so we left.`
}

function generateStory2(formData){
  return `Yesterday I found ${formData.name} and ${formData.name2} fighting.
  I told them that they were acting ${formData.adjective}. They were fighting
  in a ${formData.color} building while they were using a ${formData.noun} to 
  defend themselves. Eventually, they made up and we played ${formData.videogame} and 
  ate some ${formData.food}. We laughed about how ${formData.adjective2} they 
  were acting.`
}

function generateStory3(formData){
  return `${formData.name} and ${formData.name2} entered a lego building contest.
  They were very ${formData.adjective} heading into the contest. They decided to use
  ${formData.color} lego bricks to build a ${formData.noun}. The winner got an unlimited
  amount of copies of ${formData.videogame} and an unlimited amount of ${formData.food}.
  They were very ${formData.adjective2} after they won and got to have ${formData.videogame}
  and ${formData.food}.`
}

function randomStory(formData){
  let answers = [1, 2, 3];
  let choice = Math.floor(Math.random()*answers.length);
  if (choice === 1) {
    return generateStory1(formData)
  } else if (choice === 2) {
    return generateStory2(formData)
  } else {
    return generateStory3(formData)
  }
}


module.exports = router;

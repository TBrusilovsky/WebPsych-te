
let times = [];
let numTimes = 0;
let timeAvailable = 0;
let tasks = [];
let numTasks = 0;
let timeNeeded = 0;
let yourScheduel = [];


function addTime(event) {  //takes the data from the form and records it in some way
  times[numTimes] = {date: --GetDate--, startTime: --GetTime--, endTime: --GetTime2--, length: --endTime - startTime --};
  timeAvailable+=times[numTimes].length;
  numTimes+=1;
}

function getTasks(event) { //creates the next screen? might be worth just making more html and doing this as a hyperlink

}

function addTask { //take the data from the form and records it in some way
  tasks[numTasks] = {name: --GetName--, estimatedTime: --GetTimeEstimate--};
  timeNeeded+=tasks[numTasks].estimatedTime;
  numTasks+=1;
}

function getScheduel(event) { //switches you to the scheduel screen, as before might be worth just hyperlinking it
  generateScheduel();
  //creates/passes in the newly made scheduel
}

function generateScheduel() {

}

let times = [];
let numTimes = 0;
let timeAvailable = 0;
let tasks = [];
let numTasks = 0;
let timeNeeded = 0;
let yourScheduel = [];


function addTime(event) {  //takes the data from the form and records it in some way
  times[numTimes] = {date:document.getElementById("date").value, 
    startTime: document.getElementById("starttime").value, 
    endTime: document.getElementById("endtime").value, 
    length: calculateTime(document.getElementById("starttime").value,document.getElementById("endtime").value)
  };

  timeAvailable+=times[numTimes].length;
  numTimes+=1;
}

function getTasks(event) { //creates the next screen? might be worth just making more html and doing this as a hyperlink
  //change old stuff!
  let instructions = document.getElementById("instructions");
  instructions.innerHTML = "Now input what work you need to get done!"
  let thingtochange = document.getElementById("title1");
  thingtochange.innerHTML = "Due Date:";
  thingtochange = document.getElementById("title2");
  thingtochange.innerHTML = "Task Name:";
  thingtochange = document.getElementById("title3");
  thingtochange.innerHTML = "Estimated time needed for completion (in hours):";

  thingtochange = document.getElementById("endtime");
  thingtochange.id = "estimatedtime";
  thingtochange.placeholder = "2.5";

  thingtochange = document.getElementById("addTime");
  thingtochange.remove();
  thingtochange =  document.getElementById("continue");
  thingtochange.remove();

  let thingtoadd = document.createElement("div");
  thingtoadd.class = "actions";
  thingtoadd.id = "addEvent";
  let otherthingtoadd = document.createElement("input");
  thingtoadd.appendChild(otherthingtoadd);
  otherthingtoadd.type="submit";
  otherthingtoadd.addEventListener("click",addTask);
  document.body.appendChild(thingtoadd);

  thingtoadd = document.createElement("div");
  thingtoadd.class = "continue";
  thingtoadd.id = "addEvent";
  otherthingtoadd = document.createElement("input");
  thingtoadd.appendChild(otherthingtoadd);
  otherthingtoadd.type="button";  
  otherthingtoadd.addEventListener("click",getSchedule);
  otherthingtoadd.value = "Continue";
  document.body.appendChild(thingtoadd);

  //<div class="actions" id="addTime"><input type="submit" value="Add Time" onclick="addTime();"></div>

   // <div class="continue" id="continue"><input type="button" value="Continue" onclick="getTasks();" /></div> 
} 

function addTask() { //take the data from the form and records it in some way
  tasks[numTasks] = {name:document.getElementById("starttime").value,due: document.getElementById("date").value, estimatedTime: document.getElementById("estimatedtime").value};
  timeNeeded+=tasks[numTasks].estimatedTime;
  numTasks+=1;
  
}

function getSchedule(event) { //switches you to the schedule screen, as before might be worth just hyperlinking it
  generateSchedule();
  //creates/passes in the newly made schedule
}

function calculateTime(start,end) {
  let endDec = 0;
  let startDec = 0;

  if (start.charAt(6) == 'p')  startDec+=12;
  if (end.charAt(6) == 'p')  endDec+=12;
  console.log(startDec);
  startDec+= 0+ start.substring(0,2);
  endDec+= 0+end.substring(0,2);
console.log(startDec);
  startDec+= 0+start.substring(3,5)/60;
  endDec+= 0+end.substring(3,5)/60;
console.log(startDec);
  return endDec-startDec;
}

function generateSchedule() {
//yourScheduel[i] = {date: --, workingon: --, timeStart: --, timeend: --, timespent: --}
 // example - {date:"03272000", workingon:"hack", timeStart:"6:00", timeend: "7:00", timespent:"1"}
}
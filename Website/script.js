
let times = [];
let numTimes = 0;
let timeAvailable = 0;
let tasks = [];
let numTasks = 0;
let timeNeeded = 0;
let yourSchedule = [];


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

  thingtochange = document.getElementById("starttime");
  thingtochange.placeholder = "Java Homeworkd #5"

  thingtochange = document.getElementById("addTime");
  thingtochange.remove();
  thingtochange =  document.getElementById("continue");
  thingtochange.remove();

  let thingtoadd = document.createElement("div");
  thingtoadd.class = "action";
  thingtoadd.id = "addEvent";
  let otherthingtoadd = document.createElement("input");
  thingtoadd.appendChild(otherthingtoadd);
  otherthingtoadd.type="submit";
  otherthingtoadd.addEventListener("click",addTask);
  document.body.appendChild(thingtoadd);

  thingtoadd = document.createElement("div");
  thingtoadd.class = "action";
  thingtoadd.id = "generate";
  otherthingtoadd = document.createElement("input");
  thingtoadd.appendChild(otherthingtoadd);
  otherthingtoadd.type="submit";  
  otherthingtoadd.addEventListener("click",getSchedule);
  otherthingtoadd.value = "Generate My Schedule!";
  document.body.appendChild(thingtoadd);
} 

function addTask() { //take the data from the form and records it in some way
  tasks[numTasks] = {name:document.getElementById("starttime").value,due: document.getElementById("date").value, estimatedTime: document.getElementById("estimatedtime").value};
  timeNeeded+=tasks[numTasks].estimatedTime;
  numTasks+=1;

}

function getSchedule(event) { //switches you to the schedule screen, as before might be worth just hyperlinking it
  generateSchedule();

  let toremove = document.getElementById("instructions");
  toremove.remove();
  toremove = document.getElementById("inputlist");
  toremove.remove();
  toremove = document.getElementById("addEvent");
  toremove.remove(); 
  toremove = document.getElementById("generate");
  toremove.remove(); 

  for (let i = 0; i <yourSchedule.length; i++)
  {
    let task = document.createElement("dl");
    task.class = "task";
    let date = document.createElement("dt");
    date.innerHTML = yourSchedule[i].date.substring(0,2) +"/"+yourSchedule[i].date.substring(2,4)+"/"+yourSchedule[i].date.substring(4,8);
    task.appendChild(date);
    let from = document.createElement("dt");
    from.innerHTML = "from "+ yourSchedule[i].timeStart;
    task.appendChild(from);
    let to = document.createElement("dt");
    to.innerHTML = "to " + yourSchedule[i].timeend;
    task.appendChild(to);
    document.body.appendChild(task);
    let type = document.createElement("dt");
    type.innerHTML = yourSchedule[i].workingon;
    task.appendChild(type);
  }

}

function calculateTime(start,end) {
  let endDec = 0;
  let startDec = 0;

  if (start.charAt(6) == 'p')  startDec+=12;
  if (end.charAt(6) == 'p')  endDec+=12;

  startDec+= Number(start.substring(0,2));
  endDec+= Number(end.substring(0,2));

  startDec+= Number(start.substring(3,5))/60;
  endDec+= Number(end.substring(3,5))/60;

  return endDec-startDec;
}

function generateSchedule() {
//yourScheduel[i] = {date: --, workingon: --, timeStart: --, timeend: --, timespent: --}
 // example - {date:"03272000", workingon:"hack", timeStart:"6:00", timeend: "7:00", timespent:"1"}
  yourSchedule[0] = {date:"03272000", workingon:"Spanish Paper", timeStart:"6:00 pm", timeend: "7:00 pm", timespent:"1"};
  yourSchedule[1] = {date:"03272000", workingon:"Take a break, maybe grab a glass of water!", timeStart:"7:00 pm", timeend: "7:15 pm", timespent:".25"};
}

let times = [];
let numTimes = 0;
let timeAvailable = 0;
let tasks = [];
let numTasks = 0;
let timeNeeded = 0;
let yourSchedule = [];
let encouragements = ["Take a break, maybe grab a glass of water!", "Relax for a little while, stand up and walk around a little!", "You have some time to destress, maybe go get some fresh air?", "You've been working hard, time for a breather!","Great job, now you can afford to rest for a bit.", "detach from my workplace and first assess my physical needs (water, snacks, moving around, stretching)" ]

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

function hourToMin(time){
  let timeInMin =0;
  if (time.charAt(6) == 'p')  timeInMin+=(12*60);
  timeInMin+= Number(start.substring(0,2))*60;
  timeInMin+= Number(start.substring(3,5));
  return timeInMin;
}

function minToHour(time){
  let timeInHour ="";
  if(time> (12*60)){
    timeInHour+= "pm";
    time-=(12*60)
  } else{
    timeInHour+= "am";
  }
  time/=60;
  var hourVal = Math.floor(time)
  time *= 100;
  time -= hourVal;
  time*=60;
  timeInHour= hourVal + ":" +time+" "+timeInHour;
  return timeInHour;
}

function generateSchedule() {
//yourScheduel[i] = {date: --, workingon: --, timeStart: --, timeend: --, timespent: --}
 // example - {date:"03272000", workingon:"hack", timeStart:"6:00", timeend: "7:00", timespent:"1"}
  //yourSchedule[0] = {date:"03272000", workingon:"hack", timeStart:"6:00 pm", timeend: "7:00 pm", timespent:"1"}
  for(var j=0;j<numTasks;j++){
    let workDone = 0;
    let breakDone = 0;
    let complete = (Number(tasks[j].estimatedTime) = workDone);
    let i = 0;
    let timeTracker = 0;
    let start = times[timeTracker].startTime;

    do{
      if(i!=0){
        start = yourSchedule[i-1].timeend;
      }


        if(i!=0){
          if(yourSchedule[i-1].timespent = 52){
            let taskEnd = minToHour((hourToMin(start)+17));
            yourSchedule[i] = {date:times[i].date, workingon: "Break time! Try"+encouragements[Math.floor((Math.random() * 10))], timeStart: start, timeend:taskEnd, timespent: 17};
            breakDone+=17;
          }else{
            let taskEnd = minToHour((hourToMin(start)+52));
            yourSchedule[i] = {date:times[i].date, workingon: tasks[i].name, timeStart: start, timeend:taskEnd, timespent: 52  };
            workDone+=52;
          }
        }else {
          yourSchedule[i] = {
            date: times[i].date,
            workingon: tasks[i].name,
            timeStart: start,
            timeend: taskEnd,
            timespent: hourToMin(this.timeend) - hourToMin(this.timeStart)
          }
        }
      complete = (tasks[j].estimatedTime = workDone);
    }while(!(complete));
  }
}
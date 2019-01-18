// Rover Object Goes Here
var roverOne= {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [
    ["R1","O"," "," "," "," "," "," "," "," "],
    [" "," ","O"," "," "," ","O"," "," "," "],
    [" "," "," "," "," "," "," "," O"," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," ","O"," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," ","O"," "," "," "," "," "," "," "],
    [" "," "," "," "," "," ","O"," "," "," "],
    [" "," "," O"," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," ","R2"],
  ],
  
}

var roverTwo = {
  direction: "N",
  x: 9,
  y: 9,
  travelLog: [
    ["R1","O"," "," "," "," "," "," "," "," "],
    [" "," ","O"," "," "," ","O"," "," "," "],
    [" "," "," "," "," "," "," "," O"," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," ","O"," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "],
    [" "," ","O"," "," "," "," "," "," "," "],
    [" "," "," "," "," "," ","O"," "," "," "],
    [" "," "," O"," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," ","R2"],
  ],
  
}

var command = "";
var numRover;
var rover;
var obstacle= ["O","R1","R2"];
var stop = false;
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch(rover.direction){

    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
    
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  
}

function moveForward(rover){
  console.log("moveForward was called");
  rover.travelLog[rover.y][rover.x]= "X";
  
  switch(rover.direction){
    case "N":
      
      if((rover.y>0) && (obstacle.indexOf(rover.travelLog[rover.y-1][rover.x]) === -1)){
        rover.y -= 1;
      }
      else{
        stop = true;
        console.log("no puedo ir hacia el Norte");

      }
      break;
    case "E":
      if((rover.x<9) && (obstacle.indexOf(rover.travelLog[rover.y][rover.x+1]) === -1)){
        rover.x += 1;
      }
      else{
        stop = true;
        console.log("no puedo ir hacia el Este");
      }
      break;
    case "S":
      if((rover.y<9)&& (obstacle.indexOf(rover.travelLog[rover.y+1][rover.x])=== -1)){
        rover.y += 1;
      } 
      else{
        stop = true;
        console.log("no puedo ir hacia el Sur");
      }
      break;
    case "W":
      if((rover.x>0)&& (obstacle.indexOf(rover.travelLog[rover.y][rover.x-1]) === -1)){
        rover.x -= 1;
      }
      else{
        stop = true;
        console.log("no puedo ir hacia el Oeste");
      }
      break;
  }
  console.log("Position x: "+rover.x+" Position y: "+ rover.y);  
}

function moveBackward(rover){
  console.log("moveBackward was called");
  rover.travelLog[rover.y][rover.x]= "X";
  
  switch(rover.direction){
    case "N":
      if((rover.y<9)&& (obstacle.indexOf(rover.travelLog[rover.y+1][rover.x])=== -1)){
        rover.y += 1;
      }
      else{
        stop = true;
        console.log("no puedo ir hacia el Sur");
      }
      break;
    case "E":
      if((rover.x>0)&& (obstacle.indexOf(rover.travelLog[rover.y][rover.x-1])=== -1)){
        rover.x -= 1;
      }
      else{
        stop = true;
        console.log("no puedo ir hacia el Oeste");
      }
      break;
    case "S":
      if((rover.y>0)&& (obstacle.indexOf(rover.travelLog[rover.y-1][rover.x])=== -1)){
        rover.y -= 1;
      } 
      else{
        stop = true;
        console.log("no puedo ir hacia el Norte");
      }
      break;
    case "W":
      if((rover.x<9)&& (obstacle.indexOf(rover.travelLog[rover.y][rover.x+1])===-1 )){
        rover.x += 1;
      }
      else{
        stop = true;
        console.log("no puedo ir hacia el Este");
      }
      break;
  }
  console.log("Position x: "+rover.x+" Position y: "+ rover.y);  
}

function instructions(numRover,command){
var validCommand = false;
stop=false;
if(numRover==="1"){
  console.log ("Seleccionado el rover 1");
  rover =  roverOne;
}else if(numRover==="2"){
  console.log ("Seleccionado el rover 2");
  rover = roverTwo;
}
for(var i=0; i<command.length; i++){
  
  if(command[i]!= "l" && command[i]!= "r" && command[i]!= "b" && command[i]!= "f" ){
    console.log("Parametros introducidos no validos");
    validCommand = true;
    break;
  }
  
}
  for(var i=0; i<command.length && validCommand === false && stop === false; i++){
    
    switch(command[i]){
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
    }
  }

  if(numRover==="1"){
    roverOne = rover;
    roverOne.travelLog[rover.y][rover.x]="R1";
    roverTwo.travelLog = roverOne.travelLog;
    console.log(roverOne.travelLog.join('\n') + '\n\n');
  }else if(numRover === "2"){
    roverTwo = rover;
    roverTwo.travelLog[rover.y][rover.x]="R2";
    roverOne.travelLog = roverTwo.travelLog;
    
    console.log(roverTwo.travelLog.join('\n') + '\n\n');
  }
  
}


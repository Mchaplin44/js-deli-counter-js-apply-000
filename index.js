var katzDeli = [];

function currentLine (line){
  if(!line.length) {
return "The line is currently empty.";  
  }
  var lineNumbers = [];
  
  for(var i=0;i<line.length; i++) {
    lineNumbers.push(i+1 + ". "+ line[i]); }
    
  return "The line is currently: " + lineNumbers.join(', ');
}

function nowServing(line) {
  if(!line.length) { 
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
} else { 
  
  return "Currently serving " + lineNumbers .shift() + ".";
}
} 

function takeANumber(line){
  line.push(linelength);
  
  

  return "Welcome, " +  " You are number " + line.length +  " in line.";
}


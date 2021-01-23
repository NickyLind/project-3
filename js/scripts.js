$(document).ready(function()  {
  $("#form").submit(function(event) {
    event.preventDefault();

let number = $("#input").val();
let userArray = [];
for (let i = 0; i <= number; i++) {
  userArray.push(i)
  if(i.toString().includes("3"))	{
  userArray.splice([i], i, "Won't You Be My Neighbor?");
} else if (i.toString().includes("2"))	{
  userArray.splice([i], i, "Boop!");	
} else if (i.toString().includes("1"))	{
  userArray.splice([i], i, "Beep!");
} else {
  userArray.push[i] }
} 
userStrArray = userArray.join(",  ")

$("#hidemefirst").hide();
$("#hidemefirst").fadeIn(3000);
$("#output").text(userStrArray); 
  });
});
$(document).ready(function()  {
  $("#form").submit(function(event) {
    event.preventDefault();
    let number = $("#input").val();
  
    
    
    

});

//1~ console.log(!isNaN(2));
//2~ console.log(number>0);
//3~  console.log(number % 1 !== 0)
//4~ let userNumber = 4
//   let userArray = [];
//    for (let i = 0; i <= userNumber; i++) {
//    console.log(i)
//5~   userArray.push(i)
// }
// console.log(userArray);
//6~  const isItOne = '1'
///// let replaceOneWith = 'Beep!'
///// let userStrArray = userArray.toString();
///// console.log(userStrArray);
///// let result1 = userStrArray.split(isItOne).join(replaceOneWith);

///// console.log(result1)
//7~  for (let i = 0; i <= userNumber; i++) {
//    userArray.push(i)
//    if(i.toString().includes("1"))	{
//    userArray.splice([i], i, "Beep!")
//      }
//    }
//8~  for (let i = 0; i <= userNumber; i++) {
//    userArray.push(i)
//    if(i.toString().includes("2"))	{
//    userArray.splice([i], i, "Boop!");
//   } else if (i.toString().includes("1"))	
//   	userArray.splice([i], i, "Beep!");
//  }
//9~  for (let i = 0; i <= userNumber; i++) {
//    userArray.push(i)
//    if(i.toString().includes("3"))	{
//    userArray.splice([i], i, "Are You My Neighbor");
//   } else if (i.toString().includes("2"))	
//   	userArray.splice([i], i, "Boop!");	
//    else if (i.toString().includes("1"))	
//   	userArray.splice([i], i, "Beep!");	 
//  } 
//10&11 let userNumber = 123
//      console.log(userArray[123])
# _Project 3_

#### _This project will use arrays and looping to change a range of numbers into strings on certain numbers_

#### By _**Nick Lindau**_

## Technologies Used

* _HTML_
* _Javascript_
* _CSS_
* _Bootsrap_
* _Jquery_
* _Visual Studio Code_


## Description

_This project will have the user input a number. It will then output a range of numbers starting from 0 to the users number. If the number contains a 1 it will replace it with "Beep". If 2 it will replace it with a "Boop!". If it conatins a 3 it will replace it with a "Won't You Be My Neighbor". The exceptions will be written from least to most important. A three will overwrite a 2 and 1, a 2 will overwrite a 1._

##Specs
```

Describe: areUNeighbor();

Test: "It recognizes a number"
Expect: (areUNeighbor("12")).toEqual(True)

Test: "It recognizes a number is greater than 0"
Expect: (areUNeighbor("-1")).toEqual("input a positive number")

Test: "It recognizes the number has no remainer"
Expect: (areUNeighbor("1.2)).toEqual("input a whole number")

Test: "It makes an array from 0 to user's number"
Expect: (areUNeighbor("4")).toEqual(0,1,2,3,4)

Test: "It recognizes if numbers contain a 1"
Expect: (areUNeighbor("1"))toEqual("Beep!")

Test: "It recognizes if numbers contain a 2"
Expect: (areUNeighbor("2")).toEqual("Boop!")

Test: "It recognizes if numbers contain a 3"
Expect: (areUNeighbor("3")).toEqual("R U My Neighbor?")

Test: "It recognizes that 2 is more important than 1"
Expect: (areUNeighbor("12")).toEqual("Beep")

Test: "It recognizes that 3 is more important than 1 or 2"
Expect: (areUNeighbor("123")).toEqual("R U My Neighbor?")
```


## Setup/Installation Requirements

* _Find the resposiotory at (https://github.com/NickyLind/project-3)_
* _Select the green 'Code' button above the repository and copy the HHTPS link_
* _In your terminal, find the directory you want to place the progamming-language-selector directory in_
* _In your terminal, use the git command $git clone [paste HTTPS here]_
* _Open in Visual Studio Code or another editor_

_If you are just interested in just viewing the webpage it is available on GitPages, or after you have cloned the repository to your local device you can open it via right-clicking the index.html file._

## Known Bugs

*

## License

_[MIT](https://choosealicense.com/licenses/mit/)_
 _Copyright (c) Nick Lindau 01/22/2021_

## Contact Information

_Nick Lindau @ nicholaithegreat@gmail.com_
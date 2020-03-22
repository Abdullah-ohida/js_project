 let name = "Ismail Abdullah"
 console.log(name)
 const courseArr = ["html", "css", "javascript"];

 //Loop to display course content

 for (num = 0; num < courseArr.length; num++) {
     console.log(courseArr[num]);
 }

 // Checking if length of courseArr is odd
 // If true, print out odd number from 1 t0 200

 if (courseArr.length % 2 != 0) {
     for (x = 1; x <= 200; x++) {
         if (x % 2 != 0) {
             console.log(x)
         }
     }

     // Checking if length of courseArr is even
     // If true, print out even number from 1 to 200

 } else if (courseArr.length % 2 == 0) {
     for (x = 1; x <= 200; x++) {
         if (x % 2 == 0) {
             console.log(x);
         }
     }

     // checking if length of courseArr is empty

 } else {
     console.log("Array is empty")
 }
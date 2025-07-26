let p1 = document.getElementById("one")
let p2 = document.getElementById("two")
let p3 = document.getElementById("three")
let count = 0

p1.innerHTML= "About to increment count from" + " " + count

setTimeout(()=>{
 count+=1
 p2.innerHTML =` Count incremented to ${count} `
}, 4000)



p3.innerHTML= "Count already incremented"
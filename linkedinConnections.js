// Assuming the class name is 'example-class'
var names = document.querySelectorAll('.mn-connection-card__name');
var namesArr = Array.from(names, name => name.innerText);

var occupations = document.querySelectorAll('.mn-connection-card__occupation');
var occupationsArr = Array.from(occupations, occupation => occupation.innerText);

var links = document.querySelectorAll('.mn-connection-card__details a');
var linksArr = Array.from(links, link => link.href);

/* 
console.log(namesArr);
console.log(occupationsArr);
console.log(linksArr);

var newSheet = [];
numPeople = 18;
for(var i = 0; i < numPeople; i++){
  newSheet.push(linksArr[i]. namesArr[i], occupationsArr[i]);
}
 */
const x = 23; // Change this to the number of entries you want

const truncatedNamesArr = namesArr.slice(0, x);
const truncatedOccupationsArr = occupationsArr.slice(0, x);
const truncatedLinksArr = linksArr.slice(0, x);

// Then construct newSheet using truncated arrays
/* 
var newSheet = [];
for (let i = 0; i < truncatedNamesArr.length; i++) {
    newSheet.push([truncatedNamesArr[i], truncatedOccupationsArr[i], truncatedLinksArr[i]]);
}
console.log(newSheet);
const csvContent = newSheet.map(row => row.join(',')).join('\n');
console.log(csvContent);
*/
/* 
var csvSheet = "";
for(var i=0; i < x; i++){
  csvSheet = csv.map truncatedNamesArr[i] +"" truncatedOccupationsArr[i], truncatedLinksArr[i]
}
 */
var newSheet =[];
for (let i = 0; i < x; i++) {
    // Handle quotes and commas in the data by enclosing each field in double quotes and escaping existing double quotes
    const escapedName = namesArr[i].replace(/"/g, '""');
    const escapedOccupation = occupationsArr[i].replace(/"/g, '""');
    const escapedLink = linksArr[i].replace(/"/g, '""');
    
    newSheet.push(`"${escapedName}", "${escapedOccupation}", "${escapedLink}"`);
}
console.log(newSheet);

var newSheetStr = newSheet.join('\n');
console.log(newSheetStr);

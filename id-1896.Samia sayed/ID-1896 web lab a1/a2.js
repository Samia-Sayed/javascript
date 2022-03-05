var arr = [7, 2, 9, 1, 6, 1, 8, 3, 3, 8];
var n = arr.length;

document.write("Given: ");
for (var i = 0; i < n; ++i) 
{
    document.write(arr[i], " ");
}
document.write("<br>");


function sArray(array) 
{
    for (var i = array.length - 1; i > 0; i--) 
    { 

        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

sArray(arr);
document.write("Shuffle 01: ");
for (var i = 0; i < n; ++i) {
    document.write(arr[i], " ");
}
document.write("<br>");

sArray(arr);
document.write("Shuffle 02: ");
for (var i = 0; i < n; ++i)
 {
    document.write(arr[i], " ");
}
document.write("<br>");

sArray(arr);
document.write("Shuffle 03: ");
for (var i = 0; i < n; ++i)
 {
    document.write(arr[i], " ");
}
document.write("<br>");



var arr=[7,2,9,1,6,1,8,3,3,8];
var mostfreq = 0;
var m = 0;
 var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mostfreq<m)
                {
                  mostfreq=m; 
                  item = arr[i];
                }
                
                

        }
        m=0;
}

console.log(item+" ( " +mostfreq +" times ) ") ;
document.write(item+" ( " +mostfreq +" times ) ");



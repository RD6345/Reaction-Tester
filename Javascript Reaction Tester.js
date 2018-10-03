
var start = performance.now();
var clickMade = 0;

 function radius() {
 var shape = Math.random();
   if (shape > 0.5) {
     return "50%";
   } else {
     return "0%";
   }
     }
 function randomColours() {
    var allowed = "ABCDEF0123456789", S = "#";

      while(S.length < 7){
          S += allowed.charAt(Math.floor((Math.random()*16)+1));
      }
      return S;
   }

     function yAxis() {
       var y = Math.random();
           y = (y * 301);
           y = Math.floor(y);
           y = y + "px";
           return(y);
     }

     function xAxis() {
       var x = Math.random();
           x = (x * 1000);
           x = Math.floor(x);
           x = x + "px";
           return(x);
     }

   function delay() {
         setTimeout(function(){
           var b = Math.random();
               b = ((b * 500) + 15);
               b = b + "px";
         document.getElementById("shape").style.display = "block";
         document.getElementById("shape").style.borderRadius = radius();
         document.getElementById("shape").style.background = randomColours();
         document.getElementById("shape").style.width = b;
         document.getElementById("shape").style.height = b;
         document.getElementById("shape").style.top = yAxis();
         document.getElementById("shape").style.left = xAxis();


         start = performance.now(); }, Math.floor(Math.random() * 2000)+100); //timer for the delay.
}
         var averageTime = 0;
         var bestTimeLog = [];

         document.getElementById("shape").onclick = function() {
         document.getElementById("shape").style.display = "none";
         clickMade +=1;
         var finish = performance.now();
         var time = (finish - start)/1000;
         document.getElementById("yourTime").innerHTML = "Your Time: " + (time).toFixed(4) + "s."; //Add toFixed(4) here as caused issues when tried to add earlier.
         bestTimeLog.push(time);
         var z = 0;
         for (j = 0; j < bestTimeLog.length; j++)  {
         z += bestTimeLog[j];
         }
         averageTime = z/bestTimeLog.length;
         if (clickMade < 10) {
         document.getElementById("average").innerHTML = "Rolling average: " + (averageTime).toFixed(4) + "s";
         document.getElementById("best").innerHTML = "Personal Best: " + (bestTimeLog.sort()[0]).toFixed(4) + "s";

         delay();
       } else {
         document.getElementById("congratulations").style.display = "block";
         document.getElementById("yourTime").style.display = "none";
         document.getElementById("best").style.marginTop = "10px";
         document.getElementById("average").style.marginTop = "10px";
         document.getElementById("total").innerHTML = "Total time spent: " + (z).toFixed(4) + "s";
         document.getElementById("one").style.display = "none";
         document.getElementById("two").style.display = "none";

      }

         };

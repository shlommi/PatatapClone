<!doctype html>
<html>
	<head>
    	<title>For Loops</title>
    </head>
    <body>
    	<p id="colourList"></p>
          <script type="text/javascript">
          
          var colors = ["Red", "Yellow", "Blue"];
          var time = "";
          for(var i = 0; i< colors.length; i++ ){
              time += colors[i] + " ";
              }
        
            document.getElementById("colourList").innerHTML = time;
      	</script>
    </body>
</html>
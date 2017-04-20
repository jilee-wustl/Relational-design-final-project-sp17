window.onload = function() {
      $("select").imagepicker({
          hide_select : false,
          show_label  : true
        })
    };
      
    function determineCoords(event) {
      
      try {
           var canvas = fx.canvas();
        } catch (e) {
           alert(e);
           return;
        }

			var p = document.getElementById("canv");
			var style = p.currentStyle || window.getComputedStyle(p);
			
			var l = parseInt(style.marginLeft);
      var x = event.clientX - l - 30;
      var y = event.clientY - 30;
         
			var select = document.getElementById("mySelect");
			var answer = select.options[select.selectedIndex].value;

			var coords = "X coords: " + x + ", Y coords: " + y + answer;
      document.getElementById("number").innerHTML = coords;
			
			effect(answer,x,y);
    }

$(document).ready(function() {
  var tempvar = "";
  $("#mySelect").on("change", function() {
    tempvar = $("#mySelect").val();
    if (tempvar == "1") {
      $('.container').css({
        'cursor': 'url("https://image.ibb.co/bLDJWQ/cursor_smile.png"), auto',
      });
    }
    else if (tempvar == "2") {
      $('.container').css({
        'cursor': 'url("https://image.ibb.co/jeGu5k/cursor_neutral.png"), auto;',
      });
    }
    else if (tempvar == "3") {
      $('.container').css({
        'cursor': 'url("https://image.ibb.co/h1GGJ5/cursor_sad.png"), auto;',
      });
    }
  });
});
		
function effect(answer,x,y) {
			 
			//HATE 
      if (answer == 1) {
				try {
           var canvas = fx.canvas();
        } catch (e) {
           alert(e);
           return;
        }
				
				var image = document.getElementById('image');
				var texture = canvas.texture(image);
				image.parentNode.insertBefore(canvas, image);
				image.parentNode.removeChild(image);
			
				canvas.draw(texture).bulgePinch(x, y, 150, -0.7).update();
				var img = canvas.toDataURL("image/png");

				$.ajax({
					type: "POST",

					url: "post.php",

					data: {img: img},
					success: function(data)
					{
							setTimeout(function () {
						 window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
					}, 2000);
					}});
		  }
			
			//NEUTRAL
		  else if (answer == 2) {
				
				try {
           var canvas = fx.canvas();
        } catch (e) {
           alert(e);
           return;
        }
				var image = document.getElementById('image');
				var texture = canvas.texture(image);
				image.parentNode.insertBefore(canvas, image);
				image.parentNode.removeChild(image);
			
	      canvas.draw(texture).swirl(x, y, 348, 8).update();
 
				var img = canvas.toDataURL("image/png");

				$.ajax({
					type: "POST",

					url: "post.php",

					data: {img: img},
					success: function(data)
					{
							setTimeout(function () {
						 window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
					}, 2000);
					}});
			}
			
			//LOVE
			else if (answer == 3) {
				
				try {
           var canvas = fx.canvas();
        } catch (e) {
           alert(e);
           return;
        }
				var image = document.getElementById('image');
				var texture = canvas.texture(image);
				image.parentNode.insertBefore(canvas, image);
				image.parentNode.removeChild(image);
			
	      canvas.draw(texture).swirl(x, y, 348, -0.8).update();
 
				var img = canvas.toDataURL("image/png");

				$.ajax({
					type: "POST",

					url: "post.php",

					data: {img: img},
					success: function(data)
					{
							setTimeout(function () {
						 window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
					}, 2000);
					}});
			}
			
			//NO EMOTION SELECTED
			else {
				alert("Please select an emotion!");
			} 
		}
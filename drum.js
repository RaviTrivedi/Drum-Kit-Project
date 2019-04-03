// Using mouse

var numberOfButtons = document.querySelectorAll(".drum").length;

for(i = 0; i < numberOfButtons; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click", function()
	{
		var buttonInnerHtml = this.innerHTML;
			//console.log(this); o.p:- <button class="w drum">w</button> and so on all buttons
			// console.log(this.innerHTML);o.p:-w and so on s,d,j,k,l
		buttonAnimation(buttonInnerHtml);
						// (buttonInnerHtml=w,a,s,d.j.k.l so on)
		makeSound(buttonInnerHtml);
	})
}


// Using Keyboard
document.addEventListener("keydown",function(event)
{
	buttonAnimation(event.key);
	makeSound(event.key);
});

function makeSound(key)
{
	switch(key)
	{
		case "w":
			var x = new Audio("tom-1.mp3");
			x.play();
			break;

		case "a":
			var x = new Audio("tom-2.mp3");
			x.play();	
			break;

		case "s":
			var x = new Audio("tom-3.mp3");
			x.play();	
			break;

		case "d":
			var x = new Audio("tom-4.mp3");
			x.play();	
			break;

		case "j":
			var x = new Audio("snare.mp3");
			x.play();	
			break;

		case "k":
			var x = new Audio("crash.mp3");
			x.play();	
			break;

		case "l":
			var x = new Audio("kick-bass.mp3");
			x.play();	
			break;

		default:
		 	console.log("Press only w or a key");
	}
}

function buttonAnimation(key)
{
	var activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");

	setTimeout(function()
	{
		activeButton.classList.remove("pressed");
	},100);
}











// var number = document.querySelectorAll(".drum").length;

// for(var i = 0; i < number; i++)
// {
// 	document.querySelectorAll(".drum")[i].addEventListener("click", function ()
// 		{
// 			switch()
// 		});

// }



// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
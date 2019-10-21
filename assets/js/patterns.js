// var width = view.size.width;
// var height = view.size.height;

// //declaring temp patterns
// var pattern1 = createTemp();
// var pattern2a = createTemp();
// var pattern2b = createTemp();
// var pattern3a = createTemp();
// var pattern3b = createTemp();
// var pattern4a = createTemp();
// var pattern4b = createTemp();
// var pattern4c = createTemp();
// var pattern5 = createTemp();
// var pattern6 = createTemp();
// var pattern7 = createTemp();

// //assigning sounds
// var pattern1Sound = new Howl({
// 	src: ['assets/sounds/bubbles.mp3']
// });
// var pattern2Sound = new Howl({
//     src: ['assets/sounds/clay.mp3']
// });
// var pattern3Sound = new Howl({
//     src: ['assets/sounds/confetti.mp3']
// });
// var pattern4Sound = new Howl({
//     src: ['assets/sounds/splits.mp3']
// });
// var pattern5Sound = new Howl({
//     src: ['assets/sounds/veil.mp3']
// });
// var pattern6Sound = new Howl({
//    	src: ['assets/sounds/piston-2.mp3']
// });

// //drawing on each key down event
// function onKeyDown(event) {	

// 	if (event.key === "a") {
// 		//create a circle in the middle of canvas
// 		pattern1Sound.play();

// 		pattern1.remove();

// 		pattern1 = new Path.Circle(new Point(width/2, height/2), 300);
// 		pattern1.fillColor = "#ffb8a3";

// 	} else if (event.key === "s") {
// 		//create two squares on opposite sides of the canvas
// 		pattern2Sound.play();

// 		pattern2a.remove();
// 		pattern2b.remove();

// 		var rectangle1 = new Rectangle(new Point(50, height/2 - 75), new Point(200, height/2 + 75));
// 		var rectangle2 = new Rectangle(new Point(width - 200, height/2 - 75), new Point(width - 50, height/2 + 75));
// 		pattern2a = new Path.Rectangle(rectangle1);
// 		pattern2b = new Path.Rectangle(rectangle2);
// 		pattern2a.fillColor = "#ffc9f0";
// 		pattern2b.fillColor = "#ffc9f0";

// 	} else if (event.key === "d") {
// 		//create two rectangles outside of canvas
// 		pattern3Sound.play();

// 		pattern3a.remove();
// 		pattern3b.remove();

// 		var rectangle1 = new Rectangle(new Point(0 - width, 0), new Size(width, 30));
// 		pattern3a = new Path.Rectangle(rectangle1);
// 		pattern3a.fillColor = "#c894ff";

// 		var rectangle2 = new Rectangle(new Point(width - 30, height), new Size(30, height));
// 		pattern3b = new Path.Rectangle(rectangle2);
// 		pattern3b.fillColor = "#c894ff";

// 	} else if (event.key === "f") {
// 		//create three rectangles in the middle of the screen
// 		pattern4Sound.play();

// 		pattern4a.remove();
// 		pattern4b.remove();
// 		pattern4c.remove();

// 		var rectangle1 = new Rectangle(new Point(width/2 - 200, 150), new Size(100, height/2));
// 		pattern4a = new Path.Rectangle(rectangle1);
// 		pattern4a.fillColor = "#c2a8ff";

// 		var rectangle2 = new Rectangle(new Point(width/2 - 50, 150), new Size(100, height/2));
// 		pattern4b = new Path.Rectangle(rectangle2);
// 		pattern4b.fillColor = "#ffc2c7";

// 		var rectangle3 = new Rectangle(new Point(width/2 + 100, 150), new Size(100, height/2));
// 		pattern4c = new Path.Rectangle(rectangle3);
// 		pattern4c.fillColor = "#c2a8ff";

// 	} else if (event.key === "g") {
// 		//create a circle in the bottom right of canvas
// 		pattern5Sound.play();

// 		pattern5.remove();

// 		pattern5 = new Path.Circle(new Point(width, height), 100);
// 		pattern5.fillColor = "#67bbff";

// 	} else if (event.key === "h") {
// 		//create a circle in the middle of canvas
// 		pattern6Sound.play();

// 		pattern6.remove();

// 		pattern6 = new Path.Circle(new Point(width/2, height/2), 300);
// 		pattern6.fillColor = "#e08aff";
// 	} else if (event.key === "j") {
// 		//create a outline triangle in the middle of canvas
// 		pattern7.remove();

// 		pattern7 = new Path.RegularPolygon(new Point(width/2, height/2), 3, 50);
// 		pattern7.strokeColor = "#ffb5b0";
// 		pattern7.strokeWidth = 20;
// 	}
// }

// //animating on each frame
// function onFrame(event) {
// 	//scaling down pattern for "a" key
// 	pattern1.fillColor.hue += 2;
// 	pattern1.scale(0.9);

// 	//rotating and scaling down patterns for "s" key
// 	pattern2a.rotate(15);
// 	pattern2b.rotate(-15);
// 	pattern2a.fillColor.hue += 2;
// 	pattern2b.fillColor.hue += 2;
// 	pattern2a.scale(0.9);
// 	pattern2b.scale(0.9);

// 	//moving two patterns for "d" key to the top left the canvas
// 	pattern3a.position.x += 80;
// 	pattern3a.fillColor.hue += 2;
// 	pattern3b.position.y -= 80;
// 	pattern3b.fillColor.hue += 2;

// 	//shrinking the height of the patterns for "f" key
// 	pattern4a.bounds.height -= 21;
// 	pattern4b.bounds.height -= 21;
// 	pattern4c.bounds.height -= 21;

// 	pattern4a.fillColor.hue += 4;
// 	pattern4b.fillColor.hue += 4;
// 	pattern4c.fillColor.hue += 4;

// 	if (pattern4a.area < 10) {
// 		pattern4a.remove();
// 		pattern4b.remove();
// 		pattern4c.remove();
// 	}

// 	//scaling up and increasing brightness for "g" key
// 	pattern5.fillColor.hue +=2;
// 		pattern5.fillColor.brightness += 0.02
// 	pattern5.scale(1.2);

// 	if (pattern5.area > width * height * height) {
// 		pattern5.fillColor.alpha -= 0.05;
// 	}

// 	//skewing the pattern for "h" key
// 	pattern6.skew(10,10);
// 	pattern6.fillColor.hue += 2;
// 	pattern6.fillColor.brightness += 0.01;

// 	if (pattern6.area > width * height) {
// 		pattern6.remove();
// 	}

// 	//scaling and rotating pattern for "j" key
// 	pattern7.scale(1.1);
// 	pattern7.rotate(3);
// }

// //function to return a temporary shape
// function createTemp() {
// 	var temp = new Path.Circle(new Point(width/2, height/2), 2);
// 	temp.fillColor = "rgba(0,0,0,0)";
// 	return temp;
// }
alert("connected");
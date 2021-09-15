var darkHair1 = [73, 42, 38];
var darkHair2 = [74, 47, 42];
var darkHair3 = [84, 54, 43];
var darkHair4 = [74, 47, 42];

var lightHair1 = [140, 119, 105];
var lightHair2 = [129, 106, 95];
var lightHair3 = [137, 104, 85];
var lightHair4 = [125, 99, 87];

var skin1 = [244, 196, 160];
var skin2 = [243, 172, 139];
var skin3 = [242, 185, 145];
var skin4 = [230, 150, 115];
var skin5 = [209, 150, 117];
var skin6 = [246, 195, 164];

var lip1 = [144, 89, 77];
var lip2 = [179, 102, 84];
var lip3 = [165, 88, 78];
var lip4 = [152, 72, 60];

var eye1 = [166, 104, 73];
var eye2 = [142, 88, 69];
var eye3 = [174, 108, 75];

var bkg1 = [191, 211, 200];
var bkg2 = [170, 177, 157];
var bkg3 = [207, 193, 196];

var shirt = [196, 101, 16];
var shirtShadow = [114, 59, 9];




function setup() {
	createCanvas(540, 540);
	noStroke();
}

function draw() {
	background(230);


	//background
	fill(bkg1);
	rect(0,0, 67.5, 540);
	fill(bkg2);
	rect(67.5, 0, 67.5, 540);
	fill(bkg3);
	rect(135, 0, 67.5, 540);
	fill(bkg1);
	rect(202.5, 0, 67.5, 540);
	fill(bkg2);
	rect(270, 0, 67.5, 540);
	fill(bkg3);
	rect(337.5, 0, 67.5, 540);
	fill(bkg1);
	rect(405, 0, 67.5, 540);
	fill(bkg2);
	rect(472.5, 0, 67.5, 540);
	fill(bkg3);
	

	//shirt
	fill(shirt);
	arc( 270, 580, 600, 450, PI, TWO_PI);

	

	//hair row one
	fill(darkHair1);
	rect(200, 20, 20, 20);
	fill(darkHair2);
	rect(220, 20, 20, 20);
	fill(darkHair3);
	rect(240, 20, 20, 20);
	fill(darkHair1);
	rect(260, 20, 20, 20);
	fill(darkHair4);
	rect(280, 20, 20, 20);
	fill (darkHair1);
	rect(300, 20, 20, 20);


	//hair row two
	fill(darkHair2);
	rect(180, 40, 20, 20);
	fill(darkHair3);
	rect(200, 40, 20, 20);
	fill(lightHair1);
	rect(220, 40, 20, 20);
	fill(darkHair2);
	rect(240, 40, 20, 20);
	fill(lightHair3);
	rect(260, 40, 20, 20);
	fill(lightHair1);
	rect(280, 40, 20, 20);
	fill(lightHair4);
	rect(300, 40, 20, 20);
	fill(darkHair3);
	rect(320, 40, 20, 20);

		//hair row three

	fill(darkHair1);
	rect(160, 60, 20, 20);
	fill(darkHair2);
	rect(180, 60, 20, 20);
	fill(lightHair3);
	rect(200, 60, 20, 20);
	fill(lightHair4);
	rect(220, 60, 20, 20);
	fill(darkHair4);
	rect(240, 60, 20, 20);
	fill(lightHair3);
	rect(260, 60, 20, 20);
	fill(lightHair4);
	rect(280, 60, 20, 20);
	fill(lightHair1);
	rect(300, 60, 20, 20);
	fill(darkHair2);
	rect(320, 60, 20, 20);	
	fill(darkHair1);
	rect(340, 60, 20, 20);

	//hair row four
	fill(darkHair1);
	rect(140, 80, 20, 20);
	fill(darkHair4);
	rect(160, 80, 20, 20);
	fill(lightHair1);
	rect(180, 80, 20, 20);
	fill(lightHair3);
	rect(200, 80, 20, 20);
	fill(darkHair2);
	rect(220, 80, 20, 20);
	fill(lightHair2);
	rect(240, 80, 20, 20);
	fill(lightHair3);
	rect(260, 80, 20, 20);
	fill(lightHair1);
	rect(280, 80, 20, 20)
	fill(lightHair3);
	rect(300, 80, 20, 20);
	fill(darkHair3);
	rect(320, 80, 20, 20);
	fill(darkHair2);
	rect(340, 80, 20, 20);
	fill(darkHair1);
	rect(360, 80, 20, 20);
	

	//skin starts row one
	fill(darkHair2);
	rect(140, 100, 20, 20);
	fill(skin4);
	rect(160, 100, 20, 20);
	fill(skin3);
	rect(180, 100, 20, 20);
	fill(skin2);
	rect(200, 100, 20, 20);
	fill(skin3);
	rect(220, 100, 40, 20);
	fill(skin1);
	rect(260, 100, 20, 20);
	fill(skin4);
	rect(280, 100, 20, 20);
	fill(skin1);
	rect(300, 100, 40, 20);
	fill(darkHair4);
	rect(320, 100, 20, 20);
	fill(skin2);
	rect(340, 100, 20, 20);
	fill(darkHair1);
	rect(360, 100, 20, 20);
	fill(lightHair4);
	rect(380, 100, 20, 20);

	//skin starts row two
	fill(darkHair3);
	rect(120, 120, 20, 20);
	fill(lightHair2);
	rect(140, 120, 20, 20);
	fill(skin4);
	rect(160, 120, 20, 20);
	fill(skin6);
	rect(180, 120, 20, 20);
	fill(skin5);
	rect(200, 120, 20, 20);
	fill(skin3);
	rect(220, 120, 20, 20);
	fill(skin1);
	rect(240, 120, 20, 20);
	fill(skin2);
	rect(260, 120, 20, 20);
	fill(skin3);
	rect(280, 120, 20, 20);
	fill(skin1);
	rect(300, 120, 20, 20);
	fill(skin2);
	rect(320, 120, 20, 20);
	fill(darkHair2);
	rect(340, 120, 20, 20);
	fill(skin4);
	rect(360, 120, 20, 20);
	fill(darkHair1);
	rect(380, 120, 20, 20);

	//skin starts row three
	fill(darkHair1);
	rect(120, 140, 20, 20);
	fill(lightHair3);
	rect(140, 140, 20, 20);
	fill(skin3);
	rect(160, 140, 20, 20);
	fill(skin1);
	rect(180, 140, 60, 20);
	fill(skin3);
	rect(240, 140, 20, 20);
	fill(skin1);
	rect(260, 140, 20, 20);
	fill(skin2);
	rect(280, 140, 20, 20);
	fill(skin3);
	rect(300, 140, 20, 20);
	fill(skin2);
	rect(320, 140, 20, 20);
	fill(skin1);
	rect(340, 140, 20, 20);
	fill(darkHair2);
	rect(360, 140, 20, 20);
	fill(skin6);
	rect(380, 140, 20, 20);
	fill(darkHair1);
	rect(400, 140, 20, 20);

	//skin begins row four
	fill(darkHair2);
	rect(120, 160, 20, 20);
	fill(lightHair3);
	rect(140, 160, 20, 20);
	fill(skin6);
	rect(160, 160, 20, 20);
	fill(skin3);
	rect(180, 160, 20, 20);
	fill(skin4);
	rect(200, 160, 20, 20);
	fill(skin5);
	rect(220, 160, 40, 20);
	fill(skin6);
	rect(260, 160, 40, 20);
	fill(skin5);
	rect(300, 160, 40, 20);
	fill(skin3);
	rect(340, 160, 20, 20);
	fill(skin2);
	rect(360, 160, 20, 20);
	fill(darkHair3);
	rect(380, 160, 20, 20);
	fill(lightHair2);
	rect(400, 160, 20, 20);

	//skin begins row five
	fill(lightHair4);
	rect(120, 180, 20, 20);
	fill(skin4);
	rect(140, 180, 20, 20);
	fill(skin3);
	rect(160, 180, 20, 20);
	fill(skin2);
	rect(180, 180, 20, 20);
	fill(eye1);
	rect(200, 180, 20, 20);
	fill(eye2);
	rect(220, 180, 20, 20);
	fill(eye3);
	rect(240, 180, 20, 20);
	fill(skin4);
	rect(260, 180, 40, 20)
	fill(eye1);
	rect(300, 180, 20, 20);
	fill(eye2);
	rect(320, 180, 20, 20);
	fill(eye3);
	rect(340, 180, 20, 20);
	fill(skin4);
	rect(360, 180, 20, 20);
	fill(skin3);
	rect(380, 180, 20, 20); 
	fill(lightHair4);
	rect(400, 180, 20, 20);

	//eyes and skin row one
	fill(skin1);
	rect(120, 200, 20, 20);
	fill(skin2);
	rect(140, 200, 40, 20);
	fill(eye1);
	rect(180, 200, 40, 20);
	fill(eye3);
	rect(220, 200, 20, 20);
	fill(eye1);
	rect(240, 200, 20, 20);
	fill(skin3);
	rect(260, 200, 60, 20);
	fill(eye1);
	rect(300, 200, 20, 20);
	fill(eye2);
	rect(320, 200, 20, 20);
	fill(eye3);
	rect(340, 200, 20, 20);
	fill(skin2);
	rect(360, 200, 20, 20);
	fill(skin3);
	rect(380, 200, 20, 20);
	fill(skin1);
	rect(400, 200, 20, 20);

	//eyes and skin row two
	fill(skin2);
	rect(120, 220, 20, 20);
	fill(skin3);
	rect(140, 220, 20, 20);
	fill(skin4);
	rect(160, 220, 20, 20);
	fill(skin5);
	rect(180, 220, 20, 20);
	fill(skin2);
	rect(200, 220, 20, 20);
	fill(eye1);
	rect(220, 220, 20, 20);
	fill(eye3);
	rect(240, 220, 20, 20);
	fill(skin2);
	rect(260, 220, 40, 20);
	fill(skin5);
	rect(300, 220, 20, 20);
	fill(eye2);
	rect(320, 220, 20, 20);
	fill(eye1);
	rect(340, 220, 20, 20);
	fill(skin1);
	rect(360, 220, 20, 20);
	fill(skin2);
	rect(380, 220, 20, 20);
	fill(skin5);
	rect(400, 220, 20, 20);

	//cheeks row one
	fill(skin5);
	rect(120, 240, 20, 20);
	fill(skin3);
	rect(140, 240, 20, 20);
	fill(skin2);
	rect(160, 240, 20, 20);
	fill(skin3);
	rect(180, 240, 40, 20);
	fill(skin2);
	rect(220, 240, 20, 20);
	fill(skin5);
	rect(240, 240, 20, 20);
	fill(skin1);
	rect(260, 240, 40, 20);
	fill(skin2);
	rect(300,240, 20, 20);
	fill(skin6);
	rect(320, 240, 20, 20);
	fill(skin3);
	rect(340, 240, 20, 20);
	fill(skin2);
	rect(360, 240, 40, 20);
	fill(skin5);
	rect(400, 240, 20, 20);

	//cheeks row two
	fill(skin5);
	rect(120, 260, 20, 20);
	fill(skin3);
	rect(140, 260, 20, 20);
	fill(skin5);
	rect(160, 260, 20, 20);
	fill(skin4);
	rect(180, 260, 40, 20);
	fill(skin3);
	rect(220, 260, 20, 20);
	fill(skin5);
	rect(240, 260, 20, 20);
	fill(skin2);
	rect(260, 260, 60, 20);
	fill(skin3);
	rect(320, 260, 20, 20);
	fill(skin2);
	rect(340, 260, 40, 20);
	fill(skin1);
	rect(380, 260, 20, 20);
	fill(skin5);
	rect(400, 260, 20, 20);

	//cheeks row five
	rect(120, 280, 40, 20);
	fill(skin6);
	rect(160, 280, 60, 20);
	fill(skin5);
	rect(220, 280, 40, 20); 
	fill(skin2);
	rect(260, 280, 20, 20);
	fill(skin1);
	rect(280, 280, 40, 20);
	fill(skin2);
	rect(320, 280, 20, 20);
	fill(skin4);
	rect(340, 280, 20, 20);
	fill(skin2);
	rect(360, 280, 40, 20);
	fill(skin5);
	rect(400, 280, 20, 20);

	//cheeks row six

	rect(120, 300, 60, 20);
	fill(skin3);
	rect(180, 300, 20, 20);
	fill(lip1);
	rect(200, 300, 20, 20);
	fill(skin2);
	rect(220, 300, 20, 20);
	fill(skin5);
	rect(240, 300, 80, 20);
	fill(skin3);
	rect(320, 300, 20, 20);
	fill(lip1);
	rect(340, 300, 20, 20);
	fill(skin2);
	rect(360, 300, 20, 20);
	fill(skin3);
	rect(380, 300, 40, 20);

	//start lips
	fill(skin2);
	rect(120, 320, 20, 20);
	fill(skin4);
	rect(140, 320, 60, 20);
	fill(skin5);
	rect(200, 320, 20, 20);
	fill(lip1);
	rect(220, 320, 40, 20);
	fill(skin1);
	rect(260, 320, 60, 20);
	fill(lip1);
	rect(320, 320, 20, 20);

	fill(skin4);
	rect(340, 320, 20, 20);
	fill(skin2);
	rect(360, 320, 20, 20);
	fill(skin6);
	rect(380, 320, 40, 20);
	
	//more lips
	fill(skin3);
	rect(120, 340, 20, 20);
	fill(skin2);
	rect(140, 340, 60, 20);
	fill(skin5);
	rect(200, 340, 20, 20);
	fill(skin6);
	rect(220, 340, 20, 20);
	fill(lip2);
	rect(240, 340, 40, 20);
	fill(lip3);
	rect(280, 340, 20, 20);
	fill(lip1);
	rect(300, 340, 20, 20);
	fill(lip3);
	rect(320, 340, 20, 20);
	fill(skin4);
	rect(340, 340, 40, 20);
	fill(skin3);
	rect(380, 340, 20, 20);
	fill(skin5);
	rect(400, 340, 20, 20);


	//lips bottom
	fill(skin3);
	rect(140, 360, 40, 20);
	fill(skin2);
	rect(180, 360, 80, 20);
	fill(lip1);
	rect(260, 360, 20, 20);
	fill(lip2);
	rect(280, 360, 20, 20);
	fill(lip1);
	rect(300, 360, 20, 20);
	fill(skin4);
	rect(320, 360, 40, 20);
	fill(skin5);
	rect(360, 360, 20, 20);
	fill(skin6);
	rect(380, 360, 40, 20);

	//chin
	fill(skin5);
	rect(160, 380, 40, 20);
	fill(skin6);
	rect(200, 380, 20, 20);
	fill(skin5);
	rect(220, 380, 40, 20);
	fill(skin1);
	rect(260, 380, 60, 20);
	fill(skin5);
	rect(320, 380, 20, 20);
	fill(skin6);
	rect(340, 380, 20, 20);
	fill(skin5);
	rect(360, 380, 40, 20);

	//chin2
	fill(skin4);
	rect(180, 400, 20, 20);
	fill(skin6);
	rect(200, 400, 40, 20);
	fill(skin5);
	rect(240, 400, 60, 20);
	fill(skin6);
	rect(300, 400, 20, 20);
	fill(skin3);
	rect(320, 400, 40, 20);
	fill(skin5);
	rect(360, 400, 20, 20);

	//bottom of chin
	rect(200, 420, 40, 20);
	fill(skin5);
	rect(240, 420, 80, 20);
	fill(skin3);
	rect(320, 420, 20, 20);
	fill(skin2);
	rect(340, 420, 20, 20);

	//background
	fill


	


	








	









	



	














}
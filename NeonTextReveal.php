<!DOCTYPE HTML>
<html lang="el"> 

<head>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Glowing Neon Light Text Reveal</title>
<style type="text/css">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
	margin: 0;
	padding: 0;	
	box-sizing: border-box;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #000000;
	overflow: hidden;
	font-family: poppins;
} 
.box {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 600px;
	height: 300px;

}
.box h2 {
	color: #ffffff;
	font-size: 5em;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-shadow:
				0 0 10px #00ff00, 
				0 0 20px #00ff00, 
				0 0 40px #00ff00;
	transition: all 2s ease;
}
.box h2:hover {
	text-shadow:
				0 0 10px #00ccff, 
				0 0 20px #00ccff, 
				0 0 40px #00ccff;
}
.lightbar {
	position: absolute;
	top: calc(50%-50px);
	left: 0;
	width: 10px;
	height: 100px;
	border-radius: 10px;
	background: #ffffff;
	z-index: 2;
	box-shadow:
				0 0 10px #00ff00, 
				0 0 20px #00ff00, 
				0 0 40px #00ff00, 
				0 0 80px #00ff00, 
				0 0 120px #00ff00;
	transition: all 2s ease;
	animation: lightbarAnimated 5s linear infinite;
}
h2:hover ~ .lightbar {
	box-shadow:
				0 0 10px #00ccff, 
				0 0 20px #00ccff, 
				0 0 40px #00ccff, 
				0 0 80px #00ccff, 
				0 0 120px #00ccff;
}
.toplayer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000000;
	animation: toplayerAnimated 10s linear infinite;
}
@keyframes lightbarAnimated{
		0%, 5%
		{
			transform: scaleY(0) translateX(0);
		}
		10%
		{
			transform: scaleY(1) translateX(0);
		}
		90%
		{
			transform: scaleY(1) translateX(calc(600px - 10px));
		}
		95%, 100%
		{
			transform: scaleY(0) translateX(calc(600px - 10px));
		}		
}

@keyframes toplayerAnimated {
		0%, 2.5%
		{
			transform: translateX(0);
		}
		5%
		{
			transform: translateX(0);
		}
		45%
		{
			transform: translateX(100%);
		}
		47.5%, 50%
		{
			transform: translateX(100%);
		}
		50.001%, 52.5%
		{
			transform: translateX(-100%);
		}
		55%
		{
			transform: translateX(-100%);
		}
		95%
		{
			transform: translateX(0);
		}
		97.5%, 100%
		{
			transform: translateX(0);
		}
}

</style>
</head>
 
<body>

	<div class="box">
		<h2>Some Text</h2>
		<div class="lightbar"></div>
		<div class="toplayer"></div>
	</div>

</body>
</html>

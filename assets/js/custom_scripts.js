// Initialize bootstrap tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})


function parallax_with_grayscale (id,multiplier) {
	if ( document.getElementById(id) !== null) {
		let parallax=document.getElementById(id);
				
		window.addEventListener('scroll', function(){
			var value = window.pageYOffset;
			
			parallax.style.transform = `translateY(${value*multiplier}px)`;
			parallax.style.filter = `grayscale(${value*multiplier}%)`;
		})
	}
	else {
		console.log('You tried to create parallax grayscale effect on element with id='+id+', which doesn\'t exist!');
	}
}
// Main Page Parallax

/* 	if ( document.getElementById("layer2") !== null) {
		let layer2=document.getElementById("layer2");
				
		window.addEventListener('scroll', function(){
			var value = window.pageYOffset;
			
			layer2.style.transform = `translateY(${value * -0.17}px)`;
			layer2.style.filter = `grayscale(${value * 0.17}%)`;
		})
	}
 */
// Main Page Easter Egg
	if ( document.getElementById("easterEgg") !== null && document.getElementById("tree") !== null) {
		document.getElementById("easterEgg").ondblclick = function() {mouseOver()};
		document.getElementById("easterEgg").onclick = function() {mouseOut()};

		function mouseOver() {
			document.getElementById("tree").style.opacity = "1";
			document.getElementById("tree").style.transition = 'opacity 8s ease';
		}

		function mouseOut() {
			document.getElementById("tree").style.opacity = "0";
		}
	}

// ParallaxZoom
	if ( document.getElementById("parallaxZoom") !== null) {
		let parallaxZoom=document.getElementById("parallaxZoom");
		let parallaxZoom_height = parallaxZoom.offsetHeight;
				
		window.addEventListener('scroll', function(){
			var verticalMove = window.pageYOffset;
			var zoomIn = 1 + (verticalMove / (4*parallaxZoom_height / 1.001)) ;
			
			parallaxZoom.style.transform = `translateY(${verticalMove * 0.3}px) scale(${zoomIn})`;
		})
	}
    
// ParallaxPlain

	if ( document.getElementById("parallaxPlain") !== null) {
		let parallaxPlain=document.getElementById("parallaxPlain");
		let parallaxPlain_height = parallaxPlain.offsetHeight;
				
		window.addEventListener('scroll', function(){
			var verticalMove = window.pageYOffset;
			
			parallaxPlain.style.transform = `translateY(${verticalMove * 0.3}px)`;
		})
	}

// Parallax About Us

	if ( document.getElementById("parallaxAbout") !== null) {
		let parallaxAbout=document.getElementById("parallaxAbout");
		let parallaxAbout_height = parallaxAbout.offsetHeight;
		let jigsawPieceHope=document.getElementById("jigsawPieceHope");
		let jigsawPieceHope_height = jigsawPieceHope.offsetHeight;
		let jigsawPieceBlack=document.getElementById("jigsawPieceBlack");
		let jigsawPieceBlack_height = jigsawPieceBlack.offsetHeight;
				
		window.addEventListener('scroll', function(){
			var verticalMove = window.pageYOffset;
			var oneToZero = 1 - (verticalMove / (0.7*parallaxAbout_height / 1.001));
			var zeroToOne = verticalMove / (0.3*jigsawPieceHope_height / 1.001);

			parallaxAbout.style.transform = `translateY(${verticalMove * 0.3}px)`;
			parallaxAbout.style.filter = `grayscale(${oneToZero*0.9})`;
			jigsawPieceHope.style.transform = `translateY(${verticalMove * -0.3}px)`;
			jigsawPieceHope.style.opacity = zeroToOne;
			jigsawPieceBlack.style.transform = `translateY(${verticalMove * 0.9}px)`;
			jigsawPieceBlack.style.opacity = oneToZero;
		})
	}

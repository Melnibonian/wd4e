// Initialize bootstrap tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// Main Page Parallax

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

// Main Page Click Effects
	$("#main_anchor").click(function(event) {
		event.preventDefault();
		$("#layer2_right_1").delay(1000).fadeToggle(2000);
		$("#layer2_right_2").delay(1000).fadeToggle(2000);
		window.setTimeout(function() {
			$('#main_parallax #layer2').toggleClass('red-bg');
		}, 1000);
	});
// Contact Form Validation
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
if (document.getElementById("contact_form") !== null ){
	document.getElementById("contact_form").addEventListener("click", contact_form_validation);
	function contact_form_validation(event) {
		var your_name = document.getElementById("your_name").value;
		var your_email = document.getElementById("your_email").value;
		var your_phone = document.getElementById("your_phone").value;
		var your_message = document.getElementById("your_message").value;
		var project_type = document.getElementById("project_type").value;
		var your_name_message = document.getElementById("your_name_message");
		var your_email_message = document.getElementById("your_email_message");
		var your_phone_message = document.getElementById("your_phone_message");
		var your_message_message = document.getElementById("your_message_message");
		var project_type_message = document.getElementById("project_type_message");
		your_name_message.innerHTML = '';
		your_email_message.innerHTML = '';
		your_phone_message.innerHTML = '';
		your_message_message.innerHTML = '';
		if (your_name == "") {
			your_name_message.innerHTML = "Required field";
		}
		else {
			your_name_message.innerHTML = "<span class='text-success'>&#10003;</span>";
			var your_name_success = true;
		}
		if (your_email == "") {
			your_email_message.innerHTML = "Required field";
		}
		else if (!validateEmail(your_email)) {
			your_email_message.innerHTML = "Please insert a valid email";
		}
		else {
			your_email_message.innerHTML = "<span class='text-success'>&#10003;</span>";
			var your_email_success = true;
		}
		if (your_phone == "") {
			your_phone_message.innerHTML = "Required field";
		}
		else if (isNaN(your_phone)) {
			your_phone_message.innerHTML = "Please insert a valid phone number";
		}
		else if (your_phone.length !== 10) {
			your_phone_message.innerHTML = "Please insert a 10 digit phone number";
		}
		else {
			your_phone_message.innerHTML = "<span class='text-success'>&#10003;</span>";
			var your_phone_success = true;
		}
		if (your_message == "") {
			your_message_message.innerHTML = "Required field";
		}
		else {
			your_message_message.innerHTML = "<span class='text-success'>&#10003;</span>";
			var your_message_success = true;
		}
		if (!(your_name_success === true && your_email_success === true && 
			your_phone_success === true && your_message_success === true)) {
			event.preventDefault();
		}
		else {
			/* setTimeout(function(){ 
				document.getElementById['success_message'].innerHTML = 'Your message has been sent successfully!';
			}, 3000); */
			alert('Your message has been sent successfully!');
		}
	}
}

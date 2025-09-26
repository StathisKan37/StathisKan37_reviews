function footer_function() {
	const year = new Date().getFullYear();
	document.getElementById("site-footer").innerHTML = `
		<h5>&copy;StathisKan's_Reviews ${year}</h5>
		<h5>All rights reserved</h5>
		<br>
		<div class="container" style="text-align: right;">
			<a href="#" class="fa fa-facebook"></a>
			<a href="#" class="fa fa-twitter"></a>
			<a href="#" class="fa fa-google"></a>
			<a href="#" class="fa fa-youtube"></a>
			<a href="#" class="fa fa-reddit"></a>
		</div>
	`;
};

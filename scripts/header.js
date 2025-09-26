function header_function(page_position) {
	document.getElementById("site-header").innerHTML = `
		<picture>
			<source media="(min-width: 540px)" srcset="`+page_position+`images/StathisKan_reviews_desktop.png">
			<img src="`+page_position+`images/StathisKan_reviews_mobile.png" alt="StathisKan_reviews_logo" width="100%">
		</picture>
	`;
};

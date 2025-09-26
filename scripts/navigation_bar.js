function navigation_function(page_position) {
	document.getElementById("site-navigation-bar").innerHTML = `
		<ul>
			<li><a href="`+page_position+`index.html">Home</a></li>
			<li><a href="#contact">Contact</a></li>
			<li class="dropdown">
			<a href="javascript:void(0)" class="dropbtn">Categories</a>
			<div class="dropdown-content">
				<a href="#">Should I watch?</a>
				<a href="#">Should I start a marathon?</a>
				<a href="#">Should I watch again?</a>
		</div>
	</li>
</ul>
	`;
};

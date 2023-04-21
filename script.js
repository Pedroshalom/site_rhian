// const filterContainer = document.querySelector(".gallery__categories");
// const galleryItems = document.querySelectorAll(".project__card");

// filterContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("filter-item")) {
//         filterContainer.querySelector(".active").classList.remove("active");
//         event.target.classList.add("active")
//         const filterValue = event.target.getAttribute("data-filter")
//         galleryItems.forEach(item => {
//             if (item.classList.contains(filterValue) || filterValue === "all") {
//                 item.classList.remove("hide")
//                 item.classList.add("show")
//             } else {
//                 item.classList.remove("show")
//                 item.classList.add("hide")
//             }
//         })
//     }
// })

// function scrollToSection(sectionId){
//     document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
// }

// const txtElement = ['Freelancer', 'Web Developer', 'Graphic Designer'];
// let count = 0;
// let txtIndex = 0;
// let currentTxt = '';
// let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();
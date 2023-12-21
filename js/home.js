const items = document.querySelectorAll('.item');
const windowWidth = window.innerWidth;

function hideLastTwoItems() {

	if (windowWidth < '1279') {
		items[4].style.display = 'none';
		items[5].style.display = 'none';
		if (windowWidth < '856') {
			items[2].style.display = 'none';
			items[3].style.display = 'none';
		}
	}
	else {
		items[2].style.display = 'block';
		items[3].style.display = 'block';
		items[4].style.display = 'block';
		items[5].style.display = 'block';
	}
}
window.addEventListener('resize', hideLastTwoItems);
window.addEventListener('load', hideLastTwoItems);

let isItemsVisible = false;

function toggleItems() {
	isItemsVisible = !isItemsVisible;

	const items = document.querySelectorAll('.item');
	items.forEach(item => {
		if (isItemsVisible) {
			item.style.display = 'block';
		} else {
			if (windowWidth < '1279') {
				items[4].style.display = 'none';
				items[5].style.display = 'none';
				if (windowWidth < '856') {
					items[2].style.display = 'none';
					items[3].style.display = 'none';
				}
			}
		}
	});
}

const showAllButtons = document.querySelectorAll('.articles__more');
showAllButtons.forEach(button => {
	button.addEventListener('click', toggleItems);
});
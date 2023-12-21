document.querySelectorAll('.sidebar__spoiler').forEach((el) => {
	el.addEventListener('click', () => {
		let content = el.nextElementSibling;
		let beforeContent = el.querySelector('.sidebar__spoiler');

		document.querySelectorAll('.sidebar__sublist').forEach((sublist) => {
			if (sublist !== content) {
				sublist.style.display = 'none';
			}
		});

		if (content.style.display == 'block') {
			content.style.display = 'none';
		}
		else {
			content.style.display = 'block';
		}

	});
});
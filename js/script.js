document.querySelectorAll('.list__droplist').forEach((elem) => {
	elem.addEventListener('click', () => {
		let content = elem.nextElementSibling;
		let arrow = elem.querySelector('.list__arrow');

		// Перевіряємо, чи є вже відкритий контент
		const isOpen = content.style.height;

		// Закриваємо всі відкриті контенти та знімаємо клас '_active' та обертання зі всіх стрілок
		document.querySelectorAll('.content').forEach((elem) => {
			elem.style.height = null;
		});
		document.querySelectorAll('.list__arrow').forEach((elem) => {
			elem.classList.remove('_active');
			elem.style.transform = 'rotate(0deg)';
		});

		// Якщо контент вже відкритий, то закриваємо його
		if (isOpen) {
			content.style.height = null;
		} else {
			// Відкриваємо контент та додаємо клас '_active' та обертання для поточної стрілки
			content.style.height = content.scrollHeight + 'px';
			arrow.classList.add('_active');
			arrow.style.transform = 'rotate(180deg)';
			arrow.style.transition = '0.5s';
		}
	})
})

const burger = document.querySelector(".nav__icon");
if (burger) {
	const navigation = document.querySelector(".nav__list");
	burger.addEventListener("click", function (e) {
		burger.classList.toggle("_active");
		navigation.classList.toggle("_active");
		document.body.classList.toggle("_lock");
		if (document.body.classList.contains("_lock")) {

			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	})
}

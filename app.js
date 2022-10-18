let notificationTotal = document.getElementById('total-notifications');
let btn = document.querySelector('.mark-as-read');
let notifications = document.querySelectorAll('.notification-container');

let total = 3;
notificationTotal.innerText = total;

notifications.forEach((notification) => {
	notification.addEventListener('click', () => {
		if (notification.classList.contains('unread')) {
			notification.classList.remove('unread');
			if (total === 1) notificationTotal.style.display = 'none';
			if (total > 0) {
				total -= 1;
				notificationTotal.innerText -= 1;
			}
		}
	});
});

btn.addEventListener('click', () => {
	notifications.forEach((notification) => {
		notification.classList.remove('unread');
		total = 0;
		notificationTotal.style.display = 'none';
	});
});

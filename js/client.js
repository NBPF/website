document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const data = {
			name: form.querySelector('input[name="Name"]').value,
			email: form.querySelector('input[name="Email Address"]').value,
			subject: form.querySelector('input[name="Subject"]').value,
			message: form.querySelector('textarea[name="message"]').value
		};

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});

		const result = await response.json();
		alert(result.message);
		form.reset();
	});
});
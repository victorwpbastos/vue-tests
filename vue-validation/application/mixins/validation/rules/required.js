export default function (field, message = 'Required') {

	let type = field.attr('type').toLowerCase();
	let name = field.attr('name');

	// radios and checkboxes
	if (type === 'radio' || type === 'checkbox') {
		if (!name) {
			throw Error('In case of radios and checkboxes, name is required.');
		}

		if ($(`[name="${name}"]`).is(':checked') === false) {
			return message;
		}
	}

	// inputs and selects
	if (!field.val()) {
		return message;
	}
}
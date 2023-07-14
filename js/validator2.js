function Validator(formSelector) {

	var formRules = {};
	var validatorRules = {
		required: function (value) {
			
		}
	}
	//Lấy ra form element trong DOM theo `formSelector`
	var formELement = document.querySelector(formSelector);

	//Chỉ xử lý khi có ELement trong DOM
	if (formELement) {
		// lấy ra các atribute
		var inputs = formELement.querySelectorAll('[name][rules]');
		for (var input of inputs ){

			formRules[input.name] = input.getAttribute('rules');
		}
		console.log(formRules)
	}
}
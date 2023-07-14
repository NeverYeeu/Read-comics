//Đối tượng `Validator`
function Validator(options){
	function getParent(element, selector) {
		while (element.parentElement) {
			if(element.parentElement.matches(selector)) {
				return element.parentElement;
			}
			element= element.parentElement;
		}
	}

	var selectorRules = {};
	// Hàm thực hiện Validate
	function validate(inputElement, rule) {

		var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
		var errorMessage;

		//Lấy ra các rule của selector
		var rules = selectorRules[rule.selector];

		//Lặp qua cac rule thì kiem tra, có lỗi thi rưng
		for (var i = 0; i< rules.length; ++i){
			errorMessage = rules[i](inputElement.value);
			if (errorMessage) break;
		}
		
		// lấy element span trong code

		if (errorMessage) {
			errorElement.innerText = errorMessage;
			getParent(inputElement, options.formGroupSelector).classList.add('invalid');
		} else{
			errorElement.innerText = '';
			getParent(inputElement, options.formGroupSelector).classList.remove('invalid');

		}
		return !errorMessage;
	}

	var formElement = document.querySelector(options.form);
	if(formElement) {
		//Khi submit form
		formElement.onsubmit = function (e) {
			e.preventDefault();

			var isFormValid = true;
			//Thực hiện lặp qua từng rule
			options.rules.forEach(function (rule) {
				var inputElement = formElement.querySelector(rule.selector);
				var isValid = validate(inputElement, rule);
				if (!isValid) {
					isFormValid = false;
				}
			});
			
			//Trường hợp submit với Javascript
			if (isFormValid ) {
				if (typeof options.onSubmit === 'function') {
					var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
					var formValues = Array.from(enableInputs).reduce(function (values, input){
						values[input.name] = input.value;
						return values;
					}, {});

					options.onSubmit({formValues});
				}
			} else {
				//Trường hợp submit với hành vi mặc định
			}
		}

		// lặp qua mỗi rule và sử lý sự kiện ( lắng nghe, blur,...)
		options.rules.forEach(function (rule) {

			//Lưu lại các rules cho mỗi input
			if (Array.isArray(selectorRules[rule.selector])) {

				selectorRules[rule.selector].push(rule.test);
			}else {
				selectorRules[rule.selector] = [rule.test];
			}

			// Lấy element của form cần validate
			var inputElement = formElement.querySelector(rule.selector);
			if (inputElement) {
				//Xử lý trường hợp blur khỏi input
				inputElement.onblur = function () {
					validate(inputElement, rule);
				}

				// Xử lý khi người dùng vào input
				var formInput = inputElement.parentElement;
				var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
				inputElement.oninput = function () {
					errorElement.innerText = '';
					getParent(inputElement, options.formGroupSelector).classList.remove('invalid');

				}

			}
		});
	}
}
// Định nghĩa các rules
// Nguyên tắc của rule
// 1. Khi có lỗi ==> trả ra message lỗi
// 2. Khi hợp lệ ==> Không trả ra cái gì(undefined)
Validator.isRequired = function(selector, message) {
	return {
		selector: selector,
		test: function (value) {
			return value.trim() ? undefined : message ||  'Vui lòng nhập trường này'
		}
	};	
}
Validator.isEmail = function(selector, message) {
	return {
		selector: selector,
		test: function (value) {
			// Kiểm tra xem có phải là email hay không? `Javascript email regax `
			var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return regax.test (value) ? undefined : message ||  'Trường này không phải là email';
		}
	};	
}
Validator.minLength = function(selector, min, message) {
	return {
		selector: selector,
		test: function (value) {
			
			return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
		}
	};	
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
	return {
		selector: selector,
		test: function (value) {
			
			return value === getConfirmValue() ? undefined : message || `Giá trị nhập vào không chính xác`;
		}
	};	
}
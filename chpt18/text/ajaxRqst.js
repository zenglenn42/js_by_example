function newAjaxRqst() {
	var ajaxRqst;
	try {
		ajaxRqst = new XMLHttpRequest();
	} catch(e) {
		try {
			ajaxRqst = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				ajaxRqst = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				return false;
			}
		}
	}
	return ajaxRqst;
}

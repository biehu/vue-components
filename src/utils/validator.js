export default {
	isNotNull(str) {
		return str !== '';
	},
	
	isEmail(str) {
		return str.indexOf('@') > 0;
	}
}

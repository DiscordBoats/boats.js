module.exports = class ErrorHandler {
	constructor(error) {
		this.code = error.body.error.code;
		this.message = error.body.error.message;
	}
}
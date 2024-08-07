/* 6.CMD: 0x39 Set Device Date/Time */
const CMD = 0x39;

class Method {
	constructor(builder) {
		this.builder = builder;
		this.CMD = CMD;
	}

	body(device, date) {
		let year = parseInt(date.getFullYear().toString().substring(2, 4));
		let data = Buffer.from([ year, date.getDate() , date.getMonth()+1, date.getHours(), date.getMinutes(), date.getSeconds() ]);
		return this.builder.createRequest(device, this.CMD, data);
	}

	response(device, cmd, ack, len, body, crc) {
		return {
			success: ack == 0
		};
	}
}

module.exports = Method;

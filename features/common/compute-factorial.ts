export class ComputeFactorial {
	/**
	 * Uses bigint to get more accurate integer value as per factorial calculator
	 * @param num
	 * @returns
	 */
	public factorial = (num: number | bigint) => {
		let bigIntValue = BigInt(num);
		let factorialValue = 1n;
		for (let i = 0n; i < bigIntValue; i += 1n) {
			factorialValue *= bigIntValue - i;
		}
		return factorialValue;
	};

	async getRandomInt(minValue: number, maxValue: number) {
		minValue = Math.ceil(minValue);
		maxValue = Math.floor(maxValue);
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
	}
}

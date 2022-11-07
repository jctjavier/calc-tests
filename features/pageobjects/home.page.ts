import Page from './page';
import { ComputeFactorial } from '../common/compute-factorial';
import WorldService from '../common/world-service';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
	private computeFactorial = new ComputeFactorial();
	private myWorld = new WorldService();
	/**
	 * define selectors using getter methods
	 */
	public get inputValue() {
		return $('#number');
	}

	public get btnCalculate() {
		return $('button[type="submit"]');
	}

	public get resultText() {
		return $('p[id="resultDiv"]');
	}

	public open() {
		this.myWorld.init();
		return super.open();
	}

	public async expectMainElementsToExist() {
		await expect(this.inputValue).toBeExisting();
		await expect(this.btnCalculate).toBeExisting();
	}

	public async inputValueToCompute(minValue: number, maxValue: number) {
		const randomInt: number = await this.computeFactorial.getRandomInt(minValue, maxValue);

		this.myWorld.store('storedValue', randomInt);

		console.log(`Value entered was ${randomInt}`);

		await (await this.inputValue).setValue(randomInt.toString());
		await (await this.btnCalculate).click();
	}

	public async enterFactorialValue(valueToInput: string) {
		this.myWorld.store('storedValue', valueToInput);
		await (await this.inputValue).setValue(valueToInput);
		await (await this.btnCalculate).click();
		// TODO: (This wait is only for my own personal use) await new Promise(f => setTimeout(f, 1000));
	}

	public async verifyResult() {
		await (
			await this.resultText
		).waitUntil(
			async function () {
				return (await this.getText()).includes('The factorial of');
			},
			{
				timeout: 5000,
				timeoutMsg: `Expected result: Text with correct computed factorial should be displayed`,
			}
		);

		let displayedFactorial = await (await this.resultText).getText();
		displayedFactorial = displayedFactorial.split(':')[1].trim();
		console.log(displayedFactorial);
		const computedFactorial: bigint = this.computeFactorial.factorial(this.myWorld.parse('storedValue'));

		await expect(this.resultText).toHaveTextContaining(Number(computedFactorial).toString());
	}

	public async verifyErrorMessage() {
		await (
			await this.resultText
		).waitUntil(
			async function () {
				return (await this.getText()).includes('Please enter an integer');
			},
			{
				timeout: 5000,
				timeoutMsg: `Expected result: Error message should be displayed`,
			}
		);

		const styleObtained = await (await this.resultText).getAttribute('style');

		expect(styleObtained).toEqual('color: rgb(255, 0, 0);');
	}
}

export default new HomePage();

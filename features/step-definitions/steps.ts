import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';

const pages = {
	homepage: HomePage,
};

Given(/^I am on the factorial page$/, async () => {
	await pages['homepage'].open();
	await HomePage.expectMainElementsToExist();
});

When(/^I input a value between ([^\s]+) and ([^\s]+)$/, async (minValue: number, maxValue: number) => {
	await HomePage.inputValueToCompute(minValue, maxValue);
});

When(/^I input "([^"]*)" and click calculate$/, async (valueEntered: string) => {
	await HomePage.enterFactorialValue(valueEntered);
});

Then(/^I verify that the calculated factorial displayed is correct$/, async () => {
	await HomePage.verifyResult();
});

Then(/^I verify that an error message is displayed$/, async () => {
	await HomePage.verifyErrorMessage();
});

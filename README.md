# Sendcloud's Crispy Succostash - Test Automation

This is a framework which contains the test solution for Crispy Succostash application provided by Sendcloud

For full details SendcloudTestAutomation.pdf file can be checked at repo's root folder.

## Requirements

* NodeJS

* NPM

* Cypress

* Browser installed (Chrome, Firefox)

## SOLUTION

### Tests Included

|Validate default home page|Validate default new feed page|
|Validate Log In opens|Validate My Feeds when empty|
|Validate All Feeds opens|Validate submit empty feed|
|Validate Sign Up opens|Validate All Feeds when added|
|Validate default sign up page|Validate specific feed added|
|Validate Positive User sign up|Validate empty bookmark feeds page|
|Validate sign up with empty fields|Validate bookmarked feed|
|Validate sign up with different passwords|Validate New Feed creation|
|Validate sign up with short passwords -> data driven test cases (8 in total)|Validate Feed Entry when Logged Out|
|Validate default log in page|Validate Feed Entry when Logged In|
|Validate positive user log in|Validate add comment in Feed Entry|

## Usage Instructions

## EXECUTION

Scripts shortcuts have been added at `package.json` file, for executing all tests from npm.

```json
"scripts": {
	"cypress": "cypress open",
	"home-tests": "cypress run --spec cypress/integration/crispy-home-page.spec.js",
	"login-tests": "cypress run --spec cypress/integration/crispy-login-page.spec.js",
	"signup-tests": "cypress run --spec cypress/integration/crispy-signup-page.spec.js",
	"feeds-tests": "cypress run --spec cypress/integration/crispy-feeds-page.spec.js",
	"visual-validation": "cypress run --spec cypress/integration/crispy-visual-valid.spec.js",
	"test": "cypress run"
}
```


### 1)	INTERACTIVELY EXECUTION

 All tests can be run INTERACTIVELY running this command:

```bash
    npm run cypress
```

 It will open Cypress Test Runner where you can execute all tests included in interactive mode.


### 2)	NON-INTERACTIVELY EXECUTION

 All tests can be run NON-INTERACTIVELY in headless mode running this command:

```bash
    npm run test
```

Results will be displayed in the console without opening the interactive runner. It will generate though the videos of the execution at `/videos/` folder of the repository.

For running each of the tests suites individually:

```bash
  npm run home-tests
  npm run login-tests
  npm run signup-tests
  npm run feeds-tests
```

### REPORTING

Making use of `mochawesome` reports, after NON-INTERACTIVE execution a group of them are generated for all the tests at `/report/crispy-sendcloud-report` directory


NOTE: Refer to SendcloudTestAutomation.pdf file in root's repository folder for more details.


### VISUAL VALIDATION TESTS

A test case (`crispy-visual-valid.spec.js`) for aspect validation of the application has been also implemented making usage of `applitools / eyes-cypress`

There is one scenario covered given the limited time for implementation, but is added to shown how solution can be scalable to multiple scenarios validating the aspect of each of them.

#### REQUIREMENTS

```bash
	npm install @applitools/eyes-cypress
```

```bash
	npx eyes-setup
```

Then setup your API KEY at you AppliTool's account and add it to your environment variables

Linux:

```bash
	export APPLITOOLS_API_KEY=<API_KEY_VALUE>
```

Windows:

```bash
	set APPLITOOLS_API_KEY=<API_KEY_VALUE>
```


#### EXECUTION

Given the requirements step, this test is disabled by default in the suite. In order to enable it, it is just needed to remove the ignore line at cypres.json file:

```bash
   "ignoreTestFiles": "crispy-visual-valid.spec.js"
```

Then for running the test, execute:

```bash
  npm run visual-validation
```

After execution results of the test with snapshot included should be shown at your Applitools account, which also provides interesting functionality (such as accepting / rejecting tests according to tester criteria).

NOTE: For more details and screenshots refers to `SendcloudTestAutomation.pdf` file in root's repository folder.



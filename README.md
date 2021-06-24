# Sendcloud's Crispy Succostash - Test Automation

This is a framework which contains the test solution for Crispy Succostash application provided by Sendcloud

For full details SendcloudTestAutomation.pdf file can be checked at repo's root folder.

## Requirements

* NodeJS

* NPM

* Cypress

* Browser installed (Chrome, Firefox)

## Usage Instructions

## EXECUTION

Scripts shortcuts have been added at `package.json` file, for executing all tests from npm.

```bash
  npm run cypress
  npm run test
  npm run home-tests
  npm run login-tests
  npm run signup-tests
  npm run feeds-tests
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


### REPORTING

Making use of `mochawesome` reports, after NON-INTERACTIVE execution a group of them are generated for all the tests at `/report/crispy-sendcloud-report` directory


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



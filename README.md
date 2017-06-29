# selenium2rapise
Porting Selenium tests to Rapise.

## Creating a New Test

In Rapise choose `File > New Test`, enter test name and click `Web: Cross-Browser Testing Support`.

<img alt="Test Diagram" src="https://github.com/Inflectra/selenium2rapise/raw/master/Media/S2RNewTest.png" width="605"/>

Then choose Selenium browser from the list.

<img alt="Test Diagram" src="https://github.com/Inflectra/selenium2rapise/raw/master/Media/S2RChooseBrowser.png" width="450"/>

If you are on Rapise 5.1 or above choose `JavaScript` language option.

<img alt="Test Diagram" src="https://github.com/Inflectra/selenium2rapise/raw/master/Media/S2RLanguage.png" width="464"/>

An empty test will be created.

<img alt="Test Diagram" src="https://github.com/Inflectra/selenium2rapise/raw/master/Media/S2REmptyTest.png" width="470"/>

Put your code into `Test` function.

## Porting from Selenium

Example of ported code is inside `Selenium2Rapise.js`.

Rapise has support for the following classes:

- WebDriver
- WebElement
- Capabilities

Implementation is located at 

```
c:\Program Files (x86)\Inflectra\Rapise\Core\Engine\Lib\LibSelenium 
```

## Sample Test

This repository contains a sample test that should work out-of-the-box. Clone the repository and open `Selenium2Rapise.sstest` in Rapise and you are ready to go.
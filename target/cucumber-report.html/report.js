$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter the Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_should_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure Scenarios using test data as parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Abc@12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the home page \"The email address or password you have entered is incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_should_be_able_to_see_the_home_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...u have entered is in[correct]\u003e but was:\u003c...u have entered is in[valid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefs.Login_stepdefs.i_should_be_able_to_see_the_home_page(Login_stepdefs.java:82)\r\n\tat ✽.I should be able to see the home page \"The email address or password you have entered is incorrect\"(file:///C:/Users/ArtiR/eclipse_marketplace/Cucumber_Project/src/test/java/features/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Failure Scenerio using test data as Examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the Username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be able to see the home page \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "Abc@1234",
        "The email address or password you have entered is invalid"
      ]
    },
    {
      "cells": [
        "pqr@xyz.com",
        "AAA@1234",
        "The email address or password you have entered is invalid"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure Scenerio using test data as Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the home page \"The email address or password you have entered is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_should_be_able_to_see_the_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure Scenerio using test data as Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"pqr@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"AAA@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the home page \"The email address or password you have entered is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_stepdefs.i_should_be_able_to_see_the_home_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#msg_box\"}\n  (Session info: chrome\u003d137.0.7151.69)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.21.0\u0027, revision: \u002779ed462ef4\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [da844a8fe92bcef238557e3468f7d791, findElement {using\u003did, value\u003dmsg_box}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 137.0.7151.69, chrome: {chromedriverVersion: 137.0.7151.70 (dfa4dc56b2ab..., userDataDir: C:\\Users\\ArtiR\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53024}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53024/devtoo..., se:cdpVersion: 137.0.7151.69, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: da844a8fe92bcef238557e3468f7d791\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat stepdefs.Login_stepdefs.i_should_be_able_to_see_the_home_page(Login_stepdefs.java:80)\r\n\tat ✽.I should be able to see the home page \"The email address or password you have entered is invalid\"(file:///C:/Users/ArtiR/eclipse_marketplace/Cucumber_Project/src/test/java/features/Login.feature:26)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});
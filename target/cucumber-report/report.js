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
});
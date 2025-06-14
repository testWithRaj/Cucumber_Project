package stepdefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		
		monochrome=true,
		plugin= {"pretty","html:target/cucumber-report.html","json:target/cucumber-report.json"},
		features = "src/test/java/features",
		glue = "stepdefs",
		tags = {"@sanity"}
		)
public class TestRunner {
	
	

}

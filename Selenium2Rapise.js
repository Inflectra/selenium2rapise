//Use 'Record/Learn' button to begin test recording

function Test()
{
    var wdw = new WebDriverWrapper();
    
    var driver = wdw.CreateDriver();
    driver.SetUrl("http://www.libraryinformationsystem.org");
    
    var el = driver.FindElementByXPath("//body");
    Tester.Assert("Entered library", el.GetText().indexOf("Library Information System") != -1);
    
    var logInLink = el.FindElementByXPath("id('HeadLoginView_HeadLoginStatus')");
    logInLink.Click();

    Global.DoSleep(1000);

    var userName = driver.FindElementByCssSelector("#MainContent_LoginUser_UserName");
    var password = driver.FindElementByCssSelector("#MainContent_LoginUser_Password");

    userName.SendKeys("librarian");
    password.SendKeys("librarian");

    var logInButton = driver.FindElementByXPath('//input[@id="MainContent_LoginUser_LoginButton"]');
    logInButton.Click();
    
    Global.DoSleep(1000);
    Tester.Assert("User logged in", driver.FindElementByXPath('//span[@id="HeadLoginView_HeadLoginName"]') != null);

    driver.Quit();
}

g_load_libraries=["%g_browserLibrary:Selenium%"]


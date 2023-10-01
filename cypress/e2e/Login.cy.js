import dashboard from "../PageObjects/Dashboard";
import forgotpassword from "../PageObjects/ForgotPassword";
import Login from "../PageObjects/LoginPage";
describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it("Verify Login Page", () => {
    const lg = new Login();
    lg.verifyLoginPage();
  });
  it("Login with valid credentials", () => {
    const lg = new Login();
    const ds = new dashboard();
    lg.verifyLoginPage();
    lg.setUsername("Admin");
    lg.setPassword("admin123");
    lg.clickLogin();
    ds.verifyPage();
  });
  it("Login with invalid credentials", () => {
    const lg = new Login();
    const ds = new dashboard();
    lg.verifyLoginPage();
    lg.setUsername("Admin2");
    lg.setPassword("admin1243");
    lg.clickLogin();
    ds.verifyPage();
  });
  it("verifiy click forgot password", () => {
    const lg = new Login();
    const fp = new forgotpassword();
    lg.clickforgotpass();
    fp.verifyPage();
  });
});

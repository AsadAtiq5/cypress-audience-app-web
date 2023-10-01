import dashboard from "../PageObjects/Dashboard";
import Login from "../PageObjects/LoginPage";

describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it("Verify Dashboard Open", () => {
    const lg = new Login();
    const ds = new dashboard();
    lg.setUsername("Admin");
    lg.setPassword("admin123");
    lg.clickLogin();
    ds.verifyPage();
  });
  it("Verify Sidemenu", () => {
    const lg = new Login();
    const ds = new dashboard();
    lg.setUsername("Admin");
    lg.setPassword("admin123");
    lg.clickLogin();
    ds.verifyPage();
    ds.verifySearch_isVisible();
    ds.verifyAdminbtn_isVisible();
    ds.verifyPIMbtn_isVisible();
    ds.verifyLeavebtn_isVisible();
    ds.verifyMyinfo_isVisible();
    ds.verifyTimebtn_isVisible();
    ds.verifyRecruitmentbtn_isVisible();
    ds.verifyDashboardbtn_isVisible();
    ds.verifyDirectorybtn_isVisible();
    ds.verifyMaintainancebtn_isVisible();
    ds.verifyBuzzbtn_isVisible();
  });
  it.only("Open My info",()=>{
    const lg = new Login();
    const ds = new dashboard();
    lg.setUsername("Admin");
    lg.setPassword("admin123")
    lg.clickLogin();
    ds.verifyPage();
    ds.click_Myinfo();
    ds.scrollto_Check();
  })
});

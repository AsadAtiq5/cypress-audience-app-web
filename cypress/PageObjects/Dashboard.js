class dashboard {
  // xpaths:
  page = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
  search = "input[placeholder='Search']";
  btn_admin =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)";
  btn_PIM =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)";
  btn_Leave =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)";
  btn_Time =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)";
  btn_Myinfo = ".oxd-main-menu-item.active";
  btn_Recruitment =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)";
  btn_Dashboard =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)";
  btn_Directory =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)";
  btn_Maintainance =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1)";
  btn_Buzz =
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(11) > a:nth-child(1)";
  btn_save_Myinfo =
    "div[class='oxd-layout-footer'] p:nth-child(1)";
  // Methods:
  verifyPage() {
    cy.get(this.page).should("have.text", "Dashboard");
  }
  verifySearch_isVisible() {
    cy.get(this.search).should("be.visible");
  }
  verifyAdminbtn_isVisible() {
    cy.get(this.btn_admin).should("be.visible");
  }
  verifyPIMbtn_isVisible() {
    cy.get(this.btn_PIM).should("be.visible");
  }
  verifyLeavebtn_isVisible() {
    cy.get(this.btn_Leave).should("be.visible");
  }
  verifyTimebtn_isVisible() {
    cy.get(this.btn_Time).should("be.visible");
  }
  verifyRecruitmentbtn_isVisible() {
    cy.get(this.btn_Recruitment).should("be.visible");
  }
  verifyDashboardbtn_isVisible() {
    cy.get(this.btn_Dashboard).should("be.visible");
  }
  verifyDirectorybtn_isVisible() {
    cy.get(this.btn_Directory).should("be.visible");
  }
  verifyMaintainancebtn_isVisible() {
    cy.get(this.btn_Maintainance).should("be.visible");
  }
  verifyBuzzbtn_isVisible() {
    cy.get(this.btn_Buzz).should("be.visible");
  }
  verifyMyinfo_isVisible() {
    cy.get(this.btn_Myinfo).should("be.visible");
  }
  click_Myinfo() {
    cy.get(this.btn_Myinfo).click();
  }
  scrollto_Check(){
    cy.get(this.btn_save_Myinfo).scrollIntoView().should('be.visible');
  }
}

export default dashboard;

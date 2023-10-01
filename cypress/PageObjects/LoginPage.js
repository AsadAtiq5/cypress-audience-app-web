class Login {
  // xapths:
  page = ".oxd-text.oxd-text--h5.orangehrm-login-title";
  enter_Uname = "input[placeholder='Username']";
  enter_Pass = "input[placeholder='Password']";
  click_login = "button[type='submit']";
  forgot_pass = ".oxd-text.oxd-text--p.orangehrm-login-forgot-header";
  // Methods:
  verifyLoginPage() {
    cy.get(this.page).should("have.text", "Login");
  }
  setUsername(username) {
    cy.get(this.enter_Uname).clear();
    cy.get(this.enter_Uname).type(username);
  }
  setPassword(password) {
    cy.get(this.enter_Pass).type(password);
  }
  clickLogin() {
    cy.get(this.click_login).click();
  }
  clickforgotpass(){
    cy.get(this.forgot_pass).click();
  }
}

export default Login;

import forgotpassword from "../PageObjects/ForgotPassword";

describe("Forgot Passoword", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    );
  });
  it("Verify Forogot Password Page", () => {
    const fp = new forgotpassword();
    fp.verifyPage();
  });
});

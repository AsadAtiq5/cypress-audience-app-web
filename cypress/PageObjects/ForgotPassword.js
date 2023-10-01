class forgotpassword{
    // xpaths:
    page = ".oxd-text.oxd-text--h6.orangehrm-forgot-password-title";
    // Methods:
    verifyPage(){
        cy.get(this.page).should('have.text','Reset Password');
    }
}

export default forgotpassword;
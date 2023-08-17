describe('Account Creation', () => {
    it('should create an account', () => {
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
      
      // Fill out the registration form with your desired credentials
      cy.get('#accountFrm > fieldset > .btn').click();
      cy.get('#AccountFrm_firstname').type('Name');
      cy.get('#AccountFrm_lastname').type('Yame');
      cy.get('#AccountFrm_email').type('your-email@example.com');
      cy.get('#AccountFrm_address_1').type('0700000585'); 
      cy.get('#AccountFrm_city').type("Amman");
      cy.get('#AccountFrm_zone_id').type("Surrey");
      cy.get('#AccountFrm_postcode').type("o5rtyui5");
      cy.get('#AccountFrm_country_id').type("Syrian Arab Republic");
      cy.get('#AccountFrm_loginname').type("Name");
      cy.get('#AccountFrm_password').type("B7474ic");
      cy.get('#AccountFrm_password').type("B7474ic");
      cy.get('#AccountFrm_newsletter1').click();
      cy.get('#AccountFrm_agree').click();
      cy.get('.col-md-2 > .btn').click();
   
    });
  });
  describe('Login Test', () => {
    before(() => {
      cy.setGlobalCredentials('Name', 'B7474ic');
    });
  
    it('should log in', () => {
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
  
      // Use the global credentials to log in
      cy.get('#loginFrm_loginname').type('Name');
      cy.get('#loginFrm_password').type('B7474ic');
      cy.get('#loginFrm > fieldset > .btn').click();
  
      // Perform assertions to verify successful login
      // ...
    });
  });
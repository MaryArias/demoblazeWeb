class HomePage{
    get singUp(){
        return cy.get('#signin2');
    }; 
    get username(){
        return cy.get('#sign-username')
    };
    get password(){
        return cy.get('#sign-password')
    }
    get loginUserName(){
        return cy.get('#loginusername');
    };
    get loginPassword(){
        return cy.get('#loginpassword');
    };
    get cartButton(){
        return cy.get('#cartur');
    };
    get logIn(){
        return cy.get('#login2');
    };
    get laptops(){
        return cy.get('#login2');
    };
    get menuLaptos(){
        return cy.get('.col-lg-4 col-md-6 mb-4');
    };
    get modalLogIn(){
        return cy.get('.modal-footer').within(() => {
            cy.findAllByText(/^Log in/i);
        })
    }
    get modalSignUp(){
        return cy.get('.modal-footer').within(() => {
            cy.findAllByText(/^Sign up/i);
        })
    }
    get close(){
        return cy.findAllByText(/^Close/i)
    }
    
}
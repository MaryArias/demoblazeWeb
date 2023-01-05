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
    get firstCardLink(){
       return cy.get('.card-block')
       .eq(0)
       .should('be.visible')
       .find('a[class="hrefch"]');
    };
    get buttonLaptos(){
        return cy.get('.list-group-item').contains(/^Laptops/i);
    };
    get modalLogIn(){
        return cy.get('#logInModal').get('.modal-footer').contains(/^Log in/i);
    };
    get modalSignUp(){
        return cy.get('#signInModal').get('.modal-footer').contains(/^Sign up/i);    
    };
    get logOut(){
        return cy.get('#logout2');
    };
    get welcome(){
        return cy.get('#nameofuser');
    };
    get addToCard(){
        return cy.contains((/^Add to cart/i))
    }
    get close(){
        return cy.contains(/^Close/i)
    };
    
}
export default new HomePage();
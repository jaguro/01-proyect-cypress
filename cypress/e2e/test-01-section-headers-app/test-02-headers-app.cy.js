/// <reference types = 'cypress' />

describe('test validate to section-1',()=> {
    beforeEach(()=> {
        cy.visit('https://www.zooplus.es/')
        cy.title().should('eq','zooplus - Tu tienda online para mascotas líder en España')
        cy.get('#onetrust-accept-btn-handler').click({ force:true })
    })
    it('test to validate headers app contactUS',()=> {
        cy.get('#srh-help').should('be.visible')
            .invoke('removeAttr','target')
            .click({ force:true })
        cy.get('.hc-search-c').invoke('text').as('validateInfo')
        cy.get('@validateInfo').should('contain','¿En qué podemos ayudarte?')
    })
    it('test to validate headers app miProfile',()=> {
        cy.get('#shopHeaderAccountLink')
       .should('be.visible').click({ force:true })
        cy.get('#shopHeaderAccountLink').trigger('mouseover')
        cy.get('#loginForm > h1').invoke('text').as('validateText1')
        cy.get('@validateText1').should('contain','Para clientes de zooplus')
        cy.get('#login-email')
            .should('be.visible').type('Admin2324')
        cy.get('#login-password')
            .should('be.visible').type('test1234')
        cy.get('#srh-logo').click({ force:true })
    })
    it('test to validate headers app shoppingCart',()=> {
        cy.get('[data-testid="buttonText"]').should('be.visible').click({ force:true })
        cy.get('#srh-logo').click({ force:true })
    })
    it('test to validate headers app SearchBar',()=> {
        cy.get('#search_query_field_desktop').should('be.visible')
            .click({ force:true })
            .type('cat') 
        cy.get('#shop-header > div.MiddleBar-module_middleBar__s5v-r > div.SearchBar-module_desktopSearchBar__-iXH9 > div > form > button').as('buttonSub')
        cy.get('@buttonSub').click({ force:true })
        cy.on('uncaught:exception', (err, runnable) => {
              return false
        })
    })
    it('test to validate headers app offersApp',()=> {
        cy.get('#shop-header > div.TopBar-module_topBar__bavkr > div.TopBar-module_topBarText__68Uvf > div > a')
            .should('be.visible')
            .invoke('removeAttr','target')
            .click({ force:true })
        cy.get('[data-zta="H1UIC"]').should('be.visible').click({ force:true })
        cy.get('#srh-logo').click()
    })
    it('test to validate headers app PageHome',()=> {
       



    })
})
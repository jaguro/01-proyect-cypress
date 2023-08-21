/// <reference types = 'cypress' />

describe('test validate to section-1 headers',()=> {
    beforeEach(()=> {
        cy.visit('https://www.zooplus.es/')
        cy.title().should('eq','zooplus - Tu tienda online para mascotas líder en España')
        cy.get('#onetrust-accept-btn-handler').click({ force:true })
    })
    it.only('test to validate dropdown menu',()=> {
        cy.get('.LowerBar-module_categoryBar__evM0O').should('be.visible')
    })
    it('test to validate dropdown dogs',()=> {
        
    })
    it('test to validate dropdown menu cats',()=> {
        
    })
    it('test to validate dropdown menu',()=> {
        
    })
    it('test to validate dropdown antiparasity',()=> {
        
    })
    it('test to validate dropdown rodents',()=> {
        
    })
    it('test to validate dropdown birds',()=> {
        
    })
    it('test to validate dropdown others',()=> {
        
    })
    
    
})
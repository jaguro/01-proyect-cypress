/// <reference types = 'cypress' />

describe('test validate to section-1 headers',()=> {
    beforeEach(()=> {
        cy.visit('https://www.zooplus.es/')
        cy.title().should('eq','zooplus - Tu tienda online para mascotas líder en España')
        cy.get('#onetrust-accept-btn-handler').click({ force:true })
    })
    it('test check to smoke test',()=> {
        cy.get('#srh-logo').should('be.visible').click({ force:true })
    })
})
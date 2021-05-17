/// <reference types="cypress" />

describe('Get', () => {
    it('get all', () => {
        cy.request('/person').then( response => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    })

    it('get by id', async () => {
        const res = await cy.request('/person/2')
        expect(res.status).to.eq(200)
        expect(res.body.name).to.eq('NomeTroll')
    })
})

describe('Post', () => {
    it('Cadastrar usuario', () => {
        cy.fixture('personCreate.json').then(body => {
            // body.name = 'kaka'
            cy.request('POST', '/person', body).then( res => {
                expect(res.status).to.eq(201)
                expect(res.body.name).to.eq(body.name)
            })
        })
    })
})
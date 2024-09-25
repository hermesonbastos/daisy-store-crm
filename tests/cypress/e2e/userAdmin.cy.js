/// <reference types="cypress" />

describe('UserAdmin', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:5173/orders')
  })

  it('Adicionar nova categoria', () => {

    cy.get('.navbar > .menu-bars').should('be.visible').click()
    cy.get(':nth-child(4) > a').should('be.visible').click()
    cy.get('.primary-button').should('be.visible').click()
    cy.get(':nth-child(1) > .input-container-secondary > .input-input-secondary').should('be.visible').type('Categoria Teste')
    cy.get(':nth-child(2) > .input-container-secondary > .input-input-secondary').should('be.visible').type('Descrição da Categoria Teste')
    cy.get('.secondary-button').should('be.visible').click()
  })

  it('Adicionar produto ao estoque', () => {

    cy.intercept('POST', 'http://localhost:3000/products').as('postProduto');

    cy.get('.navbar > .menu-bars').should('be.visible').click()
    cy.get(':nth-child(2) > a').should('be.visible').click()
    cy.get('.primary-button').should('be.visible').click()
    cy.get('#switch-button').should('be.visible').click()
    cy.get('.card-main-form > .input-box > .input-container-secondary > .input-input-secondary').should('be.visible').type(10)
    cy.xpath(`//*[@id="imageUpload"]`).attachFile('../fixtures/produto.png').trigger('change', { force: true })
    cy.xpath('//*[@id="root"]/div[2]/form/div/button').scrollIntoView()
    cy.get('#name').should('be.visible').type('Produto Teste')
    cy.get('#description').should('be.visible').type('Descrição do Produto Teste')
    cy.get('#price').should('be.visible').type('20')
    cy.xpath('//*[@id="root"]/div[2]/form/div/button').should('be.visible')
    cy.contains('Criar Produto').click({force:true})
    cy.wait(2000)

    cy.wait('@postProduto').then((interception) => {

      expect(interception.response.statusCode).to.eq(201);
      expect(interception.response.body).to.have.property('name', 'Produto Teste');
      expect(interception.response.body).to.have.property('description', 'Descrição do Produto Teste');
      expect(interception.response.body).to.have.property('price', 20);
      expect(interception.response.body).to.have.property('stock', 10);
    })
  })

  it('Editar disponibilidade de um produto do estoque', () => {

    cy.get('.navbar > .menu-bars').should('be.visible').click()
    cy.get(':nth-child(2) > a').should('be.visible').click()
    cy.xpath('//*[@id="root"]/div[2]/div/div[1]/div[2]/div[1]').should('be.visible').click()
    cy.get('#switch-button').should('be.visible').click()
    cy.get('.secondary-button').scrollIntoView().should('be.visible').click({force:true})
    cy.wait(2000)

  })

  it('Visualizar Lista de Pedidos dos clientes', () => {

    cy.get('.navbar > .menu-bars').should('be.visible').click()
    cy.get(':nth-child(3) > a').should('be.visible').click()
    cy.get('.page-title').should('be.visible').contains('Pedidos')

    cy.get('.order-card-content').should('be.visible').each(($item) => {

      for(const item of $item){
        expect(item).to.exist
        expect(item).not.empty

      }
    })
    cy.get('.order-card-data').should('be.visible').each(($item) => {

      for(const item of $item){
        expect(item).to.exist
        expect(item).not.empty

      }
    })

  })

  it('Visualizar e Confirmar Pedido de um Cliente', () => {

    cy.get('.navbar > .menu-bars').should('be.visible').click()
    cy.get(':nth-child(3) > a').should('be.visible').click()
    cy.get('.page-title').should('be.visible').contains('Pedidos')
    cy.get('.order-card-content').should('be.visible').first().click()

    cy.get('.details-info').should('be.visible').then(($element) => {
      expect($element).to.contain('Nome do cliente')
      expect($element).to.contain('Telefone')
      expect($element).to.contain('Data do pedido')
    })

    cy.get('.details-product').should('be.visible').each(($item) => {

      for(const item of $item){
        expect(item).to.exist
        expect(item).not.empty
      }

    })

    cy.get('.primary-button').should('be.visible').click()
  })

})

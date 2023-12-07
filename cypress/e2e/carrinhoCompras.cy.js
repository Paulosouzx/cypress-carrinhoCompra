describe('Carrinho de compras', () =>{

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get(".btn_action").click()
    })
    it('CT01 - Carrinho de compras', () => {

        //Adicionar Produtos ao carrinho.
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
        cy.xpath('//*[@id="inventory_container"]/div/div[4]/div[3]/button').click()
        cy.xpath('//*[@id="inventory_container"]/div/div[5]/div[3]/button').click()

        //Clicar no botao carrinho.
        cy.get('.shopping_cart_container').click()

        //Assertion de quantos itens tem no carrinho
        cy.get('.cart_item').should('have.length', 3)

        //Remover todos os itens do carrinho pelo botao Remove
        cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/button').click()
        cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[2]/button').click()
        cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[2]/button').click()

        //Assertion de quantos itens tem no carrinho
        cy.get('.cart_item').should('have.length', 0)

    })

})
describe('Автотесты на авторизацию', function () {
    it('Вход на сайт', function () {
        cy.clearAllCookies()
        cy.visit('https://huntingpony.com/');
        cy.visit('https://huntingpony.com/product/lezanka-loza-nabalkoni');
        cy.get('.add-cart-counter__btn').should('be.enabled').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').should('be.enabled').click();
        cy.contains('Оформление заказа');
    })
    })
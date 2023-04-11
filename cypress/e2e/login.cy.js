describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
    })
    it('Верный логин, неверный пароль', function () {
            cy.clearAllCookies()
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass').type('iLoveqastudio2');
            cy.get('#loginButton').should('be.enabled').click();
            cy.contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon');
    })
    it('Неверный логин, верный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov2.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Логин без @, верный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov2.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Строчные буквы в логине, верный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Восстановления пароля', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#forgotEmailButton').should('be.enabled').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('be.enabled').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
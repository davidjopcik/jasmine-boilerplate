

class Login {

    get loginInput() {
        return $('#loginNew')
    }

    get passwordInput() {
        return $('#passwordNew')
    }
    get loginBtn() {
        return $('#login_button')
    }
    get selectAccess() {
        return $('#selectLoginAccess')
    }
    get accessBtn() {
        return $('#access_button')
    }

    async openIsod(server) {
        if (server == "test") {
            //---- evodtest ----
            await browser.url('https://evodtest.ikvc.slovakrail.sk/evod/login.jsp')
        }
        else if (server == "java17") {
            //---- java 17 ----
            await browser.url('http://evoddev:8085/evod/login.jsp')
        }
        else {
            //---- dev ----
            await browser.url('https://google.com')
        }
        /* let testSelector = await $('.isodLoginHeader*=ISOD')
        await expect(testSelector).toBeDisplayed({ wait: 30000, message: "Stránka sa nenačítala" }) */
         let testSelector = await $('div=Prijať všetko')
        await expect(testSelector).toBeDisplayed({ wait: 30000, message: "Stránka sa nenačítala" })
        
    }


    async loginToIsod(personalNumber, password, accessType) {
        await this.loginInput.setValue(personalNumber)
        await this.passwordInput.setValue(password)
        await this.loginBtn.click()
        await this.selectAccess.waitForClickable()
        await this.selectAccess.click()
        await $('option=' + accessType + '').click()
        await this.accessBtn.click()
        await Menu.RadenieVlakuMenuSelector.waitForClickable()
    }


}
export default new Login()

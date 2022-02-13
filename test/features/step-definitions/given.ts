import { Given } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Login to inventory web app$/, async function (){
    /**1. Launch browser */
    await browser.url("http://saucedemo.com/")
    // await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    // await browser.maximizeWindow()

    /**2. Login  */
    try {
        await $(`#user-name`).setValue("standard_user")
        await $(`#password`).setValue("secret_sauce")
        await $(`#login-button`).click()
    } catch (err) {
        console.log(`Error in first ligin. Retry...`)
        await browser.refresh()
        await browser.pause(2000)
        await $(`#user-name`).setValue("standard_user")
        await $(`#password`).setValue("secret_sauce")
        await $(`#login-button`).click()
    }

    /**3. Login other user*/
    // await browser.pause(2000)
    // await browser.reloadSession()
    // await browser.url("http://saucedemo.com/")
    // await $(`#user-name`).setValue("problem_user")
    // await $(`#password`).setValue("secret_sauce")
    // await $(`#login-button`).click()

    // await browser.back()
    // await browser.pause(5000)
    // await browser.forward()
    await browser.debug()
})
import { When } from "@cucumber/cucumber";
import chai from "chai"
import reporter from "../../helper/reporter"
import nopcommerceHomePage from "../../page-objects/nopcommerce.home.page";

When(/^As (.*) user login to nopcommers site$/, async function (user){
    if(!user) throw Error (`Given user: ${user} is not valid`)
    user = user.trim().toUpperCase()
    try {
        reporter.addStep(this.testid, "info", "Login to nopcommerce demo site..")
        await nopcommerceHomePage.loginTonopCommerceWeb(
            this.testid, 
            //@ts-ignore
            browser.config.nopCommerceBaseURL,
            process.env[`TEST_NOP_${user}_USERNAME`],
            process.env[`TEST_NOP_${user}_PASSWORD`]
        )
    } catch (err) {
        err.message = `${this.testid}: Failed at nopcommerce login step, ${err.message}`
        throw err
    }
})

When(/^Search users in customer list$/, async function (){

})
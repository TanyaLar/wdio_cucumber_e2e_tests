import { Given, When, Then } from "@cucumber/cucumber";
import chai from 'chai'

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
});

When(/^Search with (.*)$/, async function(searchItem){
  console.log(`>> searchItem: ${searchItem}`)
  let ele = await $(`[name = q]`)
  await ele.setValue(searchItem)
  await browser.keys("Enter")
 
})

Then(/^Ckick on the first search result$/, async function(){
  let ele = await $('<h3>')
  await ele.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
  console.log(`>>expectedURL: ${expectedURL}`)
  let url = await browser.getUrl()
  chai.expect(url).to.equal(expectedURL)
  await browser.pause(5000);
}) 
/**
 * Web Interections
 */

Given(/^A web page is opened$/, async function(){
  await browser.url("/inputs")
  await browser.setTimeout({implicit: 15000, pageLoad: 10000})
  // await browser.maximizeWindow()
})

When(/^Perform with interections$/, async function(){
  /**
   * Input Box
   * Actions:
   * 1.Type intoinput box
   * 2.Clear the field and type or just addvalue
   * 3.Click and type
   * 4.Slow typing
   */

  let num = 12345
  let strNum = num.toString()
  let ele = await $('[type=number')
  await ele.click()
  await ele.setValue(strNum)

  await browser.debug()
})
import { Given, When, Then } from "@cucumber/cucumber";
import chai from 'chai'

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  // console.log(`>> BrowserObj: ${JSON.stringify(browser)}`)
});

When(/^Search with (.*)$/, async function(searchItem){
  // console.log(`>> searchItem: ${searchItem}`)
  let ele = await $(`[name = q]`)
  await ele.setValue(searchItem)
  await browser.keys("Enter")
  // console.log(`>> Ele obj: ${JSON.stringify(ele)}`)
 
})

Then(/^Ckick on the first search result$/, async function(){
  let ele = await $('<h3>')
  await ele.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
  // console.log(`>>expectedURL: ${expectedURL}`)
  await browser.waitUntil(async () => {
    return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  }, {timeout: 10000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`})
  let url = await browser.getUrl()
  chai.expect(url).to.equal(expectedURL)
  await browser.pause(5000);
}) 
/**
 * Web Interections
 */

Given(/^A web page is opened$/, async function(){
  await browser.url("https://www.amazon.com.au/")
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

  // let num = 12345
  // let strNum = num.toString()
  // let ele = await $('[type=number')
  // await ele.click()
  // await ele.setValue(strNum)

  /**
   * 2. Dropdown
   * Actions:
   * 1. Assert default option is selected
   * 2. Selected by attribute, text, index
   * 3. Get a list of options
   */
  
  /**1. Assert default option is selected */
  // let ele = await $('//select/option[@selected="selected"]')
  // let val = await ele.getText()
  // chai.expect(val).to.equal('Please select an option')
  
  /** 2. Selected by attribute, text, index */
  // let ddEle = await $('#dropdown')
  // ddEle.selectByIndex(2)
  
  /**3. Get a list of options */
  // let eleArr = await $$('select > option')


/**
 * 3. Checkbox
 * Actions:
 * 1. Select an option
 * 2. Unselect the option (if selected)
 * 3. Assert if option is selected
 * 4. Select all option
 */

// let ele = await $('//form[@id="checkboxes"]/input[2]')
// let isChecked = await ele.isSelected()
// chai.expect(isChecked).to.be.true

// let eleArr = await $$('//form[@id="checkboxes"]/input')
// for(let i = 0; i < eleArr.length; i++){
//   let ele = eleArr[i]
//   if(!await ele.isSelected()){
//     ele.click()
//   }
// }

/**
 * 4. Windows handling
 * Steps:
 * 1. Launch the browser
 * 2. Open another windows
 * 3. Swith to the window based on title
 * 4. Switch back to the main window

Methods used:
1. getTitle()
2. getWindowHendle()
3. getWindowHendles()
4. switchToWindow()
*/
// Open new window
// await $('=Click Here').click()
// await $('=Elemental Selenium').click()
// let currentWinTitle = await browser.getTitle()
// let parentWinHandle = await browser.getWindowHandle()
// console.log(`>> currentWinTitle: ${currentWinTitle}`)

// Switch to spesific window
// let winHandles = await browser.getWindowHandles()
// for (let i = 0; i < winHandles.length; i++){
// console.log(`>> Win handle: ${winHandles}`)
// await browser.switchToWindow(winHandles[i])
// currentWinTitle = await browser.getTitle()
//   if (currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro") {
//     await browser.switchToWindow(winHandles[i])
//     let headerTextEle = await $('<h1>').getText()
//     console.log(`>>headerTextEle: ${headerTextEle}`)
//     //Rest of the actions go here 
//     break
//   }
// }

//Switch back to parent window
// await browser.switchToWindow(parentWinHandle)
// let parentWinHeaderTxt = await $('<h3>').getText()
// console.log(`>> parentWinHeaderTxt: ${parentWinHeaderTxt}`)
//Continue with rest of the execution

/**
 * 4. Handling alerts
 * 
 * Methods used:
 * 1. isAlertOpen()
 * 2. acctptAlert()
 * 3. dismissAlert()
 * 4. getAlertText()
 * 5.sendAlertText()
 */
// await $(`button=Click for JS Alert`).click()
// if(await browser.isAlertOpen()){
//   await browser.acceptAlert()
// }

// await $(`button=Click for JS Confirm`).click()
// if(await browser.isAlertOpen()){
//   await browser.dismissAlert()
// }

// await $(`button=Click for JS Prompt`).click()
// if(await browser.isAlertOpen()){
//   let alertText = await browser.getAlertText()
//   console.log(`>> alertText: ${alertText}`)
//   await browser.sendAlertText(`Hello JS Prompt..`)
//   await browser.acceptAlert()
//   await browser.pause(5000)
// }
/**
 * 5. File upload
 */

// await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
// await $(`#file-submit`).click()

/**
 * 6. Frames
 * Methods used:
 * 1. swithToFrame
 * 2. switchToParentFrame
 */
// await $(`=iFrame`).click()
// let ele = await $(`#mce_0_ifr`)
// await browser.switchToFrame(ele)
//Interaction with frame..
// await $(`#tinymce`).click()
// await browser.keys(["Meta", "A"])
// await browser.pause(1000)
// await browser.keys("Delete")
// await $(`#tinymce`).setValue(`Typing in a frame..`)
// await browser.switchToParentFrame()

/**
 * 7. Basic scrolling
 * Methods: (ElementMethods)
 * 1. scrollIntoView
 */
// await $('h2=Save on tennis equipment').scrollIntoView()

/**
 * Web table:
 * What are going to cover:
 * 1. Check number of rows and columns
 * 2. Get whole table data
 * 3. Get single row (based on a condition)
 * 4. Get single column
 * 5. Get single cell value (based on another cell)
 */

/**1. Check number of rows and columns */
// let rowCount = await $$('//table[@id="table1"]/tbody/tr').length
// chai.expect(rowCount).to.equal(4)
// console.log(`>> Number of rows: ${rowCount}`)
// let colCount = await $$('//table[@id="table1"]/thead/tr/th').length
// chai.expect(colCount).to.equal(6)
// console.log(`>> Number of cols: ${colCount}`)

/**2. Get whole table data */
// for(let i = 1; i <= rowCount; i++){
//   for(let j = 1; j <= colCount; j++){
//     let CellVal = await $(`//table[@id="table1"]/tbody/tr[${i}]/td[${j}]`).getText()
//     console.log(`>> Cell Value: ${CellVal}`)
//   }
// }
// let arr = []
// for(let i = 0; i < rowCount; i++){
//   let personObj = {
//     lastname: "",
//     firstname: "",
//     email:"",
//     due: "",
//     web: "",
//   }
//   for(let j = 0; j < colCount; j++){
//     let CellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
//     if (j === 0) personObj.lastname = CellVal
//     if (j === 1) personObj.firstname = CellVal
//     if (j === 2) personObj.email = CellVal
//     if (j === 3) personObj.due = CellVal
//     if (j === 4) personObj.web = CellVal
//   }
//   arr.push(personObj)
// }
// console.log(`>> Whole table: ${JSON.stringify(arr)}`)

/** 3. Get single row (based on a condition)*/
// let arr = []
// for(let i = 0; i < rowCount; i++){
//   let personObj = {
//     lastname: "",
//     firstname: "",
//     email:"",
//     due: "",
//     web: "",
//   }
//   for(let j = 0; j < colCount; j++){
//     let CellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
//     let firstname = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[2]`).getText()
//     if (firstname === "Jason"){
//       if (j === 0) personObj.lastname = CellVal
//       if (j === 1) personObj.firstname = CellVal
//       if (j === 2) personObj.email = CellVal
//       if (j === 3) personObj.due = CellVal
//       if (j === 4) personObj.web = CellVal
//     }
//   }
//   if (personObj.firstname){
//     arr.push(personObj)
//   }
  
// }
// console.log(`>> Whole table: ${JSON.stringify(arr)}`)

/**4. Get single column */
// let arr = []
// for(let i = 0; i < rowCount; i++){
//   let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[4]`).getText()
//   arr.push(cellVal)
// }
// console.log(`>> Single col values: ${arr}`)

/**5. Get single cell value (based on another cell) */
// let arr  = []
// for(let i = 0; i < rowCount; i++){
//     let price = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[4]`).getText()
//     let firstname = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[2]`).getText()
//     if (+(price.replace("$", "")) > 50){
//       arr.push(firstname)
//     }
// }
// console.log(`>> Single col values: ${arr}`)

/**
 * SCROLLING
 * 
 * VISIBLE PORTION
 * windowd object:
 * 1. scrollBy
 * Y -> [-]window.innerHeight
 */
// Scroll down
await browser.execute(() => {
  window.scrollBy(0, window.innerHeight)
})
await browser.pause(2000)

//Scroll top 
await browser.execute(() => {
  window.scrollBy(0, -window.innerHeight)
})

/**
 * INVISIBLE PORTION
 * windows object:
 * 1. scrollTo
 * Y -> document.body.scrollTop[scrollHeight]
 */
 await browser.pause(2000)
 await browser.execute(() => {
  window.scrollTo(0, document.body.scrollHeight)
})

await browser.pause(2000)
await browser.execute(() => {
  window.scrollTo(0, document.body.scrollTop)
})

await browser.debug()
})
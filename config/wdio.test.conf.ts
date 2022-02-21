import { config as basicConfig } from "../wdio.conf";
export const config = Object.assign(basicConfig, {
    //All test env specific key val pairs
    environment: "TEST",
    sauceDemoUrl: "http://saucedemo.com",
    reqresBaseURL: "https://reqres.in",
    nopCommerceBaseURL: "https://admin-demo.nopcommerce.com"
} )
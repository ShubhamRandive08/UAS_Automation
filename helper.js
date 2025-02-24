// Shubham Randive helper file
import { test, expect } from '@playwright/test'

async function validateSignIn(page, email, pass) {
    await page.locator('//*[@id = "Email"]').click();
    await page.locator("//*[@id = 'Email']").fill(`${email}`)
    await page.locator("//*[@id= 'Pass']").click();
    await page.locator("//*[@id= 'Pass']").fill(`${pass}`)
    await page.locator("//input[@value= 'SIGN IN']").click();
}

async function validateOkButton(page, selector, validateText) {
    await expect(await page.locator(`//button[@class = '${selector}']`).textContent()).toBe(`${validateText}`)
    await expect(await page.locator(`//button[@class = '${selector}']`)).toBeVisible();
    await page.locator(`//button[@class = '${selector}']`).click()
}

module.exports = { validateSignIn, validateOkButton };

import { test, expect } from '@playwright/test'

async function validateSignIn(page, email, pass) {
    await page.locator('//*[@id = "Email"]').click();
    await page.locator("//*[@id = 'Email']").fill(`${email}`)
    await page.locator("//*[@id= 'Pass']").click();
    await page.locator("//*[@id= 'Pass']").fill(`${pass}`)
    await page.locator("//input[@value= 'SIGN IN']").click();
}

async function validateButton(page, selector, validateText) {
    await expect(await page.locator(`//button[@class = '${selector}']`).textContent()).toBe(`${validateText}`)
    await expect(await page.locator(`//button[@class = '${selector}']`)).toBeVisible();
    await page.locator(`//button[@class = '${selector}']`).click()
}

async function downloadIcon(page) {
    await expect(await page.locator("//i[@class= 'mdi mdi-download text-muted']")).toBeVisible();
    await page.locator("//i[@class= 'mdi mdi-download text-muted']").click()
    await expect(page.locator("//div[@aria-labelledby= 'swal2-title']")).toBeVisible();
    await expect(page.locator("//h2[@class = 'swal2-title']")).toBeVisible()
    await expect(page.locator("//div[@class = 'swal2-html-container']")).toBeVisible();
}




module.exports = { validateSignIn, validateButton, downloadIcon };

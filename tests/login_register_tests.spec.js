import { test, expect } from '@playwright/test'
import exp from 'constants';


test.describe('Tests for My Project', async () => {
    test('Test No. 1 : Validate All Element', async ({ page }) => {

        await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html');

        // For validate text of the heading
        await expect(await page.locator("//*[@id = 'heading']")).toHaveText("Hello TEACHERS ! let's get started");
        await expect(await page.locator("//*[@class= 'font-weight-light']")).toHaveText('Sign in to continue.')

        // For validate input field of the email/username
        await expect(await page.locator("//*[@id= 'Email']")).toBeVisible();
        const placeHolderEmail = await page.locator("//*[@id= 'Email']").getAttribute('placeholder')
        if (placeHolderEmail === 'Username') {
            console.log('Placeholder : Username Test Passed!')
        } else {
            console.error(` Test failed! Expected: "Username", but got: "${placeHolderEmail}"`);
        }

        // For the validate the input field of the password
        await expect(await page.locator("//*[@id= 'Pass']")).toBeVisible();
        const placeHolderPass = await page.locator("//*[@id= 'Pass']").getAttribute('placeholder')
        if (placeHolderPass === 'Password') {
            console.log('Placeholder : Password Test Passed!')
        } else {
            console.error(` Test failed! Expected: "Password", but got: "${placeHolderPass}"`);
        }

        // Validate for he forgat pass btn
        await expect(await page.locator("//a[@id= 'forgat-pass']")).toBeVisible();

        // Validate Text : Don't have an account?
        await expect(await page.locator("//div[@id = 'dont-ac']")).toHaveText("Don't have an account?Create")

        // Validate Create Button text
        await expect(await page.locator("//a[@id= 'create-user']").textContent()).toBe('Create')

        // Validate Text : Admin Login
        await expect(await page.locator("//div[@id = 'admin-login']")).toHaveText("Admin LoginLogin")

        // Validate Login Button text
        await expect(await page.locator("#ad-login").textContent()).toBe('Login')

        // Validate the sign button
        await expect(await page.locator("//input[@value= 'SIGN IN']").getAttribute('value')).toBe('SIGN IN')
        await expect(await page.locator("//input[@value= 'SIGN IN']")).toBeVisible();
        await page.close();
    })

    test('Test No. 2 : Validate Login Functionality', async ({ page }) => {
        
        async function validateOkButton(page, selector, validateText) {
            await expect(await page.locator(`//button[@class = '${selector}']`).textContent()).toBe(`${validateText}`)
            await expect(await page.locator(`//button[@class = '${selector}']`)).toBeVisible();
            await page.locator(`//button[@class = '${selector}']`).click()
        }

        await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html');

        // If dont pass any data to username and password then validate that output
        await page.locator("//input[@value= 'SIGN IN']").click();
        await expect(await page.locator("//div[@class = 'swal2-icon swal2-warning swal2-icon-show']")).toBeVisible()
        await expect(await page.locator("//h2[@class = 'swal2-title']")).toHaveText('Oops...')
        await expect(await page.locator("//div[@class = 'swal2-html-container']")).toHaveText('Please fill all details!')
        await validateOkButton(page, 'swal2-confirm swal2-styled', 'OK')


        //If enters the value of username and pass is invalide
        await page.locator('//*[@id = "Email"]').click();
        await page.locator("//*[@id = 'Email']").fill('srandive245@gmail.com')
        await page.locator("//*[@id= 'Pass']").click();
        await page.locator("//*[@id= 'Pass']").fill('Kingsr@0')
        await page.locator("//input[@value= 'SIGN IN']").click();
        await expect(await page.locator("//div[@aria-labelledby = 'swal2-title']")).toBeVisible();
        await expect(await page.locator("//div[@class = 'swal2-icon swal2-error swal2-icon-show']")).toBeVisible()
        await expect(await page.locator("//h2[@class = 'swal2-title']")).toBeVisible()
        await expect(await page.locator("//h2[@class = 'swal2-title']")).toHaveText("Login Failed!")
        await expect(await page.locator("//div[@class = 'swal2-html-container']")).toBeVisible()
        await expect(await page.locator("//div[@class = 'swal2-html-container']")).toHaveText("Username and Password are invalid")

        // Click on OK button
        await validateOkButton(page, 'swal2-confirm swal2-styled', 'OK')


        // Validate if enters correct details
        await page.locator('//*[@id = "Email"]').click();
        await page.locator("//*[@id = 'Email']").fill('srandive245@gmail.com')
        await page.locator("//*[@id= 'Pass']").click();
        await page.locator("//*[@id= 'Pass']").fill('Kingsr@08')
        await page.locator("//input[@value= 'SIGN IN']").click();
        await expect(page.locator("//div[@aria-labelledby= 'swal2-title']")).toBeVisible();
        await expect(page.locator("//h2[@class = 'swal2-title']")).toBeVisible()
        // await expect(page.locator("//h2[@class = 'swal2-title']").textContent()).toBe("🚀 Login Successful!")
        // Click on OK button
        await validateOkButton(page, 'swal2-confirm swal2-styled', 'OK')



        await page.waitForTimeout(2000)
        await page.close();

    })
})
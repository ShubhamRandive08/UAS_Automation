import { test, expect } from '@playwright/test'
import exp from 'constants';
const helper = require('../helper')


test.describe('Tests for My Project', async () => {
    test('Test No. 1 : Validate All Element of Login Page', async ({ page }) => {

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



        await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html');

        // If dont pass any data to username and password then validate that output  - Senario No 1 (LOGIN)
        await page.locator("//input[@value= 'SIGN IN']").click();
        await expect(await page.locator("//div[@class = 'swal2-icon swal2-warning swal2-icon-show']")).toBeVisible()
        await expect(await page.locator("//h2[@class = 'swal2-title']")).toHaveText('Oops...')
        await expect(await page.locator("//div[@class = 'swal2-html-container']")).toHaveText('Please fill all details!')
        await helper.validateOkButton(page, 'swal2-confirm swal2-styled', 'OK')

        //If enters the value of username and pass is invalide - Senario No 2 (LOGIN)
        await helper.validateSignIn(page, 'srandive245@gmail.com', 'Kingsr@0');
        await expect(await page.locator("//div[@aria-labelledby = 'swal2-title']")).toBeVisible();
        await expect(await page.locator("//div[@class = 'swal2-icon swal2-error swal2-icon-show']")).toBeVisible()
        await expect(await page.locator("//h2[@class = 'swal2-title']")).toBeVisible()
        await expect(await page.locator("//h2[@class = 'swal2-title']")).toHaveText("Login Failed!")
        await expect(await page.locator("//div[@class = 'swal2-html-container']")).toBeVisible()
        await expect(await page.locator("//div[@class = 'swal2-html-container']")).toHaveText("Username and Password are invalid")

        // Click on OK button
        await helper.validateOkButton(page, 'swal2-confirm swal2-styled', 'OK')

        // Validate if enters correct details   - Senario No 3 (LOGIN)
        await helper.validateSignIn(page, 'srandive245@gmail.com', 'Kingsr@08')
        await expect(page.locator("//div[@aria-labelledby= 'swal2-title']")).toBeVisible();
        await expect(page.locator("//h2[@class = 'swal2-title']")).toBeVisible()
        // await expect(page.locator("//h2[@class = 'swal2-title']").textContent()).toBe("🚀 Login Successful!")

        // Click on OK button
        await helper.validateOkButton(page, 'swal2-confirm swal2-styled', 'OK')
        await expect(await page.locator("//div[@class = 'content-wrapper']")).toBeVisible();

        await page.waitForTimeout(2000)
        await page.close();

    })

    test('Test No. 03 - Validate Register Page All Elements', async ({page}) => {
        await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html');

        // await expect(page.locator("//a[@id = 'create-user']").textContent()).toBe('Create')
        await expect(await page.locator("//a[@id = 'create-user']")).toBeVisible()
        await page.locator("//a[@id = 'create-user']").click()

        await expect(await page.locator("//div[@class = 'content-wrapper d-flex align-items-center auth px-0']")).toBeVisible();
        await expect(await page.locator("//h3[@id = 'welcome']").textContent()).toBe("Welcome ..!")
        await expect(await page.locator("//h4[@id = 'new-here']").textContent()).toBe("New here?")

        await expect(await page.locator("//input[@id = 'name']")).toBeVisible();
        const name = await page.locator("//input[@id = 'name']").getAttribute('placeholder')
        if (name === 'Full Name') {
            console.log('Placeholder : Full Name Test Passed!')
        } else {
            console.error(` Test failed! Expected: "Full Name", but got: "${name}"`);
        }

        await expect(await page.locator("//input[@id = 'email']")).toBeVisible();
        const email = await page.locator("//input[@id = 'email']").getAttribute('placeholder')
        if (email === 'Email') {
            console.log('Placeholder : Email Test Passed!')
        } else {
            console.error(` Test failed! Expected: "Email", but got: "${email}"`);
        }

        await expect(await page.locator("//input[@id = 'username']")).toBeVisible();
        const username = await page.locator("//input[@id = 'username']").getAttribute('placeholder')
        if (username === 'Username') {
            console.log('Placeholder : Username Test Passed!')
        } else {
            console.error(` Test failed! Expected: "Username", but got: "${username}"`);
        }

        await expect(await page.locator("//input[@id = 'password']")).toBeVisible();
        const password = await page.locator("//input[@id = 'password']").getAttribute('placeholder')
        if (password === 'Password') {
            console.log('Placeholder : Password Test Passed!')
        } else {
            console.error(` Test failed! Expected: "Password", but got: "${password}"`);
        }

        await expect(page.locator("//input[@onclick = 'signUp()']")).toBeVisible();

        await expect(page.locator("//div[@class= 'text-center mt-4 font-weight-light']")).toHaveText(" Already have an account? Login")

        await expect(page.locator("//a[@id = 'login-btn']")).toBeVisible();
        await page.locator("//a[@id = 'login-btn']").click();
        await expect(page.locator("//div[@class = 'content-wrapper d-flex align-items-center auth px-0']")).toBeVisible();
        await page.close()
    })
})
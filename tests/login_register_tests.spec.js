import {test,expect} from '@playwright/test'
import exp from 'constants';


test.describe('Tests for My Project', async () => {
    test('Test No. 1 : Validate Login Page if Login Success', async ({page}) => {

        await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html');

        // For validate text of the heading
        await expect(await page.locator("//*[@id = 'heading']")).toHaveText("Hello TEACHERS ! let's get started");
        await expect(await page.locator("//*[@class= 'font-weight-light']")).toHaveText('Sign in to continue.')

        // For validate input field of the email/username
        await expect(await page.locator("//*[@id= 'Email']")).toBeVisible();
        const placeHolderEmail = await page.locator("//*[@id= 'Email']").getAttribute('placeholder')
        if(placeHolderEmail === 'Username'){
            console.log('Placeholder : Username Test Passed!')
        }else{
            console.error(` Test failed! Expected: "Username", but got: "${placeHolderEmail}"`);
        }

        await page.locator('//*[@id = "Email"]').click();
        await page.locator("//*[@id = 'Email']").type('srandive245@gmail.com')

        // For the validate the input field of the password
        await expect(await page.locator("//*[@id= 'Pass']")).toBeVisible();
        const placeHolderPass = await page.locator("//*[@id= 'Pass']").getAttribute('placeholder')
        if(placeHolderPass === 'Password'){
            console.log('Placeholder : Password Test Passed!')
        }else{
            console.error(` Test failed! Expected: "Password", but got: "${placeHolderPass}"`);
        }

        await page.locator("//*[@id= 'Pass']").click();
        await page.locator("//*[@id= 'Pass']").type('Kingsr@08')

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

        await page.waitForTimeout(5000)
        await page.close();
    })
})
const {test, expect} = require('@playwright/test') 
const helper = require('../helper')
test.describe('Validate Dashbord Page', async () => {
    test('Dashboard Validation', async ({page}) => {

        await page.goto("http://127.0.0.1:5502/collage_addmission_process_project/index.html")
        await helper.validateSignIn(page, "srandive245@gmail.com", "Kingsr@08")

        await page.waitForTimeout(5000)
    })
})

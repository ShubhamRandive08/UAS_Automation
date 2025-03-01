const {test, expect} = require('@playwright/test') 
const helper = require('../helper')
test.describe('Validate Dashbord Page', async () => {
    test('Test No. 1 - Validate Items', async ({page}) => {
        await page.goto("http://127.0.0.1:5502/collage_addmission_process_project/index.html")
        await helper.validateSignIn(page, "srandive245@gmail.com", "Kingsr@08")

        await expect((page)).toHaveURL("http://127.0.0.1:5502/collage_addmission_process_project/src/index.html")

        await expect(await page.locator("//div[@class = 'navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100']")).toBeVisible()
        await expect(await page.locator("//div[@class = 'content-wrapper']")).toBeVisible()
        await expect(await page.locator("//nav[@class = 'sidebar sidebar-offcanvas']")).toBeVisible()
        await expect(await page.locator("//div[@class = 'row']").first()).toBeVisible()
        await expect(await page.locator("//input[@type= 'text']")).toBeVisible()
        await page.waitForTimeout(5000)
        await page.close();
    })

    test('Test No. 2 - Validate Download button with ICON', async ({page}) => {
        await page.goto("http://127.0.0.1:5502/collage_addmission_process_project/index.html")
        await helper.validateSignIn(page, "srandive245@gmail.com", "Kingsr@08")

        await page.waitForSelector("//i[@class= 'mdi mdi-download text-muted']");
        await expect((page)).toHaveURL("http://127.0.0.1:5502/collage_addmission_process_project/src/index.html")
        
        await helper.downloadIcon(page)
        await helper.validateButton(page, 'swal2-cancel swal2-styled swal2-default-outline', 'Cancel')
        await expect(page.locator("//div[@class = 'content-wrapper']")).toBeVisible()

        await helper.downloadIcon(page)
        await helper.validateButton(page,'swal2-confirm swal2-styled swal2-default-outline','Yes, download it!')
        await expect(page.locator("//div[@role= 'dialog']")).toBeVisible()
        await helper.validateButton(page, 'swal2-confirm swal2-styled swal2-default-outline', 'OK')
    })
})

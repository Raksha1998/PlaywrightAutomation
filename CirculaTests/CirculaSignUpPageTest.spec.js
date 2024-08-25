const {test, expect } = require('@playwright/test');

test('Circula sign up page test',async ({page})=>{

    //Step 1: Navigate to sign-up page.
    await page.goto('https://app.circula.com/users/sign_up');
    
    // Accept cookies 
    const acceptCookiesButton = page.locator('text=Accept All');
    await acceptCookiesButton.click();
    
    // Step 2: Locate ““Where’s your company registered?”- dropdown.
    const dropdown = await page.getByText("Where’s your company registered?");
    
    // Step 3: Click on the dropdown.
    await dropdown.click();
    
    // Step 4: Fill the dropdown with value “Sweden”.
    await dropdown.fill('Sweden');
    
    // Step 5: Verify that "Sweden" is selected in the input field
    const selectedCountry = page.locator('input#registration-country-input');
    await expect(selectedCountry).toHaveValue('Sweden');

});
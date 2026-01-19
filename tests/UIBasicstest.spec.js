const {test, expect} = require('@playwright/test');

test('Test with no function name and async by default', function(){

});
test('Test with function name and with async keyword to use await in code', async function(){

});

//test with async keyword and as function have no name, substitute function with arrow function
test('First playwright test', async ({browser})=>
{
// open new broser instance with injected cookies or proxy etc
    const context = await browser.newContext();
// open new page (hit the url)
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
})

//test no browserContext or new page but directly page object in the test function : 'page' is global variable and is used in default test function
test('Test Default', async ({page})=>
{
    await page.goto('https://google.com');
    console.log(await page.title());
    expect(await page.title()).toBe("Google");  
})
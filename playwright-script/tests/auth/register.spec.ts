import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { NavbarPage } from '../../pages/NavbarPage';
import { user } from '../../utils/testData';

test('User can register and logout successfully', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const navbar = new NavbarPage(page);

    // Step 1: Register
    await registerPage.goto();

    //   const uniqueEmail = `test@gmail.com`;

    function generateRandomEmail(domain: string = 'gmail.com', length: number = 4): string {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let username = '';

        for (let i = 0; i < length; i++) {
            username += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return `${username}@${domain}`;
    }

    // Usage
    const uniqueEmail = generateRandomEmail();

    await registerPage.registerUser(
        user.name,
        user.photo,
        uniqueEmail,
        user.password
    );

    // Step 2: Verify redirect to home
    await expect(page).toHaveURL('/');

    // Step 3: Logout
    await navbar.logout();

    // Step 4: Verify logout success
    await expect(page.locator('text=Login')).toBeVisible();

    
    // 📸 Screenshot before submit
    await page.screenshot({ path: 'screenshots/register-before.png' });

    // 📸 Screenshot after login
    await page.screenshot({ path: 'screenshots/register-after.png' });
});
import { test, expect } from '@playwright/test';
import { user } from '../../utils/testData';
import { LoginPage } from '../../pages/LoginPage';

test('User can Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Login
    await loginPage.goto();


    await loginPage.loginUser(
        user.email,
        user.password
    );

    // Step 2: Verify redirect to home
    await expect(page).toHaveURL('/');

    // 📸 Screenshot before submit
    await page.screenshot({ path: 'screenshots/login-before.png' });

    // 📸 Screenshot after login
    await page.screenshot({ path: 'screenshots/login-after.png' });
});
import { test, expect } from '@playwright/test';
import { deleteA, user } from '../../utils/testData';
import { LoginPage } from '../../pages/LoginPage';
import { AssignmentPage } from '../../pages/AssignmentsPage';

test('User Assignment Remove successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const assignment = new AssignmentPage(page);

    // Step 1: Login
    await loginPage.goto();


    await loginPage.loginUser(
        user.email,
        user.password
    );

    await assignment.goto();

    // await assignment.RemoveAssignment();

    // 🗑️ Remove by ID
   await assignment.removeAssignmentById(
    deleteA.id
   );




    // Step 2: Verify redirect to home
    await expect(page).toHaveURL('/assignments');

    // 📸 Screenshot before submit
    await page.screenshot({ path: 'screenshots/login-before.png' });

    // 📸 Screenshot after login
    await page.screenshot({ path: 'screenshots/login-after.png' });
});
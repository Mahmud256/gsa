import { test, expect } from '@playwright/test';
import { SubmittedAssignmentPage } from '../../pages/SubmittedAssignmentPage';
import { LoginPage } from '../../pages/LoginPage';
import { submitA, user } from '../../utils/testData';
import { NavbarPage } from '../../pages/NavbarPage';


test.only('User can submit assignment successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const assignment = new SubmittedAssignmentPage(page);
    const navbar = new NavbarPage(page);


    // 🔐 Login
    await loginPage.goto();
    await loginPage.loginUser(user.email, user.password);

    // 📚 Submit Assignment
    await assignment.goto();

    await assignment.fillSubmissionForm(
        submitA.id,
        submitA.examinee,
        submitA.pdf,
        submitA.note
    );


    // Step 3: Logout
    await navbar.logout();

    // 📸 Screenshot before submit
    await page.screenshot({ path: 'screenshots/assignment create-before.png' });

    // 📸 Screenshot after submit
    await page.screenshot({ path: 'screenshots/assignment create-after.png' });
});
import { test, expect } from '@playwright/test';
import { CreateAssignmentPage } from '../../pages/CreateAssignmentPage';
import { LoginPage } from '../../pages/LoginPage';
import { user } from '../../utils/testData';
import { NavbarPage } from '../../pages/NavbarPage';

test('User can create assignment successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const assignment = new CreateAssignmentPage(page);
  const navbar = new NavbarPage(page);


  // 🔐 Login
  await loginPage.goto();
  await loginPage.loginUser(user.email, user.password);

  // 📚 Create Assignment
  await assignment.goto();

  await assignment.createAssignment(
    'https://i.ibb.co/7tcFdZB/d1.jpg',
    'Automation Test Assignment',
    '100',
    'easy',
    '04/10/2026',
    'This is a test assignment created by Playwright'
  );
  

  // Step 3: Logout
  await navbar.logout();

  // 📸 Screenshot before submit
  await page.screenshot({ path: 'screenshots/assignment create-before.png' });

  // 📸 Screenshot after submit
  await page.screenshot({ path: 'screenshots/assignment create-after.png' });
});
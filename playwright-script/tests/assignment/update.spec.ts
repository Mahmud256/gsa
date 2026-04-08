import { test, expect } from '@playwright/test';
import { UpdateAssignmentPage } from '../../pages/UpdateAssignmentPage';
import { LoginPage } from '../../pages/LoginPage';
import { user } from '../../utils/testData';
import { NavbarPage } from '../../pages/NavbarPage';
import { updateA } from '../../utils/testData';


test('User can update assignment successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const assignment = new UpdateAssignmentPage(page);
  const navbar = new NavbarPage(page);


  // 🔐 Login
  await loginPage.goto();
  await loginPage.loginUser(user.email, user.password);

  // 📚 Update Assignment
  await assignment.goto();

  await assignment.updateAssignment(
    updateA.id,
    updateA.photo,
    updateA.title,
    updateA.marks,
    updateA.assignmentLevel,
    updateA.date,
    updateA.description
  );


  // Step 3: Logout
  await navbar.logout();

  // 📸 Screenshot before submit
  await page.screenshot({ path: 'screenshots/assignment update-before.png' });

  // 📸 Screenshot after submit
  await page.screenshot({ path: 'screenshots/assignment update-after.png' });
});
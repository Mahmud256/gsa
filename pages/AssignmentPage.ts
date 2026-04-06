import { Page } from '@playwright/test';

export class AssignmentPage {
  constructor(private page: Page) { }

  async goto() {
    await this.page.goto('/create');
  }

  async createAssignment(photo: string, title: string, marks: string, assignmentLevel: string, date: string, description: string) {

    await this.page.locator('input[type="url"]').fill(photo);
    await this.page.locator('input[name="title"]').fill(title);
    await this.page.locator('input[name="marks"]').fill(marks);

    // ✅ dropdown
    await this.page.locator('select[name="assignmentLevel"]').selectOption(assignmentLevel);

    // ✅ date picker (simple fill)
    await this.page.locator('.react-datepicker__input-container input')
      .fill(date);
    await this.page.locator('textarea[name="description"]')
      .fill(description);

    await this.page.locator('input[type="submit"]').click();


    // 🔥 anti-flaky wait
    await this.page.waitForLoadState('networkidle');
  }

}
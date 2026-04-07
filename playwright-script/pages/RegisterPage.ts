import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) { }

  async goto() {
    await this.page.goto('/register'); // baseURL used from config
  }

  async registerUser(name: string, photo: string, email: string, password: string) {
    await this.page.locator('input[name="name"]').fill(name);
    await this.page.locator('input[name="photo"]').fill(photo);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);

    await this.page.locator('button:has-text("Register")').click();

    // 🔥 Anti-flaky wait (important)
    await this.page.waitForLoadState('networkidle');
  }
}
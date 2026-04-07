import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('/login'); // baseURL used from config
    }

    async loginUser(email: string, password: string) {
        await this.page.locator('input[name="email"]').fill(email);
        await this.page.locator('input[name="password"]').fill(password);

        await this.page.locator('button:has-text("Login")').click();

        // 🔥 Anti-flaky wait (important)
        await this.page.waitForLoadState('networkidle');
    }
}
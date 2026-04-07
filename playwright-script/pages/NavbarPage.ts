import { Page } from '@playwright/test';

export class NavbarPage {
  constructor(private page: Page) {}

  async hoverAvatar() {
    await this.page.locator('.avatar').hover();
  }

  async clickLogout() {
    await this.page.locator('button:has-text("Logout")').click();
  }

  async logout() {
    await this.hoverAvatar();
    await this.page.waitForSelector('button:has-text("Logout")');
    await this.clickLogout();
  }
}
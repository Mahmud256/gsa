import { Page } from '@playwright/test';

export class AssignmentPage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('/assignments');
    }

    async removeAssignmentById(id: string) {
        const card = this.page.locator('div.card').filter({
            has: this.page.locator(`a[href="/details/${id}"]`)
        });

        // 🗑️ click remove
        await card.locator('button:has-text("Remove Assignment")').click();

        // ⚠️ confirm popup
        const confirmBtn = this.page.locator('.swal2-confirm');

        await confirmBtn.waitFor({ state: 'visible' });
        await confirmBtn.click();

        // 🔥 wait for delete to complete
        await this.page.waitForLoadState('networkidle');
    }

}
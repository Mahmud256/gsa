import { Page } from '@playwright/test';

export class SubmittedAssignmentPage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('/assignments');
    }


    async fillSubmissionForm(id: string, examinee: string, pdf: string, note: string) {

        const card = this.page.locator('div.card').filter({
            has: this.page.locator(`a[href="/details/${id}"]`)
        });

        await card.locator(`a[href="/details/${id}"]`).click();

        await this.page.locator(`a[href="/subform/${id}"]`).click();

        // 🔥 ensure form visible
        await this.page.locator('form').waitFor();

        await this.page.fill('input[name="examineeName"]', examinee);

        // ✅ valid URL must
        await this.page.fill('input[name="pdfLink"]', pdf);

        await this.page.fill('textarea[name="note"]', note);

        await this.page.locator('input[type="submit"]').click();

        // ⚠️ confirm popup
        const confirmBtn = this.page.locator('.swal2-confirm');

        await confirmBtn.waitFor({ state: 'visible' });
        await confirmBtn.click();

        // 🔥 anti-flaky wait
        await this.page.waitForLoadState('networkidle');
    }

}
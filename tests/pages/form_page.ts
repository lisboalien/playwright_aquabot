import { type Locator, type Page, expect } from '@playwright/test';

export class FormsPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly homePhoneRadio: Locator;
    readonly mobilePhoneRadio: Locator;
    readonly messageInput: Locator;
    readonly questionSelectButton: Locator;
    readonly errorMessageCheckbox: Locator;
    readonly successMessageCheckbox: Locator;
    readonly submitButton: Locator;
    readonly clearButton: Locator; 
   
    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByLabel('Name');
        this.emailInput = page.getByLabel('Email');
        this.phoneInput = page.getByLabel('Phone');
        this.homePhoneRadio = page.locator('label').filter({ hasText: 'Home Phone' }).locator('span');
        this.mobilePhoneRadio = page.locator('label').filter({ hasText: 'Mobile Phone' }).locator('span');
        this.messageInput = page.getByLabel('Message');
        this.questionSelectButton = page.locator('#cselect');
        this.errorMessageCheckbox = page.locator('#cerror');
        this.successMessageCheckbox = page.locator('#csuccess');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.clearButton = page.getByRole('button', { name: 'Clear' });
    }

    async fillForm(name: string, email: string, phone: string, homePhone: boolean, message: string, success: boolean) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);

        if (homePhone) {
            await this.homePhoneRadio.click();
        } else {
            await this.mobilePhoneRadio.click();
        }

        await this.messageInput.fill(message);

        if (success) {
            await this.successMessageCheckbox.check();
        } else {
            await this.errorMessageCheckbox.check();
        }
    }
}

export default FormsPage;
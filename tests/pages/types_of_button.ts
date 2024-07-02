import { type Locator, type Page, expect } from '@playwright/test';

export class TypesOfButtonPage {
    readonly page: Page;
    readonly changeTextButton: Locator;
    readonly popupButton: Locator;
    readonly alertButton: Locator;
    readonly openNewWindowButton: Locator;
    readonly linkToSectionLink: Locator;
    readonly linkToExternalSiteLink: Locator;
    readonly linkToCurrentWindowLink: Locator;
    readonly typesOfButtonHeading: Locator;
    readonly typesOfLinksHeading: Locator;


    constructor(page: Page) {
        this.page = page;
        this.changeTextButton = page.getByRole('button', { name: 'CHANGE TEXT' });
        this.popupButton = page.getByRole('link', { name: 'POP-UP' });
        this.alertButton = page.getByRole('button', { name: 'ALERT' });
        this.openNewWindowButton = page.getByRole('link', { name: 'OPEN A NEW WINDOW' });
        this.linkToSectionLink = page.getByRole('link', { name: 'LINK TO A SECTION' });
        this.linkToExternalSiteLink = page.getByRole('link', { name: 'LINK TO EXTERNAL SITE' });
        this.linkToCurrentWindowLink = page.getByRole('link', { name: 'OPEN IN CURRENT WINDOW' });
        this.typesOfButtonHeading = page.getByRole('heading', { name: 'Types of Buttons' });
        this.typesOfLinksHeading = page.getByRole('heading', { name: 'Types of Links' });
    }

    async clickOnChangeTextButton() {
        await this.changeTextButton.click();
    }

    async clickOnPopupButton() {
        await this.popupButton.click();
    }

    async clickOnAlertButton() {
        await this.alertButton.click();
    }

    async clickOnOpenNewWindowButton() {
        await this.openNewWindowButton.click();
    }

    async clickOnLinkToSectionLink() {
        await this.linkToSectionLink.click();
    }

    async clickOnLinkToExternalSiteLink() {
        await this.linkToExternalSiteLink.click();
    }

    async clickOnLinkToCurrentWindowLink() {
        await this.linkToCurrentWindowLink.click();
    }

    async assertTypesOfButtonPage() {
        await expect(this.typesOfButtonHeading).toBeVisible();
        await expect(this.typesOfLinksHeading).toBeVisible();
    }
}

export default TypesOfButtonPage;
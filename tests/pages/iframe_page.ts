import { type Locator, type Page, expect } from "@playwright/test";

export class IframePage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly iframe: Locator;
  readonly cityLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole("heading", {
      name: "Google Map in an iFrame",
    });
    this.iframe = page.locator(".map-responsive iframe");
    this.cityLocator = page.frameLocator('#iframe iframe').locator('.place-name');
  }

  async assertIframePage() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.iframe).toBeVisible();
  }

  async assertCityName(city: string) {
    await expect(this.cityLocator).toHaveText(city);
  }
}

export default IframePage;

import { type Locator, type Page, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly homeButton: Locator;
  readonly buttonsLinksButton: Locator;
  readonly formButton: Locator;
  readonly iframeButton: Locator;
  readonly tablesButton: Locator;
  readonly complexElementsButton: Locator;
  readonly discoverButton: Locator;
  readonly pageTitle: RegExp = /Aquabot/;
  readonly pageHeading: RegExp = /Automated Testing Playground/;
  readonly topBarButtonList: Object;
  readonly dropdownTablesMenu: Locator;
  readonly dropdownComplexElementsMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page
      .getByRole("navigation")
      .getByRole("link", { name: "Aquabot" });
    this.homeButton = page.getByRole("link", { name: "Home" });
    this.buttonsLinksButton = page.getByRole("link", {
      name: "Buttons & Links",
    });
    this.formButton = page.getByRole("link", { name: "Forms" });
    this.iframeButton = page.getByRole("link", { name: "iFrame" });
    this.tablesButton = page.getByRole("button", { name: "Tables" });
    this.dropdownTablesMenu = this.tablesButton.locator("+ .dropdown-menu");
    this.complexElementsButton = page.getByRole("button", {
      name: "Complex Elements",
    });
    this.dropdownComplexElementsMenu =
      this.complexElementsButton.locator("+ .dropdown-menu");
    this.discoverButton = page.getByRole("link", { name: "DISCOVER" });
    this.topBarButtonList = [
      { name: "Home", button: this.homeButton },
      { name: "Buttons & Links", button: this.buttonsLinksButton },
      { name: "Forms", button: this.formButton },
      { name: "iFrame", button: this.iframeButton },
      { name: "Tables", button: this.tablesButton },
      { name: "Complex Elements", button: this.complexElementsButton },
      { name: "DISCOVER", button: this.discoverButton },
    ];
  }

  async clickOnLogo() {
    await this.logo.click();
  }

  async clickOnHomeButton() {
    await this.homeButton.click();
  }

  async clickOnButtonsLinksButton() {
    await this.buttonsLinksButton.click();
  }

  async clickOnFormButton() {
    await this.formButton.click();
  }

  async clickOnIframeButton() {
    await this.iframeButton.click();
  }

  async clickOnTablesButton() {
    await this.tablesButton.click();
  }

  async clickOnComplexElementsButton() {
    await this.complexElementsButton.click();
  }

  async clickOnDiscoverButton() {
    await this.discoverButton.click();
  }

  async assertHomePage() {
    await this.assertPageTitle();
    await this.assertPageHeading();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async assertPageHeading() {
    await expect(
      this.page.getByRole("heading", { name: this.pageHeading })
    ).toBeVisible();
  }

  async assertCurrentButton(button: Locator) {
    await expect(button).toContainText("(current)");
  }

  async hoverOverTopBarButton(button: Locator) {
    await button.hover();
    await expect(button).toHaveCSS("color", "rgb(0, 191, 216)");
  }
}

export default HomePage;

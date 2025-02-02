import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home_page";
import { TypesOfButtonPage } from "../pages/types_of_button";
import { FormsPage } from "../pages/form_page";
import { IframePage } from "../pages/iframe_page";
import { tcsCounter } from "../../utils/test_utils";

let homePage: HomePage;
let typesOfButtonPage: TypesOfButtonPage;
let formPage: FormsPage;
let iframePage: IframePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  typesOfButtonPage = new TypesOfButtonPage(page);
  formPage = new FormsPage(page);
  iframePage = new IframePage(page);

  await page.goto("/");
  await homePage.assertHomePage();
});

test.describe("HomePage Tests", () => {
  test(`${tcsCounter()} - Clicking on the Aquabot logo should go to the Aquabot homepage`, async ({
    page,
  }) => {
    await homePage.clickOnLogo();

    await homePage.assertHomePage();
  });

  test(`${tcsCounter()} - Clicking on Home Button`, async ({ page }) => {
    await homePage.clickOnHomeButton();

    await homePage.assertHomePage();
    await homePage.assertCurrentButton(homePage.homeButton);
  });

  ["discover", "buttonsAndLinks"].forEach((button) => {
    test(`${tcsCounter()} - Navigating into types of button page through ${button} button`, async ({
      page,
    }) => {
      if (button === "discover") {
        await homePage.clickOnDiscoverButton();
      } else {
        await homePage.clickOnButtonsLinksButton();
      }

      await typesOfButtonPage.assertTypesOfButtonPage();
    });
  });

  test(`${tcsCounter()} - Clicking on Form Button`, async ({ page }) => {
    await homePage.clickOnFormButton();

    await formPage.assertFormsPage();
  });

  test(`${tcsCounter()} - Clicking on iFrame Button`, async ({ page }) => {
    await homePage.clickOnIframeButton();

    await iframePage.assertIframePage();

    await iframePage.assertCityName("Las Vegas");
  });

  [
    "homeButton",
    "buttonsLinksButton",
    "formButton",
    "iframeButton",
    "tablesButton",
    "complexElementsButton",
  ].forEach((button) => {
    test(`${tcsCounter()} - Hovering ${button} Button`, async ({ page }) => {
      await page.mouse.wheel(0, 900);
      await homePage.hoverOverTopBarButton(homePage[button]);

      if (["tablesButton", "complexElementsButton"].includes(button)) {
        await expect(
          homePage[button].locator("+ .dropdown-menu")
        ).toBeVisible();
      }
    });
  });
});

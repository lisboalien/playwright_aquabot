import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { TypesOfButtonPage } from '../pages/types_of_button';
import { tcsCounter } from '../../utils/test_utils';

let homePage: HomePage;
let typesOfButtonPage: TypesOfButtonPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  typesOfButtonPage = new TypesOfButtonPage(page);

  await page.goto('/');
  await homePage.assertHomePage();
});

test.describe('HomePage Tests', () => {
  test(`${tcsCounter()} - Clicking on the Aquabot logo should go to the Aquabot homepage`, async ({ page }) => {
    await homePage.clickOnLogo();

    await homePage.assertHomePage();
  });

  test(`${tcsCounter()} - Clicking on Home Button`, async ({ page }) => {
    await homePage.clickOnHomeButton();

    await homePage.assertHomePage();
    await homePage.assertCurrentButton(homePage.homeButton);
  });

  ['discover', 'buttonsAndLinks'].forEach((button) => {
    test(`${tcsCounter()} - Navigating into types of button page through ${button} button`, async ({ page }) => {
      if (button === 'discover') {
        await homePage.clickOnDiscoverButton();
      } else {
        await homePage.clickOnButtonsLinksButton();
      }

      await typesOfButtonPage.assertTypesOfButtonPage();
    });
  });

  test(`${tcsCounter()} - Clicking on Form Button`, async ({ page }) => {
    await homePage.clickOnFormButton();

    await homePage.assertCurrentButton(homePage.formButton);
  });
});
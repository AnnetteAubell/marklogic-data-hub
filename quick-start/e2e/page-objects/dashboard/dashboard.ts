import { protractor, browser, element, by, By, $, $$, ExpectedConditions as EC } from 'protractor'
import { AppPage } from '../appPage';
import { pages } from '../page';

export class DashboardPage extends AppPage {

  //to get the login box locater
  locator() {
    return by.css('.dashboard');
  }

  get clearDatabases() {
    return element(by.css('#clear-all-databases'));
  }

  get zeroCounts() {
    return element.all(by.cssContainingText('.column-body', '0'));
  }

  get clearButton() {
    return element(by.buttonText('Clear!'));
  }

  get cancelButton() {
    return element(by.buttonText('Cancel'));
  }

  stagingCount() {
    return element(by.xpath('//div[contains(text(),\' Staging\')]/..//div[contains(@class, \'column-body\')]'));
  }

  finalCount() {
    return element(by.xpath('//div[contains(text(),\' Final\')]/..//div[contains(@class, \'column-body\')]'));
  }

  jobCount() {
    return element(by.xpath('//div[contains(text(),\' Jobs\')]/..//div[contains(@class, \'column-body\')]'));
  }

  /* Obsolete. Trace DB merged with Jobs.
  traceCount() {
    return element(by.css('.databases > div:nth-child(3) > div:nth-child(2) > div.info-body > div:nth-child(1) > div.column-body'));
  }

  clearTraceButton() {
    return element(by.css('.databases > div:nth-child(3) > div:nth-child(2) > div.info-body > div:nth-child(3) > button > span'));
  }
  */

  clearStagingButton() {
    return element(by.xpath('//div[contains(text(),\' Staging\')]/..//button'));
  }

  clearFinalButton() {
    return element(by.xpath('//div[contains(text(),\' Final\')]/..//button'));
  }

  clearJobButton() {
    return element(by.xpath('//div[contains(text(),\' Jobs\')]/..//button'));
  }

}

var dashboardPage = new DashboardPage();
export default dashboardPage;
pages.addPage(dashboardPage);

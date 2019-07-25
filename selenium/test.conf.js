const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://www.facebook.com/');
    await driver.findElement(By.name('email')).sendKeys('anhdongoc18@gmail.com', Key.RETURN);
    await driver.findElement(By.name('pass')).sendKeys('', Key.RETURN);
    await driver.wait(until.titleIs('Facebook'))
    await driver.get('https://www.facebook.com/messages/');
    await driver.findElement(By.className('notranslate _5rpu4')).sendKeys('@a', Key.RETURN);
})();
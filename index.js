// const { By, Key, Builder } = require("selenium-webdriver");
// // const { Builder } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// // const file = 14

// const email= "chunglt@paditech.com"
// const pass= "Thanhchung110!"
// const file = "C:\\Users\\Admin\\Downloads\\Snaptik.app_7177757866605038875.mp4"
// const chrome2222 = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
// const openBrower = async () =>{ 
//     // setup browser
//     const chromeOptions = new chrome.Options();
//     chromeOptions.excludeSwitches('enable-automation');
//     chromeOptions.addArguments('--disable-infobars');
//     driver = await new Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(chromeOptions)
//         .build();
//     // connect website
//     await driver.get('https://studio.youtube.com/');
//     await driver.findElement(By.name('identifier')).sendKeys(email, Key.RETURN);
//     await driver.sleep(4000)
//     await driver.findElement(By.name('Passwd')).sendKeys(pass, Key.RETURN);
//     await driver.sleep(3000)
//     await driver.findElement(By.id('menu-item-1')).click();
//     await driver.findElement(By.id('create-icon')).click();
//     await driver.findElement(By.id('text-item-0')).click();
//     await driver.sleep(10000)
//     await driver.findElement(By.name('Filedata')).sendKeys(file);
//     await driver.sleep(10000)
//     //title file
//     let textInput = await driver.findElements(By.id('textbox'))
//     await textInput[0].clear()
//     await textInput[0].sendKeys("test123")
//     await textInput[1].clear()
//     await textInput[1].sendKeys("test123")
//     await driver.sleep(10000)
//     await driver.findElement(By.name('VIDEO_MADE_FOR_KIDS_MFK')).click()
    
//     await driver.findElement(By.id('next-button')).click()
//     await driver.sleep(1000)
//     await driver.findElement(By.id('next-button')).click()
//     await driver.sleep(1000)
//     await driver.findElement(By.id('next-button')).click()
//     await driver.sleep(1000)
//     await driver.findElement(By.name('PUBLIC')).click()
//     await driver.findElement(By.id('done-button')).click()
//     await driver.sleep(5000)
//     await driver.findElement(By.id('close-icon-button')).click()
   
// }
// openBrower()
 

const { Builder, Capabilities } = require('selenium-webdriver');

// Khởi tạo trình điều khiển Chrome với DevTools Protocol (CDP)
const capabilities = Capabilities.chrome();
capabilities.set('goog:chromeOptions', {
  debuggerAddress: 'localhost:9222' // Địa chỉ và cổng của Chrome Remote Debugging
});

// Khởi tạo trình điều khiển ChromeDriver với trình điều khiển Chrome đã cấu hình
const driver = new Builder()
  .forBrowser('chrome')
  .withCapabilities(capabilities)
  .build();

// Sử dụng trình điều khiển Chrome đã mở để thực hiện các thao tác
driver.get('https://www.youtube.com')
  .then(() => driver.getTitle())
  .then(title => console.log('Tiêu đề trang: ' + title))
  .finally(() => driver.quit());

 



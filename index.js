// const { By, Key, Builder } = require("selenium-webdriver");

// const file = 14

// const openBrower = async () =>{
//     var text = ""
//     driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('file:///D:/Tool/Content%20Up%20Video/Trang%20t%C3%ADnh5.html');
//     let elements = await driver.findElements(By.className('softmerge-inner'));
//     let elementsFile = await driver.findElements(By.className('s0'));
//     for(let e=0; e<elementsFile.length; e++)
//     {
//         let check = await elementsFile[e].getText()
//         if (check == file) {
//             text = await elements[e].getText();
//             await driver.get('https://www.google.com/?gws_rd=ssl');
//             await driver.findElement(By.name('q')).sendKeys(text, Key.RETURN);
//         }
//     }    
// }
// openBrower()

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

// Đường dẫn đến driver Chrome
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

// Tạo driver và kết nối với trình duyệt Chrome
const driver = new Builder()
  .forBrowser('chrome')
  .build();
  
async function example() {
  // Khởi tạo driver để kết nối với trình duyệt đã được mở sẵn
  let driver = await new Builder()
    .usingServer('http://localhost:9222') // URL đặc biệt để kết nối với trình duyệt đã mở sẵn
    .forBrowser('chrome')
    .build();

  try {
    // Điều khiển trình duyệt đã được mở sẵn
    // Ví dụ: Mở trang web Google
    await driver.get('https://www.google.com');

    // Thực hiện các hành động khác trên trình duyệt

    // Ví dụ: Tìm phần tử input và gửi dữ liệu vào
    // await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

  } finally {
    // Đóng kết nối tới trình duyệt, nhưng không tắt trình duyệt
    await driver.close();
  }
}

example();



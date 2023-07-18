// C:\\Program Files\\Google\\Chrome\\Application\\chromedriver.exe


const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = chrome;

(async function example() {
  // Đường dẫn tuyệt đối đến ChromeDriver
  const chromeDriverPath = 'D:\\Tool\\test\\New folder\\chromedriver.exe';

  // Thiết lập biến môi trường 'webdriver.chrome.driver'
  process.env['webdriver.chrome.driver'] = chromeDriverPath;

  // Khởi tạo trình điều khiển với ChromeOptions
  const options = new Options().setChromeBinaryPath('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe');
  options.addArguments('--remote-debugging-port=9222'); // Tùy chọn gỡ lỗi từ xa

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Thực hiện các thao tác trên trang web
    await driver.get('https://example.com');
    // Thêm các thao tác khác theo nhu cầu

    // Ví dụ: Lấy tiêu đề trang web
    const title = await driver.getTitle();
    console.log('Tiêu đề trang web:', title);
  } catch {
    // Đóng trình điều khiển
    await driver.quit();
  }
})();

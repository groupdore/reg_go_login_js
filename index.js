const fs = require("fs");
const axios = require("axios");

function readData(file_name) {
  try {
    const data = fs.readFileSync(file_name, "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// random 5 number
function random5num() {
  return Math.floor(Math.random() * 100000);
}

async function regByemail(email, password) {
  let url = "https://api.gologin.com/user?free-plan=true";
  const dataHeaders = {
    "Content-Type": "application/json",
    origin: "https://app.gologin.com",
    referer: "ttps://app.gologin.com/",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-fetch-dest": "empty",
    "sec-ch-ua-platform": "Windows",
    "sec-ch-ua":
      '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
    "sec-ch-ua-mobile": "?0",
    accept: "*/*",
    "accept-language": "vi,fr-FR;q=0.9,fr;q=0.8,en-US;q=0.7,en;q=0.6",
    "accept-encoding": "gzip, deflate, br",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
  };
  const dataBody = {
    email: email,
    password: password,
    passwordConfirm: password,
    googleClientId: `1399${random5num}5.1658${random5num}7`,
    filenameParserError: "",
    fromApp: false,
    fromAppTrue: false,
    canvasAndFontsHash: `59540c56${random5num}64f`,
    affiliate: "",
    fontsHash: `ab2b60${random5num}abcbf`,
    canvasHash: `16090${random5num}`,
  };
  const config = {
    method: "post",
    url: url,
    headers: dataHeaders,
    data: dataBody,
  };
  const res = await axios(config);
  console.log(res.data);
  try {
    const token = res.data.token;
    console.log("Register success :", email);
    return token;
  } catch (error) {
    try {
      console.log("Register fail :", res.data.message);
      return false;
    } catch (error) {
      console.log("Register fail :", res.data);
      return false;
    }
  }
}

async function main() {
  let email = "johnnynuyenni071_11222@gmail.com";
  let password = "123456789";
  await regByemail(email, password);
}
main();

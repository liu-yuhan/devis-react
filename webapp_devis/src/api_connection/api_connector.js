//method for comunication between app and api externe
// or front-end and back-end

import axios from "axios";

export default function api_connector(url, data = {}, method = "GET") {
  if (method === "GET") {
    let paramStr = "";
    Object.keys(data).forEach(key => {
      paramStr += key + "=".data[key] + "&" + data[key];
    });
    if (paramStr) {
      paramStr.substr(0, paramStr.length - 1);
    }
    return axios.get(url + "?" + paramStr);
  } else {
    return axios.post(url, data);
  }
}

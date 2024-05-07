import cryptoJs from "crypto-js";

export const sortObject = (obj) => {
  let sorted = {};
  let str = [];
  let key;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();

  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }

  return sorted;
};

export const compute = (data) => {
  return cryptoJs.HmacSHA256(data, process.env.ZALOPAY_KEY1).toString();
};

export const createOrderMacData = (order) => {
  return (
    order.appid +
    "|" +
    order.apptransid +
    "|" +
    order.appuser +
    "|" +
    order.amount +
    "|" +
    order.apptime +
    "|" +
    order.embeddata +
    "|" +
    order.item
  );
};

export const createOrder = (order) => {
  return compute(createOrderMacData(order));
};

export const getStatusOrder = (data) => {
  return compute(
    data.appid + "|" + data.apptransid + "|" + process.env.ZALOPAY_KEY1
  );
};

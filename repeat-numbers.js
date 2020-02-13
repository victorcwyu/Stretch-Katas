let repeatNumbers = function (data) {
  let resultValue;
  let resultArr = [];
  for (let [key, value] of Object.entries(data)) {
    for (let i = 0; i < data.length; i++) {
      resultValue = value;
    }
    resultArr.push(resultValue[0].toString().repeat(resultValue[1]));
  }
  return resultArr.join(", ");
};
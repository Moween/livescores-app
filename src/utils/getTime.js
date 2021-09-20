const getTime = (date) => {
  let jsonDate = { ...date };
  jsonDate = JSON.stringify(jsonDate);
  let obj = JSON.parse(jsonDate);
  obj = new Date(obj.date).toUTCString();
  let time = new Date(obj)
    .toLocaleTimeString()
    .toString()
    .slice(0, 5);
  return time;
};

export default getTime;

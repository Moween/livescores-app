const getTime = (date) => {
  let jsonDate = { ...date };
  jsonDate = JSON.stringify(jsonDate);
  let time = JSON.parse(jsonDate);
  time = new Date(time.date).toUTCString();
  return new Date(time)
    .toLocaleTimeString()
    .toString()
    .slice(0, 5);
};

export default getTime;

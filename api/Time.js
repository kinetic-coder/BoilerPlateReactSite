module.exports = (req, res) => {
  let currentDate = new Date();

  res
    .status(200)
    .send(
      `Current Time is ${
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds()
      }!`
    );
};

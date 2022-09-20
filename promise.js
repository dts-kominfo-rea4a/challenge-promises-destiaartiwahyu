const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const dataTheaterIXX = await promiseTheaterIXX();
  const dataTheaterVGC = await promiseTheaterVGC();

  const dataEmosiTheaterIXX = dataTheaterIXX.filter(
    (data) => data.hasil === emosi
  );
  const dataEmosiTheaterVGC = dataTheaterVGC.filter(
    (data) => data.hasil === emosi
  );

  return dataEmosiTheaterIXX.length + dataEmosiTheaterVGC.length;

  console.log(
    "data Theater IXX setelah difilter",
    dataEmosiTheaterIXX,
    "data Theater VGC setelah difilter",
    dataEmosiTheaterVGC,
    "hitung teater IXX",
    dataEmosiTheaterIXX.length,
    "hitung teater VGC",
    dataEmosiTheaterVGC.length,
    "totalnya",
    dataEmosiTheaterIXX.length + dataEmosiTheaterVGC.length
  );
};

module.exports = {
  promiseOutput,
};

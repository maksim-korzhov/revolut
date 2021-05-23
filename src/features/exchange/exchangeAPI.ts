// A mock function to mimic making an async request for data
export function fetchRates() {
  return fetch(
    `https://openexchangerates.org/api/latest.json?app_id=48a4f37d75e54e7a8498de71bb20c987`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.rates;
    })
    .catch((error) => {
      console.log("Err", error);
    });
}

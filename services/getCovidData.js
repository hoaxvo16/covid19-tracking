export default async function getCovidData() {
  const res = await fetch("https://api.covid19api.com/summary ");
  const data = await res.json();
  let i = 1;
  let result = [];
  for (const element of data.Countries) {
    let flag = `https://cdn.countryflags.com/thumbs/${element.Country.toLowerCase()}/flag-square-500.png`;
    let temp = {
      id: i,
      flag: flag,
      country: element.Country,
      infected: element.TotalConfirmed,
      recovered: element.TotalRecovered,
      deaths: element.TotalDeaths,
    };
    i++;
    result.push(temp);
  }
  return [result, data.Global];
}

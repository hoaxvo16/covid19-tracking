export default async function getCovidData() {
  const res = await fetch("https://api.covid19api.com/summary ");
  const data = await res.json();
  let i = 1;
  let result = [];
  for (const element of data.Countries) {
    let arr = element.Country.toLowerCase().split(" ");
    let flag;
    if (arr.length > 1) {
      let fortmatted = formatCountryName(arr);
      flag = `https://cdn.countryflags.com/thumbs/${fortmatted}/flag-square-500.png`;
    } else {
      if (element.Country === "Timor-Leste") flag = `https://cdn.countryflags.com/thumbs/east-timor/flag-square-500.png`;
      else flag = `https://cdn.countryflags.com/thumbs/${element.Country.toLowerCase()}/flag-square-500.png`;
    }
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

function formatCountryName(arr) {
  let name = "";
  if (arr[0] === "viet") {
    return "vietnam";
  }
  switch (arr[0]) {
    case "brunei":
      return "brunei";
      break;
    case "viet":
      return "vietnam";
      break;
    case "congo":
      if (arr[1] === "(kinshasa)") return "congo-democratic-republic-of-the";
      else return "congo-republic-of-the";
      break;
    case "côte":
      return "cote-d-ivoire";
      break;
    case "iran,":
      return "iran";
      break;
    case "lao":
      return "laos";
      break;
    case "korea":
      return "south-korea";
      break;
    case "micronesia,":
      return "micronesia";
      break;
    case "palestinian":
      return "palestine";
      break;
    case "russian":
      return "russia";
      break;
    case "republic":
      if (arr[2] === "kosovo") return "kosovo";
      break;
    case "saint":
      if (arr[3] === "grenadines") return "saint-vincent-and-the-grenadines";
      break;
    case "syrian":
      return "syria";
      break;
    case "taiwan,":
      return "taiwan";
      break;
    case "taiwan,":
      return "taiwan";
      break;
    case "macedonia,":
      return "north-macedonia";
      break;
    case "tanzania,":
      return "tanzania";
      break;
    case "venezuela":
      return "venezuela";
      break;
    case "holy":
      return "vatican-city";
      break;
    default:
      break;
  }
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      name += arr[i];
      if (i < arr.length - 1) name += "-";
    }
  } else {
    return arr[0];
  }
  return name;
}

export default async function getNews() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=Covid-19&from=2021-05-13&sortBy=popularity&apiKey=${process.env.apiKey}`);
  const data = await res.json();
  for (let i = 0; i < data.articles.length; i++) {
    data.articles[i].key = i;
  }
  return data;
}

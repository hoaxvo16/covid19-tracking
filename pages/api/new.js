// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getNews(req, res) {
  const response = await fetch(`https://newsapi.org/v2/everything?q=Covid-19&from=2021-05-13&sortBy=popularity&apiKey=${process.env.apiKey}`);
  const data = await response.json();
  for (let i = 0; i < data.articles.length; i++) {
    data.articles[i].key = i;
  }
  res.json(data);
}

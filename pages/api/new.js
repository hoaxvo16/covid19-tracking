// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getNews(req, res) {
  const date = new Date();
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=corona&from=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&sortBy=popularity&apiKey=${process.env.apiKey}&language=en`
  );
  const data = await response.json();
  for (let i = 0; i < data.articles.length; i++) {
    data.articles[i].key = i;
  }
  res.json(data);
}

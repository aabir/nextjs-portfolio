export async function fetchPortfolio() {
  const res = await fetch('https://gitconnected.com/v1/portfolio/aabir');
  const portfolio = await res.json();
  return portfolio;
}
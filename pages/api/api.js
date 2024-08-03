export async function fetchPortfolio() {
  const res = await fetch('https://gitconnected.com/v1/portfolio/aabir');
  const portfolio = await res.json();
  return portfolio;
}

const apiEndpoint = 'http://shiblenoman.com/blog/wp-json/wp/v2';

const getPosts = async () => {
  const response = await fetch(`${apiEndpoint}/posts?per_page=10`);
  const data = await response.json();
  return data;
};

export { getPosts };
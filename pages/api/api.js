
export async function fetchPortfolio() {
  const res = await fetch('https://gitconnected.com/v1/portfolio/aabir');
  const portfolio = await res.json();
  return portfolio;
}

const apiEndpoint = '/api';

const getPosts = async () => {
  const response = await fetch(`${apiEndpoint}/posts`);
  const data = await response.json();
  return data;
};

export { getPosts };
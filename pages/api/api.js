export async function fetchPortfolio() {
  const res = await fetch('https://gitconnected.com/v1/portfolio/aabir');
  const portfolio = await res.json();
  return portfolio;
}

export async function fetchPosts(page = 1, perPage = 10) {
  const res = await fetch(`http://shiblenoman.com/blog/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}`);
  const data = await res.json();
  const totalPages = res.headers.get('X-WP-TotalPages');
  return { posts: data, totalPages: parseInt(totalPages, 10) };
}

export async function fetchPost(id) {
  const res = await fetch(`http://shiblenoman.com/blog/wp-json/wp/v2/posts/${id}`);
  const post = await res.json();
  return post;
}
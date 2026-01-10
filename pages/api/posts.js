import axios from 'axios';

export default async function handler(req, res) {
  const url = 'http://aabirtech.com/shiblenomanblog/wp-json/wp/v2/posts?per_page=10';
  const response = await axios.get(url);
  return res.json(response.data);
}
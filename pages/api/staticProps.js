import { fetchPortfolio } from './api';

export async function getPortfolioStaticProps() {
  const portfolio = await fetchPortfolio();

  return {
    props: {
      portfolio,
    },
  };
}

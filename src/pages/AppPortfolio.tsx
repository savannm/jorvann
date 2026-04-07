import PortfolioLayout from '../components/PortfolioLayout';

export default function AppPortfolio() {
    const items = [
    { title: 'Portfolio Project 1', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_0.jpg' },
    { title: 'Portfolio Project 2', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_1.png' },
    { title: 'Portfolio Project 3', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_2.jpg' },
    { title: 'Portfolio Project 4', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_3.jpg' },
    { title: 'Portfolio Project 5', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_4.png' },
    { title: 'Portfolio Project 6', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_5.jpg' },
    { title: 'Portfolio Project 7', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_6.jpg' },
    { title: 'Portfolio Project 8', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_7.jpg' },
    { title: 'Portfolio Project 9', desc: 'Detailed view of the project work.', image: '/images/portfolio/apps/full_img_8.jpg' }
  ];
  return <PortfolioLayout title="App Development" subtitle="End-to-end interface design and strategy for native and web applications." items={items} />;
}

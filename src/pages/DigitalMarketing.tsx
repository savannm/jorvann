import PortfolioLayout from '../components/PortfolioLayout';

export default function DigitalMarketing() {
    const items = [
    { title: 'Portfolio Project 1', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_0.jpg' },
    { title: 'Portfolio Project 2', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_1.jpg' },
    { title: 'Portfolio Project 3', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_10.png' },
    { title: 'Portfolio Project 4', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_11.jpg' },
    { title: 'Portfolio Project 5', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_12.jpg' },
    { title: 'Portfolio Project 6', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_13.jpg' },
    { title: 'Portfolio Project 7', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_14.jpg' },
    { title: 'Portfolio Project 8', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_15.jpg' },
    { title: 'Portfolio Project 9', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_16.jpg' },
    { title: 'Portfolio Project 10', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_17.jpg' },
    { title: 'Portfolio Project 11', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_18.jpg' },
    { title: 'Portfolio Project 12', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_19.jpg' },
    { title: 'Portfolio Project 13', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_2.jpg' },
    { title: 'Portfolio Project 14', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_20.jpg' },
    { title: 'Portfolio Project 15', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_21.jpg' },
    { title: 'Portfolio Project 16', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_22.jpg' },
    { title: 'Portfolio Project 17', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_23.jpg' },
    { title: 'Portfolio Project 18', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_24.jpg' },
    { title: 'Portfolio Project 19', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_25.jpg' },
    { title: 'Portfolio Project 20', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_3.jpg' },
    { title: 'Portfolio Project 21', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_4.jpg' },
    { title: 'Portfolio Project 22', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_5.jpg' },
    { title: 'Portfolio Project 23', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_6.jpg' },
    { title: 'Portfolio Project 24', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_7.jpg' },
    { title: 'Portfolio Project 25', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_8.png' },
    { title: 'Portfolio Project 26', desc: 'Detailed view of the project work.', image: '/images/portfolio/digital_marketing/full_img_9.jpg' }
  ];
  return <PortfolioLayout title="Digital Marketing" subtitle="Data-driven marketing strategies that significantly increase brand reach and conversion." items={items} />;
}

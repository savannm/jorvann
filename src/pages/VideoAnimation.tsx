import PortfolioLayout from '../components/PortfolioLayout';

export default function VideoAnimation() {
    const items = [
    { title: 'Portfolio Project 1', desc: 'Detailed view of the project work.', image: '/images/portfolio/video_animation/full_img_0.png' },
    { title: 'Portfolio Project 2', desc: 'Detailed view of the project work.', image: '/images/portfolio/video_animation/full_img_1.jpg' },
    { title: 'Portfolio Project 3', desc: 'Detailed view of the project work.', image: '/images/portfolio/video_animation/full_img_2.png' },
    { title: 'Portfolio Project 4', desc: 'Detailed view of the project work.', image: '/images/portfolio/video_animation/full_img_3.jpg' },
    { title: 'Portfolio Project 5', desc: 'Detailed view of the project work.', image: '/images/portfolio/video_animation/full_img_4.jpg' }
  ];
  return <PortfolioLayout title="Video & Animation" subtitle="Dynamic motion design and video editing that brings static concepts to life." items={items} />;
}

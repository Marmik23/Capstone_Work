import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/index.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const blogPosts = [
  { id: 1, title: 'Blog Post Title', date: 'Date', description: 'Lorem ipsum...', image: 'https://picsum.photos/id/14/200/150' },
  { id: 2, title: 'Blog Post Title', date: 'Date', description: 'Lorem ipsum...', image: 'https://picsum.photos/id/8/200/150' },
  { id: 3, title: 'Blog Post Title', date: 'Date', description: 'Lorem ipsum...', image: 'https://picsum.photos/id/19/200/150' },
  { id: 4, title: 'Blog Post Title', date: 'Date', description: 'Lorem ipsum...', image: 'https://picsum.photos/id/98/200/150' },
  { id: 5, title: 'Blog Post Title', date: 'Date', description: 'Lorem ipsum...', image: 'https://picsum.photos/id/237/200/150' },
];

function Blogs() {
  return (
    <div className="blogs-page">
      <h1 className="blogs-title">KNOWLEDGE</h1>

      <Swiper spaceBetween={20} slidesPerView={7}>
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="slider-card">
              <img src={post.image} alt={post.title} className="slider-image" />
              <div className="slider-content">
                <h3>{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p>{post.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blogs;

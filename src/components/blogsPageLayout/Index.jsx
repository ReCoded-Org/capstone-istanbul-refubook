import React from 'react';
import { BlogsCarouselSettings, BlogsInfo } from '../../consts/BlogsConsts';
import Carousel from '../carousel/Index';
import BlogsCard from '../../components/blogsCard/Index';

function BlogsPageLayout() {
  return (
    <div className="items-center mx-4 xl:px-8 sm:px-6 space-y-6">
      <div className="w-full grid grid-cols-1">
        <div>
          <Carousel
            settings={BlogsCarouselSettings}
            carouselData={BlogsInfo}
          ></Carousel>
        </div>
      </div>

      <div className="items-center mx-4 xl:px-8 sm:px-6 space-y-6">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div>
            <BlogsCard />
          </div>
          <div>
            <BlogsCard />
          </div>
          <div>
            <BlogsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsPageLayout;

import React from 'react';
import { Link } from 'react-router-dom';
import { BlogsCarouselSettings, BlogsInfo } from '../../consts/BlogsConsts';
import Carousel from '../carousel/Index';
import BlogsCard from '../../components/blogsCard';
import { useTranslation } from 'react-i18next';

function BlogsPageLayout() {
  const { t } = useTranslation();
  const articles = t('articles', { returnObjects: true });
  console.log(articles);
  return (
    <div className="items-center my-8 mx-4 xl:px-8 sm:px-6 space-y-6">
      <div className="w-full grid grid-cols-1">
        <div>
          <Carousel
            settings={BlogsCarouselSettings}
            carouselData={BlogsInfo}
          ></Carousel>
        </div>
      </div>

      <div className="items-center mx-4 xl:px-8 sm:px-6 space-y-6">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {articles &&
            articles.map((blog, index) => {
              console.log(blog);
              return (
                <Link to={`singleBlogPage/${index}`} key={index}>
                  <BlogsCard key={index} article={blog} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BlogsPageLayout;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogsCarouselSettings, BlogsInfo } from '../../consts/BlogsConsts';
import Carousel from '../carousel/Index';
import BlogsCard from '../../components/blogsCard';
import { useTranslation } from 'react-i18next';
import { articlesDataBase } from '../../consts/articles';
import i18next from 'i18next';
import SingleBlogPage from '../singleBlogPage';

function BlogsPageLayout() {
  //const { t } = useTranslation();
  const articles = i18next.t('articles', { returnObjects: true });
  // const [isArticleShown, setArticleShown] = useState(false);
  // const handleClick = (e) => {
  //   console.log('button clicked');
  //   setArticleShown(true); // Here we change state
  // };
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
              return (
                <>
                  <BlogsCard
                    key={index}
                    article={blog}
                    //handleClick={handleClick}
                  />
                  {/* {isArticleShown && <SingleBlogPage article={blog} />} */}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BlogsPageLayout;

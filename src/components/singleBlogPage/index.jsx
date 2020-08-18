import React from 'react';
import Article from '../../components/article';
import RecommendedArticles from '../../components/recommendedArticles';

const SingleBlogPage = ({ article }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:mx-20 xl:mx-40 gap-16 mx-3 relative">
        <div className="flex flex-col pt-8 pr-2 gap-1 absolute top-0 right-0 z-10">
          <span className=" text-right">Share</span>
          <a href="socialMediaLink">
            <img
              src={require('../../assets/instagramIcon.svg')}
              alt="instagram icon"
              className="w-8 float-right"
            />
          </a>
          <a href="socialMediaLink">
            <img
              src={require('../../assets/facebookIcon.svg')}
              alt="facebook icon"
              className="w-8 float-right"
            />
          </a>
          <a href="socialMediaLink">
            <img
              src={require('../../assets/twitterIcon.svg')}
              alt="twitter icon"
              className="w-8 float-right"
            />
          </a>
        </div>
        <div className="relative top-0">
          <Article article={article} />
        </div>
        <div className="pt-16">
          <h2 className=" text-xl font-medium">Read Also</h2>
          <br />
          <RecommendedArticles />
        </div>
      </div>
    </>
  );
};
export default SingleBlogPage;

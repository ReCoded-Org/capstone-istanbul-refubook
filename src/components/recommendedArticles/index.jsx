import React from 'react';
import BlogsCard from '../blogsCard';
import { articlesDataBase } from '../../consts/articles';
// recommendedArticlesArray is an array of recommended Articles for the user
// it should come from the dataBase, and passed to the BlogsCard component
//ToDO: add blogInfo props to BlogsCard component

const RecommendedArticles = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
      {articlesDataBase.map((article, index) => (
        <BlogsCard article={article} key={index} />
      ))}
    </div>
  );
};

export default RecommendedArticles;

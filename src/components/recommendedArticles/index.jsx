import React from 'react';
import BlogsCard from '../blogsCard';
// recommendedArticlesArray is an array of recommended Articles for the user
// it should come from the dataBase, and passed to the BlogsCard component
//ToDO: add blogInfo props to BlogsCard component

const recommendedArticlesArray = [
  { articleName: 'tilt-1' },
  { articleName: 'tilt-2' },
  { articleName: 'tilt-3' },
  { articleName: 'tilt-3' },
  { articleName: 'tilt-3' },
  { articleName: 'tilt-3' },
];

const RecommendedArticles = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
      {recommendedArticlesArray.map((article, index) => (
        <BlogsCard key={index} />
      ))}
    </div>
  );
};

export default RecommendedArticles;

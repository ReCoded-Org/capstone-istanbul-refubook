import React from 'react';
import { useTranslation } from 'react-i18next';

const BlogsCard = ({ article }) => {
  console.log(article);
  const { t } = useTranslation();

  return (
    <div className="py-8 mx-2 flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-md">
        <img
          className="w-full"
          src="https://via.placeholder.com/350x200"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <a href={`singleBlogPage/`}>{t('article.title')}</a>
          </div>
          <p className="text-gray-700 text-base">{t('article.body')}</p>
        </div>

        <div className="px-6 py-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt={`Avatar of ${t('article.author.name')}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{t('article.author.name')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;

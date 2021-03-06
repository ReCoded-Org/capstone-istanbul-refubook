import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const BlogsCard = ({ article }) => {
  const { t } = useTranslation();
  console.log(article.image);
  // const [isArticleShown, setArticleShown] = useState(false);
  // const handleClick = (e) => {
  //   console.log('button clicked');
  //   setArticleShown(true); // Here we change state
  // };
  return (
    <div className="py-8 mx-2 flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-md">
        <img className="w-full" src={article.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <p>{i18next.t(article.title)}</p>
          </div>
          <p className="text-gray-700 text-base">{t(article.subTitle)}</p>
        </div>

        <div className="px-6 py-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={article.avatar}
            alt={`Avatar of ${t('articles.author.name')}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{t(article.name)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;

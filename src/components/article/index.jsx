import React from 'react';
import { useTranslation } from 'react-i18next';

// ArticleInfo is just an object mimic the article object coming from firebase or wordPress API
const ArticleInfo = {
  id: 1,
  author: {
    id: 1,
    name: 'Jonathan Reinink',
    avatar: require('../../assets/AuthorAvatar.svg'),
    profile: '',
  },
  title: 'Title Title Title Title Title ',
  subTitle: 'subTitle subTitle subTitle ',
  image: require('../../assets/ImageHolder.svg'),
  body:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora blanditiis placeat dolorum. Inventore aliquam modi veritatis commodi ratione perspiciatis est unde, doloremque natus. Porro, dolores? Distinctio ducimus odit exercitationem illum!',
  date: 'Aug 18',
  dateTime: '2015-05-16 19:00',
};

const Article = () => {
  const { t } = useTranslation();

  return (
    <div className=" ">
      <article className="">
        <header>
          <h1 className="text-center p-4 text-xl font-bold">{t('article.title')}</h1>
        </header>
        <section className="content-center">
          <img src={ArticleInfo.image} alt="Article Cover" className="mx-auto" />
          <div className="flex items-center p-2 justify-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={ArticleInfo.author.avatar}
              alt={`Avatar of ${ArticleInfo.author.name}`}
            />
            <div className="text-xs">
              <p className="text-gray-900 leading-none">
                <a href="#author" target="_blank">
                  {t('article.author.name')}
                </a>
              </p>
              <p className="text-gray-600">{ArticleInfo.date}</p>
            </div>
          </div>
          <h2 className="text-center pt-3 text-lg font-medium">
            {t('article.subTitle')}
          </h2>
        </section>
        <section className="">
          <article className=" text-center">
            <p className="p-3">{t('article.body')}</p>
            <p className="p-3">{t('article.body')}</p>
            <p className="p-3">{t('article.body')}</p>
            <footer className="text-center text-xs text-gray-600">
              <p>
                <span> {t('article.PostedOn')} </span>
                <time dateTime={t('article.dateTime')}>{ArticleInfo.date}</time>{' '}
                {t('article.by')}{' '}
                <a className="text-blue-700" href="#author">
                  {t('article.author.name')}
                </a>
              </p>
            </footer>
          </article>
        </section>
      </article>
    </div>
  );
};

export default Article;

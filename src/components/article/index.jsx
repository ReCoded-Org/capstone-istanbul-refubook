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

const Article = ({ article }) => {
  const { t } = useTranslation();
  console.log(article);
  return (
    <div className=" ">
      <article className="">
        <header>
          <h1 className="text-center p-4 text-xl font-bold">
            Mozilla: The Greatest Tech Company Left Behind
          </h1>
        </header>
        <section className="content-center">
          <img
            src={
              'https://images.unsplash.com/photo-1597511880205-2d599e0c95ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
            }
            alt="Article Cover"
            className="mx-auto"
          />
          <div className="flex items-center p-2 justify-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://miro.medium.com/fit/c/128/128/1*sSR_cfRyUkBoM7L1pUYoYA.jpeg"
              alt={`Avatar of ${ArticleInfo.author.name}`}
            />
            <div className="text-xs">
              <p className="text-gray-900 leading-none">
                <a href="#author" target="_blank">
                  Florin Pop
                </a>
              </p>
              <p className="text-gray-600">{ArticleInfo.date}</p>
            </div>
          </div>
          <h2 className="text-center pt-3 text-lg font-medium">
            How could an organization that had its hand in so many world-changing
            technologies fail to thrive?
          </h2>
        </section>
        <section className="">
          <article className=" text-center">
            <p className="p-3">
              <h2>A brief history of Mozilla</h2>
              Mozilla was created out of the ashes of one of the world’s most
              spectacular software failures. Netscape Navigator, the pioneering web
              browser company of the late 1990s, had gone from internet king to
              also-ran in a matter of months. The cause — Microsoft’s aggressive
              bundling of Internet Explorer — hardly seemed fair. But most industry
              watchers were resigned to a future where browsers would be free and
              ubiquitous. They were hardly a product you could build a company
              around.", "Then, in a small stroke of genius, Netscape created the
              nonprofit Mozilla Organization (later renamed Mozilla Foundation) to
              develop Netscape’s integrated browser, mail, and chat application
              suite. That software initiative slowly crumbled in the face of
              competitors with more money and greater reach. But in the following
              years, the Mozilla Foundation morphed itself into a different kind of
              organization — one dedicated to promoting open web standards and web
              literacy. (Not to mention a handful of Utopian-tinged principles laid
              out in the famous Mozilla manifesto.)
            </p>
            <p className="p-3">
              <h2>Mozilla’s greatest hits</h2>
              Firefox is Mozilla’s best-known creation. And though today it’s easy to
              dismiss it as just an alternative browser, the early Firefox was a
              pioneer in ad blocking, data privacy, and developer tools. (Before
              there was Chrome DevTools, there was Firebug.)
            </p>
            <p className="p-3">
              If that was all there was to Mozilla, the company would just have been
              another speed bump on the way to Chromium and WebKit world domination.
              Instead, Mozilla advanced some of today’s most important web
              technologies. Here are four of their best initiatives.
            </p>
            <footer className="text-center text-xs text-gray-600">
              <p>
                <span> Posted On </span>
                <time dateTime={t('article.dateTime')}>{ArticleInfo.date}</time>{' '}
                Article By{' '}
                <a className="text-blue-700" href="#author">
                  Florin Pop
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

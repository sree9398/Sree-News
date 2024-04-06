import React from 'react';
import NewsItem from './NewsItem';

function NewsGrid({ items }) {
  if(!items){
    return <div className='items-null container'>Enter Keyword or select topic from the above section</div>;
  }
  return (
    <div className="news-grid">
      {items && items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;

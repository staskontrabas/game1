import React from 'react';
import NewsItem from '../../components/news-item';

const newsList = [
  { id: '1', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '2', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '3', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '4', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '5', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
  { id: '6', img: 'static/img/list_item_news_01.jpg', date: '16 января 2017', title: 'NEC PA302W-SV2: 30-дюймовый монитор для профессионалов', desc: 'Профессиональный монитор NEC PA302W-SV2 с 10-битной панелью AH-IPS и светодиодной подсветкой GB-R готов обеспечить безошибочное интенсивное визуальное отображение мельчайших деталей. Эта 30-дюймая модель с разрешением 2560 x 1600 точек создана для дизайнеров, фотографов, специалистов по видеомонтажу и в области работы с САПР/АПП.' },
]

export default class NewsList extends React.Component {
  render () {
    return (
      <div className="news-list">
        {newsList.map((news, i) => (
          <NewsItem key={i} news={news} />
        ))}
      </div>
    );
  }
}
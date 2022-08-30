import axios from 'axios'
import React, { useEffect, useState } from 'react'
import News from './News'

export default function NewsList({ category }) {
  const api = process.env.REACT_APP_API;
  const [Data, setData] = useState(null);

  const categoryHandler = (category) => {
    switch (category) {
      case 'Breaking News':
        return api + '&category=top';
      case 'Politics':
        return api + '&category=politics';
      case 'Business':
        return api + '&category=business';
      case 'Technology':
        return api + '&category=technology';
      case 'Science':
        return api + '&category=science';
      case 'Sports':
        return api + '&category=sports';
      case 'World':
        return api + '&category=world';
      case 'Entertainment':
        return api + '&category=entertainment';
      default:
        return api;
    }
  }

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(categoryHandler(category))
        .then((response) => {
          GetNewsList(response.data.results);
        })
        .catch (error => {
          console.log(`Error: ${error}`);
        })
    }
        fetchData();
  });

  const GetNewsList = (News) => {
    const data = News.filter((news) => {
      if (news.image_url !== null) {
        if (news.description !== null) {
          return true;
        } else if (news.content !== null) {
            return true;
        }
      }
      return false;
    }).slice(0, 3);
    setData(data);
    console.log(data);
  }

  if (Data) {
    Data.map((news) => {
    const description = news.description === null ? news.content : news.description;
    return (
      <>
        <h2>{category}</h2>
        <News
          title={news.title}
          image={news.image_url}
          description={description}
          link={news.link}
        />
      </>    
    )
    })
  } else {
      <News
        title={null}
        image={null}
        description={null}
        link={null}
      />
  }
}

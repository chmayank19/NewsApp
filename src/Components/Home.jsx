import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card'
import { useSearchParams } from 'react-router-dom';

export default function Home() {

  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResultss] = useState(0)
  let [page, setPage] = useState(1)
  let[searchParams,setSearchParams]=useSearchParams()

  async function getAPIData() {

    let response = await fetch(`https://newsapi.org/v2/everything?q=${searchParams.get("q")??"All"}&language=${searchParams.get("language")??"hi"}&page=1&pageSize=24&sortBy=publishedAt&apiKey=49d5e2838ca44f8890a224d41c8cd3ff`)
    response = await response.json()
    console.log(response);

    if (response.status === "ok") {
      setArticles(response.articles)
      setTotalResultss(response.totalResults)
    }
    }

    let fetchData = async () => {
      setPage(page + 1)
      let response = await fetch(`https://newsapi.org/v2/everything?q=${searchParams.get("q")??"All"}&language=${searchParams.get("language")??"hi"}&page=${page}&pageSize=24&sortBy=publishedAt&apiKey=49d5e2838ca44f8890a224d41c8cd3ff`)
      response = await response.json()
      if (response.status === "ok") {
        setArticles(articles.concat(response.articles))
      }
    }
    useEffect(()=>{
      getAPIData()
    },[searchParams]
)
    return (
      <>
        <div className='container-fluid'>
          <h5 className='text-center text-capitalize p-2 mt-3 text-light bg-primary'>{searchParams.get("q")??"All"} Articles</h5>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={
              <div className='my-3 text-center'>
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>

                <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <div className="row">
              {
                articles.map((item, index) => {
                  return <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage}
                    date={item.publishedAt}
                    source={item.source?.name}

                  />
                })
              }
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }


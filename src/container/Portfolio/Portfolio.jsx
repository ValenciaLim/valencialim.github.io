import React from 'react'
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className='app__portfolio app' id="portfolio">
        <h2 className="section__title head-text">Portfolio</h2>
        <span className="section__subtitle p-text">My Portfolio</span>
        <div className='app__portfolio-slide'>
            <iframe loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFrn06xdRU&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
            </iframe>
        </div>
        <div>Click
          &nbsp;<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFrn06xdRU&#x2F;view?utm_content=DAFrn06xdRU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">
            My Portfolio: Lim Rui Ting Valencia</a> if slideshow not loaded completely
        </div>
    </section>
  )
}

export default Portfolio
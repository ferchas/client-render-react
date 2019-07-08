import React from 'react';
import './style.css'; 

const Headlines = (props) => (
  props.articles.map((art,k) => 
    <div key={k} className="articles">
      <img src={art.urlToImage} className="articles-image"/>
      <div className="articles-content">
        <h3><a href={art.url} target="_blank">{art.title}</a></h3>
        <p>{art.description}</p>
      </div>
    </div>
  )
);

export default Headlines;
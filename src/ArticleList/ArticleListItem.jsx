import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx'
import './ArticleListItem.module.css'
import ArticleImage from './ArticleImage'

const ArticleListItem = props => (
    <div>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Many Articles</title>
        </head>
        <body>
        {<ArticleImage article = {props.article}/>}
            <section>
            <h1>{props.article.title}</h1>
            <p>{props.article.shortText}</p>
            <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            {<SlugButton article = {props.article}/>} 
            </section>
        </body>
        </html>
    </div> 
);
 
ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;

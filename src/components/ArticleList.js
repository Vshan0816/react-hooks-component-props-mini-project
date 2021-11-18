import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    const array = posts.map(article => {
        return <Article title={article.title} date={article.date}
         preview={article.preview} key={article.id}/>
    })
    return(
        <main>
            {array}
        </main>
    )
}

export default ArticleList;
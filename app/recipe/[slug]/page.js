import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from 'fs'
import matter from "gray-matter"

function getPostContent(slug) {
  const folder = 'recipes/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8');
  
  const matterRes = matter(content);
  return matterRes;
}



const RecipePage = () => {
  return (
    <div>
      <p>
        Hello World
      </p>
    </div>
  )
}

export default RecipePage
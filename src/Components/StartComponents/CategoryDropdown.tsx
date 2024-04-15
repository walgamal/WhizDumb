import React, { forwardRef } from 'react'
import { Category } from '../../Enums/Categories'

// categories to choose from
/*
    Any Category
    General Knowledge
    Entertainment (MOST Entertainments & celebs)
    Science
    Sports
    Geography
    History & Politics
    Humanities & Arts (Books, Mythology & Art)
*/

const CategoryDropdown = forwardRef((props, ref) => {
  return (
    <>
        <select className='category-select' ref={ref}>
            <option className='category-option' value={Category.AnyCategory}>Any Category</option>
            <hr />
            <option className='category-option' value={Category.GeneralKnowledge}>General Knowledge</option>
            <hr />
            <option className='category-option' value={Category.Entertainment}>Entertainment</option>
            <hr />
            <option className='category-option' value={Category.Science}>Science</option>
            <hr />
            <option className='category-option' value={Category.Sports}>Sports</option>
            <hr />
            <option className='category-option' value={Category.GeneralKnowledge}>Geography</option>
            <hr />
            <option className='category-option' value={Category.HistoryAndPolitics}>History & Politics</option>
            <hr />
            <option className='category-option' value={Category.HumanitiesAndArts}>Humanities & Arts</option>
        </select>
    </>
  )
}) 

export default CategoryDropdown
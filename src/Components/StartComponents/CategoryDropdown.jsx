import React, { forwardRef } from 'react'

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
            <option className='category-option' value="0">Any Category</option>
            <hr />
            <option className='category-option' value="1">General Knowledge</option>
            <hr />
            <option className='category-option' value="2">Entertainment</option>
            <hr />
            <option className='category-option' value="3">Science</option>
            <hr />
            <option className='category-option' value="4">Sports</option>
            <hr />
            <option className='category-option' value="5">Geography</option>
            <hr />
            <option className='category-option' value="6">History & Politics</option>
            <hr />
            <option className='category-option' value="7">Humanities & Arts</option>
        </select>
    </>
  )
}) 

export default CategoryDropdown
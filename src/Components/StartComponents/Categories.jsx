import React from 'react'
import Button from '../MiscComponents/Button'
import CategoryDropdown from './CategoryDropdown'
import '../../ComponentsCSS/StartPageCSS/Categories.css'

function Categories() {
  return (
    <>
        <div className='categories-container'>
            <table className='select-categories-table'>
                <tr>
                    <td><CategoryDropdown /></td>
                    <td><CategoryDropdown /></td>
                </tr>
                <tr>
                    <td><CategoryDropdown /></td>
                    <td><CategoryDropdown /></td>
                </tr>
            </table>
            <div>
                <Button className='back-btn btn' text='Back' href='start/categories'/>
            </div>
            <div>
                <Button className='create-chart-btn btn' text='Create Chart' href='start/categories'/>
            </div>
        </div>
    </>
  )
}

export default Categories
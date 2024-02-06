import React from 'react'
import Button from '../MiscComponents/Button'
import NameInput from './NameInput'
import '../../ComponentsCSS/StartPageCSS/Names.css'

function Names() {
  return (
    <>
        <div className='names-container'>
            <table className='enter-names-table'>
                <tr>
                    <td><NameInput /></td>
                    <td><NameInput /></td>
                    <td><NameInput /></td>
                </tr>
                <tr>
                    <td><NameInput /></td>
                    <td><NameInput /></td>
                    <td><NameInput /></td>
                </tr>
            </table>
            <Button className='continue-btn btn' text='Continue' href='start/categories'/>
        </div>
    </>
  )
}

export default Names
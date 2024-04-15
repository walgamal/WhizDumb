import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../MiscComponents/Button'
import CategoryDropdown from './CategoryDropdown'
import AppContext from '../../AppContext';
import '../../ComponentsCSS/StartPageCSS/Categories.css'

const Categories = () => {
    const { setCategoriesArray } = useContext(AppContext);
    const navigate = useNavigate();

    const category1Ref = useRef(1);
    const category2Ref = useRef(1);
    const category3Ref = useRef(1);
    const category4Ref = useRef(1);

    const retreiveCategories = () => {
        const category1 = category1Ref.current.value;
        const category2 = category2Ref.current.value;
        const category3 = category3Ref.current.value;
        const category4 = category4Ref.current.value;
        
        const categories = ["General Knowledge", category1, category2, category3, category4];

        setCategoriesArray(categories);
        console.log("Categories are set to: ", categories);
    }
    
  return (
    <>
        <div className='categories-container'>
            <table className='select-categories-table'>
                <tbody>
                    <tr>
                        <td><CategoryDropdown ref={category1Ref}/></td>
                        <td><CategoryDropdown ref={category2Ref}/></td>
                    </tr>
                    <tr>
                        <td><CategoryDropdown ref={category3Ref}/></td>
                        <td><CategoryDropdown ref={category4Ref}/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Button className='back-btn btn' text='Back' href='' onClick={() => navigate(-1)} />
            </div>
            <div>
                <Button className='create-chart-btn btn' text='Create Chart' href='game' onClick={retreiveCategories}/>
            </div>
        </div>
    </>
  )
}

export default Categories
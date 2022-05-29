import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

/*add 1*/
/*add 2*/

/*commit 1*/


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'One piece'] );
    //     setCategories( ['One piece', ...categories] );
    //     // setCategories( cats => [ ...cats, 'One piece']);
    // }
    

    return(

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>


            <ol>
                {                   //i es de indice
                    categories.map( (category, i) =>  
                        // <li key={ category }>{ category }</li>
                        <GifGrid 
                        key={category}
                        category={category}/>
                )}
            </ol>

        </>
    
    )

}

export default GifExpertApp;
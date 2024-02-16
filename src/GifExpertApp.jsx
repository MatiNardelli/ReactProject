import { useState } from "react";
import { AddCategory,GifGrid } from "./components/";


export const GifExpertApp = () => {

    const [categoria,setCategoria] = useState(['Dragon Ball']);

    const onAddCategory = (newCategoria) => {

        
        if(categoria.includes(newCategoria)) return;

       
        setCategoria(
            // categoria.concat('Knights of Zodiac')
            [...categoria,newCategoria]
            // cat => [...cat,'Knights of Zodiac']    
        )
    }


    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>


            <AddCategory 
               onNewCategory = {(eventUotronombre)=>onAddCategory(eventUotronombre)}
            />


            {
                categoria.map((categoria) =>(
    
                    <GifGrid key={categoria} categoria={categoria}/>
                ))
            }




            {/* gif item */}
        </>
    );
};
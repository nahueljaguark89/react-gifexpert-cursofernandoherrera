import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // apunta a la carpeta componentes, y apunta automaticamente a index

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return; // para evitar dos categorias iguales, se sale

        // categories.push('Batman');  Esto no va tanto con estados
        setCategories([ newCategory ,...categories]); // para insertar al inicio
        // setCategories([...categories, "Batman"]); para insertar al final del array
        // setCategories(cat => [...cat, "Batman"]); otra forma de hacerlo
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {/* listado de gif */}

                {categories.map(category => (
                        <GifGrid
                            key={category}
                            category={ category } />
                    ))
                }
                {/* <li>ABC</li> */}
 

                {/* gif item */}

        </>
    )
}
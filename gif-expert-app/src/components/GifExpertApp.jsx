import React, {useState} from 'react';
import AddCategory from "./AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories(cats => [...cats, 'Sword Art Online']);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ul>
                { categories.map(category => {
                    return <li key={category}>{ category }</li>
                }) }
            </ul>
        </>
    );
};

export default GifExpertApp;

import React, {useEffect, useState} from 'react';
import {companyCategoriesUrl} from "./urls";
import axios from "axios";

function Test() {
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const result = await axios(companyCategoriesUrl);
        console.log(result);
        setCategories(result.data);
    }, []);


    return (
        <ul>
            {categories.map(cat => (<li key={cat.id}>{cat.title}</li>))}
        </ul>
    );
}

export default Test;

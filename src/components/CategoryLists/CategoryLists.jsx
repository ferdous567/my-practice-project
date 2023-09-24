import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryLists = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="m-5 ">
            <h2 className="text-center text-4xl">Category list: {categories.length}</h2>
            <div className="flex justify-between m-4">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
            <div>

            </div>
                
        </div>
    );
};

export default CategoryLists;
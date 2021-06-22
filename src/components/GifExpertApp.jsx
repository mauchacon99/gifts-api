import React, { useState } from 'react';

import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Goku'])

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4  ">
                <header className="flex items-center justify-between text-3xl">
                    <p className=" leading-6 font-medium text-indigo-700 "> Gif Expert </p>
                </header>
                <AddCategory setCategories={setCategories} />
                {
                    categories.map((category, id) =>
                        <GifGrid category={category} className="flex tex-center" key={id} />
                    )
                }
            </div>
        </div>

    );
};



export default GifExpertApp;
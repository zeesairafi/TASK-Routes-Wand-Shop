
import WandItem from "./WandItem";
import SearchBar from "./SearchBar";
import wands from '../wands';
import { useState } from 'react';

const WandList = () => {
    const [query, setQuery] = useState("")
    const wandList = wands.filter(wand => wand.core.toLocaleLowerCase().includes(query.toLowerCase())).map((wand) => ( <WandItem wand={wand} key={wand.id}/>));
    return (
        <>
        <SearchBar setQuery={setQuery}/>
        <div className="listWrapper">
            {wandList}
        </div>
        </>
    );
};

export default WandList;

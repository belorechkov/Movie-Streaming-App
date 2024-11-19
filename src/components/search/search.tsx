import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search({ showSearch, setShowSearch }: { showSearch: unknown; setShowSearch: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [searchQuery, setSearchQuery] = useState('');


    const hideShowSearch = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if ((e.target as HTMLInputElement).id === 'search') {
            console.log('search');

            setShowSearch(prevState => !prevState)
        }
    }

    const searchPage = useNavigate();

    const sendSearchQuery = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        searchPage(`/search/${searchQuery}`);
        setShowSearch((prevState) => !prevState);
        setSearchQuery('');
    };

    return (
        <div onClick={e => hideShowSearch(e)}>
            <section id="search" className={showSearch ? 'show' : ''} >
                <form className="search-box" onSubmit={sendSearchQuery}>
                    <input type="text" id="search-top" placeholder="Search here..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit" ><i className="fa fa-search"></i></button>
                    {/* <label htmlFor="search-top"><i className="fa fa-search" onClick={(e) => sendSearchQuery(e)}></i></label> */}
                </form>
            </section>
        </div>
    );
}
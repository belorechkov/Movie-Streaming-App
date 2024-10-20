import { MouseEvent } from "react";

export default function Search({ showSearch, setShowSearch }: { showSearch: any, setShowSearch: any }) {

    const hideShowSearch = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (e.target.id !== 'search') {
            setShowSearch(false)
        }
    }

    return (
        <div onClick={e => hideShowSearch(e)}>
            <section id="search" className={showSearch ? 'show' : ''} >
                <form action="" method="GET" className="search-box">
                    <input type="text" name="search-top" id="search-top" placeholder="Search here..." />
                    <label htmlFor="search-top"><i className="fa fa-search"></i></label>
                </form>
            </section>
        </div>
    );
}
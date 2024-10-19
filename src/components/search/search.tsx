export default function Search({showSearch, setShowSearch}) {

    const hideShowSearch = () => {
        setShowSearch(false)
    }

    return(
        <div>
            <section id="search" className={showSearch ? 'show' : ''} onClick={hideShowSearch}>
        <form action="" method="GET" className="search-box">
            <input type="text" name="search-top" id="search-top" placeholder="Search here..."/>
            <label htmlFor="search-top"><i className="fa fa-search"></i></label>
        </form>
    </section>
        </div>
    );
}
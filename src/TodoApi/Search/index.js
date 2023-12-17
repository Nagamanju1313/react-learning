import './search.style.css'

const Search = ({searchHandleChange, search})=>{
    return(
        <div className='search-box'>
            <div className="search-div">
                <input type='search' placeholder='Search Items...' onChange={(e)=>{searchHandleChange(e)}} value={search}/>
            </div>
        </div>
    )
}

export default Search;
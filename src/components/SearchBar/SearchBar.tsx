import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
        <div className='search-bar'>        
            <input type="text" placeholder='Search'/>
            <button>
                <SearchIcon 
                  
                />
            </button>
        </div>

    )
}
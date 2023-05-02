import './SearchBar.css'
import { setTerm, selectSearch } from './searchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {

    const dispatch = useDispatch()
    const search = useSelector(selectSearch)    
    const { term } = search
    console.log(term)
    const handleChange = (event: { target: { value: string; }; }) =>{
        //console.log(event.target.value)
        dispatch(setTerm(event.target.value)) 
             
    }


   



    return (
        <div className='search-bar'>        
            <input type="search" placeholder='Search' onChange={(event) => handleChange(event)} required/>
            <button>
                <SearchIcon 
                  
                />
            </button>
        </div>

    )
}
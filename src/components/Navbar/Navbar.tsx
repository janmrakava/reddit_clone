import RedditIcon from '@mui/icons-material/Reddit';

import './Navbar.css'


export const Navbar = () => {
    return (
        <nav className='header'>
            <RedditIcon
                sx={{
                    color: 'white',
                    border: '10px solid black',
                    borderRadius: '50%',
                    background: 'black',
                    marginLeft: '70px',
                    marginRight: '30px'
                }}
            />
            <h1>RedditMinimalClone</h1>
        </nav>
    )
}
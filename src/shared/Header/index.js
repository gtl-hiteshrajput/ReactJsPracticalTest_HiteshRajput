import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import FTypography from '../../components/FTypography';


const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => navigate('/home');

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton onClick={handleLogoClick}>
                            <HomeIcon
                                sx={{
                                    cursor: 'pointer',
                                    color: '#0000FF'
                                }}
                            />
                        </IconButton>
                        <FTypography typographyProps={{ variant: 'h6', sx: { fontWeight: 'bold' } }} body='Post List' component="div" />
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
};

export default Header;
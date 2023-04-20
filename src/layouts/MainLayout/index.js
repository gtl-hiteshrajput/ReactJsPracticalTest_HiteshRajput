import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../../shared/Header';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

    return (
        <Box>
            <Header sx={{ display: 'flex', width: '100%' }} />
            <Box component="main" sx={{ p: { xs: 2, sm: 3 }, mt: 8 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;

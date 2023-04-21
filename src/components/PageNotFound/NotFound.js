import { useNavigate } from 'react-router-dom';

import FButton from '../FButton';
import FTypography from '../FTypography';

const NotFound = () => {
    const navigation = useNavigate();

    return (
        <>
            <FTypography typographyProps={{ variant: 'h6', sx: { fontWeight: 'bold' } }} body={'Oops! Page Not Found'} />
            <FButton
                variant='contained'
                type='submit'
                size='large'
                text='Back to Home'
                sx={{ backgroundColor: '#1976d2' }}
                onClick={() => navigation('/')}
            />
        </>
    );
};

export default NotFound;
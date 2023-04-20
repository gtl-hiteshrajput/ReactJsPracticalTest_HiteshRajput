import React from 'react';
import { Box } from '@mui/material';

import FAlert from '../FAlert';
import { mAlertSeverity } from '../../constant';

const { error: serverityErrKey } = mAlertSeverity;

const ErrorPage = ({ error: errorMessage }) => {
    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <FAlert variant='outlined' severity={serverityErrKey} text={errorMessage} />
            </Box>
        </>
    )
};

export default ErrorPage;
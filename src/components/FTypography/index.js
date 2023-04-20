import { Typography } from "@mui/material";

const FTypography = ({ body, sx, variant = null, component = null }) => {
    return (
        <Typography
            variant={`${variant ? variant : 'h5'}`}
            component={`${component ? component : 'h5'}`}
            sx={sx}>
            {body}
        </Typography>
    )
};

export default FTypography;
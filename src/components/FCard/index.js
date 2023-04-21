import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material/index';

const FCard = ({ post: { title, body, id: postId } = {} }) => {
    const navigate = useNavigate();

    const handleFweetInfo = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <Card sx={{ maxWidth: "100%", marginTop: '10px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        {title ? Array.from(title)[0] : ''}
                    </Avatar>
                }
                onClick={() => { }}
                title={title}
                subheader={'subheader'}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title="View details">
                    <IconButton onClick={() => handleFweetInfo(postId)} aria-label="share">
                        <VisibilityIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default FCard;
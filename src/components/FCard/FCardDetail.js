import { blue } from '@mui/material/colors';
import { Avatar, Card, CardContent, CardHeader, Tooltip, Typography } from '@mui/material/index';

const FCardDetail = ({ post: { title, body, tags, user = {} } = {}, onProfileClick }) => {
    const { firstName, lastName, username } = user;

    return (
        <Card sx={{ maxWidth: 600, marginTop: '10px' }}>
            <CardHeader
                avatar={
                    <Tooltip title="View profile detail">
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                            {username ? Array.from(username)[0] : ''}
                        </Avatar>
                    </Tooltip>
                }
                onClick={onProfileClick}
                title={title}
                style={{ cursor: 'pointer' }}
                subheader={firstName + ' ' + lastName}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {body}
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary">
                    Tags: {tags?.join(',')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FCardDetail;
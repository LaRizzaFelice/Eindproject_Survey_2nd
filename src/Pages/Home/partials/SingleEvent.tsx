import { FC } from "react";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { Event } from "../Home";
import { red } from '@mui/material/colors';

export interface SingleEventProps {
  event: Event;
}

export const SingleEvent: FC<SingleEventProps> = ({ event }) => {
  return (
    <Box display="flex" gap={1}>
      <Box>
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={event.title}
        subheader={event.date}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
    </Box>
    </Box>
  );
};

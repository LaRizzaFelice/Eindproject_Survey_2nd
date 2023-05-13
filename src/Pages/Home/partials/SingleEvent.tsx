import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Event } from "../Home";

export interface SingleEventProps {
  event: Event;
}

export const SingleEvent: FC<SingleEventProps> = ({ event }) => {
  return (
    <Box display="flex" gap={1}>
      <Typography>{event.title}</Typography>
      <Typography>{event.date}</Typography>
    </Box>
  );
};

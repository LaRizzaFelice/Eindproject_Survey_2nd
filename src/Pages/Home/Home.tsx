import { FC, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { SingleEvent } from "./partials/SingleEvent";
import { Images } from "./partials/Images";

export type DataType = {
  title: string;
  some_events: Event[];
  description: string;
  pictures: string[];
};

export type Event = {
  title: string;
  date: string;
};

export const Home: FC = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    if (!data) {
      fetch("/data.json")
        .then((result) => result.json())
        .then((resultData) => setData(resultData));
    }
  }, [data]);

  if (!data) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2">{data.title}</Typography>

      <Box>
        {data.some_events.map((event) => (
          <SingleEvent event={event} />
        ))}
      </Box>
      <Typography>{data.description}</Typography>
      <Images images={data.pictures} />
    </Box>
  );
};

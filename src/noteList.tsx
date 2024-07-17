import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Inputs } from "./components/addnote";


const NotesList = () => {
  const location = useLocation();
  const { notes } = location.state as { notes: Inputs[] };

  return (
    <Box>
      <Typography align="center" color="secondary" fontSize={26}>
        Notes List
      </Typography>
      {notes.map((note, index) => (
        <Box key={index} m={3}>
          <Typography variant="h5">Title{note.title}</Typography>
          <Typography variant="body1">{note.content}</Typography>
          <Typography variant="body2">Tag: {note.tags}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NotesList;
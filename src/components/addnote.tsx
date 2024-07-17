
import { Box, Button,MenuItem, Select, TextareaAutosize, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";


export type Inputs={
  title:string,
  content:string,
  tags:string,
}

const AddNote = () => {
  const[Tagged,setTagged]=useState<string>('education');
  const theme=useTheme()
  const navigate=useNavigate();

  const mobile = useMediaQuery(theme.breakpoints.up('sm'));
  const {register,handleSubmit,formState:{errors}}=useForm<Inputs>()

  const onSubmit:SubmitHandler<Inputs>=(data)=>{
    console.log(data)
navigate('/notelist',{state:{notes:[data]}})
  }
  return (
    <><Box>
      <Typography align="center" color='secondary' fontSize={26}>Create Note</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box>{mobile ? <Box m={3} sx={{display:'flex',gap:5}}>
      <Typography>Title</Typography>
      
      <TextField sx={{minWidth:"500px"}} placeholder="title"  {...register('title')}/>
      {/* {errors.title && <span>this field required to be filled!</span>} */}
      <Typography>Tag</Typography>
      <Select labelId="label1" value={Tagged} color="secondary" {...register('tags')}>
        <MenuItem value={``||`education`}>Education</MenuItem>
        <MenuItem value='work'>Work</MenuItem>
        <MenuItem value='health'>Health</MenuItem>
        <MenuItem value='habit'>Habit</MenuItem>
      </Select></Box> :<Box m={3} sx={{display:'block',gap:5}}>
      <Typography>Title</Typography>
      <TextField sx={{minWidth:"500px"}} placeholder="title"/>
      <Typography my={3}>Tag</Typography>
      <Select labelId="label1" value={Tagged} color="secondary" {...register('tags')}  onChange={(e) => setTagged(e.target.value as string)}>
      <MenuItem value={``||`education`}>Education</MenuItem>
        <MenuItem value='work'>Work</MenuItem>
        <MenuItem value='health'>Health</MenuItem>
        <MenuItem value='habit'>Habit</MenuItem>
      </Select></Box>}
      
     <Box mx={3} my={3}>
      <Typography my={2}>Note</Typography>
      <TextareaAutosize style={{minWidth:"500px",minHeight:"300px"}} {...register('content')}/>
      </Box> 
      <Box display='flex' justifyContent='flex-end' gap={3}>
      <Button variant="contained" color="secondary" type="submit">save</Button>
      <Link to='..'>
      <Button variant="outlined" color="secondary">cancel</Button>
      </Link>
      </Box>
      
      </Box>
      </form>
      </Box>
      </>
  );
};

export default AddNote;
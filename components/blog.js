import React, {useEffect, useState} from "react";

//next
import Image from "next/image";
import { useRouter } from "next/router"

//material-ui
import { Box, Typography, Grid, Paper } from "@mui/material";

const Blog = ({ id, fields, includes }) => {
    let { author, content, date, titile } = fields
    let authorLinkId = author.sys.id
    
    author = includes.filter(item => item.sys.id === authorLinkId)
    author = author[0].fields.name

    date = new Date(date)
    date = date.toDateString()
    

    useEffect(()=>{
        let div = document.getElementById(`blog-snippet-${id}`);         

        content.content.forEach((item)=> {            
            
            item.content.forEach(item => {                   
                let element =  document.createElement('span')
                element.textContent = item.value
                item.marks.forEach(item => {
                    switch(item.type){
                        case 'bold':
                            element.style.fontWeight = item.type
                        break;

                        case 'italic':
                            element.style.fontStyle = item.type
                        break;

                        default:
                            break;
                    }
                })                
                div.appendChild(element)
            })                       

        })              
        //console.log(content)              
    }, [])       
  




    const router = useRouter()

    return (
        <>
            <Grid
                item
                phone={12}
                tablet={6}
                tabletxl={4}
                laptop={3}
                component="article"

            >
                <Paper elevation={0} sx={{ px: 3, py: 5 }}>
                    <Box
                        sx={{
                            mb: 3,
                            width: "100%",
                            height: { phone: '20vh', tabletxl: '30vh' },
                            position: "relative",
                            backgroundColor: "grey.500",
                        }}
                    ></Box>

                    <Box sx={{ mb: 1, display: "flex", flexDirection: { phone: 'column', tabletxl: 'row' } }}>
                        <Typography variant="body2" sx={{ mr: 2, color: "grey.600", cursor: 'pointer' }}>
                            Written by <b>{author}</b>
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.500" }}>
                            {date}
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,                           
                            width: { phone: "100%", tablet: "100%" },
                            fontWeight: {phone: 700},
                            cursor: "pointer",
                            "&:active": { borderBottom: "3px solid black" },
                        }}
                        onClick={() => {
                            router.push(`/blogs/${id}`)
                            return;
                        }}
                    >
                        {titile}
                    </Typography>

                    <Typography
                        variant="body1"
                        id={`blog-snippet-${id}`}
                        sx={{
                            height: '7vh',
                            maxWidth: "90vw",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: 'grey.700'
                        }}
                    >                                                                           
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default Blog;

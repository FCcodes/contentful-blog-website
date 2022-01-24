import React, {useEffect} from 'react';

//next 
import Image from 'next/image';
import Head from 'next/head'

//material-ui
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material'

const BlogPage = ({ id, fields }) => {
    let { author, content, date, titile } = fields

    //this id the id that links the author field to the author entry
    //let authorLinkId = author.sys.id

    date = new Date(date)
    date = date.toDateString()

    useEffect(()=>{
        let div = document.getElementById(`blog-content-${id}`);         

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
                    }
                })                
                div.appendChild(element)
            })                       

        })              
        //console.log(content)              
    }, [])  

    return (
        <>
            <Head>
                <title>{titile}</title>
            </Head>
            <Box variant="blog-page" sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'grey.100' }}>
                <Box component="main" sx={{ pb: 10, width: { phone: '85%', tablet: '80%', tabletxl: '60%', laptop: '50%' } }}>
                    <Typography variant='h1' sx={{ my: { phone: 3, laptop: 9 }, fontWeight: { phone: 700 } }}>{titile}</Typography>
                    <Box sx={{ my: { phone: 3, laptop: 9 }, width: "100%", height: { phone: "30vh", tablet: "40vh", laptop: "50vh" }, backgroundColor: "grey.500" }}></Box>
                    <Box component='setcion' className="autor-info" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                        <Avatar src='' alt="" sx={{ mr: 3, width: { phone: '30px', tablet: '40px' }, height: { phone: '30px', tablet: '40px' } }} />
                        <Typography variant="body2" sx={{ mr: 2, color: 'grey.600' }}>Written by :</Typography>
                        <Typography variany="body2" sx={{ color: 'grey.500', fontSize: { phone: '.6rem', tablet: '.7rem', tabletxl: '.8rem' } }}>{date}</Typography>
                    </Box>
                    <Typography variant='body1' id={`blog-content-${id}`} sx={{ fontSize: { phone: '1rem', tabletxl: '1.2rem' }, color: 'grey.800', lineHeight: { phone: '2rem', tabletxl: '2.5rem' } }}></Typography>
                </Box>
            </Box>
        </>
    );
};

export async function getStaticPaths() {

    let api = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_CDA_APIKEY}&content_type=blogs`

    let articles = null

    const res = await fetch(api)
    const data = await res.json()
    articles = data.items

    let paths = articles.map(blog => ({ params: { id: `${blog.sys.id}` } }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params }) {
    let api = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries/${params.id}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_CDA_APIKEY}`

    let article = null

    const res = await fetch(api)
    const data = await res.json()
    article = data

    console.log(article)

    return {
        props: {
            id: article.sys.id,
            fields: article.fields,                       
        }
    }
}

export default BlogPage;

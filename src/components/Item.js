import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Item = () => { 

    const {name} = useParams(); 

    const [title, setTitle] = useState('Carregando...')

    const [txt, setTxt] = useState('Carregando...')

    const [img, setImg] = useState(`../imgs/${name}.svg`); 

    const getWikiData =  async () =>{
        const txtData = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&explaintext=&titles=${name}`, {mode: 'cors'} ); 
        const txtJson = await txtData.json(); 
        for (let obj in txtJson.query.pages){
            setTitle(txtJson.query.pages[obj].title); 
            setTxt(txtJson.query.pages[obj].extract)
        }
    }

    const getImgfromWiki = async () =>{
        const imgData = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&origin=*&prop=images&format=json&imlimit=2&titles=${name}`, {mode: 'cors'}); 
        const imgJson = await imgData.json();

        for (let obj in imgJson.query.pages){

            let imgTitle = imgJson.query.pages[obj].images[1].title; 
            const imgInfo = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&origin=*&prop=imageinfo&iiprop=url&format=json&titles=${imgTitle}`, {mode: 'cors'}); 
            const imgInfoJson = await imgInfo.json(); 

            for (let obj in imgInfoJson.query.pages){
                let url = imgInfoJson.query.pages[obj].imageinfo[0].url; 
                setImg(url)
            }
        }
    }

    useEffect( () => {
        getWikiData()
        if (img === "") { getImgfromWiki() }
    }, [])

    return (
        <>
            <h1>{title}</h1>

            <div style = { {display: "grid", gridTemplateColumns: "auto 70%", alignItems: 'center'} }>
                <img src = {img} alt = {title} loading = "lazy" style = { {width: "50%"} }></img>
                <p>{txt}</p>
            </div>
        </>
    )
}

export default Item
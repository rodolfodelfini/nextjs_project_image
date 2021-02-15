import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../style/styles_index.module.css';

function Index({ itens }) {
    console.log(itens)
    return(
    <div className={styles.container}>
            <div className={styles.BoxMain}>
                {itens.map(registro =>(
                    <Link href={{ pathname: '/image/[slug]', query: { slug: registro.id }, }} >
                    <div className={styles.BoxImage} key={registro.id}>
                        <img  className={styles.image} src={registro.previewURL}/>
                        <div className={styles.infoImage}>
                            <p className={styles.name}>{registro.tags}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>

        <style jsx global>
        { ` 
            body { 
                background-color: #000;
                margin: 0px 0px 0px 0px;
            } 
        `} 
        </style>  
    </div>
    )
}


Index.getInitialProps = async (context) =>{
    const response = await axios.get(
        'https://pixabay.com/api/?key=11336378-945182289a0aa9f7b45a007d1&order=popular&image_type=photo&pretty=true&page=1'
    );

    return { itens: response.data.hits}
};

export default Index
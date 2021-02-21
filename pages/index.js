import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../style/styles_index.module.css';


function Index({ itens }) {
    return(
    <div className={styles.container}>  
        <div className={styles.BoxMain}>
            <div className={styles.title}>
                <h1>Vercel + NextJs + ReactJs</h1>
            </div>
            {itens.map(registro =>(
            <div className={styles.BoxImage} key={registro.id}>
                <div 
                    className={styles.image} 
                    style={
                        { 
                            backgroundImage: `url(${registro.webformatURL})`
                        }
                        }>
                </div>
                <div className={styles.infoImage}>
                    <p >{registro.tags}</p>
                </div>
            </div>
            ))}
        </div>

        <style jsx global>
        { ` 
            body { 
                background-color: #e8e7e8;
                margin: 0px 0px 0px 0px;
            } 
        `} 
        </style>  
    </div>
    )
}

Index.getInitialProps = async (context) =>{
    const API_KEY = process.env.API_KEY;
    const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&order=popular&image_type=photo&pretty=true&page=1`
    );
    return { itens: response.data.hits}
};

export default Index
import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../../style/styles.module.css';

export async function getStaticPaths(){
    return{
        paths:[],
        fallback: true
    }
}

function Image({ itens }) {
    return(
        <div className={styles.container}>
            <div className={styles.BoxMain}>
                {itens.map(registro =>(
                    <div className={styles.BoxImage} key={registro.id}>
                        <img  className={styles.image} src={registro.previewURL}/>
                        <div className={styles.infoprofile}>
                            <h2 className={styles.name}>{registro.tags}</h2>
                            <p className={styles.p}>{registro.type}</p>
                        </div>
                    </div>
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

export async function getStaticProps(context){
    const id = context.params.id;
    console.log("->"+id)
    const response = await axios.get(
        `https://pixabay.com/api/?key=11336378-945182289a0aa9f7b45a007d1&id=${id}`
    );

    return { itens: response.data.hits}
};

export default Image
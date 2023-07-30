import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../style/styles_index.module.css';
import { ImageBox } from '../components/image';


function Index({ itens }) {
    return (
        <div className={styles.container}>
            <div className={styles.BoxMain}>
                {itens.map(image => (
                    <ImageBox key={image.id} url={image.webformatURL} />
                ))}
            </div>
        </div>
    )
}

Index.getInitialProps = async (context) => {
    const API_KEY = process.env.API_KEY;
    const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&order=popular&image_type=photo&pretty=true&page=2`
    );
    return { itens: response.data.hits }
};

export default Index
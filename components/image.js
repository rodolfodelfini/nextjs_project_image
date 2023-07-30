import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../style/styles_index.module.css';


export function ImageBox(image) {
    return (
        <div className={styles.BoxImage}>
            <div
                className={styles.image}
                style={
                    {
                        backgroundImage: `url(${image.url})`
                    }
                }>
            </div>
        </div>
    )
}
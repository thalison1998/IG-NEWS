import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';


const Posts = () => {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet </strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum autem libero eligendi nesciunt, illum ea similique, officia perferendis pariatur facere. Fugit provident veritatis dolor labore deleniti praesentium. Non, excepturi!</p>
                    </a>

                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet </strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum autem libero eligendi nesciunt, illum ea similique, officia perferendis pariatur facere. Fugit provident veritatis dolor labore deleniti praesentium. Non, excepturi!</p>
                    </a>

                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet </strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum autem libero eligendi nesciunt, illum ea similique, officia perferendis pariatur facere. Fugit provident veritatis dolor labore deleniti praesentium. Non, excepturi!</p>
                    </a>
                </div>
            </main>
        </>
    )
};

export const getStaticProps:GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.

    return {
        props:{}
    }
}

export default Posts

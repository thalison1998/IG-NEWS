import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

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
  
    const prismic = getPrismicClient()
    const response = await prismic.query([
        Prismic.predicates.at('document.type','post')
    ],{
        fetch:['publication.title','publication.content'],
        pageSize:100,
    })

    const posts = response.results.map((post) => ({
        slug:post.uid,
        title: RichText.asText(post.data.title),
       

    }))

    console.log(JSON.stringify(response,null,2))
    return {
        props:{}
    }
}

export default Posts

import Prismic from "@prismicio/client"

export const getPrismicClient = (req?:unknown) => {
    const prismic = new Prismic.Client(
        process.env.PRISMIC_ENDPOINT,
        
        {   
            accessToken:process.env.PRISMIC_ACCESS_TOKEN 
        }
    )
    return prismic
}
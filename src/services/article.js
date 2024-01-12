import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const api = 'fba8b4d62amsh6aac09a49cc2edfp1895c1jsn694f710e5a78' 

export const articleApi = createApi({
    reducerPath:"articleApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', api);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers
        }
    }),
    endpoints:(builder) => ({
        getSummery:builder.query({
            query:(params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});


export const {useLazyGetSummeryQuery} = articleApi;
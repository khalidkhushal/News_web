const axios = require('axios');

//handling routes
exports.home = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/everything?sources=bbc-news,cnn,al-jazeera-english&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
exports.headlines = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?sources=ary-news,associated-press&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};

exports.science = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?category=science&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
exports.health = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?category=health&apiKey=42c24a0371ea44a1b332e02aadc7c018")

        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
exports.business = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?category=business&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
exports.sports = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?category=sports&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
exports.entertainment = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
exports.technology = async(req, res) => {

    try {
        const news = await axios.get("https://newsapi.org/v2/top-headlines?category=technology&apiKey=42c24a0371ea44a1b332e02aadc7c018")
        const data = news.data;
        //const articles = data.articles;
        // articles.forEach(article => {
        //     console.log(article.title);
        // });
        res.render('index', { articles: data.articles });


    } catch (error) {
        console.log(error);
    }

};
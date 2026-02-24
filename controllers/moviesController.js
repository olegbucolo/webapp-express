const connection = require('../data/db');

function index(req, res) {
    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        res.json(results)
    })
}

function show(req, res) {
    const id = req.params.id;

    // const sql = `
    //     SELECT movies.id, movies.title, reviews.name, reviews.vote, reviews.text FROM movies
    //     JOIN reviews ON movies.id = reviews.movie_id
    //     WHERE movies.id = ?
    //     `

    const sql = `
        SELECT 
            movies.id AS movie_id,
            movies.title,
            movies.director,
            movies.genre,
            movies.release_year,
            movies.abstract,
            movies.image,
            reviews.id AS review_id,
            reviews.name,
            reviews.vote,
            reviews.text
        FROM movies
        JOIN reviews ON movies.id = reviews.movie_id
        WHERE movies.id = ?
        `
    connection.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({ error: "query failed" });
        if (results.length == 0) return res.status(404).json({ error: "post not found" });

        const moviesJoinReviews = {
            id: results[0].id,
            title: results[0].title,
            director: results[0].director,
            genre: results[0].genre,
            release_year: results[0].release_year,
            abstract: results[0].abstract,
            image: results[0].image,
            reviews: results.map(r => ({
                id: r.id,
                name: r.name,
                vote: r.vote,
                text: r.text,
            }))
        }
        res.json(moviesJoinReviews)
    })
}

module.exports = { index, show }
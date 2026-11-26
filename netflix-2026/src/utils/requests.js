//The instructor is creating a central place to store all the TMDB API endpoints that the Netflix application will request....
const API_KEY = process.env.REACT_APP_KEY;
// this stores our API KEY BETEDEGAGAMI slemntekemew request ...store adrgo variable metekemu yeteshalle nw


/*Why did he create an object?

Instead of writing the same API endpoint repeatedly throughout the application, he stores them in one object.       */ 



const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};

// the above is an object
// Let us explain this code

/*What are those numbers?
These are identifiers provided by TMDB.*/


/*
1. Where did this code come from?
It comes from the TMDB API documentation.

TMDB provides different API endpoints for retrieving different movie and TV show data.

For example:
Endpoint	What it retrieves
/trending/all/week	Trending movies and TV shows
/discover/tv	TV shows
/movie/top_rated	Top-rated movies
/discover/movie	Movies by genre
/tv/popular	Popular TV shows

The instructor selected these endpoints based on the different sections he wants to display on Netflix.
*/ 

export default requests;

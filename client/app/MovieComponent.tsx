import React, { useState, useEffect } from 'react';

const MovieComponent = () => {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    // Function to fetch movie lists from the server
    const fetchMovieLists = async () => {
      try {
        const response = await fetch('https://8080-0jas0jas-popcorn-k8vlt78igny.ws-us110.gitpod.io/api/home', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // You can send any necessary data in the body of the request
          body: JSON.stringify({ /* Add any data you need to send */ })
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movie lists');
        }
        const data = await response.json();
        setMovieLists(data); // Assuming data is an array of movie lists
      } catch (error) {
        console.error('Error fetching movie lists:', error);
      }
    };

    // Call the fetchMovieLists function when the component mounts
    fetchMovieLists();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {movieLists.map((movieList, index) => (
        <div key={index}>
          <h2>Movie List {index + 1}</h2>
          <ul>
            {movieList.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;

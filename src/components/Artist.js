import React from 'react';

const Artist = ( { artist } ) => {
    if(artist.length == 0) return null;

    const { images, name, followers, genres } = artist;
    
    return(
        <div>
            <h3>Artist: {name}</h3>
            <p>Followers: {followers && followers.total}</p>
            <p>Genres: {genres && genres.join(', ')}</p>
            <img className='artist-profile' alt='Artist Profile' src={ images[0] && images[0].url } />
        </div>
    )
}

export default Artist;
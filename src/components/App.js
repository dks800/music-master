import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_Address = 'https://spotify-api-wrapper.appspot.com/artist/';

class App extends Component {
    state = { artistData : [], topTracks: [] };

    serachArtist = artistQuery => {
        fetch(API_Address + artistQuery)
        .then(response => response.json())
        .then(json => {
            if(json.artists.total > 0){
                const artistData = json.artists.items[0];
                this.setState( { artistData } );
                fetch(`${API_Address}${artistData.id}/top-tracks`)
                .then(response => response.json())
                .then(json => this.setState({ topTracks: json.tracks }))
                .catch(error => alert(error.message));
                
            }
        })
        .catch(error => alert(error.message));
    }

    render() {
        return(
            <div>
                <h2>Search Music Artists</h2>
                <Search serachArtist={ this.serachArtist } />
                <Artist artist={this.state.artistData} />
                <hr />
                {
                    (this.state.topTracks.length > 0) ? <h3>Top 10 Tracks</h3> : ''
                }                
                <Tracks tracks={this.state.topTracks} />
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';

const API_Address = 'https://spotify-api-wrapper.appspot.com/artist/';

class App extends Component {
    state = { artistQuery : '', artistData : [], topTracks: [] };

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }

    serachArtist = () => {

        fetch(API_Address + this.state.artistQuery)
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

    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.serachArtist();
        }
    }
    
    render() {
        console.log(this.state);
        return(
            <div>
                <h2>Search Music Artists</h2>
                <input
                    type='text' 
                    onChange={this.updateArtistQuery}
                    onKeyPress={ this.handleKeyPress }
                    placeholder='Enter Artist Name'>    
                </input>
                <button onClick={ this.serachArtist }>Search</button>
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
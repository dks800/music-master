import React, { Component } from 'react';

class Search extends Component{
    state  = { artistQuery: '' };
    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.serachArtist();
        }
    }

    serachArtist = () =>{
        this.props.serachArtist(this.state.artistQuery);
    }

    render(){
        return(
            <div>
                <input
                    type='text' 
                    onChange={this.updateArtistQuery}
                    onKeyPress={ this.handleKeyPress }
                    placeholder='Enter Artist Name'>    
                </input>
                <button onClick={ this.serachArtist }>Search</button>                
            </div>
        )
    }
}

export default Search;
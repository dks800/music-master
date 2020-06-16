import React, { Component } from 'react';

class Tracks extends Component {
    state = { playing: false, audio: null, playingPreviewURL: null };
    playAudio = previewURL => () => {
            const audio = new Audio(previewURL);
            if(!this.state.playing){
                audio.play();
                this.setState({ playing: true, audio, playingPreviewURL: previewURL });
            } else {
                this.state.audio.pause();
                if(this.state.playingPreviewURL === previewURL){
                    this.setState({ playing: false });
                } else {
                    audio.play();
                    this.setState({ audio, playingPreviewURL: previewURL });                
                }
            } 
    }
    trackIcon = track =>{
        if(!track.preview_url){
            return <span>N/A</span>;
        }
        if(this.state.playing && this.state.playingPreviewURL === track.preview_url){
            return <span>| |</span>;
        } else {
            return <span>&#9654;</span>;
        }        
    }
    render(){
        const { tracks } = this.props;
        return(
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;
                        return(
                            <div key={ id } className='track-div' onClick={this.playAudio(preview_url)}>
                                <img title={ name } className='album-images' alt='Album Image' src={album.images[0].url } />
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;
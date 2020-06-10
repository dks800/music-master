import React, { Component } from 'react';

const divStyle = {
    width: 150,
    margin: 10,
    fontSize: 13,
    fontWeight: 'bold',
    display: 'inline-block',
    verticalAlign: 'top'
}

class Tracks extends Component {
    render(){
        const { tracks } = this.props;
        return(
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album } = track;
                        return(
                            <div key={ id } style={ divStyle }>
                                <img title={ name } className='album-images' alt='Album Image' src={album.images[0].url } />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;
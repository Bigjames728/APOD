import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Components
import API_KEY from './API_KEY';

class PhotoList extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            photos: []
        }
    }

    componentDidMount() {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        photos: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, photos } = this.state;

        if (!isLoaded) {
           return <div>Loading...</div>
        } else {

            return(
                <ul>
                    {photos.map((photo) => {
                        return (
                            <li key={`${photo.id}`}>
                                <p>Title: {photo.title}</p>
                                <p><a href={photo.url}>Image</a></p>
                            </li>
                        )
                    })}
                </ul>
            )
        }    
    }

}

export default PhotoList;
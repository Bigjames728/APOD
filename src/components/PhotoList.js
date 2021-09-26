import React, { useState, useEffect } from 'react';


// Import Components
import API_KEY from './API_KEY';


function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect( () => {
        fetchData();
    }, []);

    console.log(photos);

    const fetchData = () => {
        setIsLoading(true)
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=6`)
            .then(response => response.json())
            .then((photos) => {
                setPhotos(photos);
                console.log(typeof photos);
                setIsLoading(false);
            })
            .catch(error => console.log('Error fetching and parsing data', error))
    }
    

    return (
        <div className="wrapper">
            <h1>Astronomy Picture Of The Day</h1>
                <button className="button bouncy" onClick={fetchData}>Get More!</button>
                <ul>
                    {isLoading ? (
                        <div><p>Loading...</p>
                        <img style={{width:"200px", height:"200px"}} alt="loading" src="img/loading.gif" />
                        </div>
                    ) : photos.map((photo, index) => {
                            return (
                                <li key={`${index}`}>
                                    <h3><a href={photo.url}>{photo.title}</a></h3>
                                    <div className="explanation"><p>{photo.explanation}</p></div>
                                </li>
                            )
                    })}
                </ul>
        </div>
    )
}

export default PhotoList;

// class PhotoList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             error: null,
//             isLoaded: false,
//             photos: []
//         }
//     }

//     componentDidMount() {
//         const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`;
//         fetch(url)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     console.log(result);
//                     this.setState({
//                         isLoaded: true,
//                         photos: result
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }

//     render() {
//         const { error, isLoaded, photos } = this.state;

//         if (!isLoaded) {
//            return <div>Loading...</div>
//         } else {

//             return(
//                 <ul>
//                     {photos.map((photo) => {
//                         return (
//                             <li key={`${photo.id}`}>
//                                 <p>Title: {photo.title}</p>
//                                 <p><a href={photo.url}>{photo.title}</a></p>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             )
//         }    
//     }

// }

// export default PhotoList;
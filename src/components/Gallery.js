import { useContext } from 'react'
import GalleryItem from './GalleryItem'
import { DataContext } from '../context/DataContext'

const Gallery = (props) => {
    const data = props.data.result.read()

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}
 (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {message}
            <Suspense fallback={<h1>Loading...</h1>}>
                // <Gallery data={data} />
            </Suspense>
        </div>
    )

    export default Gallery

//     return (
//         <div>
//             {display}
//         </div>
//     )
// }


import loading_spinner from '../loading_spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={`https://miro.medium.com/v2/resize:fit:882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif`} alt="loading_spinner.gif" />
        </div>
    )
}

const renderGallery = () => {
    if(data) {
        return (
            <Suspense fallback={<Spinner />}>
                <Gallery data={data} />
            </Suspense>
        )
    }
}


export default Spinner


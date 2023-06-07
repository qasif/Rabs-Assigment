const Row = ({ title, arr = [] }) => (
    <div className="row  m-0">
        <h2>{title}</h2>
        <div>
            {
                arr.map((popular, index) => (
                    <Card key={index} img={popular.poster_path} />
                ))
            }
        </div>
    </div>
)
const Card = ({ img }) => (
    <img className="video-list" src={`https://image.tmdb.org/t/p/w500${img}`} alt="" srcSet="" />
)

export default Row;
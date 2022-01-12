import spider from "../assets/img/spider.jpg"
import avengers from "../assets/img/avengers.jpg"
import superman from "../assets/img/superman.jpg"


const Carrousel = () => {
    return (  
        <article className="container mt-5">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={spider} className="d-block w-100 slider" alt="spiderman"/>
            </div>
            <div className="carousel-item">
            <img src={avengers} className="d-block w-100 slider" alt="avengers"/>
            </div>
            <div className="carousel-item">
            <img src={superman} className="d-block w-100 slider" alt="superman"/>
            </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </article>

    );
}
 
export default Carrousel;




import React from 'react';
import '../styles/FeaturedMovie.css'

// import PlayIcone from './icons/play.svg';
// import PlusIcone from './icons/plus.svg';

const FeatureMovie = () => {
    // console.log(item)

    // let firtsDate = new Date(item.first_air_date);
    // let genres = [];
    // for (let i in item.genres) {
    //     genres.push(item.genres[i].name);
    // }

    // let description = item.overview;
    // if (description.length > 200) {
    //     description = description.substring(0, 200) + '...';
    // }

    return (
      <section
        className="featured"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(Trailer.mp4)`,
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">FEATURE NAME</div>
            <div className="featured--info">
              <div className="featured--points"> pontos</div>
              <div className="featured--year">12-5-2021 </div>
              <div className="featured--seasons"> temporada 2</div>
            </div>
            <div className="featured--description">LOLOLOLOLO</div>
            <div className="featured--buttons">
              {/* <a href={`/watch/${item.id}`} className="featured--watchbutton"><img src={PlayIcone} alt="Play" /> Assistir</a> */}
              {/* <a href={`/watch/${item.id}`} className="featured--mylistbutton"><img src={PlusIcone} alt="adicionar" /> Minha Listas</a> */}
            </div>
            {/* <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div> */}
          </div>
        </div>
      </section>
    );
}
export default FeatureMovie;

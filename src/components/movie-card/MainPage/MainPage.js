import React, { Component } from 'react';
import SliderComponent from '../SliderComponent/SliderComponent';
import './videomodal.css';
import ModalVideo from 'react-modal-video'
import Slider from 'react-slick';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data : [],
      videoId: '',
    };
    this.GET_ALL_API_PATH = "http://localhost:8000/api/visuals/";
    this.openModal = this.openModal.bind(this);
  }

  openModal(id) {
    console.log("Video Id",id);
    this.setState({ videoId: id, isOpen: true }, (state) => {
      console.log("State",this.state);
    });
  }

  async getData() {
    const response = await fetch(this.GET_ALL_API_PATH);
    const json = await response.json();
    console.log("response",await json)
    this.setState({ data: await json.data.data });
  }

  componentDidMount() {
    this.getData();
  }

  shouldComponentUpdate(nextState, nextProps) {
    return nextState.visuals !== this.state.visuals || nextState.isOpen !== this.state.isOpen;
  }

  getDataByGenre(genre) {
    let arr = this.state.data.filter(e => {
      return (e.genre.filter(g => {
        return g.genre_in_english === genre
      }).length > 0);
    })


    console.log("From the filter",arr);

    return arr;
  }

  render() {
    { console.log("Render MainPage") }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

 
    {console.log(">>>",this.state.data)}
    return (
      <>
      <ModalVideo
      channel='youtube'
      isOpen={this.state.isOpen}
      videoId={this.state.videoId}
      onClose={() => this.setState({ isOpen: false })}
      />
       
      <div className="container">
        <section>
        <SliderComponent
            openModal={this.openModal}
            visuals={this.getDataByGenre("romance")}
          genre='Romance' />
        </section>

        <section>
        <SliderComponent
            openModal={this.openModal}
            visuals={this.getDataByGenre("drama")}
          genre='Drama' />
        </section>
        </div>
        </>
    );
  }
}

/*


[
        {
            "id": 2,
            "movie_title": "boom",
            "duration": "01:45:00",
            "language_id": 2,
            "movie_trailer": "https://www.youtube.com/embed/kcIr_qq15CY",
            "year": "2021",
            "imdb_rating": 5.4,
            "type_id": 3,
            "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            "slug": "hd",
            "created_at": null,
            "updated_at": null,
            "type": {
                "id": 3,
                "type_in_english": "Movie",
                "type_in_arabic": "فيلم"
            },
            "genre": [
                {
                    "id": 1,
                    "genre_in_arabic": "romance",
                    "genre_in_english": "romance",
                    "pivot": {
                        "vidsual_id": 2,
                        "genre_id": 1
                    }
                }
            ],
            "visual_description": []
        },
        {
            "id": 4,
            "movie_title": "This is  an Awsesome Movie",
            "duration": "01:45:00",
            "language_id": 2,
            "movie_trailer": "https://www.youtube.com/embed/cppPd-FBxO0",
            "year": "2019",
            "imdb_rating": 2.5,
            "type_id": 1,
            "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            "slug": "nskksjd",
            "created_at": null,
            "updated_at": null,
            "type": {
                "id": 1,
                "type_in_english": "Serie",
                "type_in_arabic": "مسلسل          "
            },
            "genre": [
                {
                    "id": 1,
                    "genre_in_arabic": "romance",
                    "genre_in_english": "romance",
                    "pivot": {
                        "vidsual_id": 4,
                        "genre_id": 1
                    }
                }
            ],
            "visual_description": []
        },
        {
          "id": 4,
          "movie_title": "drive",
          "duration": "01:45:00",
          "language_id": 2,
          "movie_trailer": "https://www.youtube.com/embed/kcIr_qq15CY",
          "year": "2019",
          "imdb_rating": 2.5,
          "type_id": 1,
          "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
          "slug": "nskksjd",
          "created_at": null,
          "updated_at": null,
          "type": {
              "id": 1,
              "type_in_english": "Serie",
              "type_in_arabic": "مسلسل          "
          },
          "genre": [
              {
                  "id": 1,
                  "genre_in_arabic": "drama",
                  "genre_in_english": "drama",
                  "pivot": {
                      "vidsual_id": 4,
                      "genre_id": 1
                  }
              }
          ],
          "visual_description": []
      },
      {
          "id": 4,
          "movie_title": "This is  an Awsesome Movie",
          "duration": "01:45:00",
          "language_id": 2,
          "movie_trailer": "https://www.youtube.com/embed/cppPd-FBxO0",
          "year": "2019",
          "imdb_rating": 2.5,
          "type_id": 1,
          "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
          "slug": "nskksjd",
          "created_at": null,
          "updated_at": null,
          "type": {
              "id": 1,
              "type_in_english": "Serie",
              "type_in_arabic": "مسلسل          "
          },
          "genre": [
              {
                  "id": 1,
                  "genre_in_arabic": "romance",
                  "genre_in_english": "romance",
                  "pivot": {
                      "vidsual_id": 4,
                      "genre_id": 1
                  }
              }
          ],
          "visual_description": []
      },
      {
        "id": 4,
        "movie_title": "drive",
        "duration": "01:45:00",
        "language_id": 2,
        "movie_trailer": "https://www.youtube.com/embed/kcIr_qq15CY",
        "year": "2019",
        "imdb_rating": 2.5,
        "type_id": 1,
        "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
        "slug": "nskksjd",
        "created_at": null,
        "updated_at": null,
        "type": {
            "id": 1,
            "type_in_english": "Serie",
            "type_in_arabic": "مسلسل          "
        },
        "genre": [
            {
                "id": 1,
                "genre_in_arabic": "drama",
                "genre_in_english": "drama",
                "pivot": {
                    "vidsual_id": 4,
                    "genre_id": 1
                }
            }
        ],
        "visual_description": []
    },
    {
        "id": 4,
        "movie_title": "This is  an Awsesome Movie",
        "duration": "01:45:00",
        "language_id": 2,
        "movie_trailer": "https://www.youtube.com/embed/cppPd-FBxO0",
        "year": "2019",
        "imdb_rating": 2.5,
        "type_id": 1,
        "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
        "slug": "nskksjd",
        "created_at": null,
        "updated_at": null,
        "type": {
            "id": 1,
            "type_in_english": "Serie",
            "type_in_arabic": "مسلسل          "
        },
        "genre": [
            {
                "id": 1,
                "genre_in_arabic": "romance",
                "genre_in_english": "romance",
                "pivot": {
                    "vidsual_id": 4,
                    "genre_id": 1
                }
            }
        ],
        "visual_description": []
    },
    {
      "id": 4,
      "movie_title": "drive",
      "duration": "01:45:00",
      "language_id": 2,
      "movie_trailer": "https://www.youtube.com/embed/kcIr_qq15CY",
      "year": "2019",
      "imdb_rating": 2.5,
      "type_id": 1,
      "poster_image_link": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
      "slug": "nskksjd",
      "created_at": null,
      "updated_at": null,
      "type": {
          "id": 1,
          "type_in_english": "Serie",
          "type_in_arabic": "مسلسل          "
      },
      "genre": [
          {
              "id": 1,
              "genre_in_arabic": "drama",
              "genre_in_english": "drama",
              "pivot": {
                  "vidsual_id": 4,
                  "genre_id": 1
              }
          }
      ],
      "visual_description": []
  }*/
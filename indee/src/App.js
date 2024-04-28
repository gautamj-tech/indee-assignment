import './App.css';
import Carousel from './Components/Carousel';
import Content from './Components/Content';

function App() {
  const carouselImages = [
    'images/carousel1.jpeg',
    'images/carousel2.jpeg',
  ];

  const contentCollection = [ 
    {
      title: "Trending",
      collection: [
        {
          title: "Interstellar",
          image: "images/poster.jpeg"
        },
        {
          title: "Inception",
          image: "images/poster2.jpeg"
        },
        {
          title: "The Dark Knight",
          image: "images/poster3.jpeg"
        },
        {
          title: "Interstellar",
          image: "images/poster4.jpeg"
        }
      ]
    },
    {
      title: "Action",
      collection: [
        {
          title: "Mad Max",
          image: "images/poster5.jpeg"
        },
        {
          title: "John Wick",
          image: "images/poster6.jpeg"
        },
        {
          title: "Avengers",
          image: "images/poster.jpeg"
        },
        {
          title: "Die Hard",
          image: "images/poster2.jpeg"
        }
      ]
    },
    {
      title: "Drama",
      collection: [
        {
          title: "Redemption",
          image: "images/poster5.jpeg"
        },
        {
          title: "Forrest Gump",
          image: "images/poster6.jpeg"
        },
        {
          title: "Godfather",
          image: "images/poster3.jpeg"
        },
        {
          title: "Schindler's List",
          image: "images/poster2.jpeg"
        }
      ]
    }
  ];
  

  return (
    <div className="App">
      <Carousel images={carouselImages} />
      {contentCollection.map((content, index) => (
        <Content key={index} title={content.title} posters={content.collection} />
      ))}
    </div>
  );
}

export default App;

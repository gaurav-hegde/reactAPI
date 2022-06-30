import React, {useState, useEffect} from 'react';
import Card from './components/Card';

function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await response.json();
      // console.log(data.hits);
      setImages(data.results);
    }

    // async function fetchData() {
    //   const response = await fetch('https://pixabay.com/api/?key=28363575-713b76ee45fc363d67cc5814d&q=nature&image_type=photo&pretty=true');
    //   const data = await response.json();
    //   // console.log(data.hits);
    //   setImages(data.hits);
    // }

    fetchData();

    // fetch(`https://pixabay.com/api/?key=28363575-713b76ee45fc363d67cc5814d&image_type=photo&pretty=true`)
    // .then((res) => res.json())
    // .then((data) => setImages(data.hits))
    // .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <main className='mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-10'>
        {images.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </main>
    </div>
  );
}

export default App;
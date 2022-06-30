import React from "react";

function Card(image) {
  return (
    <div className="w-full bg-orange-200 rounded-md">

        <a href={image.url}>
            <img src={image.image} alt={image.name} className="w-full h-auto" />
            <p className="m-4 mr-5 text-lg">Name: {image.name}</p>
            <p className="m-4 mr-5 text-lg">Status: {image.status}</p>
        </a>

        {/* <a href={image.webformatURL}>
            <img src={image.webformatURL} alt={image.tags} className="w-full h-auto" />
            <p className="m-4 mr-5 text-lg">Image by: {image.user}</p>
        </a> */}
    </div>
    );
}

export default Card
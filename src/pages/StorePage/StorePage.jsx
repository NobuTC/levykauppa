import React, { useState } from "react";

const AlbumForm = () => {
  const [albumData, setAlbumData] = useState({
    title: "",
    price: 0,
    category: "",
    image_url: "",
    release_date: "",
    info: "",
    artist_name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlbumData({
      ...albumData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the data to the backend using a fetch or axios request
    fetch("/api/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(albumData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Data was successfully sent to the backend
          console.log("Album CD added successfully!");
        } else {
          // Handle errors appropriately
          console.log("Error adding album CD");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Add Album CD</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titteli:</label>
          <input
            type="text"
            name="title"
            value={albumData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Hinta:</label>
          <input
            type="number"
            name="price"
            value={albumData.price}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Kategoria:</label>
          <input
            type="text"
            name="category"
            value={albumData.category}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Kuva:</label>
          <input
            type="text"
            name="image_url"
            value={albumData.image_url}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Julkaisupäivä:</label>
          <input
            type="date"
            name="release_date"
            value={albumData.release_date}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Info:</label>
          <input
            type="text"
            name="info"
            value={albumData.info}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Artistin nimi:</label>
          <input
            type="text"
            name="artist_name"
            value={albumData.artist_name}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Add Album</button>
      </form>
    </div>
  );
};

export default AlbumForm;

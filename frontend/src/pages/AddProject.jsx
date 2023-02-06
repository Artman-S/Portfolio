import React, { useState, useRef } from "react";
import axios from "axios";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer/Footer";

import "./style/AddProject.css";

function AddProject() {
  const [cards, setCards] = useState([{ id: 1, image: null }]);

  // add a new card form for new project
  const handleAddCard = () => {
    const newCard = { id: cards.length + 1, image: null };
    setCards([...cards, newCard]);
  };

  // Delete a card form for new project
  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const [project, setProject] = useState({});
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const imageRef = useRef();

  const handleImage = (e) => {
    e.preventDefault();
    setImage(imageRef.current.files[0]);
    // tu dois récuperer l'image.
    // setImage & imageRef
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();

    fd.append("image", image);
    fd.append("datas", JSON.stringify(project));

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/project`, fd)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Nav />
      <div>
        {cards.map((card) => (
          <div className="ContainerFormVehicle" key={card.id}>
            {card.content}
            <form
              className="LabelVehicle"
              htmlFor="Card"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <h1>Add a new project</h1>
              Title:{" "}
              <input
                name="title"
                placeholder="title..."
                type="text"
                onChange={handleChange}
                required
              />
              Description:{" "}
              <textarea
                name="description"
                placeholder="description..."
                type="text"
                rows="5"
                cols="40"
                onChange={handleChange}
                required
              />
              Link Project:{" "}
              <input
                name="link_project"
                placeholder="Link Project..."
                type="text"
                onChange={handleChange}
                required
              />
              Link Github:{" "}
              <input
                name="link_github"
                placeholder="Link Github..."
                type="text"
                onChange={handleChange}
                required
              />
              Picture:{" "}
              <input
                type="file"
                name="image"
                id="image"
                ref={imageRef}
                onChange={handleImage}
                required
              />
              <fieldset>
                <legend> Status: </legend>
                <label>
                  <input
                    id="ongoing"
                    type="radio"
                    name="ongoing-complete"
                    value="ongoing"
                    onChange={handleChange}
                  />{" "}
                  ongoing
                </label>
                <label>
                  <input
                    id="complete"
                    type="radio"
                    name="ongoing-complete"
                    value="complete"
                    onChange={handleChange}
                  />{" "}
                  complete
                </label>
              </fieldset>
            </form>
            <div className="ButtonForm">
              <button
                type="submit"
                className="SubmitButton"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
              <button
                type="button"
                className="DeleteButton"
                onClick={() => handleDeleteCard(card.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="ButtonAdd">
          <button
            type="button"
            className="AddNewVehicle"
            onClick={handleAddCard}
          >
            Add New Project
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddProject;

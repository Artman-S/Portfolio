import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import instance from "../../helpers/axios";

import "./Admin.css";

function Admin() {
  const [cards, setCards] = useState([{ id: 1, image: null }]);
  //   const notify = () => {
  //     toast.dark(" cars created ! ✅ ");
  //   };

  const handleAddCard = () => {
    const newCard = { id: cards.length + 1, image: null };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const [cars, setCars] = useState("");

  const handleChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // instance
    //   .post("/cars", cars)
    //   .then((res) => console.warn(res.data, notify()))
    //   .catch((err) =>
    //     console.error(err, toast.error("Wrong informations ! ❌"))
    //   );
  };
  return (
    <div>
      {/* <ToastContainer
        theme="dark"
        autoClose={2000}
        position="bottom-center"
        className="toast-container"
        toastClassName="dark-toast"
      /> */}
      {cards.map((card) => (
        <div className="ContainerFormVehicle" key={card.id}>
          {card.content}
          <form className="LabelVehicle" htmlFor="Card" onSubmit={handleSubmit}>
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
              name="Link Project"
              placeholder="Link Project..."
              type="text"
              onChange={handleChange}
              required
            />
            Link Github:{" "}
            <input
              name="Link Github"
              placeholder="Link Github..."
              type="text"
              onChange={handleChange}
              required
            />
            Picture:{" "}
            <input
              name="img"
              type="url"
              placeholder="URL..."
              onChange={handleChange}
              required
            />
            Status:{" "}
            <fieldset>
              <input
                name="status"
                type="radio"
                value="0"
                onChange={handleChange}
              />
              <label htmlFor="type">En cours</label>
              <input
                name="En cours"
                type="radio"
                value="1"
                onChange={handleChange}
              />
              <label htmlFor="type">Terminé</label>
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
        <button type="button" className="AddNewVehicle" onClick={handleAddCard}>
          Add New Vehicle
        </button>
      </div>
    </div>
  );
}

export default Admin;

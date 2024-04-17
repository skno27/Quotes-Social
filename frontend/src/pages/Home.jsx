import { userState, useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [quotes, setQuotes] = useState([]);
  const [color, setColor] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    // get all the users notes
    api
      .get("/api/quotes/")
      .then((res) => res.data)
      .then((data) => {
        setQuotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteQuote = (id) => {
    api
      .delete(`/api/quotes/delete/${id}/`)
      .then((res) => {
        if (res.status === "204") alert("Quote deleted");
        else alert("Failed to delete quote.");
      })
      .catch((error) => alert(error));
    getQuotes();
  };

  const createQuote = (e) => {
    e.preventDefault();
    api
      .post("/api/quotes/", { color, body, author, date })
      .then((res) => {
        if (res.status === 201) alert("Quote created");
        else alert("Failed to make the Quote.");
      })
      .catch((err) => alert(err));
    getQuotes();
  };

  return (
    <div>
      <div>
        <h2>Quotes</h2>
      </div>
      <h2>Create a Quote</h2>
      <form onSubmit={createQuote}>
        <label htmlFor="title">Color:</label>
        <br />
        <input
          type="text"
          id="color"
          name="color"
          required
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />

        <label htmlFor="body">Body:</label>
        <br />
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>

        <label htmlFor="author">Author:</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          required
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <br />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date || ""}
          optional
          onChange={(e) => setDate(e.target.value)}
        />

        <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Home;

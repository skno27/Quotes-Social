import { useState, useEffect } from "react";
import api from "../api";
import Quote from '../components/Quote'
import '../styles/Home.css'

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

    // get all the users Quotes
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
    console.log(id) 

    api
      .delete(`/api/quotes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Quote deleted");
        else alert("Failed to delete quote.");
        getQuotes();
      })
      .catch((error) => alert(error));
  };

  const createQuote = (e) => {
    e.preventDefault();
    api
      .post("/api/quotes/", { color, body, author, date })
      .then((res) => {
        if (res.status === 201) {
          // Reset input fields after successful submission
        setColor("");
        setBody("");
        setAuthor("");
        setDate("");
        alert("Quote created");
      } 
        

        else alert("Failed to make the Quote.");
        getQuotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Quotes</h2>
        {quotes.map((quote) => (
          <Quote quote={quote} onDelete={deleteQuote} key={quote.id} />
        ))}
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

        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
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

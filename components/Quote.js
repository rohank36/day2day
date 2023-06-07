import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].text);
        if (data[randomIndex].author === null) {
          setAuthor("Unknown");
        } else {
          setAuthor(data[randomIndex].author);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{quote}</h1>
      <h2>- {author}</h2>
    </div>
  );
};

export default Quote;

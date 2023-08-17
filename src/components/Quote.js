import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchNewQuote = () => {
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
  };

  useEffect(fetchNewQuote, []);

  return (
    <button
      onClick={fetchNewQuote}
      className="transition-all duration-500 ease-in-out transform motion-safe:hover:scale-110 group block w-100 h-80 mx-auto mt-8 ml-auto rounded-lg p-16 bg-white ring-1 ring-slate-900/5 shadow-2xl hover:shadow-sky-500 hover:bg-sky-500 hover:ring-sky-500 overflow-auto"
    >
      <div className="space-y-6">
        <h1 className="text-slate-900 group-hover:text-white text-2xl font-semibold">
          {quote}
        </h1>
        <h2 className="text-slate-500 group-hover:text-white text-xl">
          - {author}
        </h2>
      </div>
    </button>
  );
};

export default Quote;

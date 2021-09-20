import { useState } from "react";
import "./styles.css";
//database
var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit"
};
//converting object to array using object.keys
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  //state
  const [meaning, setMeaning] = useState("");

  //processing
  //function1 will handle the typed emoji interpretation
  function inputChangeHandler(event) {
    var meaning = emojiDictionary[event.target.value]; //accessing dictionary by using key
    if (event.target.value === "") {
      meaning = "";
    }
    if (meaning === undefined) {
      meaning = "emoji not avialable in database";
    }

    setMeaning(meaning); //react call to show output
  }
  //function2 will handle selected emoji
  function emojiChangeHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show output
  }

  //rendering
  return (
    <div className="App">
      <h1>fruit emoji interpreter</h1>
      {/* input box with change handler i.e function1 */}
      <input
        placeholder="place your emoji here"
        style={{ padding: "1rem", width: "80%" }}
        onChange={inputChangeHandler}
      />
      <div>
        {/* actual output set by react using useState */}
        <h2>{meaning}</h2>
      </div>
      {/* presenting list of avialable database which is array originally converted from object  */}
      <h3>emojis we know</h3>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "0.3rem",
          padding: "0.5rem",
          width: "50%",
          margin: "auto",
          backgroundColor: "#c1ffd7"
        }}
      >
        {/* map function same as for loop */}
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              //clickHandler which will get the value of selected emoji
              onClick={() => emojiChangeHandler(emoji)}
              style={{
                padding: "0.1rem",
                cursor: "pointer",
                margin: "1.5rem 1rem 1rem 1rem"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

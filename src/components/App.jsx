import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function createEntry(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}

      {/* <Entry
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
      />
      <Entry
        emoji={emojipedia[1].emoji}
        name={emojipedia[1].name}
        meaning={emojipedia[1].meaning}
      />
      <Entry
        emoji={emojipedia[2].emoji}
        name={emojipedia[2].name}
        meaning={emojipedia[2].meaning}
     />*/}
    </div>
  );
}

export default App;

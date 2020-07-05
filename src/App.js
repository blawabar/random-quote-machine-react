import React from "react";

import { QuoteHolder, Footer } from "components";
import { QuoteProvider } from "data/context";

function App() {
  return (
    <div className="App">
      <QuoteProvider>
        <QuoteHolder />
      </QuoteProvider>
      <Footer />
    </div>
  );
}

export default App;

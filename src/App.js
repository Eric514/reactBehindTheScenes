import React from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {

  const [showParagraph, setShowParagraph] = React.useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); //va chercher la valeur précédente de showParagraph pour la changer en son contraire
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      {/* <Button onClick={() => setShowParagraph(!showParagraph)}>Toggle Paragraph!</Button> */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

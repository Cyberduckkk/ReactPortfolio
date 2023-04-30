import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function App() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={30}
      outerSize={50}
      color='216, 63, 216'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'i',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}
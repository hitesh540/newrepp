import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';
import { Test } from './Test';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button style={{ marginLeft: "700px" }} onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
      
//         <h1>hello</h1>

//     </div>
//   );
// }

// export default App;



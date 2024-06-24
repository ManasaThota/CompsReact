import { useState } from "react";
import DropDown from "./components/DropDown"
const App = () => {
   const [selection, setSelection] = useState(null);

   const handleSelect = (option) =>{
      setSelection(option);
   }
   const options = [
      {label: 'Red', value:'red'},
      {label: 'Green', value:'green'},
      {label: 'Blue', value:'blue'}
   ];
   return <DropDown options={options} value={selection} onChange={handleSelect}/>
 }

export default App
import  React  from "react";
import  ReactDOM  from "react-dom/client";

// Your React code can go here
const heading = <h1>hello jsx</h1>;

//React Componets 

//Class Based Componets


//Functional Componets
const TitleComponent = () => <h1>This is title</h1>

const HeadingComponet = ({name}) => (
    <div id="container">
         {/* componet composition */}
        <TitleComponent/>
  <h1>Hello {name} from Heading functional componet</h1>

    </div>)
   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet name="Suraj" />);

import { Card, CardContent } from "@mui/material";
import "./App.css";
import Items from "./components/items";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Card
          sx={{
            mt: "100px",
          }}
        >
          <CardContent>
            <Items></Items>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;

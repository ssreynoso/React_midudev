import React from "react";
import GifList from "../Components/GifList";
import { Link, Route } from "wouter";
import "./App.css";

function App() {

    const [ searchValue, setSearchValue ] = React.useState("");

    const search_value = function(event) {
        setSearchValue(event.target.value.toString());
    }

    return (
        <div className="App">
            <section className="App-content">
                <h1>Busca un gif</h1>
                <input
                    placeholder = "Busque un gif"
                    value       = { searchValue }
                    onChange    = { search_value }
                    maxLength   = { 30 }
                />
                <Link to={`/gif/${searchValue}`}>Buscar</Link>
                <Route 
                    path      = "/gif/:keyword"
                    component = {GifList}
                />
            </section>
        </div>
    );
}

export default App;

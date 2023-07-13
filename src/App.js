import { useEffect, useState, useRef, Suspense } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/HomePage.js";
import ArtistView from "./components/ArtistView";
import AlbumView from "./components/AlbumView";
import NavBar from "./components/NavBar";
import { createResource as fetchData } from "./Helper";
// import { useEffect, useState, Suspense } from 'react'

const App = () => {
  let [searchTerm, setSearchTerm] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);
  let searchInput = useRef("");

  const API_URL = "https://itunes.apple.com/search?term=";

  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      console.log('RAW DATA FORM RESPONSE API', resData)
      if (resData.results.length > 0) {
        return setData(resData.results);
      } else {
        return setMessage("Not Found.");
      }
    };
    //fetchData();
  };

  // useEffect(() => {
  //   if (searchTerm) {
  //     setData(fetchData(searchTerm));
  //   }
  // }, [searchTerm]);
  console.log('data!!!! api', data)

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense>
          {" "}
          fallback={<h1>Loading...</h1>}
          <Gallery data={data} />
        </Suspense>
      );
    }
  };
  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {/*renderGallery()*/}
    </div>
  );

  // console.log("DATA FROM API!!! app.js", data);
  // return (
  //   <div className="App">
  //     <SearchContext.Provider
  //       value={{ term: searchInput, handleSearch: handleSearch }}
  //     >
  //       <DataContext.Provider value={data}>
  //         <Router>
  //           <Routes>
  //             <Route path="/" element={<HomePage />} />
  //             <Route path="/artist/:id" element={<ArtistView />} />
  //             <Route path="/album/:id" element={<AlbumView />} />
  //           </Routes>
  //         </Router>
  //       </DataContext.Provider>
  //     </SearchContext.Provider>
  //   </div>
  // );
};

export default App;

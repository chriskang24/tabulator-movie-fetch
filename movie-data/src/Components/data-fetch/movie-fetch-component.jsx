import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-tabulator/lib/styles.css';
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";

import { ReactTabulator } from 'react-tabulator'

const MovieFetch = () => {
  const [results, setResults] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

    axios.get(apiUrl)
      .then(response => {
        const nowPlayingResults = response.data.results;
        setResults(nowPlayingResults);
      })
  }, [])

  const columns = [
    {title:"Title", field:"title", width:400, responsive:0},
    {title:"Average Vote", field:"vote_average", align:"right", sorter:"number", width:150},
    {title:"Total Votes", field:"vote_count", align:"right", sorter:"number", width:150},
    {title:"Popularity", field:"popularity", align:"right", sorter:"number", width:150},
    {title:"Release Date", field:"release_date", align:"center", sorter:"alphanum", width:150},
    {title:"Overview", field:"overview", align:"center", sorter:"alphanum", width:1000},
  ];

//   var table = new Tabulator("#example-table", {
//     height:"311px",
//     responsiveLayout:"hide",
//     columns:[
//     {title:"title", field:"title", width:200, responsive:0}, //never hide this column
//     {title:"vote_average", field:"vote_average", align:"right", sorter:"number", width:150},
//     {title:"vote_count", field:"vote_count", align:"right", sorter:"number", width:150},
//     {title:"popularity", field:"popularity", align:"right", sorter:"number", width:150},
//     {title:"release_date", field:"release_date", align:"center", sorter:"date", width:150},
//     ],
// });

  return (
    <div>
      <h3>Movies Now Playing:</h3>
      <ReactTabulator
        data={results}
        columns={columns}
        tooltips={true}
        layout={"fitData"}
        />
 
        </div>

  )
}

export default MovieFetch;

// ==== 

// const MovieFetch = () => {

//   const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=0087721e0614d347b2a9d2b274fcbbfc&language=en-US&page=1`


//   const data = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       console.log(response.data.results)
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   data();

//   console.log('out', data)
//   // axios.get(apiUrl)
//   //   .then(response => {
//   //     console.log(response.data.results)
//   //     data = response.data.results
//   //     console.log('data in here', data)
//   //   })

//   // console.log('data here', data)
//   return (
//     <div>
//       Hello
//     </div>
//   )
// }

// export default MovieFetch;
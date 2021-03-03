// // import './App.css';
// import Hero from './components/home/hero-section/hero';
// import Home from './components/home/home';
// import MovieDetail from "./components/movie-details/MovieDetail";
//
// function App() {
//   return (
//     <div className="App">
//       <Home/>
//       <MovieDetail/>
//     </div>
//   );
// }
//
// export default App;

const App = (props) => props.children;
export default App;
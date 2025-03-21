import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";


const OpenGraph = () => {
  const { param } = useParams();
  
  return(
    <>
      <meta property="og:title" content={"OpenGraph "+param} />
      <meta property="og:description" content="OpenGraph Description" />
      <meta property="og:image" content="https://i0.wp.com/reformcreative.co.uk/wp-content/uploads/camera-lens.jpeg?fit=800%2C400&ssl=1" />
      <meta property="og:url" content="msaiaswin.github.io/github-pages-test/" />
      <meta property="og:type" content="website" />
      <h2>{param}</h2>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:param" element={<OpenGraph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

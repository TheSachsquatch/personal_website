
import './App.css';
import LinkCarousel from './LinkCarousel.js';

function App() {
  return (
    <div id = "Page">
      <h1 className="Title" box-sizing= "border-box">
        Hi, I'm Sachin.
      </h1>
      <h2 className= "intro">
        This is my website.  There's not much to it. I'm a freshman at the University of Michigan, studying CS.
      </h2>
      <h2 className = "Title" id = "link_title">
        Here are some cool links.
      </h2>
      <div id= "carousel-holder">
        <>
          <LinkCarousel/>
        </>
      </div>
    </div>
  );
}

export default App;

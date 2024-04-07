import "./App.css";
import FlowerCard from "./flowerCard.jsx";

// Images
import rightimg from "./assets/rightimg.png";
import avatarImg from "./assets/avatarimg.png";
import star from "./assets/star.png";
import freestar from "./assets/freestar.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import snapchat from "./assets/snapchat.png";
import twitter from "./assets/twitter.png";
import stack from "./assets/stack.png";
import Insta from "./assets/Insta.png";
import drib from "./assets/drib.png";
import behance from "./assets/behance.png";

// Feature Icons
import graphic from "./assets/graphic.png";
import marketing from "./assets/marketing.png";
import portfolio from "./assets/portfolio.png";
import search from "./assets/search.png";
import seo from "./assets/seo.png";
import social from "./assets/social.png";
import talent from "./assets/talent.png";
import ui from "./assets/ui.png";
import ux from "./assets/ux.png";
import writing from "./assets/writing.png";
import greenStar from "./assets/greenStar.png";

const App = () => {
  return (
    <div className="container">
      <div className="bgIcons">
        <img className="mainImg" src={rightimg} alt="" />
        <img className="star1" src={star} alt="" />
        <img className="star2" src={star} alt="" />
        <img className="star3" src={star} alt="" />
        <img className="star4" src={star} alt="" />
        <img className="freestar1" src={freestar} alt="" />
        <img className="freestar2" src={freestar} alt="" />
        <img className="freestar3" src={freestar} alt="" />
        <img className="freestar4" src={freestar} alt="" />
        <img className="freestar5" src={freestar} alt="" />
        <img className="avatarImg" src={avatarImg} alt="" />
        <img className="facebook" src={facebook} alt="" />
        <img className="instagram" src={instagram} alt="" />
        <img className="snapchat" src={snapchat} alt="" />
        <img className="twitter" src={twitter} alt="" />
        <img className="stack" src={stack} alt="" />
        <img className="drib" src={drib} alt="" />
        <img className="Insta" src={Insta} alt="" />
        <img className="behance" src={behance} alt="" />
      </div>
      <div className="navBox genNav">
        <div className="navBar">
          <div className="leftNav genNav">
            <div className="logoBox genNav">
              <div className="logo genNav">M</div>
              <p className="logoName">Murad</p>
            </div>
            <div className="navHome genNav">
              <p className="home">Home</p>
              <p className="Features">Features</p>
            </div>
          </div>
          <div className="rightNav genNav">
            <div className="genNav">
              <p className="Login">Login</p>
            </div>
            <div className="AccountBox genNav">
              <p className="createAcc">Create Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="heroBox">
        <p className="hiringSmart">Hiring Smarter With Better</p>
        <h1 className="reviews">Reviews</h1>
        <p className="heroDescription">
          It’s free and easy to use online review platform.
        </p>
        <div className="buttonBox">
          <div className="AccountBox genNav">
            <p className="createAcc">Create Account</p>
          </div>
          <p className="learnMore">Learn More</p>
        </div>
      </div>
      <div className="statistics genNav">
        <h1 className="genTitle">Check This Before Hiring Anyone</h1>
        <div className="mainStatsBox">
          <div className="statsBox genNav">
            <p className="statsInNumbers">150K+</p>
            <p className="statsTitle">Freelance Worker</p>
          </div>
          <div className="statsBox genNav">
            <p className="statsInNumbers">7K+</p>
            <p className="statsTitle">Professional Clients</p>
          </div>
          <div className="statsBox genNav">
            <p className="statsInNumbers">8K+</p>
            <p className="statsTitle">Engineering Expart</p>
          </div>
          <div className="statsBox genNav">
            <p className="statsInNumbers">2K+</p>
            <p className="statsTitle">Top Companies</p>
          </div>
        </div>
      </div>
      <div className="ourFeaturesBox">
        <div className="ourFeatures">
          <div className="column1">
            <h1 className="findTalent genTitle">Our Features To Find Talent</h1>
            <div className="trybutton genNav">
              <p className="tryforFree">Try For Free</p>
            </div>
            <FlowerCard
              img={greenStar}
              title="Collected Review"
              description="Impress your boss with a professional in UI design."
            />
            <FlowerCard
              img={search}
              title="Find Out Project"
              description="Impress your boss with a professional in UI design."
            />
          </div>
          <div className="column2">
            <FlowerCard
              img={search}
              title="Find Out Project"
              description="Impress your boss with a professional in UI design."
            />
            <FlowerCard
              img={search}
              title="Find Out Project"
              description="Impress your boss with a professional in UI design."
            />
            <FlowerCard
              img={search}
              title="Find Out Project"
              description="Impress your boss with a professional in UI design."
            />
          </div>
        </div>
      </div>
      <div className="marketplace genNav">
        <h1 className="genTitle">Explore The Marketplace</h1>
        <p >
          Find the perfect freelance services for your business · Popular
          professional services ·
        </p>
      </div>
    </div>
  );
};

export default App;

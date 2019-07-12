import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  constructor() {
    super();
    state: {
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="divide">
          <div className="childAlt">
            <div className="infoCrypto">
              D A N I E L : D E C O D E D
              <br />
              <br />
              {/* <img
                src="augmentedClip.png"
                height="250px"
                width="auto"
                position="relative"
              /> */}
              <br />
            </div>
            <div className="rightInnerChild">
              <img
                src="croppedMe.jpg"
                height="250px"
                width="auto"
                position="relative"
              />
            </div>
            <div className="leftInnerChild" id="rightAdj">
              <h2>~About~</h2>
              <hr />
              <p>
                <a href="https://github.com/dlanoff" />
                <br />
                Salutations, I'm Daniel. I'm a software engineer all about
                exploring new cutting edge technologies such as augmented
                reality, machine learning and cryptocurrencies. <br />
                <br />
                I'm well versed in the following programming
                languages/technologies: <br />
                <br />• Proficient: JavaScript, Node.js, Express, Sequelize,
                React, Redux, HTML, CSS, Git/hub, PostgreSQL <br />
                <br /> •Knowledgeable: Python, React-Native, Mocha, Chai,
                Jasmine, SQL, Redis, Socket.io, OAuth, Visual Basic, Matlab
                <br />
                <br />
                <div className="stackAlt">
                  <u>Contact:</u> <br />
                  <br />
                  Location NY,NY 11211
                  <br />
                  Phone: 917-232-2977 <br />
                  EMAIL: daniellanoff@gmail.com <br />
                </div>
                <br />I am currently available for fulltime back end and full
                stack positions.
              </p>
              <p>
                <hr />
              </p>
            </div>
          </div>
          <div className="child">
            <div className="infoCrypto">
              Cryptocurrency
              <br />
              <br />
              <img
                src="cryptoClip.png"
                height="100px"
                width="auto"
                id="crypto"
                position="absolute"
              />
            </div>
            <div className="leftInnerChild">
              <h2>CryptoMatrix</h2>
              <hr align="left" width="60%" />
              <p>
                <a href="https://cryptomatrix.herokuapp.com/">
                  https://cryptomatrix.herokuapp.com/
                </a>
                <br />
                <br />
                •Sole-Developer
                <br />
                <br />• RealTime Data Platform for cryptocurrency price action.
                <br />
                <br />
                •Pair monitoring across multiple exchanges in tabular and
                graphical format
              </p>
              <p>
                Built using: <br />
                <hr align="left" width="70%" />
                <br />
                <div className="stack">
                  React
                  <br /> Redux
                  <br /> ECharts
                  <br /> PostgreSQL
                </div>
              </p>
            </div>
            <div className="rightInnerChild">
              <img id="cryptoFlag" src="crypto.png" width="500" height="auto" />
            </div>
          </div>

          {/* ************************ */}
          {/* AUGMENTED REALITY */}

          <div className="childAlt">
            <div className="infoCrypto">
              Augmented Reality
              <br />
              <br />
              <img
                src="augmentedClip.png"
                height="250px"
                width="auto"
                position="relative"
              />
            </div>
            <div className="leftInnerChild">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iLDaRyiGrh8?start=94"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div id="test1" className="rightInnerChild">
              <h2>ExplorAR</h2>
              <hr />
              <p>
                <a href="https://github.com/explorAR-group/ExplorAR">
                  https://github.com/explorAR-group/ExplorAR
                </a>
                <br />
                <br />
                •Augmented reality mobile app that allows urban explorers to to
                take a virtual tour and learn more about their surroundings
                through data visualizations.
                <br />
                <br />
                •Presents real time and historical information about attractions
                and businesses near-by.
                <br /> <br />• Group project built in an agile environment.
              </p>
              <p>
                Built using: <br />
                <hr />
                <br />
                <div className="stack">
                  React Native
                  <br /> ARKit
                  <br /> Express
                  <br /> PostgreSQL
                </div>
              </p>
            </div>
          </div>

          {/* ****************** */}
          {/* MACHINE LEARNING */}

          <div className="child">
            \
            <div className="infoCrypto">
              Machine Learning
              <br />
              <br />
              <img
                src="machineLearnClip.png"
                height="200px"
                width="auto"
                position="absolute"
              />
            </div>
            <div className="leftInnerChild">
              <h2>
                Tensor, Paper, <br />
                Scissors{" "}
              </h2>
              <hr align="left" width="70%" />
              <a href="https://github.com/thetensorgroup/tensorpaperscissors">
                https://github.com/thetensorgroup/tensorpaperscissors
              </a>
              <br />
              <br />• Play Rock Paper Scissors against an intelligent
              machine-learning computer with this <br />
              learning/teaching tool built with Google’s tensorflow.js library.
              <br />
              <br />
              •Detects patterns and adapts to gameplay
              <br />
              <br />
              Built using
              <br />
              <hr align="left" width="60%" />
              <p>
                <div className="stack">
                  Tensorflow.js
                  <br /> React
                  <br /> Redux
                  <br /> D3.js
                </div>
              </p>
            </div>
            <div className="rightInnerChild">
              <img id="cryptoFlag" src="rock.png" width="500" height="auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

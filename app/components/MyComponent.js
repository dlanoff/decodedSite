import React, { Component } from "react";
import { connect } from "react-redux";

class MyComponent extends Component {
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
              <hr align="left" width="80%" />
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
                Built using <br />
                <hr />
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
              <img src="crypto.png" width="500" height="auto" />
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
            <div className="rightInnerChild">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iLDaRyiGrh8?start=94"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="leftInnerChild">
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
              <h2>Tensor, Paper, Scissors </h2>
              <hr />
              <a href="https://github.com/thetensorgroup/tensorpaperscissors">
                https://github.com/thetensorgroup/tensorpaperscissors
              </a>
              <br />
              <br />• Play Rock Paper Scissors against an intelligent
              machine-learning computer with this learning/teaching tool built
              with Google’s tensorflow.js library.
              <br />
              <br />
              •Detects patterns and adapts to gameplay
              <br />
              <br />
              Built using
              <br />
              <hr />
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
              <img src="rock.png" width="500" height="auto" />
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
)(MyComponent);

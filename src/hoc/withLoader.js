// import React from "react";
import Spinner from "../UI/spinner/Spinner";
// export const withLoader = (WrappedComponent) => {
//   return class LoaderHOC extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         isLoading: false,
//       };
//     }

//     setLoading = (isLoading) => {
//       console.log("ssetloading called");
//       this.setState({ isLoading }, () => {
//         setTimeout(() => {
//           console.log("in callback");
//           this.setState({ isLoading: false });
//         }, 1000);
//       });
//     };

//     render() {
//       return (
//         <div>
//           {this.state.isLoading ? <Spinner /> : null}
//           <WrappedComponent setLoading={this.setLoading} />
//         </div>
//       );
//     }
//   };
// };

import React, { useState } from "react";
import PropTypes from "prop-types";

export const withLoader = (WrappedComponent) => {
  const HocComponent = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <WrappedComponent setLoading={setIsLoading} {...props} />
        )}
      </div>
    );
  };

  HocComponent.propTypes = {};

  return HocComponent;
};

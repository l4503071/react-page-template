
import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>something is wrong.</h1>;
    }
    const { children } = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};

function withErrorBoundary(WrappedComponent, errorBoundaryOptions) {
  const WrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "unknown";
  const Wrapped = (props) => {
    return (
      <ErrorBoundary {...errorBoundaryOptions}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
  
  
  Wrapped.displayName = `errorBoundary_${WrappedComponentName}`;
  return Wrapped;
}

export {
  ErrorBoundary
};

export default withErrorBoundary;
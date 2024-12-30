import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught in ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Щось пішло не так. Спробуйте пізніше.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

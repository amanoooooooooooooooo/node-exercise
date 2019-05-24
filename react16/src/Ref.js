import React from 'react'


function logProps (Component) {
    class LogProps extends React.Component {
        componentDidUpdate (prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render () {
            const { forwardedRef, ...rest } = this.props;

            // Assign the custom prop "forwardedRef" as a ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} ref={ref} />;
    });
}



const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();


function Com () {
    return <FancyButton ref={ref}>Click me!</FancyButton>
}


export default logProps(Com)


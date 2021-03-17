import React, { Component } from 'react';


function WithLogging(WrappedHocComponent) {
    class WithLogging extends Component {
        constructor(props, context){
            super(props, context);
            this.displayName = `WithLogging(${getDisplayName(WrappedHocComponent)})`;
          }
        
        componentDidMount(){
            console.log(`Component ${getDisplayName(WrappedHocComponent)} is mounted on componentDidMount()`);
        }
        componentWillUnmount(){
            console.log(`Component ${getDisplayName(WrappedHocComponent)} is going to unmount`)
        }
        render(){
            
            return <WrappedHocComponent {...this.props} />
        }
        
    }
    WrappedHocComponent.displayName = `WithLogging(${getDisplayName(WrappedHocComponent)})`;
    return WithLogging
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default WithLogging;




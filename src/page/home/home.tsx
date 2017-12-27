import * as React from 'react';
import '../css/App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class Home extends React.Component<any, any> {
    render() {
      return (
        <Route path="/" component={App}/>
      );
    }
  }
  
  function isDesktop() {
    return window.innerWidth > 993;
  }
  
  const mapStateToProps = (state: any) => {
    return { state: state };
  };
  
  export default Home;
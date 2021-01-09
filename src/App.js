import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from "react-router-dom";
import AppRoute from './Components/AppLayout/AppRoute'
import MainNavbar from './Components/MainNavbar/MainNavbar';
import DownNavbar from './Components/DownNavbar/DownNavbar'
import Home from './Components/Home/Home'
import Registration from './Components/Registration/Registration'
import Login from './Components/Login/Login'
import Policy from './Components/Policy/Policy'
import ForgotPass from './Components/ForgotPass/ForgotPass'
import ResetPass from './Components/ResetPass/ResetPass'
import BadUrl from './Components/BadUrl/BadUrl'
import Dashboard from './Components/Dashboard/Dashboard'
import StoreProducts from './Components/StoreProducts/StoreProducts'
import StoreOrders from './Components/StoreOrders/StoreOrders'
import Settings from './Components/Settings/Settings'
import ContactUs from './Components/ContactUs/ContactUs'

function App() {
  return (
    <div className="App">
      <Switch>
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path={"/"} component={Home} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/scrollTo/:scrollDiv" component={Home} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/register" component={Registration} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/login" component={Login} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/login/forgot" component={ForgotPass} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/reset/:token" component={ResetPass} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/policy" component={Policy} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Dashboard" component={Dashboard} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/StoreProducts" component={StoreProducts} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/StoreOrders" component={StoreOrders} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Settings" component={Settings} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/ContactUs" component={ContactUs} />
        <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} path="*" component={BadUrl} />
      </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

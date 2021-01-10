import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications'
import AppRoute from './Components/AppLayout/AppRoute';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import DownNavbar from './Components/DownNavbar/DownNavbar';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Policy from './Components/Policy/Policy';
import ForgotPass from './Components/ForgotPass/ForgotPass';
import ResetPass from './Components/ResetPass/ResetPass';
import BadUrl from './Components/BadUrl/BadUrl';
import Dashboard from './Components/Dashboard/Dashboard';
import StoreProducts from './Components/StoreProducts/StoreProducts';
import StoreOrders from './Components/StoreOrders/StoreOrders';
import Settings from './Components/Settings/Settings';
import ContactUs from './Components/ContactUs/ContactUs';
import Darkmode from 'darkmode-js';

const options = {
  bottom: '70px',
  right: 'unset',
  left: '32px',
  mixColor: '#dcdcdc',
  backgroundColor: '#10171D',
  buttonColorDark: '#10171D',
  buttonColorLight: '#fff',
  label: '🌓'
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

function App() {
  return (
    <div className="App">
      <ToastProvider autoDismiss={true} placement='bottom-right'>
        <Switch>
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path={"/"} component={Home} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/scrollTo/:scrollDiv" component={Home} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Register" component={Registration} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Login" component={Login} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Login/Forgot" component={ForgotPass} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Reset/:token" component={ResetPass} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Policy" component={Policy} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Dashboard" component={Dashboard} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/StoreProducts" component={StoreProducts} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/StoreOrders" component={StoreOrders} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/Settings" component={Settings} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/ContactUs" component={ContactUs} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} path="*" component={BadUrl} />
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default App;

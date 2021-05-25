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
import BuilderUI from './Components/BuilderUI/BuilderUI';
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
      <ToastProvider autoDismiss={true} autoDismissTimeout={10000} placement='bottom-right'>
        <Switch>
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path={"/"} component={Home} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/scrollTo/:scrollDiv" component={Home} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/register" component={Registration} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/login" component={Login} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/login/forgot" component={ForgotPass} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/login/reset/:token" component={ResetPass} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/policy" component={Policy} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/dashboard" component={Dashboard} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/storeProducts" component={StoreProducts} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/builderUI" component={BuilderUI} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} exact path="/contactUs" component={ContactUs} />
          <AppRoute navBar={MainNavbar} downNavBar={DownNavbar} path="*" component={BadUrl} />
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default App;

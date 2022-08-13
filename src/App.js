import {Aboutus,Header,SpecialMenu,Chef,Intro,Laurels,Gallery,Findus,Footer} from './containers/index'
import {Navbar} from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Aboutus/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <Findus/>
      <Footer/>
    </div>
  );
}

export default App;

import DashBoard from './components/dashboard';
import Footer from './components/footer';
import NavigationBar from './components/navbar';

export default function Home() {
   const closeSidebar = () => {
      const sideBar = document.querySelector('.side-bar');
      const disableDiv = document.querySelector('.disable-div');
      sideBar.style.transform = 'translateX(400px)';
      disableDiv.style.display = 'none';
   };

   return (
      <div>
         <NavigationBar></NavigationBar>
         <div className="container">
            <div onClick={closeSidebar} className="disable-div"></div>
            <div className="row">
               <div className="col">
                  <h1>The Covid-19 tracking website</h1>
                  <p>
                     DUE TO THE COVID-19 PANDEMIC I MADE A WEBSITE TO TRACKING
                     IT
                  </p>
               </div>
            </div>
            <div className="dashboard-col">
               <DashBoard></DashBoard>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
}

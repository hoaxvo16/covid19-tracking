import Footer from './components/footer';
import NavigationBar from './components/navbar';

export default function Guideline() {
   const closeSidebar = () => {
      const sideBar = document.querySelector('.side-bar');
      const disableDiv = document.querySelector('.disable-div');
      sideBar.style.transform = 'translateX(400px)';
      disableDiv.style.display = 'none';
   };
   return (
      <div>
         <div onClick={closeSidebar} className="disable-div"></div>
         <NavigationBar></NavigationBar>
         <div className="main-content">
            <p>COMING SOON</p>
         </div>
         <Footer></Footer>
      </div>
   );
}

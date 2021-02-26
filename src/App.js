import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header className="header">
          <div className="head-title">Vegetables</div>
          <div className="top-contact">
            <div className="btn-img">
              <a href="#" className="btn-fb">
                <img src="img/btn_facebook.png" alt="" />
              </a>
              <a href="#" className="btn-ig">
                <img src="img/btn_instagram.png" alt="" />
              </a>
            </div>
            <div className="line"></div>
            <a href="#" className="box box-login">
              <div className="box-text login">LOGIN</div>
            </a>
            <a href="#" className="box box-join">
              <div className="box-text join">JOIN</div>
            </a>
          </div>
        </header>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#" className="nav-list-item-link">Home</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item-link">About Us</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item-link">Vegetables</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item-link">Online</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item-link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="content-area">
          <img src="img/img_main_pumpkin.png" alt="" className="pumpkin" />
          <aside>
            <div className="box-aside box-veg">
              <div className="title-aside title-veg">Vegetables</div>
            </div>
            <div className="box-aside box-contact">
              <div className="title-aside title-contact">Contact</div>
            </div>
            <div className="img-veg">
              <img src="img/img_vegetables_pepper.png" alt="" />
              <img src="img/img_vegetables_carrot.png" alt="" className="carrot" />
              <img src="img/img_vegetables_corn.png" alt="" className="corn" />
            </div>

            <div className="contact-bg">
              <p className="text-inbox text">
                For any questions or suggestions about Vegetables, Vegetables Club or your online order you can
                contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.
                </p>
              <div className="contact-line"></div>
              <p className="text-inbox info">E-mail : Vegetables@aaabbccc.com<br />PHONE : +886-123-456-789
                </p>
            </div>
          </aside>
          <footer className="footer">
            <div className="footer-box">
              <p className="footer-text">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

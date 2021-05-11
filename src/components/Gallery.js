import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import  './Gallery.css';
import care from "../images/01_care.jpg"

const Gallery = () => {
    // const layout = [
    //   {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    //   {i: 'b', x: 1, y: 0, w: 3, h: 2, static: true},
    //   {i: 'c', x: 4, y: 2, w: 1, h: 2, static: true},
    //   {i: 'd', x: 4, y: 0, w: 1, h: 2, static: true},
    //   {i: 'e', x: 4, y: 0, w: 1, h: 2, static: true},
    //   {i: 'f', x: 4, y: 0, w: 1, h: 20, static: true}
    // ];
    
    return ( 

      <div className="galleryWrapper">

        <div className="empty">
          <div className="sectionGallery">
            <div className="sectionCircleGallery"></div>
            <span className="oneGallery">1.</span>
            <div className="crossLineGallery"></div>
          </div>
          <p className="emptyText">MARKI<br/>KENUE</p>
        </div>

        <div className="content1">
          <img src={care} alt ="care" ></img>
          
          <div className="companyText">
            <p>KENUE<br/>CARE</p>
          </div>

          <div className="shortInfo">
            <div className="line"></div>
            <div className="odkryj_siebie">
              <p>ODKRYJ SIEBIE</p>
            </div>
            <span className="material-icons-outlined arrow">navigate_next</span>
          </div>

        </div>

        
        <div className="content2">
          <div className="wrapper2">
            <div className="companyText">
              <p>KENUE<br/>DESIGN</p>
            </div>

            <div className="shortInfo">
              <div className="line"></div>
              <div className="odkryj_siebie">
                <p>ODKRYJ SIEBIE</p>
              </div>
              <span className="material-icons-outlined arrow">navigate_next</span>
            </div>
          </div>
          
        </div>

        <div className="content3">
          <div className="companyText">
            <p>KENUE<br/>BLEND</p>
          </div>

          <div className="shortInfo">
            <div className="line"></div>
            <div className="odkryj_siebie">
              <p>ODKRYJ SIEBIE</p>
            </div>
            <span className="material-icons-outlined arrow">navigate_next</span>
          </div>
        </div>

        <div className="content4">
          <div className="companyText">
            <p>KENUE<br/>KOLORYZACJA</p>
          </div>

          <div className="shortInfo">
            <div className="line"></div>
            <div className="odkryj_siebie">
              <p>ODKRYJ SIEBIE</p>
            </div>
            <span className="material-icons-outlined arrow">navigate_next</span>
          </div>
        </div>

        <div className="content5">
          <div className="wrapper5">
            <div className="companyText">
              <p>KENUE<br/>SO PURE</p>
            </div>

            <div className="shortInfo">
              <div className="line"></div>
              <div className="odkryj_siebie">
                <p>ODKRYJ SIEBIE</p>
              </div>
              <span className="material-icons-outlined arrow">navigate_next</span>
            </div>
          </div>
          
        </div>


      </div>
     );
}
 
export default Gallery
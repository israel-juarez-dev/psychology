


// const Logo = <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#d80e0e",}} />


   
      const LocationPin = ({ text }) => {
      

       return <div className="pin">
          {/* <img icon={Logo} className="pin-icon" /> */}
          <i className="fa-solid fa-location-dot" style={{color: 'red',}}></i>
          <p className="pin-text">{text}</p>
        </div>
      }
      
      export default LocationPin;

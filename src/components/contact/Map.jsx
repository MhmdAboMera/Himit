import React from "react";
const Map = () => {
    return (
      <div className="google-map-code">
        <iframe
          title="Map"
          width="95%"
          height="250"
          className="mx-auto"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8499826966595!2d31.041854259795908!3d30.411997901167524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587ba9c4318743%3A0xdb712a50c94e0d8c!2z2YbYp9is2LIg2LPZiNmB2KogLSBOYWplWiBTb2Z0!5e0!3m2!1sar!2seg!4v1721287894198!5m2!1sar!2seg"
          // Adding sandbox attribute to restrict behavior
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  };
  
  export default Map;
  
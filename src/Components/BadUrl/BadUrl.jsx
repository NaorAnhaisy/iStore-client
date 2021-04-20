import React, { useEffect } from "react";
import "./BadUrl.css";

export default function BadUrl() {
  useEffect(() => {
    window.onload = function() {
      document.querySelector(".cont_principal").className =
        "cont_principal cont_error_active";
    };
  }, []);

  return (
    <div className="cont_principal">
      <div className="cont_error">
        <h1>Oops</h1>
        <p>The Page you're looking for isn't here.</p>
        <p className="cont_error_404">404</p>
      </div>
      <div className="cont_aura_1"></div>
      <div className="cont_aura_2"></div>
    </div>
  );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card({Data}) {
    return (  

        <div class="col-lg-4 ">
         <div className="card mb-5 mb-lg-0 bg-light">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{Data.title}</h5>
            <h6 className="card-price text-center">{Data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
            {Data.features.map((val, index) => {
              return (
                <li
                  key={`A${index}`}
                  className={val.isAvail ? "" : "text-muted"}
                >
                  <span className="fa-li">
                    <i
                      className={`fas ${
                        val.isAvail ? "fa-check" : "fa-times"
                      }`}
                    ></i>
                  </span>
                  {Data.packageName === "PRO" && val.isunlimited ? (
                    <strong>Unlimited</strong>
                  ) : (
                    ""
                  )}
                  {val.Bold ? (
                    <strong>{val.content}</strong>
                  ) : (
                    <span>{val.content}</span>
                  )}
                </li>
              );
            })}
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Click to Subscribe</button>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Card;
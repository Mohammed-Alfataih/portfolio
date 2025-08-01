import { useEffect } from "react";
import "./certificates.css";

export default function Certificates(props) {

    useEffect(() => {
    const scrollItems = document.querySelectorAll(".certificate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    scrollItems.forEach((item) => observer.observe(item));

    return () => {
      scrollItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

    return (
        <div className="certificate">
            <div className="top"><img src={props.img} alt=""  />  <h1>{props.title}</h1>  <div className="Verified">Verified</div>   </div>
             <div className="mid"><p>{props.data}</p><p>{props.description}</p></div>
              <div className="buttom"><button className="visit"  onClick={()=>window.open(props.img, "_blank","noopener,noreferrer")}> visit</button></div> 
           </div>
           
           
    )
}
import { useEffect } from "react";
import "./project.css";

export default function Project(props) {

 useEffect(() => {
    const scrollItems = document.querySelectorAll(".project");

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


    return(
        <div className="project">
           <div className="pro-logo"><img src={props.img}alt=""/></div>
           <div className="pro-text">
           <h1 className="appName">{props.title}</h1> 
           <p className="appdis">{props.description}</p>
           <div className="used"> {Array.isArray(props.tool) &&
            props.tool.map((t, index) => (
              <div key={index} className="tool-tag">
                {t}
              </div>
            ))}  </div> 
           </div>
           <div className="pro-button"> <button onClick ={()=>{if(props.Visit) {  window.open(props.Visit, "_blank", "noopener,noreferrer");}}}disabled={!props.Visit}>Visit</button><button onClick={() =>  {
      if (props.Github) {
        window.open(props.Github, "_blank", "noopener,noreferrer");
      }
    }}  disabled={!props.Github}> Git hub</button></div>
          

        </div>
    )
}


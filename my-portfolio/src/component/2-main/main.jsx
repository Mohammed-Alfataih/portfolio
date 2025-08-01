import { useEffect } from "react";
import "./main.css";


export default  function Main(props) {

useEffect(() => {
    const scrollItems = document.querySelectorAll(".c-one");

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
    
       
        <div className="c-one"><img src={props.img}alt="" />
        <h1 className="text">{props.title}</h1>
        </div>
        
    
 )

}

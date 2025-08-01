import { useEffect } from "react";
import "./contact.css";




export default  function Contact(props) {
    
 useEffect(() => {
    const scrollItems = document.querySelectorAll(".contact");

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
       <div className="contact">
        <div className="contact-Icon">{props.icon}</div>
        <div className="link"><a href={props.link} >{props.name}</a></div> 

        
       </div>
           
    )
        
}
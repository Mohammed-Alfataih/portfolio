import { useEffect } from "react";
import "./hero.css";

export default  function Main() {

 useEffect(() => {
    const scrollItems = document.querySelectorAll(".PartOne");

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
    <div className="hero">
        <div className="PartOne" >
        <div className="next-to-img">
        <div className="one">
           <p> I'M,<span className="name"> Mohammed Alfataih</span></p> 
      </div>
      <div className="two">

       <p>Front-end developer</p>

      </div>
      <div className="three">
      </div>
      </div>
          <img src="mem.png" alt="hero" />
          <div className="parttwo"> 
            <h1>About Me</h1>
        <p >
           I am actively looking for a role in Information Technology where I can apply the knowledge gained through my studies and hands-on training. With a strong foundation in technical skills, I’m enthusiastic about working on innovative projects that challenge me and allow me to grow as a Front-End Developer. I thrive in collaborative environments where I can contribute meaningfully while continuing to expand my expertise.
        </p>
       </div>
          

        </div>
       
    </div>
 )

}

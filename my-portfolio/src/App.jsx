import React from 'react'
import Header from './component/1-header/header.jsx';
import Hero from './component/1-hero/hero.jsx';
import Main from './component/2-main/main.jsx';
import Contact from './component/3-contact/contact.jsx';
import Project from './component/2-project/project.jsx';
import Footer from './component/4-footer/footer.jsx';
import Certificates from './component/2-certificates/certificates.jsx';



function App() {
  const GitHubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="48" viewBox="0 0 48 48" fill="none">
<path d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z" fill="black"/>
<path d="M9.16085 35.1623C9.10809 35.2838 8.92085 35.3197 8.75027 35.2366C8.57652 35.1571 8.47893 34.9921 8.53526 34.8706C8.58683 34.746 8.77447 34.7117 8.94782 34.7944C9.12197 34.8743 9.22115 35.0409 9.16085 35.1623Z" fill="black"/>
<path d="M10.1312 36.263C10.0169 36.3707 9.79358 36.3207 9.64205 36.1504C9.48535 35.9806 9.456 35.7534 9.57183 35.6441C9.68965 35.5363 9.90624 35.5868 10.0633 35.7566C10.22 35.9285 10.2506 36.1541 10.1312 36.263Z" fill="black"/>
<path d="M11.0757 37.6662C10.929 37.7699 10.689 37.6726 10.5406 37.456C10.3938 37.2393 10.3938 36.9795 10.5438 36.8754C10.6925 36.7713 10.929 36.8649 11.0793 37.0799C11.2257 37.2998 11.2257 37.5601 11.0757 37.6662Z" fill="black"/>
<path d="M12.3696 39.0219C12.2383 39.1692 11.9587 39.1297 11.754 38.9287C11.5445 38.7322 11.4862 38.4534 11.6179 38.3062C11.7508 38.1585 12.0321 38.2001 12.2383 38.3994C12.4462 38.5955 12.5097 38.8763 12.3696 39.0219Z" fill="black"/>
<path d="M14.1548 39.8091C14.0969 40 13.8275 40.0867 13.5562 40.0056C13.2852 39.9221 13.1079 39.6986 13.1626 39.5057C13.219 39.3137 13.4895 39.2233 13.7628 39.31C14.0334 39.3932 14.2111 39.6151 14.1548 39.8091Z" fill="black"/>
<path d="M16.1152 39.9551C16.122 40.156 15.8919 40.3227 15.6071 40.3259C15.3207 40.3327 15.089 40.1701 15.0858 39.9724C15.0858 39.7695 15.3107 39.6045 15.5972 39.5996C15.882 39.594 16.1152 39.7554 16.1152 39.9551Z" fill="black"/>
<path d="M17.9397 39.6392C17.9738 39.8353 17.7759 40.0366 17.493 40.0899C17.2149 40.1419 16.9575 40.0209 16.9222 39.8264C16.8877 39.6255 17.0892 39.4241 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z" fill="black"/>
</svg>
);
const LinkedInIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="48" viewBox="0 0 48 48" fill="none">
<path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#0077B5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z" fill="white"/>
</svg>
);
const WhatsAppIcon=(
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="48" viewBox="0 0 48 48" version="1.1">
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Social-Icons---Isolated" transform="translate(-388.000000, -391.000000)" fill="#01E675">
            <path d="M411.993033,391 L411.993033,391.000398 L412.006967,391.000398 C425.237748,391.000398 436,401.765685 436,415.000199 C436,428.234315 425.237748,439 412.006967,439 C407.126434,439 402.598605,437.546975 398.804449,435.035539 L389.579605,437.983798 L392.570026,429.066947 C389.692661,425.116025 388,420.248451 388,414.999801 C388,401.765287 398.762252,391 411.993033,391 Z M405.29285,403.190836 C404.827488,402.07628 404.474784,402.034071 403.769774,402.005401 C403.529728,401.991464 403.262214,401.977527 402.96564,401.977527 C402.04845,401.977527 401.089462,402.245514 400.511043,402.838033 C399.806033,403.557577 398.056843,405.23638 398.056843,408.679202 C398.056843,412.122023 400.567571,415.451756 400.905944,415.917648 C401.258648,416.382743 405.800808,423.55031 412.853297,426.471492 C418.368379,428.757149 420.00491,428.545307 421.260074,428.27732 C423.093658,427.882308 425.393002,426.527239 425.971421,424.891043 C426.54984,423.25405 426.54984,421.857171 426.380255,421.560912 C426.211068,421.264652 425.745308,421.095816 425.040298,420.742615 C424.335288,420.389811 420.90737,418.696673 420.25849,418.470894 C419.623543,418.231179 419.017259,418.315995 418.537963,418.99333 C417.860819,419.938653 417.198006,420.89831 416.661785,421.476494 C416.238619,421.928051 415.547144,421.984595 414.969123,421.744481 C414.193254,421.420348 412.021298,420.657798 409.340985,418.273388 C407.267356,416.42535 405.856938,414.125756 405.448104,413.434484 C405.038871,412.729275 405.405907,412.319529 405.729948,411.938852 C406.082653,411.501232 406.421026,411.191036 406.77373,410.781688 C407.126434,410.372738 407.323884,410.160897 407.549599,409.681068 C407.789645,409.215575 407.62006,408.735746 407.450874,408.382942 C407.281687,408.030139 405.871269,404.587317 405.29285,403.190836 Z" id="Whatsapp"/>
        </g>
    </g>
</svg>
);
const EmailIcon=(
 <svg xmlns="http://www.w3.org/2000/svg" width="33" height="48" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
	<g>
		<g>
			<path fill="#E84B4B" d="M32,0c17.7,0,32,14.3,32,32S49.7,64,32,64S0,49.7,0,32S14.3,0,32,0z"/>
		</g>
	</g>
	<g>
		<g>
			<rect x="13" y="19" fill="#D1D5DB" width="38" height="26"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#E1E5EA" d="M51,45L35.2,29.2h-6.4L13,45H51z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#FFFFFF" d="M51,19L33.1,31.2c-0.7,0.5-1.6,0.5-2.3,0L13,19H51z"/>
		</g>
	</g>
</g>
</svg>
);
  return (
    <>
    
  <Header/>
  <Hero/>
  <div id="certificates-container">
    <h1 id="topic-certificates">My certificates</h1>
  <div className="Certificates">
    <Certificates        img="certificate.jpg"   title="Bachelor"    data="Completed in 2025" description="Bachelor’s Degree in Computer Science – Najran University
Studied core areas like programming, databases, networks, and cybersecurity with hands-on training in real-world tech environments."/>
    <Certificates      img="java-101.png" title="JavaScript 101"    data="Completed: June 2024" description="Completed a beginner-level course covering JavaScript basics including variables, loops, functions, and DOM manipulation."/>
    <Certificates  img="java102.png" title="JavaScript 102"    data="Completed: February 2025" description=" Completed an intermediate-level course advancing JavaScript skills with more complex programming concepts and practical applications."/>
    <Certificates   img="sql-1.png" title="SQL 101"    data="Completed: January 2025" description="Completed a beginner-level course covering SQL database fundamentals, basic queries, and database management principles." />
    <Certificates    img="sql-103.png" title="SQL 103"    data="Completed: February 2025" description="Completed an advanced-level course covering complex SQL operations, advanced database queries, and optimization techniques." />
    <Certificates     img="bootstrapp.png"  title="Bootstrap"    data="February 2025" description="Completed an intermediate-level course covering Bootstrap framework for responsive web design and component development." />
    <Certificates     img="dom.png" title=" DOM "    data="February 2025" description="BCompleted a beginner-level course covering Document Object Model (DOM) fundamentals and web page manipulation techniques." />
   
  </div>
  </div>
   <div id="skills-container">
                  <h1 id="topic-skills">My skills</h1>
  <div className="skills"> 
    <Main img="html-5.png"            title="Html"/>
    <Main img="css-3.png"             title="css"/>
    <Main img="java-script.png"       title="javascript"/>
    <Main img="react-logo.png"             title="react"/>
    <Main img="bootstrap.png"         title="bootstrap"/>
    <Main img="tailwind-icon.png"          title="Tailwind"/>
    <Main img="vscode.png"          title="VScode"/>
    <Main img="github (1).png"          title="Github"/>
  </div>
   </div>
   <div id="project-container">
                         <h1 id="topic-project">Future projects</h1>
  <data className="projects"> 
  <Project img="TenziesGame.jpg"    title="Tenzies Game"   description="Roll until all dice are the same. Click each die to freeze it at its current value between rolls."       tool={["Html", "Java","React.js"]}  Visit="https://mohammed-alfataih.github.io/TenziesGame" Github="https://github.com/Mohammed-Alfataih/TenziesGame" />
  <Project img="water-bottle.png"    title="HydroTrack"   description="Track your daily water intake and stay hydrated with smart reminders and progress monitoring."    tool={["Html", "Css","Java","React.js"]}  Visit=""    />
  <Project img="fitness.png"    title="MyFitness"   description="Track your workouts, monitor your heart rate, and stay on top of your fitness goals all in one place."             tool={["Html", "Css","Java"]}  />
  
  </data>
  </div>
  <div id="contact-container">
                    <h1 id="topic-contact">My Contacts</h1>
  <div className="contacts">  
  <Contact icon={EmailIcon}                          link="mailto:Moalfataih@gmail.com"        name="Email"/>
   <Contact icon="📱"                               link="tel:+966501234567"    name="0532121698"/>
  <Contact icon={WhatsAppIcon}                      link="https://api.whatsapp.com/send/?phone=966532121698&text&type=phone_number&app_absent=0"  name="WhatsApp"/>
  <Contact icon={LinkedInIcon}                       link="https://www.linkedin.com/in/mohammed-alfataih-982817351"    name="Linkedin"/>
  <Contact icon={GitHubIcon}                      link="https://github.com/abohajar911"               name="Git hub"/>
  </div>
  </div>
  <Footer/>
  
   </>
  )
  
}

export default App

import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
         <div>
            <a href="https://github.com/mahlaule">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/kevinmahlaule/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="https://twitter.com/kevinmahlaule">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;
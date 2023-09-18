import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from 'react';
function Skills(){
	return(
<div>
<section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; WorkShps Attended
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Devlopment Under-Process.
            <h2><u><b>Skills I Have</b></u> </h2>
            <ul>
            <li>Bug-hunting</li>
            <li>Security Research</li>
            <li>Forensic Security- OSINT</li> 
            <li>Web-Frontend Work</li>
            </ul><br/><br/>
            <h2><u><b>Work Shops I Have Attended</b></u> </h2>
            <ul>
            <li>Chat-Gpt Command-prompt Designer(WorkShop by Vaibhav Sisinty)</li>
            <li>Forensic Security (WorkShop by ThriveDX)</li>
            </ul>          </p>
        
        </div>
      </div>
    </section>
</div>
		);
}
export default Skills;
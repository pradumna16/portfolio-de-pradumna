import ScrollAnimation from './components/ScrollAnimation'

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollAnimation />
      {/* Hero Section */}
      <section className="h-screen flex items-center px-4 max-w-7xl mx-auto relative">
        <div className="matrix-bg absolute inset-0 opacity-30"></div>
        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold space-y-4">
            <div className="vim-container">
              <div className="vim-line"></div>
              <div className="vim-text text-[#64ffda]">
                Hello, I'm
                <div className="vim-cursor"></div>
              </div>
              <div className="vim-command">:set syntax=cyberpunk</div>
            </div>
            <div className="vim-container mt-4">
              <div className="vim-line"></div>
              <div className="vim-text">
                Pradumna Pokley
                <div className="vim-cursor" style={{ left: '100%' }}></div>
              </div>
              <div className="vim-command">:w cybersecurity.profile</div>
            </div>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400">
            Cybersecurity Professional & Penetration Tester
          </h2>
          <p className="max-w-2xl text-lg text-gray-400">
            Dynamic and results-driven cybersecurity professional specializing in Vulnerability Assessment,
            Penetration Testing (VAPT), and SOC operations. Expert in offensive tools, malware analysis,
            and advanced security research.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded hover:bg-[#4cd5b5] transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-[#4cd5b5] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] font-semibold rounded hover:bg-[#64ffda]/10 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-[#64ffda]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400">
              I'm a passionate cybersecurity professional with extensive experience in building offensive tools,
              conducting penetration testing, and performing advanced security research. My expertise spans
              across various domains including malware analysis, reverse engineering, and ethical hacking.
            </p>
            <p className="text-gray-400">
              Currently focused on developing innovative solutions to complex security challenges and
              driving organizational security objectives forward.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Areas of Expertise:</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Vulnerability Assessment & Penetration Testing</li>
              <li>Malware Analysis & Reverse Engineering</li>
              <li>Security Research & Tool Development</li>
              <li>Ethical Hacking & CTF Competitions</li>
              <li>SOC Operations & Incident Response</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#64ffda]">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Security/Offensive</h3>
              <p className="text-gray-400">Security Research, Bug Hunting, CTF Competitions, Ethical Hacking, SIEM Tools (ELK, Logstash, Kibana), Metasploit, Mythic C2, Mimikatz, CrackMapExec, Netsparker, Mitre ATT&CK, Digital Forensics</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-400">Programming: C++, Python, Bash, Go, Java, XML</p>
              <p className="text-gray-400">Web: HTML, CSS, JavaScript, ReactJS, MERN Stack</p>
              <p className="text-gray-400">Android: SQLite, Firebase, Advanced UI/UX Design</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <p className="text-gray-400">Problem Solving, Collaboration, Effective Communication</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Bachelor of Engineering in Electronics Engineering</h4>
                  <p className="text-gray-400">GH Raisoni College of Engineering, Nagpur</p>
                  <p className="text-gray-400">2017-2021</p>
                </div>
                <div>
                  <h4 className="font-medium">Diploma in Cybersecurity</h4>
                  <p className="text-gray-400">ASD Academy Kota, Rajasthan</p>
                  <p className="text-gray-400">2023-2024</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Ethical Hacking, Foundation of RED TEAMING(CryptoKnight101, SpinTheHack)</li>
                <li>Advanced Python for Network Monitoring by coursera</li>
                <li>Rise's ThriveDX CTF Events Participant</li>
                <li>Google CyberSecurity Professional by coursera</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3498db]">Education Timeline</h2>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {/* Bachelor's Degree */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Bachelor of Electronics Engineering</h3>
                  <span className="timeline-date">2017 - 2021</span>
                </div>
                <div className="timeline-content">
                  <p>GH Raisoni College of Engineering</p>
                  <div className="timeline-status">Completed</div>
                </div>
              </div>
            </div>

            {/* Cybersecurity Diploma */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Diploma in Cybersecurity</h3>
                  <span className="timeline-date">2023 - 2024</span>
                </div>
                <div className="timeline-content">
                  <p>ASD Academy</p>
                  <div className="timeline-status">Completed</div>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Higher Secondary Education</h3>
                  <span className="timeline-date">2015 - 2017</span>
                </div>
                <div className="timeline-content">
                  <p>Taywade Junior Engineering College, Bokara, Nagpur, Maharashtra</p>
                  <div className="timeline-status">Completed</div>
                </div>
              </div>
            </div>

            {/* Secondary School */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Secondary School Education</h3>
                  <span className="timeline-date">2015</span>
                </div>
                <div className="timeline-content">
                  <p>NK Academy, Nagpur</p>
                  <div className="timeline-status">Completed</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#64ffda] flex items-center">
          <span className="mr-4">[</span>
          Work Experience
          <span className="ml-4">]</span>
        </h2>
        
        <div className="space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#64ffda]/30"></div>

          {/* Experience items */}
          <div className="pl-8 relative cyber-card hover:translate-x-2 transition-transform">
            <div className="absolute left-0 top-4 w-3 h-3 bg-[#64ffda] rounded-full transform -translate-x-1.5"></div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[#64ffda]">Cybersecurity Analyst Intern</h3>
                <span className="text-gray-400 ml-4">2025 - Present</span>
              </div>
              <p className="text-gray-400 mb-2">ASD CyberSecurity</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Performed comprehensive vulnerability assessments and penetration tests using Burp Suite, Nmap, and Metasploit and Tenable framework.</li>
                <li>Discovered and analyzed high-risk vulnerabilities (e.g., SQLi, XSS, RCE) in web applications and networks.</li>
                <li>Provided detailed reports with actionable remediation steps and collaborated with teams to address vulnerabilities.</li>
              </ul>
            </div>
          </div>

          {/* Repeat the same pattern for other experiences */}
          <div className="border-l-2 border-[#64ffda] pl-6 cyber-card hover:translate-x-2 transition-transform">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#64ffda]">AI-ML Trainer, Outlier.ai x soul (Remote)</h3>
              <span className="text-gray-400">Dec 2024 - Feb 2025</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Reviewed and improved AI/ML prompts for efficiency.</li>
              <li>Analyzed and optimized code in Python, Java, and JavaScript.</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#64ffda] pl-6 cyber-card hover:translate-x-2 transition-transform">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#64ffda]">Vulnerability Management Intern, Cybertix</h3>
              <span className="text-gray-400">August 2022 - October 2022</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Collaborated with teams to identify and report web application vulnerabilities.</li>
              <li>Conducted comprehensive security analyses and vulnerability disclosures.</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#64ffda] pl-6 cyber-card hover:translate-x-2 transition-transform">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#64ffda]">Cybersecurity Intern, Prodigy Infotech</h3>
              <span className="text-gray-400">June 2024</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Developed Python-based cybersecurity tools: Encrypter, Decrypter, Key Logger, and Data Monitoring systems.</li>
              <li>Built tools for encryption, decryption, and monitoring network data using advanced Python techniques.</li>
              <li>Designed and implemented custom cipher applications for secure data handling.</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#64ffda] pl-6 cyber-card hover:translate-x-2 transition-transform">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#64ffda]">Cybersecurity Intern, CFSS</h3>
              <span className="text-gray-400">July 2024</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Enhanced skills in ethical hacking, digital forensics, and solving CTF challenges.</li>
              <li>Conducted vulnerability assessments on VulnHub machines.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#64ffda] flex items-center">
          <span className="mr-4">[</span>
          Projects
          <span className="ml-4">]</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SOC Hero Lab */}
          <div className="group relative bg-[#112240] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">SOC Hero Lab</h3>
            <p className="text-gray-400 mb-4">Built a comprehensive SOC environment integrating log management, monitoring tools, and a Mythic C2 server for threat simulation and analysis.</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>SOC Lab with ELK Stack & Mythic C2</li>
              <li>Full "Assumed Breach Operations (SOC) lab" using ELK Stack for real-time threat monitoring</li>
              <li>Deployed C2 for "Red Team operations", simulating adversarial techniques</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">ELK Stack</span>
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Mythic C2</span>
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">SIEM</span>
            </div>
          </div>

          {/* Development Projects */}
          <div className="group relative bg-[#112240] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Web & Android Projects</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Netflix Clone</h4>
                <p className="text-gray-400">Built a fully responsive Netflix-like platform with ReactJS and Firebase for backend authentication.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Spotify Clone</h4>
                <p className="text-gray-400">Designed a music streaming application using ReactJS and integrated Spotify's API for dynamic content.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Todo List App</h4>
                <p className="text-gray-400">Full CRUD functionality with SQLite, personalized user manager for task management.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">React</span>
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Firebase</span>
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">SQLite</span>
            </div>
          </div>

          {/* Cybersecurity Tools */}
          <div className="group relative bg-[#112240] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Offensive Security Tools</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Python-based Cybersecurity Tools: Created Encrypter, Key Logger, Data Monitoring systems</li>
              <li>Network Monitoring Dashboard: Built a web-based tool for monitoring network activities</li>
              <li>Threat Visualization Tools: Created interactive visual dashboards for cybersecurity metrics</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Python</span>
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">JavaScript</span>
              <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Network Security</span>
            </div>
          </div>

          {/* Languages */}
          <div className="group relative bg-[#112240] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Additional Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>English: Full Professional Working Proficiency</li>
                  <li>Hindi: Full Professional Proficiency</li>
                  <li>Marathi: Native/Bilingual Proficiency</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Communication</span>
                <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Documentation</span>
                <span className="px-3 py-1 text-sm bg-[#233554] rounded-full text-[#64ffda]">Technical Writing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a192f] opacity-50">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364ffda' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative">
          <h2 className="text-3xl font-bold mb-12 text-[#64ffda] flex items-center">
            <span className="mr-4">&lt;</span>
            Contact
            <span className="ml-4">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Let's Connect Securely</h3>
              <p className="text-gray-400">
                Whether you want to discuss cybersecurity challenges, collaborate on a project,
                or just want to connect, feel free to reach out through any of these encrypted channels.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:propokley@gmail.com" 
                   className="flex items-center space-x-3 text-gray-400 hover:text-[#64ffda] transition-colors group">
                  <span className="w-12 h-12 flex items-center justify-center border border-[#64ffda] rounded-lg group-hover:bg-[#64ffda]/10">
                    @
                  </span>
                  <span>propokley@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/pradumna-pokley-a6a197179/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center space-x-3 text-gray-400 hover:text-[#64ffda] transition-colors group">
                  <span className="w-12 h-12 flex items-center justify-center border border-[#64ffda] rounded-lg group-hover:bg-[#64ffda]/10">
                    in
                  </span>
                  <span>LinkedIn</span>
                </a>

                <a href="https://github.com/pradumna16" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center space-x-3 text-gray-400 hover:text-[#64ffda] transition-colors group">
                  <span className="w-12 h-12 flex items-center justify-center border border-[#64ffda] rounded-lg group-hover:bg-[#64ffda]/10">
                    &lt;/&gt;
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <form className="space-y-6 relative">
              <div className="group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all"
                />
                <div className="absolute right-3 top-3 text-[#64ffda] opacity-0 group-focus-within:opacity-100 transition-opacity">
                  &gt;_
                </div>
              </div>

              <div className="group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all"
                />
                <div className="absolute right-3 top-3 text-[#64ffda] opacity-0 group-focus-within:opacity-100 transition-opacity">
                  &gt;_
                </div>
              </div>

              <div className="group">
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all resize-none"
                />
                <div className="absolute right-3 top-3 text-[#64ffda] opacity-0 group-focus-within:opacity-100 transition-opacity">
                  &gt;_
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-transparent border border-[#64ffda] text-[#64ffda] py-3 rounded-lg hover:bg-[#64ffda]/10 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Initialize Connection</span>
                <div className="absolute inset-0 bg-[#64ffda]/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 
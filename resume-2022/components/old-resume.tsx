import {FC} from "react";

const oldResume: FC = () => {
  return (
      <div className="container">
          <div className="header">
              <h1>Toni Sefton</h1>
              <h2>Software Engineer</h2>
              <div className="personal-info">
                  <h3>Personal Info</h3>
                  <h4>Email</h4>
                  <a href="mailto:tonisefton@outlook.com?">tonisefton@outlook.com</a>
                  <h4>Github</h4>
                  <a href="https://github.com/Ariadne-S">https://github.com/Ariadne-S</a>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/toni-sefton/">https://www.linkedin.com/in/
                      <wbr/>
                          toni-sefton/</a>
              </div>
          </div>

          <div className="main">
              <div className="intro">
                  <p></p>
              </div>

              <div>
                  <h3>Experience</h3>
                  <div className="timeline">
                      <div className="time"><h4>Jun 2021 - Current</h4></div>
                      <div>
                          <h4>WORK180</h4>
                          <h5><span className="role-time">May 2019 - Jun 2021 |</span> Junior Software Engineer</h5>
                          <h5><span className="role-time">Jun 2021 - current |</span> Software Engineer</h5>
                          <p>WORK180 is a fully remote start-up that works with employers to improve organizational
                              standards
                              that raise the bar for women in the workplace with a presence in Australia, United Kingdom
                              and
                              the United States of America.</p>
                          <div className="other-skills">
                              <div className="tag">c#</div>
                              <div className="tag">Typescript</div>
                              <div className="tag">Javascript</div>
                              <div className="tag">HTML/Css</div>
                              <div className="tag">Postgress Sql</div>
                              <div className="tag">YAML</div>
                          </div>

                          <div className="other-skills">
                              <div className="project_tags">Dotnet core</div>
                              <div className="project_tags">React</div>
                              <div className="project_tags">NextJS</div>
                              <div className="project_tags">Styled Components</div>
                              <div className="project_tags">AWS</div>
                              <div className="project_tags">Seq</div>
                              <div className="project_tags">Hangfire</div>
                              <div className="project_tags">Elastic Search</div>
                              <div className="project_tags">Entity Framework</div>
                              <div className="project_tags">MartenDb</div>
                              <div className="project_tags">Github actions</div>
                              <div className="project_tags">Octostache</div>
                              <div className="project_tags">htmlAgilityPack</div>
                              <div className="project_tags">Puppeteer</div>
                          </div>

                          <h5>General</h5>
                          <ul>
                              <li>Set up elastic search for the employer search, and added filters to the job search
                              </li>
                              <li>Used hangfire to set up background tasks, such as collecting user actions for ROI
                                  reporting
                              </li>
                              <li>Onboarded new engineers to the team, regardless of level</li>
                              <li>Mentored junior engineers</li>
                              <li>Documented processes and decisions</li>
                              <li>Managed damage control during website outages, prioritised vital fixes to keep the
                                  website
                                  up and investigated and reported potential issues with the system
                              </li>
                              <li>Investigated and resolved performance issues within the backend project</li>
                          </ul>
                          <h5>Projects</h5>

                          <h6>Custom Web Scrapers</h6>
                          One of my first responsibilities at WORK180 was to build custom web scrapers to automate the
                          collection of job ads for new clients. This could involve a JSON/XML feed or a html parser
                          with HTML
                          agility pack and depending on the complexity of the website configuring a headless crawl to
                          retrieve
                          generated html with Puppeteer.

                          <h6>Smart Scraper</h6>
                          <p>Collaborated to plan and implement the "Smart Scraper" project - a database driven scraper
                              infrastructure that reduced job automation set up from days to a couple of hours. </p>

                          <strong>Smart Scraper Test Builder - side project</strong>
                          <p>Encaptualisated logic to remove duplication and simplify the configuration of Smart Scraper
                              tests</p>

                          <h6>Structured Employer Benefits Data</h6>
                          Designed and migrated a structred data schema for the Employer Benefits area to enable
                          functionality such as comparing benifits and search. Worked alongside the customer success
                          team to clean and migrate old data to the new structure. I

                          Worked alongside UX to build their vision for the Employer Benefits tables
                          <h6>Save job functionality</h6>
                          Built the save job functionality, which entails an register/sign in gate, the ability to save
                          a job
                          and to remove a saved job from multiple places across the website. With google analytics
                          events firing for each action.

                          <h6>Port the frontend to NextJs typescript </h6>
                          Spearheaded a greenfield project to port the jobsite frontend from a Razor/javascript React
                          project to Typescript React NextJs, drastically improving page speed and improving developer
                          experience
                          <h6>Domain Migration</h6>
                          Investigated and implemented NextJs internationalised routing and worked with the team to
                          migrate the website from regionalised sub domains to sub paths to create a website with a more
                          globalised feel.

                          <h6>CMS Migration</h6>
                          Migrate content and assets from Squidex to Wordpress

                      </div>
                  </div>
              </div>

              <div>
                  <h3>Projects</h3>
                  <div className="timeline">
                      <div className="time"><h4>2019</h4></div>
                      <div>
                          <h4>Automation of daily student management processes</h4>
                          <h5>Python</h5>
                          <p>This project utilised Python to undertake repeatative data
                              management in a previous workplace. The tasks I automated were;
                              <ul>
                                  <li>Checking for new or withdrawn students</li>
                                  <li>Generating an enrolment error report</li>
                                  <li>Generating a manual roll</li>
                              </ul>
                              <p>
                                  The focus was purely been on backend, with outputs and inputs displayed through the
                                  command
                                  line. This project allowed me to test my skills at data manipulation, data clensing,
                                  and error
                                  handling.
                              </p>
                          </p>
                      </div>

                      <div className="time"><h4>2018 - 2020</h4></div>
                      <div>
                          <h4>DressInspo</h4>
                          <h5>C# | SQL | React</h5>
                          <p>A large scale project, which I'm using to develop my programming skills, that aims to bring
                              the
                              social aspect of wedding dress shopping online, and revolutionise the way brides and their
                              bridal parties search for dresses, and shops to visit. This project utilises a SQL
                              database to
                              store user and dress data, with react on the front end, and C# on the back.</p>
                      </div>

                      <div className="time"><h4>2017</h4></div>
                      <div>
                          <a href="https://github.com/Ariadne-S/Historical-Map"><h4>Historical Map</h4></a>
                          <h5>HTML | CSS | Javascript</h5>
                          <p>I undertook this project as a capstone course for my Bachelor of Arts. It is an exploration
                              of a
                              technological platform historians and educators could use to convey complex ideas
                              surrounding
                              the interconnectedness and influence of history in a way that is visually appealing but
                              also
                              educational. </p>
                      </div>
                  </div>
                  <div className="pagebreak"></div>
                  <div className="pagebreak_padding"></div>
                  <div className="timeline">
                      <div className="time"><h4>2016</h4></div>
                      <div>
                          <h4>Cultural Diversity and Social Cohesion in Lendlease Commmunities: Yarrabilba <span
                              className="added_note">(Non-technical)</span></h4>
                          <h5>The University of Queensland | In collaboration with Lendlease Communities</h5>
                          <p className="less_bottom">Planned and undertook a social research project investigating the
                              social
                              cohesion of the Lendlease Community Yarrabilba and investigate whether people from diverse
                              cultural and linguistic backgrounds are adequately being catered for and involved within
                              the
                              community.</p>
                          <div className="tagbutton" ><i className="fas fa-tags"></i></div>
                          <div className="showtoggle" id="showtoggle">
                              <span>Research</span>
                              <span>Project Management</span>
                              <span>Data Analysis</span>
                              <span>Report Writing</span>
                              <span>Internal & External Stakeholder Liaison</span>
                          </div>

                      </div>
                  </div>
              </div>

              <div>
                  <h3>Education</h3>
                  <div className="timeline">
                      <div className="time"><h4>2019</h4></div>
                      <div>
                          <h4><a href="https://www.datacamp.com/tracks/data-scientist-with-python">Data Scientist with
                              Python</a></h4>
                          <h5>Datacamp | Career Track | 40% complete</h5>
                          <div>
                              <ul>
                                  <li>Introduction to Python</li>
                                  <li>Intermediate Python for Data Science</li>
                                  <li>Python Data Science Toolbox <span>(Part 1)</span></li>
                                  <li>Python Data Science Toolbox <span>(Part 2)</span></li>
                                  <li>Importing Data in Python <span>(Part 1)</span></li>
                                  <li>Importing Data in Python <span>(Part 2)</span></li>
                                  <li>Cleaning Data in Python</li>
                                  <li>pandas Foundations</li>
                                  <li>Manipulating DataFrames with pandas</li>
                              </ul>
                          </div>
                      </div>

                      <div className="time"><h4>2013-2017</h4></div>
                      <div>
                          <h4>Bachelor of Social Science</h4>
                          <h5>University of Queensland | Major in International and Community Development</h5>
                          <ul>
                              <li>A social science perspective on international and community development issues,
                                  focusing on
                                  strategies to alleviate poverty and inequality and to develop sustainable societies,
                                  communities and environments.
                              </li>
                              <li>This degree also equipped me with the skills to undertake social impact assessments,
                                  social
                                  planning, project management and social research.
                              </li>
                          </ul>
                      </div>
                      <div className="time"><h4>2013-2017</h4></div>
                      <div>
                          <h4>Bachelor of Arts</h4>
                          <h5>University of Queensland | Major in Extended History</h5>
                          <ul>
                              <li>Learnt about cause and consequence, focusing on the study of people and their
                                  attitudes,
                                  motivations and prejudices. While developing professional skills including the ability
                                  to
                                  initiate an original inquiry, conduct archival research, analyse documents, write
                                  convincingly and interpret evidence.
                              </li>
                          </ul>
                      </div>

                      <div className="footer"></div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default oldResume;
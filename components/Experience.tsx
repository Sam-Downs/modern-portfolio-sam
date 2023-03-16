import { motion } from "framer-motion";

type Project = {
  title: string;
  logo: string;
  points: string[];
  date: string;
};

const porterProject: Project = {
  title: "Porter at Lou Fusz",
  logo: '../public/images/toyota.jpg',
  points: [
    "Clean and maintain dealership vehicles",
    "Move vehicles to designated areas",
    "Assist with other duties as assigned",
    "Follow safety procedures and guidelines",
  ],
  date: "May 2021 - Present",
};

const helpDeskSpecialistProject: Project = {
  title: "Help Desk Specialist at Lindbergh High School",
  logo: '../public/images/lindbergh.jpg',
  points: [
    "Troubleshoot and resolve technical issues",
    "Provide remote and in-person support",
    "Assist with device maintenance and repair",
    "Collaborate with IT team on projects and initiatives",
  ],
  date: "August 2020 - May 2021",
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        
        <div className="card-points">
        <img src={project.logo} alt="" />
          <ul>
            {project.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="card-date">{project.date}</div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [porterProject, helpDeskSpecialistProject];

  return (
    <div className="flex relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-cyan-500 text-2xl'>Experience</h3>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
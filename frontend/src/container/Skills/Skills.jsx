import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchExperiences = async () => {
    try {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/experiences/');
        const data = await response.json();
        console.log(data);
        setExperiences(data);
      }
      catch (e) {
        console.log(e)
      }
    } catch (error) {

    }
  }
  const fetchSkills = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/skills/');
      const data = await response.json();
      console.log(data);
      setSkills(data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchSkills();
    fetchExperiences();
  }, [])



  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={`http://127.0.0.1:8000${skill.icon}`} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.start_date}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.start_date}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.name}
                    key={experience.name}
                  >
                    <h4 className="bold-text">{experience.name}</h4>
                    <p className="p-text">{experience.company}</p>
                  </motion.div>
                  <Tooltip
                    id={experience.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {experience.description}
                  </Tooltip>
                </>
                {/* {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))} */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);

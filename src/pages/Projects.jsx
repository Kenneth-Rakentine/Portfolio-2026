import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ghostHunterImg   from '../images/Ghost-Hunter-Game.jpg'
import employeeImg      from '../images/Employee-Directory-REACT.png'
import netflixImg       from '../images/Netflix-Functions-Mockup.png'
import apiCallImg       from '../images/Api-Call-Practice.png'
import perScholasImg    from '../images/PerScholas-Responsive-Site.png'
import atmoCastImg      from '../images/PerScholasReactGP.png'
import magicImportImg   from '../images/magic import.png'
import taxCalcImg       from '../images/30NightTaxCalculator.png'

const CUSTOM_TITLES = {
  'PerScholasReactGP': 'AtmoCast Weather App'
}

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    try {
      const result = await axios.get('https://api.github.com/users/Kenneth-Rakentine/repos')

      const specificRepos = [
        'Ghost-Hunter-Game',
        'Employee-Directory-REACT',
        'Netflix-Functions-Mockup',
        'Api-Call-Practice',
        'PerScholas-Responsive-Site',
        'PerScholasReactGP',
        'Magic-Import',
        '30_Night_Occupancy_Tax_Calculator'
      ]

      const filteredProjects = result.data.filter((project) =>
        specificRepos.includes(project.name)
      )

      const updatedProjects = filteredProjects.map((project) => {
        switch (project.name) {
          case 'Ghost-Hunter-Game':
            return { ...project, image_url: ghostHunterImg }
          case 'Employee-Directory-REACT':
            return { ...project, image_url: employeeImg }
          case 'Netflix-Functions-Mockup':
            return { ...project, image_url: netflixImg }
          case 'Api-Call-Practice':
            return { ...project, image_url: apiCallImg }
          case 'PerScholas-Responsive-Site':
            return { ...project, image_url: perScholasImg }
          case 'PerScholasReactGP':
            return { ...project, image_url: atmoCastImg }
          case 'Magic-Import':
            return { ...project, image_url: magicImportImg }
          case '30_Night_Occupancy_Tax_Calculator':
            return { ...project, image_url: taxCalcImg }
          default:
            return { ...project, image_url: 'https://avatars.githubusercontent.com/u/41464290?v=4' }
        }
      })

      setProjects(updatedProjects)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const displayTitle = (name) =>
    CUSTOM_TITLES[name] || name.replace(/[-_]/g, ' ')

  return (
    <div className='projectContainer'>
      <h1>Projects</h1>
      <div className='projects'>
        <div id="carousel">
          {projects.map((project, index) => (
            <figure className='project' key={project.id}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className='projectCard'
              >
                <span className='projectNum'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <img
                  className='projectCardImg'
                  src={project.image_url}
                  alt={displayTitle(project.name)}
                />
                <h3 className='projectCardTitle'>
                  {displayTitle(project.name)}
                </h3>
                <p className='projectCardDesc'>
                  {project.description || 'Full-stack web development project'}
                </p>
                <span className='projectCardLink'>View on GitHub</span>
              </a>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

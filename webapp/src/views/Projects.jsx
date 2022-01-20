import { React, useState } from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const [AllProjectsSelected, setAllProjectsSelected] = useState(true);
  const [OfficeSelected, setOfficeSelected] = useState(false);
  const [RestaurantSelected, setRestaurantSelected] = useState(false);
  const [MedicalSelected, setMedicalSelected] = useState(false);
  const [IndustrySelected, setIndustrySelected] = useState(false);
  const categories = [
    {name: 'Tous les projets', type:'AllProjects'},
    {name: 'Bureaux', type:'Office'},
    {name: 'Restaurant', type:'Restaurant'},
    {name: 'Médical', type:'Medical'},
    {name: 'Industrie', type:'Industry'}
  ]
  const projects = [
    {name: 'Projet 1', type: 'Bureaux'},
    {name: 'Projet 2', type: 'Bureaux'},
    {name: 'Projet 3', type: 'Bureaux'},
    {name: 'Projet 4', type: 'Restaurant'},
    {name: 'Projet 5', type: 'Restaurant'},
    {name: 'Projet 6', type: 'Restaurant'},
    {name: 'Projet 7', type: 'Médical'},
    {name: 'Projet 8', type: 'Médical'},
    {name: 'Projet 9', type: 'Médical'},
    {name: 'Projet 10', type: 'Industrie'},
    {name: 'Projet 11', type: 'Industrie'},
    {name: 'Projet 12', type: 'Industrie'}
  ];
  const [selection, setSelection] = useState(projects)

  const unselect = () => {
    setAllProjectsSelected(false);
    setOfficeSelected(false);
    setRestaurantSelected(false);
    setMedicalSelected(false);
    setIndustrySelected(false);
  }

  const selectProjects = (category) => {
    setSelection(projects.filter((project) => project.type === category || category === 'AllProjects'))
  }

  const toggleProjects = {
    toggleAllProjects: () => {
      unselect();
      setAllProjectsSelected(true);
      selectProjects('AllProjects');
    },
    toggleOffice: () => {
      unselect();
      setOfficeSelected(true);
      selectProjects('Bureaux');
    },
    toggleRestaurant: () => {
      unselect();
      setRestaurantSelected(true);
      selectProjects('Restaurant');
    },
    toggleMedical: () => {
      unselect();
      setMedicalSelected(true);
      selectProjects('Médical');
    },
    toggleIndustry: () => {
      unselect();
      setIndustrySelected(true);
      selectProjects('Industrie');
    }
  }
  
    return (
        <div className="mx-10 bg-skin-10">
          <div className="border-b-2 border-skin-20">
            <div className="flex ml-20">
              {categories.map(element => (
                <div className={`relative flex items-center justify-center 
                ${(eval(`${element.type}Selected`)) ? "" : "mx-20"} my-3`} 
                key={`category_${element.name}`}>
                  {eval(`${element.type}Selected`) && <img src="uglyCircle.png" alt="uglyCircle" />}
                  <button className="uppercase absolute break-normal whitespace-nowrap" 
                    onClick={() => toggleProjects[`toggle${element.type}`](true)}>
                      {element.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {selection.map((project, index) => (
              <div className="flex font-gallery">
                <div className="ml-4 text-skin-100 mt-6">
                  {`${index < 9 ? '0' : ''}${index + 1}`}
                </div>
                <Link to="/project">
                  <button className="ml-4 outline-title hover:text-black text-[80px]">
                    {project.name}
                  </button>
                </Link>
                
              </div>
            ))}
          </div>
        </div>
    )
}

export default Projects

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Project from "./Project";
import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";
import Project05 from "./Project05";

const projects = [Project01, Project02, Project03, Project04, Project05];

function Work(){
  const [modalOpen, setModalOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);

  const openModal = (index) => {
    setProjectIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setProjectIndex(null);
  };

  return (
    <section id="work" className={`work ${modalOpen ? "fullscreen" : ""}`}>
      <h2>Work</h2>
      <div className="work_slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          className="mySwiper"
        >
          {projects.map((Project, index) => (
            <SwiperSlide key={index}>
              <div className="project" onClick={() => openModal(index)} 
                role="button"
                tabIndex={index}
                onKeyDown={(e) => e.key === 'Enter' && openModal(index)}>
                <h3>{Project.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalOpen && (
        <Project 
          open={modalOpen} 
          close={closeModal}
          project={projects[projectIndex]}
        />
      )}
    </section>
  );
}

export default Work;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'
import "swiper/css";
import 'swiper/css/navigation';
import '../../css/test.css'


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
    <section id="Work" className={`work ${modalOpen ? "fullscreen" : ""}`}>
      <h2>Work</h2>
      <div className="work_slider">
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          <AnimatePresence>
          {projects.map((Project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.6 }}
                className="project"
                onClick={() => openModal(index)} 
                role="button"
                tabIndex={index}
                onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
                >
                <h3>{Project.title}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
          </AnimatePresence>
        </Swiper>
        </div>
      <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="modal_effect"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        <Project 
          open={modalOpen} 
          close={closeModal}
          project={projects[projectIndex]}
        />
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
}

export default Work;

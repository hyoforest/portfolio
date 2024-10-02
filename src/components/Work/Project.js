import React,{useState,useEffect} from "react";

const Project = ({ open, close, project }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!open) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);
  if (!animate && !open) return null;

  const outClose = (e) => {
    if (e.target.classList.contains('modal')) {
      close();
    }
  };
  return (
    <div className={`modal ${open ? "open" : ""}`} onClick={outClose}>
      <div className="modal_content">
        <div className="modal_head">
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
        <div className="modal_body">
          <div className="body_img"></div>
          <div className="body_text">
            <h3>{project.title}</h3>
            <p>{project.duration} / {project.member}</p>
            <p>{project.part}</p>
            <p>{project.environment}</p>
            <p>{project.function}</p>
            <p>{project.description}</p>
          </div>
          <div className="body_btn">
            <button onClick={()=>{window.open(project.url)}}>페이지 보기</button>
            <button onClick={()=>{window.open(project.url)}}>기획서보기</button>
          </div>
        </div>
        <div className="modal_foot">
          <button className="close" onClick={close}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

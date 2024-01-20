import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} >About </p>
        <h2 className={`${styles.sectionHeadText} text-[#4db9ef]`}>EduQuest AR</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
      Rooted in a commitment to revolutionize education, our platform envisions a future where learning is not just informative but a thrilling adventure. Learn how EduQuest AR enhances traditional learning methods by offering immersive experiences that turn abstract concepts into engaging activities. With a focus on users, especially children, our platform facilitates interaction with educational content through AR, fostering a deeper understanding in a fun and interactive manner. Meet the minds behind EduQuest AR and explore the journey of transforming education into an exciting exploration for young minds.
      </motion.p>

    
    </>
  );
};

export default SectionWrapper(About, "about");
// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      
//        <div className='relative w-full h-[230px]'>
//           {/* <video
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           /> */}
//           <video loop autoplay="" muted>
//     <source src="{image}" type="video/mp4" className='w-full h-full object-cover rounded-2xl' />
// </video>

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
             
//             </div>
//           </div>
//         </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");


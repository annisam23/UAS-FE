import Card from '../Card/index';
import image1 from './img/1.png';
import image2 from './img/2.png';
import image3 from './img/3.png';
import image4 from "./img/4.png";
import image5 from "./img/5.png";
import image6 from "./img/6.png";
import StyledProject from './Project.styled';
import { FaFolderOpen } from 'react-icons/fa';

const ProjectContainer = () => {
    const projects = [
    {
        id: 1,
        imageSrc: image1,
        title: 'Simple CV',
        description: 'This is a simple exercise to create a CV using HTML and CSS.',
        link: 'https://github.com/annisam23/miniProject/tree/main/Portofolio%20Boostrap%205',
        },
    {
        id: 2,
        imageSrc: image2,
        title: 'Check BMI',
        description: 'Simple BMI check using PHP programming language and if-else condition.',
        link: 'https://github.com/annisam23/STTNF-PW2/tree/main/ProjekUTS/projek1',
    },
    {
        id: 3,
        imageSrc: image3,
        title: 'Movie Database',
        description: 'is my independent project using react JS framework, and can add movies. still on process.',
        link: 'https://sttnf-frontend-programming-ivx3.vercel.app/',
    },
    {
        id: 4,
        imageSrc: image4,
        title: 'SISTA',
        description: 'Group project to create a final project seminar information system where I was assigned to create a landing page.',
        link: 'https://kreasi.nurulfikri.ac.id/anni21070ti/disini/ProjecctWeb2(Kelompok)/',
    },
    {
        id: 5,
        imageSrc: image5,
        title: 'e-Commerce',
        description: 'Group project to create a final project seminar information system where I was assigned to create a landing page.',
        link: 'https://kreasi.nurulfikri.ac.id/anni21070ti/#'
    },
    {
        id: 6,
        imageSrc: image6,
        title: 'Faskes',
        description: 'Group project to create a health facility website where I was assigned to create the back end of the project and be able to do CRUD using the CodeIgniter (CI) framework.',
        link: 'https://github.com/annisam23/STTNF-PW2/tree/main/ProjectUAS(kel)',
    },
];

return (
    <StyledProject>
    <div className="project">
        <h2 className='Pro'>My Project <FaFolderOpen/></h2>
    <div className="container">
        <div className="Detail">
        {projects.map((project) => (
            <div className="Keterangan" key={project.id}>
            <Card
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                link={project.link}
            />
            </div>
        ))}
        </div>
    </div>
    </div>

    </StyledProject>
   
);
};

export default ProjectContainer;

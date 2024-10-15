import umscriptsImg from '../../assets/projects/umscripts/thumbnail.png';
import FaceGripsImg from '../../assets/projects/facegrips/thumbnail.png';
import AiBrainBoxImg from '../../assets/projects/ai-brain-box/thumbnail.jpg';
import BrandEngineImg from '../../assets/projects/brandengine/thumbnail.png';
import CodeSheetImg from '../../assets/projects/codesheet/thumbnail.png';
import umscriptsVid from '../../assets/projects/facegrips/facegrips-video.mp4';
import FaceGripsVid from '../../assets/projects/facegrips/facegrips-video.mp4';
import CodeSheetVid from '../../assets/projects/codesheet/codesheet-video.mp4';
import AiBrainBoxVid from '../../assets/projects/ai-brain-box/ai_brainbox-video.mp4';
import BrandEngineVid from '../../assets/projects/brandengine/brandengine-video.mp4';

const projectsData = [
    {
        id: 1,
        category: 'frontend',
        image: umscriptsImg,
        name: 'umscripts',
        link: 'umscripts.netlify.app',
        video: umscriptsVid,
        description: 'My portfolio website showcases and highlights my skills, projects and experiences. It includes sections for my personal introduction, a downloadable CV, a projects showcase and a timeline of my professional experiences. The site utilizes Tailwind CSS for responsive design and enhanced user experience.',
        isLive: true,
    },
    {
        id: 2,
        category: 'frontend',
        image: FaceGripsImg,
        name: 'FaceGrips',
        link: 'facegrips.netlify.app',
        video: FaceGripsVid,
        description: 'FaceGrips demonstrates my skills in React, integrating third-party APIs and creating interactive user-friendly applications with real-time image processing features. The app allows users to upload an image and automatically detects the number of human faces present. Each face is marked along with its detected facial expressions, such as happiness, sadness or surprise. Users can then download the labeled image for future reference or analysis.',
        isLive: true,
    },
    {
        id: 3,
        category: 'fullstack',
        image: CodeSheetImg,
        name: 'CodeSheet',
        link: 'https://example.com',
        video: CodeSheetVid,
        description: 'CodeSheet is a full-stack web application built using the MERN stack, designed for developers to manage and organize their code snippets. The platform features user authentication, enabling sign-up and sign-in functionality. Users can store, edit, update or delete code snippets along with relevant comments. The app utilizes Prism.js to display code snippets in a visually appealing coding terminal view box format, enhancing readability.',
        isLive: false,
    },
    {
        id: 4,
        category: 'fullstack',
        image: AiBrainBoxImg,
        name: 'AI BrainBox',
        link: 'https://example.com',
        video: AiBrainBoxVid,
        description: 'An AI web app, built with MERN stack and python libraries, is designed to streamline various tasks like text text summarizing, grammar correction, audio file transcription and code generation. The application leverages powerful libraries such as Streamlit, Pytube, Voice Recognition, Gramformer and Code-Llama.',
        isLive: false,
    },
    {
        id: 5,
        category: 'frontend',
        image: BrandEngineImg,
        name: 'BrandEngine',
        link: 'brandengine.netlify.app',
        video: BrandEngineVid,
        description: 'BrandEngine is a dynamic web application featuring user authentication and a comprehensive brand catalog organized by categories. Users can explore various brands, view detailed information including social media followers, ratings and reviews. Users cab manage their reviews through viewing, editing, updating or deleting entries. Additionally, it includes a robust email subscription system and a functional contact form.',
        isLive: true,
    },
];

export default projectsData;
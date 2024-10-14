import umscriptsImg from '../../assets/projects/umscripts/thumbnail.png';
import FaceGripsVid from '../../assets/projects/facegrips/facegrips-video.mp4';
import CodeSheetVid from '../../assets/projects/codesheet/codesheet-video.mp4';
import AiBrainBoxVid from '../../assets/projects/ai-brain-box/ai_brainbox-video.mp4';
import BrandEngine from '../../assets/projects/ai-brain-box/ai_brainbox-video.mp4';

const projectsData = [
    {
        id: 1,
        category: 'frontend',
        image: umscriptsImg,
        name: 'umscripts',
        link: 'umscripts.netlify.app',
        video: '/path/to/video',
        description: 'My portfolio website showcases and highlights my skills, projects and experiences. It includes sections for my personal introduction, a downloadable CV, a projects showcase and a timeline of my professional experiences. The site utilizes Tailwind CSS for responsive design and enhanced user experience.',
    },
    {
        id: 2,
        category: 'frontend',
        image: FaceGripsVid,
        name: 'FaceGrips',
        link: 'https://example.com',
        video: FaceGripsVid,
        description: 'FaceGrips demonstrates my skills in React, integrating third-party APIs and creating interactive user-friendly applications with real-time image processing features. The app allows users to upload an image and automatically detects the number of human faces present. Each face is marked along with its detected facial expressions, such as happiness, sadness or surprise. Users can then download the labeled image for future reference or analysis.',
    },
    {
        id: 3,
        category: 'fullstack',
        image: 'https://example.com',
        name: 'CodeSheet',
        link: 'https://example.com',
        video: CodeSheetVid,
        description: 'CodeSheet is a full-stack web application built using the MERN stack, designed for developers to manage and organize their code snippets. The platform features user authentication, enabling sign-up and sign-in functionality. Users can store, edit, update or delete code snippets along with relevant comments. The app utilizes Prism.js to display code snippets in a visually appealing coding terminal view box format, enhancing readability.',
    },
    {
        id: 4,
        category: 'fullstack',
        image: 'https://example.com',
        name: 'AI BrainBox',
        link: 'https://example.com',
        video: AiBrainBoxVid,
        description: 'An AI web app, built with MERN stack and python libraries, is designed to streamline various tasks like text text summarizing, grammar correction, audio file transcription and code generation. The application leverages powerful libraries such as Streamlit, Pytube, Voice Recognition, Gramformer and Code-Llama.',
    },
    {
        id: 5,
        category: 'frontend',
        image: 'https://example.com',
        name: 'Brand - SearchEngine',
        link: 'https://example.com',
        video: BrandEngine,
        description: 'An AI web app, built with MERN stack and python libraries, is designed to streamline various tasks like text text summarizing, grammar correction, audio file transcription and code generation. The application leverages powerful libraries such as Streamlit, Pytube, Voice Recognition, Gramformer and Code-Llama.',
    },
];

export default projectsData
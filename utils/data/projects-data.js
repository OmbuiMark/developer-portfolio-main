import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Social Media Content Automation',
        description: "Our team built a powerful AI solution that automates content creation for social media platforms. Using GPT-based models, we generate optimized posts, captions, and even engaging visuals for platforms like Instagram, Facebook, and LinkedIn. We’ve integrated scheduling and performance analytics to ensure maximum engagement.",
        tools: ['GPT-4 API', 'Hootsuite API', 'Express', 'AWS S3', 'Node.js', 'Facebook Graph API'],
        role: 'AI Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 2,
        name: 'Apollo AI Lead Scraper with Outbound Calling',
        description: 'We developed a highly efficient AI-powered lead scraping system using Apollo AI. This system identifies, scrapes, and stores high-quality leads. We also integrated outbound calling functionalities to engage leads directly through automated voice interactions, enhancing outbound sales efficiency.',
        tools: ['Apollo AI', 'Twilio API', 'Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'WebRTC'],
        role: 'Lead Automation Specialist',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'AI-Powered Insurance Assistant',
        description: 'Our AI assistant helps users navigate insurance options by guiding them through the selection process. It uses NLP to answer insurance-related questions, and its recommendation engine provides tailored policy suggestions based on user input.',
        tools: ['OpenAI API', 'Dialogflow', 'Node.js', 'AWS Lambda', 'Twilio', 'MongoDB'],
        role: 'AI Solutions Architect',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Real Estate Lead Generation & Automation',
        description: "Our AI-driven real estate platform provides personalized property recommendations and appointment scheduling. It incorporates GPT models for client interaction and integrates with property databases to streamline the lead generation process. The automation enhances conversion rates by offering real-time insights to real estate agents.",
        tools: ['GPT-4 API', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'AWS SES'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'AI Chatbots for Customer Support Automation',
        description: 'We developed advanced AI chatbots for automated customer support in sectors like e-commerce and healthcare. These bots handle a wide range of inquiries, reduce response times, and provide a seamless user experience across multiple platforms.',
        tools: ['Dialogflow', 'OpenAI API', 'Node.js', 'Express', 'AWS Lex', 'Facebook Messenger API', 'Slack API'],
        role: 'AI Integration Specialist',
        code: '',
        demo: '',
        image: travel,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
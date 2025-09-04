import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Bashir",
  lastName: "Hanafi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "muhammadbashirhanafi@gmail.com",
  location: "Asia/Makassar", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Connect with me</>,
  description: (
    <>
      I enjoy sharing my thoughts on design, technology, and how creativity meets engineering—often from the lens of building AI-powered products and solving real-world problems.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bashirhanafi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bashirhanafi",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <h3>Hello world! <br/>I&apos;m Bashir Hanafi 👋🏻</h3>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      A Software AI Engineer who loves data, code, and 🍵
      <br /> I love turning ideas to intelligence system
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I am a graduate of a Bachelor of Computer Science with a focus on Data Science, looking forward to becoming an Software AI engineer. Certified TensorFlow Developer Certificate (TFDC) with strong interests in software engineering, data analytics, and machine learning development. Proficient hard skills including Python, TensorFlow, PyTorch, Fast API, Next.js, React.js, and more with deep mathematical understanding. I’ve been actively involved in work experiences, internships, academic research, and over 10 national competitions while maintaining a strong academic performance. My work has focused on real-world challenges in areas such as tourism, education, and disaster response. I’m passionate about using technology to develop meaningful and innovative solutions
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ITINERGO",
        timeframe: "2023 - 2025",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Led and developed 2 machine learning models (recommendation system and LLMs) to deliver personalized travel itinerary recommendations
          </>,
          <>
            Collected, cleaned, and preprocessed from over 20 cities in Indonesia, totaling 2.9k attractions from Google Maps and social media
          </>,
          <>
            Deployed machine learning models with FastAPI to ensure scalability and integration with the backend
          </>,
          <>
            Achieved a five-star rating and was downloaded by over 400+ users on the Play Store, enhancing efficiency, flexibility, and personalization for travel planning
          </>,
        ],
        images: []
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: "Computer Science Lab FMIPA ULM",
        timeframe: "2024",
        role: "Coordinator Assistant Lecturer of Data Structures and Algorithms",
        achievements: [
          <>
           Coordinated and managed the class of 56 students and 8 assistant lecturers to ensure effective class management
          </>,
          <>
            Taught course material and discussion for 8 sessions to provide an in-depth understanding of DSA concepts
          </>,
          <>
            Evaluated over 8 students through discussion, Q&A sessions, problem-solving-based assignments, and technical guidance
          </>,
        ],
        images: [],
      },
      {
        role: "Project Evaluator of Image Processing",
        achievements: [
          <>
            Assessed mid-term image processing projects and evaluated functionality, user interface, and stability of web/application
          </>,
          <>
            Evaluated over 10 students with in-depth questioning to engage understanding of image processing concepts and methodologies
          </>,
          <>
            rovided fair grading with rubric assessment based on technical proficiency, project complexity, and overall execution
          </>,
        ],
        images: [],
      },
      {
        company: "Yayasan Hasnur Centre - HAFECS",
        timeframe: "2024",
        role: "Junior Researcher",
        achievements: [
          <>
           Completed over 30 projects with unit, company, and national scope, contributing to knowledge & insight on the educational sector
          </>,
          <>
            Final project: Applied FP-Growth algorithms to a dataset of 4.3k+ MSIB Batch 6 registrants from Yayasan Hasnur Centre to generate actionable insight and optimize Kampus Merdeka outreach strategies
          </>,
          <>
            Performed multi-linear regression analysis to study the impact of national exam (UN) scores and accreditation scores after the abolition of the national exam, covering 220+ schools in South Kalimantan, to evaluate the impacts
          </>,
          <>
            Analysis of 500+ papers on the use of Generative AI in STEAM education (2020-2024) using bibliometric methods to identify global trends and presenting findings at the International Conference on Current Research Education (ICo-CRE)
          </>,
        ],
        images: [],
      },
      {
        company: "Bangkit Academy Ied by Google, GoTo, Traveloka",
        timeframe: "2023 - 2024",
        role: "Machine Learning Cohort",
        achievements: [
          <>
           Graduate with Distinction (Top 10%) from 4,5k+ cohorts with average score: 96,11. 
          </>,
          <>
            Selected as one of the Top 10 Best Product-based Capstone Projects (Itinergo) from 647 teams, secured IDR 140 million incubation funding for startup development from Google and Dirjen Ristekdikti
          </>,
          <>
            Completed 920+ hours of mandatory courses, earning Ahead of Schedule status and recognized as one of the most active 1k students in the class focusing on technology and soft skills
          </>,
          <>
            Passed TensorFlow Developer Certificate (TFDC) and demonstrated proficiency in the artificial intelligence field
          </>,
        ],
        images: [],
      },
      {
        company: "APEHIPO",
        timeframe: "2023",
        role: "Mobile Developer",
        achievements: [
          <>
           Completed over 30 projects with unit, company, and national scope, contributing to knowledge & insight on the educational sector
          </>,
          <>
            Final project: Applied FP-Growth algorithms to a dataset of 4.3k+ MSIB Batch 6 registrants from Yayasan Hasnur Centre to generate actionable insight and optimize Kampus Merdeka outreach strategies
          </>,
          <>
            Performed multi-linear regression analysis to study the impact of national exam (UN) scores and accreditation scores after the abolition of the national exam, covering 220+ schools in South Kalimantan, to evaluate the impacts
          </>,
          <>
            Analysis of 500+ papers on the use of Generative AI in STEAM education (2020-2024) using bibliometric methods to identify global trends and presenting findings at the International Conference on Current Research Education (ICo-CRE)
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Lambung Mangkurat",
        description: <>Bachelor of Computer Science</>,
        timeframe: "2021 - 2025",
        achivements: [
          <> 3rd Best Graduate of the Faculty of Mathematics and Natural Sciences in the June 2025 Yudisium </>,
          <> Thesis: Automatic Monitoring of  Natural Disasters through Eyewitness Messages on Social Media Using BERT Variants Algorithm </>
        ],
      },
    ],
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Achievements",
    achivements: [
    "Top 10 Product-based Capstone Project & Incubation Funding IDR 140 M from Google & Dirjen Ristekdikti",
      "Machine Learning Graduate with Distinction Predicate Bangkit Academy 2023 Batch 2",
      "Program Kreativitas Mahasiswa bidang Kewirausahaan (PKM-K) 2023 Funded",
      "Business Funded Arutmin Got Talent",
      "Finalist of Fordigi Goes to Campus Hackathon Challenge BUMN 2023 chapter Banjarmasin",
      "Finalist of National Business Plan Competition Greenovation Quest ITS 2023",
      "Semifinalist of the International Business Plan Competition, StudentsxCEOs International Summit",
      "Best Commendation Journey Awardee of Company Strategy Battle 2024 The New You Institute",
      "2nd Awardee of Best Business Stand Grand Opening Wirausaha Merdeka Kampus Merdeka ULM 2023",
      "Speaker of Study Jam #6 GDSC Universitas Negeri Gorontalo",
      "Top 20 Awardee of National Essay Writing Competition 2022 UNIKA Santo Thomas"
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/certificates",
  label: "Certification",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  
  images: [
    {
      src: "/images/gallery/wtl11v8x_1722887806162 (1)_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Bangkit Distinction.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/1741341934143_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Mathematics for Machine Learning and Data Science_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Machine Learning Specialization_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/DeepLearning AI TensorFlow Developer_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Ask Questions to Make Data-Driven Decisions_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
        {
      src: "/images/gallery/Foundations Data Data Everywhere_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Prepare Data for Exploration_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Process Data from Dirty to Clean_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Analyze Data to Answer Questions_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Share Data Through the Art of Visualization_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Crash Course with Python_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Using Python to Interact with the Operating System_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Introduction to Git and GitHub_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sertifikat_course_251_762355_231022103017_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sertifikat_course_261_762355_040123122107 (1)_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sertifikat_course_382_762355_291022004128_page-0001.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

import Tag from "./Tag";
import { HoverEffect } from "./ui/card-hover-effect";

const CaseStudies = () => {
  return (
    <div className=" py-40 flex flex-col items-center">
      <Tag subject="Case Studies" heading="Transforming Ideas into Reality" />

      <p className="text-center mb-10 mx-10 text-sm md:text-xl text-gray-300">
        Here’s how I’ve helped businesses like yours build dynamic websites and
        apps that deliver results:
      </p>

      <HoverEffect items={projects} />
    </div>
  );
};

export default CaseStudies;

export const projects = [
  {
    title:
      "Transforming Learning Experiences with Our Education and Consultancy Platform",
    tags: ["Empowering Students and Institutions through Tailored Solutions"],
    imageLink:
      "https://github.com/PallaviBobde/casestudies/blob/main/1.png?raw=true",
    overview:
      "Our client, an educational consultancy firm, aimed to create a user-friendly platform that connects students with the right educational resources and institutions. The goal was to streamline the consultation process and enhance user experience.",
    challenges: [
      "Difficulty in navigating the website led to a high bounce rate.",
      "Lack of integration between educational resources and consultation services.",
    ],
    solution:
      "We developed an intuitive website using React and Node.js, featuring easy navigation, a robust search functionality, and a responsive design. Additionally, we integrated a chatbot for instant consultation services.",
    result:
      "The revamped platform resulted in a 60% increase in user engagement, a 40% reduction in bounce rates, and a significant uptick in consultation bookings.",
  },
  {
    title: "Greening the Planet with Our Donation Platform",
    tags: ["Connecting Nature Lovers with Environmental Initiatives"],
    imageLink:
      "https://github.com/PallaviBobde/casestudies/blob/main/2.png?raw=true",
    overview: "Our client, a non-profit organization, sought to create a platform that encourages tree planting and land donation initiatives. The goal was to raise awareness and facilitate donations for environmental causes.",
    challenges: ["Limited awareness about the importance of tree planting and land conservation.", "Lack of an engaging platform for users to contribute to environmental causes."],
    solution: "We designed a visually appealing website using Tailwind CSS, featuring engaging content about the benefits of tree planting and land donation. The platform included an interactive map showing donation impact and a straightforward donation process.",
    result: "The initiative led to a 75% increase in donations within the first quarter, with thousands of trees planted and several acres of land preserved.",
  },
  {
    title: "Elevating Business Operations with Innovative Software Solutions",
    tags: ["Crafting Custom Software for Industry Leaders"],
    imageLink:
      "https://github.com/PallaviBobde/casestudies/blob/main/3.png?raw=true",
    overview: "Our client, a software development company, required a modern website to showcase their diverse range of services and attract new clients. The aim was to highlight their expertise in creating custom software solutions.",
    challenges: ["Outdated website design that failed to reflect the company’s innovation.", "Difficulty in conveying the range of services and expertise."],
    solution: "We created a sleek, modern website using Next.js that showcased their portfolio, client testimonials, and detailed service descriptions. We incorporated a blog for sharing industry insights and updates.",
    result: "The new website led to a 50% increase in lead generation and enhanced the company’s online visibility, establishing them as a thought leader in the software industry.",
  },
  {
    title: "Finding Care, Connecting Hearts",
    tags: ["Bridging Families with Trusted Local Caregivers"],
    imageLink:
      "https://github.com/PallaviBobde/casestudies/blob/main/4.png?raw=true",
    overview: "Our client wanted to create a platform that connects families with quality local caregivers for children, seniors, and special needs. The goal was to simplify the search and selection process for families.",
    challenges: ["Trust issues related to finding reliable caregivers.", "Complex user interface making it difficult for families to find suitable caregivers."],
    solution: "We developed a user-friendly website featuring caregiver profiles, reviews, and a secure messaging system. The site included a matching algorithm to connect families with the best caregivers based on their specific needs.",
    result: "Within the first six months, the platform facilitated over 500 successful caregiver placements, with a satisfaction rate of 90% among families and caregivers.",
  },
  {
    title: "Your Financial Companion: Simplifying Money Management",
    tags: ["Create Wallets for Every Financial Need"],
    imageLink:
      "https://github.com/PallaviBobde/casestudies/blob/main/5.png?raw=true",
    overview: "WalletWise, an innovative financial management app, aimed to help users organize their finances by creating separate wallets for various financial needs. The goal was to promote better budgeting and spending habits.",
    challenges: ["Users struggled with traditional budgeting methods and financial tracking.", "The need for an engaging and user-friendly interface for managing multiple wallets."],
    solution: "We designed a mobile app using React Native that allows users to create customizable wallets for different financial goals. The app features intuitive graphs for tracking spending, reminders for bill payments, and insights on saving.",
    result: "This is in progress ...",
  },
];

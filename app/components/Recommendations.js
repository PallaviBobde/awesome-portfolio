import Tag from "./Tag";
import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  return (
    <div className="py-40 flex flex-col items-center">
      <Tag
        subject="Recommendations"
        heading="Hear from Those Who’ve Worked with Me"
      />
      <div className="flex flex-wrap mt-5 justify-center">
        <RecommendationCard
          imgLink="https://media.licdn.com/dms/image/v2/D5603AQHNXrbiPjz6RQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703351185320?e=1733961600&v=beta&t=o5kPj3-xX42bBkRil7f7c33FWZ7womtJowReEv-KVXY"
          name="Radhika Jalan"
          title="from GrayToGreen"
          comment="I had an opportunity to work with pallavi on one of the freelance project and i must say she is a highly skilled working professional who understands the requirements of a project and make sure a to breakdown the challenges to address it before starting the project , she really has a systematic approach towards works and totally understands team dynamics. Highly recommend to anyone looking for a valuable addition to the tech team !! "
        />
        <RecommendationCard
          imgLink="https://media.licdn.com/dms/image/v2/D4D03AQE8xORGTkcnNw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706011351482?e=1733961600&v=beta&t=DIc6u5LINOrL0BYt7SQuxz1ZnhK1DEfY_pxgNMhOHeo"
          name="Tanish Malakar"
          title="from Bajaj Finserv Health"
          comment="I had the pleasure of working with Pallavi, and I can confidently say she is an outstanding frontend developer. Her expertise in both Web and App Development, using React and React Native, makes her an invaluable asset to any team. Additionally, her eye for web design ensures that every project not only functions flawlessly but looks great too. Pallavi has seamlessly delivered multiple projects, always meeting or exceeding expectations. She is a versatile and dedicated professional, and I highly recommend her for any software development role! "
        />
        <RecommendationCard
          imgLink="https://media.licdn.com/dms/image/v2/D4D03AQEtFq8NIDepDQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714966675687?e=1733961600&v=beta&t=TPc-19h7lLcjqtQIINQS73U0Jkdqo1NQANH3iEN0At0"
          name="Rupesh Garhwal"
           title="from Bajaj Finserv Health"
          comment="I’ve had the pleasure of working closely with Pallavi Bobde, and I can confidently say that she is a top-tier web designer and developer. Her expertise in React.js and Next.js allows her to create unique, responsive websites that stand out and perform brilliantly across all devices. She seamlessly manages projects from start to finish, ensuring everything runs smoothly and securely. "
        />
      </div>

      {/* <p className="text-center text-xl mb-10">
       Whether you need a website that stands out or an app that delivers real results,<br/> I’m here to help. Let’s start creating together!
      </p> */}
      {/* <HiglightedButton btnTitle="Let's Get Started" btnLink="mailto:pallavibobde1@gmail.com" /> */}
    </div>
  );
};

export default Recommendations;

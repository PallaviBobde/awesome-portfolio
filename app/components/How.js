import Tag from "./Tag";
import HiglightedButton from "./HiglightedButton";
import HowCard from "./HowCard";

const How = () => {
  return (
    <div className=" py-20 flex flex-col items-center">
      <Tag
        subject="How Can I Help You?"
        heading="Your Digital Journey Starts Here"
      />

      <p className="text-center mb-10 text-sm md:text-xl text-gray-300">
        Are you a business owner looking for an exceptional digital presence,
        <br /> or an entrepreneur ready to launch an app that sets you apart?
        <br /> Choose what fits your goals:
      </p>
      <div className="flex flex-wrap justify-center">
        <HowCard
          isWebsite
          bgColor="#5de0e6"
          heading="Website Development"
          title1="Your website 🖥️  is your digital storefront! I create beautiful, user-friendly websites that showcase your brand and help you connect with your customers. Whether you need a simple portfolio or a full e-commerce site, I've got you covered. Let’s make your online presence shine!"
          content1="Want to get started?"
          btnText="Book Your Free Consultation"
          imgLink="https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?t=st=1728335309~exp=1728338909~hmac=c8650a8f555114ceb3e217d899ea5a1e0368a42b404f8e05913c44f8a56cb9bd&w=1480"
        />
        <HowCard
          bgColor="#5de0e6"
          heading="App Development"
          title1="Got an idea for an app? 📱 Let’s turn it into reality! I design and develop apps that are fun to use and make everyday tasks easier for your users. From brainstorming to launch, I’ll be with you every step of the way, ensuring your app is just right for your audience."
          content1="Ready to create something amazing?"
           btnText="Schedule Your Free Call"
           imgLink="https://img.freepik.com/free-vector/sport-onboarding-app-screens_23-2148410586.jpg?t=st=1728335507~exp=1728339107~hmac=2a1fb48a649191a3f295d378390fba020a71c2641966e867d6a960686b1a6292&w=1480"
        />
      </div>
    </div>
  );
};

export default How;

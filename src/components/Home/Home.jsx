import Banner from "../Banner/Banner";
import CategoryLists from "../CategoryLists/CategoryLists";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryLists></CategoryLists>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
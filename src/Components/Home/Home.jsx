import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import Featuredjobs from "../Featuredjobs/Featuredjobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <Featuredjobs></Featuredjobs>
            <h2>This is Home!</h2>
        </div>
    );
};

export default Home;
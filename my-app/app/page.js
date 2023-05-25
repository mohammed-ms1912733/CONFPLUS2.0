
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MainPConfContainer from "./components/MainPConfContainer";
import LoginSection from "./components/LoginSection";
import Footer from "./components/Footer";
import UsersRepo from "../app/api/users/users-repo"
const repo = new UsersRepo()

export default function Home() {
    const organizers = repo.getOrganizers()
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Stats></Stats>
            <MainPConfContainer></MainPConfContainer>
            <LoginSection allOrganizers={organizers}></LoginSection>
            <Footer></Footer>
        </div>
    );
}

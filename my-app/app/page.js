import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MainPConfContainer from "./components/MainPConfContainer";
import LoginSection from "./components/LoginSection";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Stats></Stats>
            <MainPConfContainer></MainPConfContainer>
            <LoginSection></LoginSection>
            <Footer></Footer>
        </div>
    );
}

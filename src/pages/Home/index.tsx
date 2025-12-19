import Header from "src/components/common/Header";
import ServiceCardGrid from "src/components/Home/ServiceCardGrid";
import StatsSection from "src/components/Home/StatsSection";
import Footer from "src/components/common/Footer";
import * as S from "./style";

const HomePage = () => {
  return (
    <S.PageContainer>
      <Header />
      <S.MainContent>
        <S.ContentSection>
          <ServiceCardGrid />
        </S.ContentSection>
        <S.ContentSection>
          <StatsSection />
        </S.ContentSection>
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
};

export default HomePage;

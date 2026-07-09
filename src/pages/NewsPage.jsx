import News from '../components/sections/News';
import Container from '../components/layout/Container';

const NewsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Container className="py-12">
        <News />
      </Container>
    </div>
  );
};

export default NewsPage;

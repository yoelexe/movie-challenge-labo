import { Movies } from "./movies/Movies";
import { Layout } from "./layouts/Layout";
import { Carousel } from "./carousel/Carousel"

//TODO: MainLayout
export const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Movies />
    </Layout>
  );
};

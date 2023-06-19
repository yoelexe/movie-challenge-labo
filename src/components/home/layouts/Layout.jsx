import { Header } from "./Header";
import { Footer } from "./Footer";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

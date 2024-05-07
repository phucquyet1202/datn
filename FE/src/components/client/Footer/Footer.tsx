import { FooterBottom, FooterTop } from "../..";

const Footer = () => {
  return (
    <div className="bg-light dark:bg-dark">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <FooterTop />
        <hr className="my-6 border-divideLight sm:mx-auto dark:border-divideDark lg:my-8" />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;

import Footer from "./Footer";

export default function Container({ children, dir, pos, atHome, isMobile }) {
  return (
    <main className="flex flex-col justify-center px-8 text-white bg-white dark:bg-black dark:text-black">
      {children}
      <Footer />
    </main>
  );
}

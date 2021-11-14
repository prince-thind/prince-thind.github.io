import Header from "./header";
// import style from "../styles/globals.module.scss";

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );

  function Footer() {
    return (
      <footer className="main-footer">
        Copyright &copy; Prince Thind
      </footer>
    );
  }
}

export default Layout;

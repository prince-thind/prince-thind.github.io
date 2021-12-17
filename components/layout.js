import Header from "./header";

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

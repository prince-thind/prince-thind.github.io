import Header from "./header";

function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );

  function Footer() {
    //to do update footer
    return (
      <footer className="main-footer">Copyright &copy; Prince Thind</footer>
    );
  }
}

export default Layout;

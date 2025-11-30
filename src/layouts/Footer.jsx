export default function Footer() {
  return (
    <footer className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} desined by Kolcman
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo in github
          </a>
        </div>
      </div>
    </footer>
  );
}

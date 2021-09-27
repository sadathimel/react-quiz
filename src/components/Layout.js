import classes from '../styles/Layout.module.css'
import Nav from "./nav";

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
            <div className="container">
                {children}
            </div>
      </main>
    </>
  );
}

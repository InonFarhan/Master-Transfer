import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
import { HomePage } from './views/HomePage';
import { SignUp } from './views/SignUp';
import { Login } from './views/Login';
import { UserConnecting } from './views/UserConnecting';
import { ContactPage } from './views/ContactPage';
import { ContactDetails } from './views/ContactDetails'
import { ContactEdit } from './views/ContactEdit';
import './assets/scss/global.scss'

function App() {
  return (
    <Router>
      <section className="main-app">
        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/edit/:id?" element={<ContactEdit />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <footer>
          <AppFooter />
        </footer>

      </section>
    </Router>
  );
}

export default App;
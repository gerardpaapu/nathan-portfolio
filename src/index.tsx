import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso'
import AboutMe from './components/Aboutme.tsx'
import Contact from './components/Contact.tsx'
import ProjectList from './components/Projects.tsx'
import NeibourGood from './components/NeibourGoods.tsx'
import Home from './components/Home.tsx'
import { NotFound } from './components/_404.tsx'
import './main.css'
import Footer from './components/Footer.tsx'
import Nav from './components/Nav.tsx'

export function App() {
  return (
    <LocationProvider>
      <div className="bg-glass">
        <Nav />
        <main>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/neigbourgoods" component={NeibourGood} />
            <Route path="/about" component={AboutMe} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </main>
        <Footer />
      </div>
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}

import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Article from "./pages/article";
import Legal from "./pages/legal";
import About from "./pages/about";
import { WhatsAppFloating } from "./components/whatsapp-link";
import { Header, Footer } from "./components/layout";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/a-propos" component={About} />
        <Route path="/articles/:slug" component={Article} />
        <Route path="/mentions-legales" component={Legal} />
        <Route path="/confidentialite" component={Legal} />
        <Route>
          <main className="container inner-page">
            <h1>Page introuvable.</h1>
            <a href="/">Retour à l’accueil</a>
          </main>
        </Route>
      </Switch>
      <Footer />
      <WhatsAppFloating />
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;

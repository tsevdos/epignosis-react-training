import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, Heading } from "@epignosis_llc/gnosis";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
// Demos
// Hooks
import HookUseState from "./examples/hooks/HookUseState";
import HookUseEffect from "./examples/hooks/HookUseEffect";
import HookUseEffect2 from "./examples/hooks/HookUseEffect2";
import HookUseEffect3 from "./examples/hooks/HookUseEffect3";
import HookUseEffect4 from "./examples/hooks/HookUseEffect4";
import HookUseReducer from "./examples/hooks/HookUseReducer";
// Forms
import SimpleInput from "./examples/forms/SimpleInput";
import InputTextarea from "./examples/forms/InputTextarea";
import SelectRadioButtonCheckbox from "./examples/forms/SelectRadioButtonCheckbox";
import FormSubmit from "./examples/forms/FormSubmit";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="container">
          <div className="main-nav">
            <MainNav />
          </div>
          <div className="content-container">
            <Header />

            <main>
              <Switch>
                {/* Hooks */}
                <Route exact path="/hooks/use-state" component={HookUseState} />
                <Route
                  exact
                  path="/hooks/use-effect"
                  component={HookUseEffect}
                />
                <Route
                  exact
                  path="/hooks/use-effect-2"
                  component={HookUseEffect2}
                />
                <Route
                  exact
                  path="/hooks/use-effect-3"
                  component={HookUseEffect3}
                />
                <Route
                  exact
                  path="/hooks/use-effect-4"
                  component={HookUseEffect4}
                />
                <Route
                  exact
                  path="/hooks/use-reducer"
                  component={HookUseReducer}
                />
                {/* Forms */}
                <Route
                  exact
                  path="/forms/simple-input"
                  component={SimpleInput}
                />
                <Route
                  exact
                  path="/forms/input-and-textarea"
                  component={InputTextarea}
                />
                <Route
                  exact
                  path="/forms/select-radio-button-checkbox"
                  component={SelectRadioButtonCheckbox}
                />
                <Route
                  exact
                  path="/forms/form-submit-async"
                  component={FormSubmit}
                />
                <Route exact path="/">
                  <Heading as="h1">Demos</Heading>
                </Route>
              </Switch>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

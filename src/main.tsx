import App from './App.tsx'
import '@progress/kendo-theme-default/dist/all.css';
import r2wc from "@r2wc/react-to-web-component";

const MyAppComponent = r2wc(App);

customElements.define("my-web-component", MyAppComponent);

import 'bootstrap/dist/js/bootstrap.bundle.min';
import r2wc from "@r2wc/react-to-web-component";
import * as React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkboxIcon, checkboxCheckedIcon, checkCircleIcon } from '@progress/kendo-svg-icons';

import bootstrap from './lib/bootstrap/bootstrap.min.css?inline';
import kendoThemeBootstrap from './lib/kendo-theme-bootstrap/all.css?inline';

interface MyComponentProps {
    jwt: string;
}

function injectShadowStyles(shadowRoot: ShadowRoot | null) {
    if (shadowRoot) {
        // Inject bundled CSS
        const bootstrapCss = document.createElement('style');
        bootstrapCss.id = 'bootstrap-css';
        bootstrapCss.textContent = bootstrap;
        shadowRoot.appendChild(bootstrapCss);

        // Inject Bootstrap body styles for shadow DOM
        const bootstrapBodyCss = document.createElement('style');
        bootstrapBodyCss.id = 'bootstrap-body-style';
        bootstrapBodyCss.textContent = `
            :host, div, p, input, select, label, button, a, pre, code {
                margin: 0;
                font-family: var(--bs-body-font-family, "Helvetica Neue", Helvetica, Arial, sans-serif);
                font-size: var(--bs-body-font-size, 1rem);
                font-weight: var(--bs-body-font-weight, 400);
                line-height: var(--bs-body-line-height, 1.5);
                color: var(--bs-body-color, #212529);
                background-color: var(--bs-body-bg, #fff);
                -webkit-text-size-adjust: 100%;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
            }
        `;
        shadowRoot.appendChild(bootstrapBodyCss);

        const kendoCss = document.createElement('style');
        kendoCss.id = 'kendo-css';
        kendoCss.textContent = kendoThemeBootstrap;
        shadowRoot.appendChild(kendoCss);
    }
}

const NHSNLinkConfigComponent = ({ jwt }: MyComponentProps) => {

    React.useEffect(() => {
        const shadowRoot = document.querySelector('nhsnlink-config')?.shadowRoot;
        injectShadowStyles(shadowRoot ?? null);
    }, []);

    const [step, setStep] = React.useState(0);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const htmlCode = `
<script src="https://johnbritton.github.io/react-demo/nhsnlink-config.js"></script>
<nhsnlink-config jwt="TEST_ABC123EFG"></nhsnlink-config>
  `;


    return (
        <>
            <div>
                <p>This is a proof of concept for a web component built with React and KendoReact (Free).</p>
                <p>JWT: {jwt}</p>
                <div className="mb-4" style={{ maxWidth: 800 }}>
                    <PanelBar>
                        <PanelBarItem expanded={false} title="How to use">
                            <div>
                                <div>Embed the following code in any HTML page to use this web component:</div>
                                <pre><code>{htmlCode}</code></pre>
                            </div>
                        </PanelBarItem>
                    </PanelBar>
                </div>
                {step === 0 && (
                    <div>
                        <p>Complete the following steps to setup the NHSNLink application...</p>
                        <div className="list-group list-group-flush mt-4">
                            <a href="#" className="list-group-item list-group-item-action"><SvgIcon icon={checkboxCheckedIcon} /> Compliance attestation</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Facility information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Server information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Authentication</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Connection test</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Census</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Normalizations</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxIcon} /> Operation</a>
                        </div>
                        <Button className="mt-4" onClick={nextStep}>Continue</Button>
                    </div>
                )}

                {step === 1 && (
                    <div className="wizard-step">
                        <h4>Facility information</h4>
                        <div className="fw-bold mt-4">NHSN Org ID: 12345</div>
                        <div className="fw-bold">Health System Name: My Health System </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Organization name(s)</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Time zone</label>
                            <select className="form-select">
                                <option selected>Select time zone</option>
                                <option value="1">US/Pacific</option>
                                <option value="2">US/Mountain</option>
                                <option value="3">US/Central</option>
                                <option value="4">US/Eastern</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Physical address</label>
                            <input type="text" className="form-control" id="exampleFormControlInput3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput4" className="form-label">Technical contact phone number</label>
                            <input type="text" className="form-control" id="exampleFormControlInput4" />
                        </div>
                        <div className="mt-3">
                            <Button className="me-3" onClick={nextStep}>Save & continue</Button>
                            <Button className="me-3" onClick={prevStep}>Cancel</Button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="wizard-step">
                        <h4>Server information</h4>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput5" className="form-label">FHIR R4 Rest Metadata URL (Production)</label>
                            <input type="text" className="form-control" id="exampleFormControlInput5" />
                        </div>
                        <div className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput6" className="form-label">EHR vendor</label>
                                <select className="form-select">
                                    <option selected>Select vendor</option>
                                    <option value="1">Epic</option>
                                    <option value="2">Cerner</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                            <label htmlFor="exampleFormControlInput7" className="form-label">Authentication type</label>
                            <select className="form-select">
                                <option selected>Select type</option>
                                <option value="1">JWKS</option>
                                <option value="2">Client ID & secret</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <Button className="me-3" onClick={nextStep}>Save & continue</Button>
                            <Button className="me-3" onClick={prevStep}>Cancel</Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="wizard-step">
                        <p><SvgIcon icon={checkCircleIcon} /> NHSNLink is successfully configured!</p>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action"><SvgIcon icon={checkboxCheckedIcon} /> Compliance attestation</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Facility information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Server information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Authentication</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Connection test</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Census</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Normalizations</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><SvgIcon icon={checkboxCheckedIcon} /> Operation</a>
                        </div>
                        <Button className="mt-4" onClick={prevStep}>Go back</Button>
                    </div>
                )}
            </div>
        </>
    );
};
const NHSNLinkConfigWebComponent = r2wc(NHSNLinkConfigComponent, {
    props: { jwt: "string" },
    shadow: "open"
});

customElements.define("nhsnlink-config", NHSNLinkConfigWebComponent);
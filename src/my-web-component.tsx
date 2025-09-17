
import '@progress/kendo-theme-bootstrap/dist/all.css';
import r2wc from "@r2wc/react-to-web-component";
import * as React from 'react';
import { Icon } from '@progress/kendo-react-common';

import './styles.css';
import { Button } from '@progress/kendo-react-buttons';

interface MyComponentProps {
    jwt: string;
}

const MyComponent = ({ jwt }: MyComponentProps) => {
    const [step, setStep] = React.useState(0);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <div>
                <p>This is a proof of concept for a web component built with React and KendoReact (Free).</p>
                <p>JWT: {jwt}</p>
                {step === 0 && (
                    <div>
                        <p>Complete the following steps to setup the NHSNLink application...</p>
                        <div className="list-group list-group-flush mt-4">
                            <a href="#" className="list-group-item list-group-item-action"><Icon name="checkbox-checked" /> Compliance attestation</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Facility information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Server information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Authentication</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Connection test</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Census</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Normalizations</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox" /> Operation</a>
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
                        <p><Icon name="check-circle" /> NHSNLink is successfully configured!</p>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action"><Icon name="checkbox-checked" /> Compliance attestation</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Facility information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Server information</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Authentication</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Connection test</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Census</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Normalizations</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"><Icon name="checkbox-checked" /> Operation</a>
                        </div>
                        <Button className="mt-4" onClick={prevStep}>Go back</Button>
                    </div>
                )}
            </div>
        </>
    );
};
const MyWebComponent = r2wc(MyComponent, {
    props: { jwt: "string" },
});

customElements.define("my-web-component", MyWebComponent);
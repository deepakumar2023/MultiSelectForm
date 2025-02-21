import React, { useState } from "react";
import "./MultiStepForm.css";

const StepOne = ({ nextStep, handleChange, formData }) => {
  const isValid = formData.name && formData.email && formData.number;

  return (
    <div className="form-container">
      <h2>Step 1</h2>
      <input type="text" name="name" required placeholder="Name" onChange={handleChange} value={formData.name} />
      <input type="email" name="email" required placeholder="Email" onChange={handleChange} value={formData.email} />
      <input type="number" name="number" required placeholder="Number" onChange={handleChange} value={formData.number} />
      <button onClick={nextStep} disabled={!isValid}>Next</button>
    </div>
  );
};

const StepTwo = ({ nextStep, prevStep, handleChange, formData }) => {
  const isValid = formData.designation && formData.skills;

  return (
    <div className="form-container">
      <h2>Step 2</h2>
      <input type="text" name="designation" required placeholder="Designation" onChange={handleChange} value={formData.designation} />
      <input type="text" name="skills" required placeholder="Skills" onChange={handleChange} value={formData.skills} />
      
      <div className="button-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep} disabled={!isValid}>Next</button>
      </div>
    </div>
  );
};

const StepThree = ({ prevStep, handleChange, formData, handleSubmit }) => {
  const isValid = formData.school && formData.city;

  return (
    <div className="form-container">
      <h2>Step 3</h2>
      <input type="text" name="school" required placeholder="School" onChange={handleChange} value={formData.school} />
      <input type="text" name="city" required placeholder="City" onChange={handleChange} value={formData.city} />
      <div className="button-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit} disabled={!isValid}>Submit</button>
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", number: "",  designation: "", skills: "", school: "", city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="wrapper">
      {!submitted ? (
        <>
          {step === 1 && <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />}
          {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
          {step === 3 && <StepThree prevStep={prevStep} handleChange={handleChange} formData={formData} handleSubmit={handleSubmit} />}
        </>
      ) : (
        <div className="form-container">
          <h2>Submitted Data</h2>
          <div className="submitted-data">
            {Object.entries(formData).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
          <button onClick={() => { 
            setStep(1); 
            setSubmitted(false); 
            setFormData({ name: "", email: "", number: "", designation: "", skills: "", school: "", city: "", });
          }}>Fill Again</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;

import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import FormDetails from './components/FormDetails';

function App() {
  const steps = [
    [
      { id: "name", label: "Name", inputType: "text", placeholder: "Your Name..." },
      { id: "email", label: "Email", inputType: "email", placeholder: "Your Email..." },
      { id: "phone", label: "Phone Number", inputType: "tel", placeholder: "Your Phone..." }
    ],
    [
      { id: "designation", label: "Designation", inputType: "text", placeholder: "Your Designation..." },
      { id: "skills", label: "Skills", inputType: "text", placeholder: "Your Skills..." }
    ],
    [
      { id: "school", label: "School Name", inputType: "text", placeholder: "Your School..." },
      { id: "city", label: "City", inputType: "text", placeholder: " your city..." }
    ]
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    skills: '',
    school: '',
    fatherName: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stepIndex === steps.length - 1) {
      setIsFormSubmitted(true);
    } else {
      setStepIndex((prev) => prev + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStepIndex((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className='App'>
      {!isFormSubmitted ? (
        <UserForm
          stepIndex={stepIndex}
          steps={steps}
          formData={formData}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FormDetails formData={formData} />
      )}
    </div>
  );
}

export default App;

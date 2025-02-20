const UserForm = ({
  handleSubmit,
  stepIndex,
  steps,
  formData,
  handleBack,
  handleInputChange,
}) => {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Form</h2>

      {steps[stepIndex].map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input
            required
            value={formData[field.id]}
            id={field.id}
            onChange={handleInputChange}
            type={field.inputType}
            placeholder={field.placeholder}
          />
        </div>
      ))}

      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        {stepIndex > 0 && (
          <button type="button" onClick={handleBack} style={{ flex: "1" }}>
            Back
          </button>
        )}
        <button type="submit" style={{ flex: stepIndex > 0 ? "1" : "100%" }}>
          {stepIndex === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;

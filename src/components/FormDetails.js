
const FormDetails = ({ formData }) => {
    return (
        <div>
            <h1>Success!</h1>
            <hr />
            <span>Name: {formData.name}</span>
            <br />
            <span>Email: {formData.email}</span>
            <br />
            <span>Phone: {formData.phone}</span>
            <br />
            <span>Designation: {formData.designation}</span>
            <br />
            <span>Skills: {formData.skills}</span>
            <br />
            <span>School: {formData.school}</span>
            <br />
            <span>City: {formData.City}</span>
            <br />
        </div>
    );
}; 
export default FormDetails;
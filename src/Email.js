import "./Email.css";

const Email =({string, type})=>(
    <div className="email">
        <p>{type}: {string}</p>
    </div>
)
export default Email;
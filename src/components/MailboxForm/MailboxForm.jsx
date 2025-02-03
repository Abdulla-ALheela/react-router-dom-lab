import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    boxSize: "",
    boxOwner: "",
};

const mailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailboxe(formData);
        setFormData(initialState);
        navigate("/mailboxes");
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Box owner:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">Box size:</label>
                <select id="boxSize" name="boxSize" onChange={handleChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default mailboxForm;

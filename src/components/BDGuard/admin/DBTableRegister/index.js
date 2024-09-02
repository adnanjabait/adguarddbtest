import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [fields, setFields] = useState([{ name: '', type: 'int', isPrimaryKey: false }]);

  const addField = () => {
    setFields([...fields, { name: '', type: 'int', isPrimaryKey: false }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFieldChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  const handleSubmit = () => {
    // Handle the form submission logic here.
    console.log('Form Submitted', fields);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2>Data Table Register</h2>
        <label className={styles.label}>
          Site Name
          <select className={styles.select}>
            <option>Adguard</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <h2>Data Table Field Register</h2>
        <label className={styles.label}>
          Table Name
          <input type="text" placeholder="Table Name" className={styles.inputTxt}/>
        </label>
        <div>
          {fields.map((field, index) => (
            <div key={index} className={styles.fieldRow}>
              <input
                type="checkbox"
                checked={field.isPrimaryKey}
                onChange={(e) => handleFieldChange(index, 'isPrimaryKey', e.target.checked)}
              />
              <input
                type="text"
                placeholder={`field-${index + 1}`}
                value={field.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                className={styles.inputTxt}
              />
              <select
                value={field.type}
                onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                className={styles.select}
              >
                <option value="int">int</option>
                <option value="varchar">varchar</option>
                {/* Add more types as needed */}
              </select>
              <button type="button" onClick={() => removeField(index)}>
                &#x2716;
              </button>
            </div>
          ))}
          <button type="button" onClick={addField} className={styles.addButton}>
            &#43;
          </button>
        </div>

        <button type="button" onClick={handleSubmit} className={styles.submitButton}>
          Add to DB
        </button>
      </div>

      <div className={styles.tableList}>
        <h2>Table List</h2>
        <table>
          <thead>
            <tr>
              <th>Table Name</th>
              <th>Field Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>linkWithText</td>
              <td>
                id(PK)
                <br />
                text
                <br />
                link
                <br />
                section
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;

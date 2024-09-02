import React, { useState } from 'react';
import styles from './Register.module.css';  // Import the CSS module

const Register = () => {
  const [formData, setFormData] = useState({
    text: '',
    link: '',
    section: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setTableData([...tableData, formData]);
    setFormData({ text: '', link: '', section: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2>Data Table Register Form</h2>
        <label className={styles.label}>
          Site Name
          <select className={styles.select}>
            <option>Adguard</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className={styles.label}>
          Table Name
          <select className={styles.select}>
            <option>linkWithText</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            text
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              className={styles.inputTxt}
            />
          </label>
          <label className={styles.label}>
            link
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className={styles.inputTxt}
            />
          </label>
          <label className={styles.label}>
            section
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleInputChange}
              className={styles.inputTxt}
            />
          </label>
        </div>

        <button type="button" onClick={handleSubmit} className={styles.submitButton}>
          Add to DB
        </button>
      </div>

      <div className={styles.tableList}>
        <h2>Table Data (linkWithText)</h2>
        <table>
          <thead>
            <tr>
              <th>text</th>
              <th>link</th>
              <th>section</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.text}</td>
                <td>{row.link}</td>
                <td>{row.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;

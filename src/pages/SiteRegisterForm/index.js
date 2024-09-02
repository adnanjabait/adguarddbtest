import React, { useState } from 'react';
import Layout from '@/components/BDGuard/admin/layout/layout';
import styles from './SiteRegisterForm.module.css';

const SiteRegisterForm = () => {
    const [sites, setSites] = useState([
        { id: 1, name: 'AdGuard', source: 'WebApi', table: 'AdGuardDB' },
        { id: 2, name: 'ByePass', source: 'DB', table: 'ByePassDB' },
    ]);

    const [siteName, setSiteName] = useState('');
    const [source, setSource] = useState('WebApi');
    const [tableName, setTableName] = useState('');
    const [sourcetable, setSourceTable] = useState('');
    const [link, setLink] = useState('');

    const handleSave = async () => {
        try {
            // Add site to local state
            setSites([...sites, { id: sites.length + 1, name: siteName, source, table: tableName }]);

            // Send request to create table and insert values
            const response = await fetch('/api/create-table', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tableName, siteName, source, sourcetable, link }),
            });

            if (!response.ok) {
                throw new Error('Failed to create table or insert data');
            }

            // Reset form fields
            setSiteName('');
            setSource('WebApi');
            setTableName('');
            setSourceTable('');
            setLink('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <h3>Site Register Form</h3>
                    <br></br>
                    <div className={styles.formGroup}>
                        <label className={styles.formGroupLabel}>Site Name</label>
                        <input 
                            type="text" 
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                            className={styles.input}
                        />
                        <button 
                            className={styles.clearBtn} 
                            onClick={() => setSiteName('')}
                        >
                            X
                        </button>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formGroupLabel}>Source</label>
                        <select 
                            value={source} 
                            onChange={(e) => setSource(e.target.value)}
                            className={styles.select} 
                        >
                            <option value="WebApi">WebApi</option>
                            <option value="DB">DB</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formGroupLabel}>Table Name</label>
                        <input 
                            type="text" 
                            value={tableName}
                            onChange={(e) => setTableName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formGroupLabel}>Source Table</label>
                        <input 
                            type="text" 
                            value={sourcetable}
                            onChange={(e) => setSourceTable(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formGroupLabel}>Link</label>
                        <input 
                            type="text" 
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <button 
                        className={styles.saveBtn} 
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>

                <table className={styles.siteList}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Site Name</th>
                            <th>Source</th>
                            <th>Table Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sites.map(site => (
                            <tr key={site.id}>
                                <td>{site.id}</td>
                                <td>{site.name}</td>
                                <td>{site.source}</td>
                                <td>{site.table}</td>
                                <td>
                                    <button className={styles.editBtn}>Edit</button>
                                    <button className={styles.deleteBtn}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default SiteRegisterForm;

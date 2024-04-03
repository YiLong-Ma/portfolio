import React from 'react';
import styles from '@/styles/contacts.module.css';
import NavComponent from '@/components/NavComponent';
import BackgroundComponent from '@/components/Background';

const Contacts = () => {
    return (

        <div className={styles.container}>
            <NavComponent />
            <BackgroundComponent />

            <h1>Let's Get In Touch</h1>

            <form className={styles.form}>

                <div className={styles.Name}>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" className={styles.inputName} />
                    <input type="text" id="lastName" name="lastName" placeholder="Last name" className={styles.inputName} />
                </div>

                <div className={styles.formGroup}>
                    <input type="email" id="email" name="email" placeholder="Email Address" className={styles.inputField} />
                </div>

                <div className={styles.formGroup}>
                    <textarea id="message" name="message" placeholder="Enter your message" className={styles.textareaField}></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default Contacts;

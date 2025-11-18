import React from 'react';
import { useNavigate } from 'react-router';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content">
            <div style={styles.headerRow}>
                <h1>Контакты</h1>
                <button style={styles.homeButton} onMouseDown={() => navigate('/')}>🏠</button>
            </div>
            <div className="text-block">
                <p>
                    Телефон и мессенджеры: +7-916-820-81-50
                    <br />
                    E-mail: <a href="mailto:gsmevsikov@gmail.com">gsmevsikov@gmail.com</a>
                </p>
                <br />
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1_k0-CzjtFo-6wZTFtNy8tK4UTZvVJ35d/view?usp=sharing"
                >
                    Резюме
                </a>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    headerRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12,
    },
    homeButton: {
        width: 48,
        height: 48,
        borderRadius: 8,
        border: '2px solid #2b2b2b',
        background: 'white',
        cursor: 'pointer',
        fontSize: 24,
    },
};

export default Contact;

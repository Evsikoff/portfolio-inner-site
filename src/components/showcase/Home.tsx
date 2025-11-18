import React from 'react';
import { Link } from '../general';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const goToResume = () => {
        window.open(
            'https://drive.google.com/file/d/1_k0-CzjtFo-6wZTFtNy8tK4UTZvVJ35d/view?usp=sharing',
            '_blank'
        );
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Евсиков Андрей</h1>
                <h2>Системный аналитик</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="Обо мне" />
                <Link containerStyle={styles.link} to="experience" text="Опыт" />
                <Link containerStyle={styles.link} to="certificates" text="Дипломы и сертификаты" />
                <Link containerStyle={styles.link} to="pets" text="Pet-проекты" />
                <Link containerStyle={styles.link} to="contact" text="Контакты" />
            </div>
            <div style={styles.resumeContainer}>
                <button style={styles.resumeButton} onMouseDown={goToResume}>
                    Резюме
                </button>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 32,
        paddingTop: 64,
        paddingBottom: 64,
        boxSizing: 'border-box',
    },
    header: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        width: '100%',
        maxWidth: 420,
    },
    link: {
        padding: 12,
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
    resumeContainer: {
        marginTop: 48,
    },
    resumeButton: {
        padding: '12px 18px',
        borderRadius: 8,
        border: '2px solid #2b2b2b',
        background: 'white',
        cursor: 'pointer',
        fontSize: 18,
    },
};

export default Home;

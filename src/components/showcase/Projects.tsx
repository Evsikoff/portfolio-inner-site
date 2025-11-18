import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content">
            <h1 style={styles.header}>Pet-проекты</h1>
            <div className="text-block">
                <p>
                    <a
                        href="https://www.rustore.ru/catalog/developer/sz14x0"
                        target="_blank"
                        rel="noreferrer"
                        style={styles.link}
                    >
                        Моя страница на RuStore
                    </a>
                </p>
            </div>
            <div style={styles.resumeContainer}>
                <a
                    href="https://drive.google.com/file/d/1_k0-CzjtFo-6wZTFtNy8tK4UTZvVJ35d/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.resumeLink}
                >
                    Резюме
                </a>
            </div>
            <div style={styles.homeButtonContainer}>
                <button
                    className="site-button"
                    style={styles.homeButton}
                    onClick={goHome}
                    title="На главную"
                >
                    🏠
                </button>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        marginBottom: 32,
    },
    link: {
        fontSize: 18,
        textDecoration: 'underline',
    },
    resumeContainer: {
        marginTop: 48,
        textAlign: 'center',
    },
    resumeLink: {
        padding: 16,
        fontSize: 18,
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    homeButtonContainer: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'center',
    },
    homeButton: {
        fontSize: 32,
        padding: 12,
        minWidth: 64,
        cursor: 'pointer',
    },
};

export default Projects;

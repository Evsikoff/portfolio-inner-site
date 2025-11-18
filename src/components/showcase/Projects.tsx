import React from 'react';
import { useNavigate } from 'react-router';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content">
            <div style={styles.headerRow}>
                <h1>Pet-проекты</h1>
                <button style={styles.homeButton} onMouseDown={() => navigate('/')}>🏠</button>
            </div>
            <div className="text-block">
                <p>
                    Делюсь своими экспериментами и публикациями. Ниже можно перейти на мою страницу в RuStore, где собраны мои приложения.
                </p>
                <br />
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.rustore.ru/catalog/developer/sz14x0"
                >
                    Моя страница на RuStore
                </a>
                <br />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
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

export default Projects;

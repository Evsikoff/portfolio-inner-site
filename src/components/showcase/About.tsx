import React from 'react';
import portrait from '../../assets/pictures/evsikov/unnamed (6).jpg';
import { useNavigate } from 'react-router';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content">
            <div style={styles.headerRow}>
                <h1>Обо мне</h1>
                <button style={styles.homeButton} onMouseDown={() => navigate('/')}>🏠</button>
            </div>
            <div className="text-block" style={styles.introBlock}>
                <div style={styles.portraitContainer}>
                    <img src={portrait} alt="Евсиков Андрей" style={styles.portrait} />
                </div>
                <div style={styles.textColumn}>
                    <p>
                        Системный аналитик с архитектурным мышлением и опытом полного цикла разработки корпоративных систем — от идеи и формализации требований до архитектуры, интеграций и ввода в промышленную эксплуатацию.
                    </p>
                    <br />
                    <p>
                        Развиваю профиль технического аналитика/полу-разработчика, умею писать рабочий backend-код (Nest.js, PostgreSQL, Python), эффективно анализировать API, транзакции, интеграции и проектировать сложные модели данных.
                    </p>
                    <br />
                    <p>
                        Одновременно расту как продуктовый специалист, уделяя внимание ценности фичей, пользовательскому сценарию, влиянию на метрики и устойчивости продукта.
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
    introBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
    },
    portraitContainer: {
        maxWidth: 320,
        width: '100%',
    },
    portrait: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: 12,
        boxShadow: '0 4px 18px rgba(0,0,0,0.12)',
    },
    textColumn: {
        width: '100%',
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

export default About;

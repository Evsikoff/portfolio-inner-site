import React from 'react';
import myPhoto from '../../assets/pictures/evsikov/unnamed (6).jpg';
import { Link, useNavigate } from 'react-router-dom';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content">
            <div style={styles.container}>
                <div style={styles.photoContainer}>
                    <img src={myPhoto} style={styles.photo} alt="Евсиков Андрей" />
                </div>
                <div className="text-block" style={styles.textBlock}>
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
                </div>
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
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        marginBottom: 32,
        alignItems: 'flex-start',
    },
    photoContainer: {
        flex: '0 0 300px',
        maxWidth: 300,
    },
    photo: {
        width: '100%',
        height: 'auto',
        border: '2px solid #000',
    },
    textBlock: {
        flex: 1,
    },
    resumeContainer: {
        marginTop: 24,
        textAlign: 'center',
    },
    resumeLink: {
        padding: 16,
        fontSize: 18,
        textDecoration: 'underline',
        cursor: 'pointer',
    },
};

export default About;

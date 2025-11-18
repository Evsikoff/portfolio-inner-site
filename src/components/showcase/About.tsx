import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../general/HomeIcon';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    const navigate = useNavigate();
    const [photoSrc, setPhotoSrc] = useState<string | null>(null);

    const goHome = () => {
        navigate('/');
    };

    useEffect(() => {
        // Попытка динамически импортировать фото
        // Поддерживаем несколько возможных имен файла
        const possibleNames = [
            'evsikov-photo.jpg',
            'unnamed-6.jpg',
            'photo.jpg'
        ];

        const tryLoadPhoto = async () => {
            for (const name of possibleNames) {
                try {
                    const photo = await import(`../../assets/pictures/evsikov/${name}`);
                    setPhotoSrc(photo.default);
                    break;
                } catch (e) {
                    // Продолжаем пробовать следующий файл
                }
            }
        };

        tryLoadPhoto();
    }, []);

    return (
        <div className="site-page-content">
            <div style={styles.container}>
                {photoSrc && (
                    <div style={styles.photoContainer}>
                        <img src={photoSrc} style={styles.photo} alt="Евсиков Андрей" />
                    </div>
                )}
                <div className="text-block" style={photoSrc ? styles.textBlock : styles.textBlockFull}>
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
            <div style={styles.homeButtonContainer}>
                <button
                    className="site-button"
                    style={styles.homeButton}
                    onClick={goHome}
                    title="На главную"
                >
                    <HomeIcon size={24} />
                </button>
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
    textBlockFull: {
        flex: 1,
        width: '100%',
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
    homeButtonContainer: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'center',
    },
    homeButton: {
        padding: 12,
        minWidth: 64,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default About;

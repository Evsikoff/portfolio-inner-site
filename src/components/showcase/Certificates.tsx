import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface CertificatesProps {}

// Список файлов сертификатов для загрузки
// Добавьте сюда имена ваших файлов сертификатов
const CERTIFICATE_FILES: string[] = [
    // Примеры:
    // 'certificate-1.jpg',
    // 'diploma-bachelor.jpg',
    // 'certificate-ozon.png',
];

const Certificates: React.FC<CertificatesProps> = (props) => {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState<Array<{ src: string; name: string }>>([]);

    useEffect(() => {
        const loadImages = async () => {
            const images: Array<{ src: string; name: string }> = [];

            for (const fileName of CERTIFICATE_FILES) {
                try {
                    const image = await import(`../../assets/pictures/evsikov/${fileName}`);
                    images.push({ src: image.default, name: fileName });
                } catch (error) {
                    console.warn(`Could not load image: ${fileName}`);
                }
            }

            setLoadedImages(images);
        };

        if (CERTIFICATE_FILES.length > 0) {
            loadImages();
        }
    }, []);

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content">
            <h1 style={styles.header}>Дипломы и сертификаты</h1>
            <div style={styles.gallery}>
                {loadedImages.length > 0 ? (
                    loadedImages.map((img, index) => (
                        <div key={index} style={styles.imageContainer}>
                            <img
                                src={img.src}
                                alt={`Сертификат ${index + 1}`}
                                style={styles.image}
                            />
                        </div>
                    ))
                ) : (
                    <div style={styles.placeholder}>
                        <h3>Как добавить сертификаты:</h3>
                        <br />
                        <ol style={styles.instructions}>
                            <li>
                                <p>Загрузите изображения сертификатов в директорию:</p>
                                <code style={styles.code}>src/assets/pictures/evsikov/</code>
                            </li>
                            <li>
                                <p>Откройте файл:</p>
                                <code style={styles.code}>src/components/showcase/Certificates.tsx</code>
                            </li>
                            <li>
                                <p>Добавьте имена файлов в массив <code style={styles.code}>CERTIFICATE_FILES</code></p>
                                <p>Пример:</p>
                                <pre style={styles.codeBlock}>
{`const CERTIFICATE_FILES = [
    'certificate-1.jpg',
    'diploma-bachelor.jpg',
    'certificate-ozon.png',
];`}
                                </pre>
                            </li>
                        </ol>
                    </div>
                )}
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
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 24,
        marginBottom: 32,
    },
    imageContainer: {
        border: '2px solid #000',
        padding: 8,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    placeholder: {
        gridColumn: '1 / -1',
        padding: 32,
        border: '2px solid #000',
        backgroundColor: '#f0f0f0',
    },
    instructions: {
        textAlign: 'left',
        paddingLeft: 20,
    },
    code: {
        backgroundColor: '#e0e0e0',
        padding: '2px 6px',
        fontFamily: 'monospace',
        fontSize: 14,
    },
    codeBlock: {
        backgroundColor: '#e0e0e0',
        padding: 12,
        fontFamily: 'monospace',
        fontSize: 14,
        overflow: 'auto',
        marginTop: 8,
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

export default Certificates;

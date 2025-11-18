import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../general/HomeIcon';

export interface CertificatesProps {}

// Список файлов сертификатов для загрузки
// Добавьте сюда имена ваших файлов сертификатов
const CERTIFICATE_FILES: string[] = [
    '395488.png',
    '39554.png',
    '4848.png',
    '48851.png',
    '5895959.png',
    '5958.png',
    '595848.png',
    '59632.jpg',
    '596552.jpg',
    '59846.jpg',
    '63214.jpg',
    '6559.png',
    '66994587.jpg',
    '695417.jpg',
    '84848.png',
    '84848521.png',
    '88846.png',
    '9558477.jpg',
    '956954.jpg',
    '959559.png',
    '9655.jpg',
    '966654.png'
];

const Certificates: React.FC<CertificatesProps> = (props) => {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState<
        Array<{ src: string; name: string; width: number; height: number }>
    >([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const images: Array<{ src: string; name: string; width: number; height: number }> = [];

            for (const fileName of CERTIFICATE_FILES) {
                try {
                    const image = await import(`../../assets/pictures/evsikov/${fileName}`);

                    const dimensions = await new Promise<{ width: number; height: number } | null>((resolve) => {
                        const imgElement = new Image();
                        imgElement.onload = () =>
                            resolve({ width: imgElement.naturalWidth, height: imgElement.naturalHeight });
                        imgElement.onerror = () => resolve(null);
                        imgElement.src = image.default;
                    });

                    if (dimensions) {
                        images.push({ src: image.default, name: fileName, ...dimensions });
                    }
                } catch (error) {
                    console.warn(`Could not load image: ${fileName}`);
                }
            }

            setLoadedImages(images);
            setIsLoading(false);
        };

        if (CERTIFICATE_FILES.length > 0) {
            loadImages();
        } else {
            setIsLoading(false);
        }
    }, []);

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content">
            <h1 style={styles.header}>Дипломы и сертификаты</h1>
            <div style={styles.gallery}>
                {isLoading ? (
                    <div style={styles.spinnerContainer}>
                        <div
                            style={styles.spinner}
                            role="status"
                            aria-label="Загрузка сертификатов"
                        />
                    </div>
                ) : loadedImages.length > 0 ? (
                    loadedImages.map((img, index) => (
                        <div
                            key={index}
                            style={{ ...styles.imageContainer, aspectRatio: `${img.width} / ${img.height}` }}
                        >
                            <button
                                type="button"
                                style={styles.imageButton}
                                onClick={() => window.open(img.src, '_blank', 'noopener,noreferrer')}
                                title={`Открыть сертификат ${index + 1}`}
                            >
                                <img
                                    src={img.src}
                                    alt={`Сертификат ${index + 1}`}
                                    style={styles.image}
                                />
                            </button>
                        </div>
                    ))
                ) : (
                    <div style={styles.placeholder}>
                        <h3>Сертификаты недоступны для отображения</h3>
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
                    <HomeIcon size={24} />
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageButton: {
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'contain',
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
        fontFamily: 'Handjet, monospace',
        fontSize: 14,
    },
    codeBlock: {
        backgroundColor: '#e0e0e0',
        padding: 12,
        fontFamily: 'Handjet, monospace',
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
        padding: 12,
        minWidth: 64,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinnerContainer: {
        gridColumn: '1 / -1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
    },
    spinner: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        border: '6px solid #000',
        borderTopColor: 'transparent',
        animation: 'showcase-spin 1s linear infinite',
    },
};

export default Certificates;

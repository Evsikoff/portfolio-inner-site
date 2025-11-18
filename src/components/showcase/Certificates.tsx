import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = (props) => {
    const navigate = useNavigate();
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Dynamically import all images from the evsikov directory except unnamed (6).jpg
        const importImages = async () => {
            try {
                const context = require.context(
                    '../../assets/pictures/evsikov',
                    false,
                    /\.(png|jpe?g|gif)$/
                );
                const imagePaths = context
                    .keys()
                    .filter((path) => !path.includes('unnamed (6)'))
                    .map((path) => context(path));
                setImages(imagePaths);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        importImages();
    }, []);

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content">
            <h1 style={styles.header}>Дипломы и сертификаты</h1>
            <div style={styles.gallery}>
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <div key={index} style={styles.imageContainer}>
                            <img
                                src={img}
                                alt={`Сертификат ${index + 1}`}
                                style={styles.image}
                            />
                        </div>
                    ))
                ) : (
                    <p>
                        Изображения сертификатов будут отображены здесь после загрузки в
                        директорию src/assets/pictures/evsikov/
                    </p>
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

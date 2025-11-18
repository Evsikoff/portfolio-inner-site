import React from 'react';
import { useNavigate } from 'react-router';

import img10jpg from '../../assets/pictures/evsikov/unnamed (10).jpg';
import img10png from '../../assets/pictures/evsikov/unnamed (10).png';
import img11jpg from '../../assets/pictures/evsikov/unnamed (11).jpg';
import img11png from '../../assets/pictures/evsikov/unnamed (11).png';
import img12jpg from '../../assets/pictures/evsikov/unnamed (12).jpg';
import img12png from '../../assets/pictures/evsikov/unnamed (12).png';
import img13jpg from '../../assets/pictures/evsikov/unnamed (13).jpg';
import img13png from '../../assets/pictures/evsikov/unnamed (13).png';
import img14jpg from '../../assets/pictures/evsikov/unnamed (14).jpg';
import img14png from '../../assets/pictures/evsikov/unnamed (14).png';
import img15jpg from '../../assets/pictures/evsikov/unnamed (15).jpg';
import img15png from '../../assets/pictures/evsikov/unnamed (15).png';
import img3png from '../../assets/pictures/evsikov/unnamed (3).png';
import img4png from '../../assets/pictures/evsikov/unnamed (4).png';
import img5png from '../../assets/pictures/evsikov/unnamed (5).png';
import img6png from '../../assets/pictures/evsikov/unnamed (6).png';
import img7jpg from '../../assets/pictures/evsikov/unnamed (7).jpg';
import img7png from '../../assets/pictures/evsikov/unnamed (7).png';
import img8jpg from '../../assets/pictures/evsikov/unnamed (8).jpg';
import img8png from '../../assets/pictures/evsikov/unnamed (8).png';
import img9jpg from '../../assets/pictures/evsikov/unnamed (9).jpg';
import img9png from '../../assets/pictures/evsikov/unnamed (9).png';

export interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = () => {
    const navigate = useNavigate();
    const images = [
        img3png,
        img4png,
        img5png,
        img6png,
        img7jpg,
        img7png,
        img8jpg,
        img8png,
        img9jpg,
        img9png,
        img10jpg,
        img10png,
        img11jpg,
        img11png,
        img12jpg,
        img12png,
        img13jpg,
        img13png,
        img14jpg,
        img14png,
        img15jpg,
        img15png,
    ];

    const filteredImages = images;

    return (
        <div className="site-page-content">
            <div style={styles.headerRow}>
                <h1>Дипломы и сертификаты</h1>
                <button style={styles.homeButton} onMouseDown={() => navigate('/')}>🏠</button>
            </div>
            <div className="text-block" style={styles.gridDescription}>
                <p>
                    Подборка дипломов и сертификатов — каждый отражает этап профессионального роста.
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
            <div style={styles.grid}>
                {filteredImages.map((src, idx) => (
                    <div key={idx} style={styles.card}>
                        <img src={src} alt={`certificate-${idx}`} style={styles.image} />
                    </div>
                ))}
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
    grid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
    },
    card: {
        padding: 8,
        border: '1px solid #d0d0d0',
        background: '#f8f8f8',
        borderRadius: 8,
        boxSizing: 'border-box',
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: 6,
    },
    gridDescription: {
        width: '100%',
    },
};

export default Certificates;

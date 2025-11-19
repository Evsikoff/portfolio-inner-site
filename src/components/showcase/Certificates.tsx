import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../general/HomeIcon';

// --- Статические импорты (без изменений) ---
import img_395488 from '../../assets/pictures/evsikov/395488.png';
import img_39554 from '../../assets/pictures/evsikov/39554.png';
import img_4848 from '../../assets/pictures/evsikov/4848.png';
import img_48851 from '../../assets/pictures/evsikov/48851.png';
import img_5895959 from '../../assets/pictures/evsikov/5895959.png';
import img_5958 from '../../assets/pictures/evsikov/5958.png';
import img_595848 from '../../assets/pictures/evsikov/595848.png';
import img_59632 from '../../assets/pictures/evsikov/59632.jpg';
import img_596552 from '../../assets/pictures/evsikov/596552.jpg';
import img_59846 from '../../assets/pictures/evsikov/59846.jpg';
import img_63214 from '../../assets/pictures/evsikov/63214.jpg';
import img_6559 from '../../assets/pictures/evsikov/6559.png';
import img_66994587 from '../../assets/pictures/evsikov/66994587.jpg';
import img_695417 from '../../assets/pictures/evsikov/695417.jpg';
import img_84848 from '../../assets/pictures/evsikov/84848.png';
import img_84848521 from '../../assets/pictures/evsikov/84848521.png';
import img_88846 from '../../assets/pictures/evsikov/88846.png';
import img_9558477 from '../../assets/pictures/evsikov/9558477.jpg';
import img_956954 from '../../assets/pictures/evsikov/956954.jpg';
import img_959559 from '../../assets/pictures/evsikov/959559.png';
import img_9655 from '../../assets/pictures/evsikov/9655.jpg';
import img_966654 from '../../assets/pictures/evsikov/966654.png';

export interface CertificatesProps {}

// Пропорции (немного уменьшим базовый размер для компактности альбома)
const RATIO_LANDSCAPE = { w: 300, h: 212 }; // A4 Landscape scale
const RATIO_PORTRAIT = { w: 212, h: 300 };  // A4 Portrait scale

// Данные + Генерация "случайного" угла поворота на основе индекса
// Мы не используем Math.random(), чтобы при перерисовке фото не дергались
const CERTIFICATES_DATA = [
    { src: img_395488, ...RATIO_LANDSCAPE },
    { src: img_39554, ...RATIO_LANDSCAPE },
    { src: img_4848, ...RATIO_LANDSCAPE },
    { src: img_48851, ...RATIO_LANDSCAPE },
    { src: img_5895959, ...RATIO_LANDSCAPE },
    { src: img_5958, ...RATIO_LANDSCAPE },
    { src: img_595848, ...RATIO_LANDSCAPE },
    { src: img_59632, ...RATIO_LANDSCAPE },
    { src: img_596552, ...RATIO_LANDSCAPE },
    { src: img_59846, ...RATIO_LANDSCAPE },
    { src: img_63214, ...RATIO_LANDSCAPE },
    { src: img_6559, ...RATIO_LANDSCAPE },
    { src: img_66994587, ...RATIO_PORTRAIT },
    { src: img_695417, ...RATIO_LANDSCAPE },
    { src: img_84848, ...RATIO_LANDSCAPE },
    { src: img_84848521, ...RATIO_PORTRAIT },
    { src: img_88846, ...RATIO_LANDSCAPE },
    { src: img_9558477, ...RATIO_PORTRAIT },
    { src: img_956954, ...RATIO_PORTRAIT },
    { src: img_959559, ...RATIO_PORTRAIT },
    { src: img_9655, ...RATIO_LANDSCAPE },
    { src: img_966654, ...RATIO_LANDSCAPE },
].map((item, index) => {
    // Генерируем угол от -6 до +6 градусов
    const rotate = (index % 2 === 0 ? 1 : -1) * ((index * 7) % 6 + 2);
    // Генерируем небольшой сдвиг по вертикали, чтобы не было скучных линий
    const translateY = (index % 3) * 10; 
    return { ...item, rotate, translateY };
});

const Certificates: React.FC<CertificatesProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content" style={styles.pageBackground}>
            {/* Вставляем стили для эффектов ховера и скотча прямо здесь */}
            <style>{`
                .album-card {
                    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
                    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
                    position: relative;
                    z-index: 1;
                    cursor: pointer;
                    background: #fff;
                }
                /* Эффект скотча сверху */
                .album-card::before {
                    content: '';
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 30px;
                    background-color: rgba(255, 255, 255, 0.6);
                    border-left: 1px dashed rgba(0,0,0,0.1);
                    border-right: 1px dashed rgba(0,0,0,0.1);
                    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
                    opacity: 0.7;
                    z-index: 2;
                }
                .album-card:hover {
                    transform: scale(1.15) rotate(0deg) translateY(0) !important;
                    z-index: 100;
                    box-shadow: 15px 15px 35px rgba(0,0,0,0.3);
                }
                .album-card img {
                    filter: sepia(10%); /* Легкий эффект старины */
                    transition: filter 0.3s;
                }
                .album-card:hover img {
                    filter: sepia(0%); /* Убираем фильтр при просмотре */
                }
            `}</style>

            <h1 style={styles.header}>Мои достижения</h1>
            <p style={styles.subHeader}>Коллекция дипломов и сертификатов</p>
            
            <div style={styles.albumContainer}>
                {CERTIFICATES_DATA.map((img, index) => (
                    <div 
                        key={index} 
                        className="album-card"
                        style={{
                            ...styles.cardWrapper,
                            width: img.w,
                            height: img.h + 30, // +30px для "подписи" снизу (стиль полароид)
                            transform: `rotate(${img.rotate}deg) translateY(${img.translateY}px)`,
                        }}
                        onClick={() => window.open(img.src, '_blank', 'noopener,noreferrer')}
                        title="Нажмите, чтобы рассмотреть"
                    >
                        <div style={{ width: img.w - 20, height: img.h - 20, margin: '10px auto 0' }}>
                            <img
                                src={img.src}
                                alt={`Сертификат ${index + 1}`}
                                loading="lazy"
                                style={styles.image}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.controlsContainer}>
                <a
                    href="https://drive.google.com/file/d/1_k0-CzjtFo-6wZTFtNy8tK4UTZvVJ35d/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.resumeLink}
                >
                    📄 Скачать резюме
                </a>
                
                <button
                    className="site-button"
                    style={styles.homeButton}
                    onClick={() => navigate('/')}
                    title="На главную"
                >
                    <HomeIcon size={24} />
                </button>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    pageBackground: {
        // Легкий фон "под бумагу" или стол
        backgroundColor: '#f4f1ea', 
        paddingBottom: 60,
        minHeight: '100vh',
    },
    header: {
        marginBottom: 8,
        paddingTop: 32,
        textAlign: 'center',
        fontFamily: '"Courier New", Courier, monospace', // Шрифт печатной машинки
        fontSize: '2.5rem',
        color: '#333',
    },
    subHeader: {
        textAlign: 'center',
        marginBottom: 48,
        color: '#666',
        fontStyle: 'italic',
    },
    albumContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '50px', // Большие отступы, чтобы фото "дышали"
        padding: '20px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
    },
    cardWrapper: {
        padding: '0',
        boxSizing: 'content-box', // Важно для полей полароида
        backgroundColor: '#fff',
        // Тонкая серая рамка для реализма
        border: '1px solid #e0e0e0', 
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        // Внутренняя рамка фото
        border: '1px solid #eee', 
    },
    controlsContainer: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    resumeLink: {
        padding: '12px 24px',
        fontSize: 18,
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#333',
        borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
    },
    homeButton: {
        padding: 12,
        minWidth: 64,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'transparent',
    },
};

export default Certificates;

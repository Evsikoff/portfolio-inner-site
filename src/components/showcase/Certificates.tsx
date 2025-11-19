import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../general/HomeIcon';

// --- Статические импорты изображений ---
// Это позволяет сборщику знать о файлах сразу, убирая задержку "появления"
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

// Стандартные пропорции для A4
const RATIO_LANDSCAPE = { w: 1414, h: 1000 };
const RATIO_PORTRAIT = { w: 1000, h: 1414 };

// Конфигурация сертификатов.
// Размеры жестко заданы, чтобы браузер зарезервировал место под них до загрузки картинки.
// ПРИМЕЧАНИЕ: Я расставил флаг isPortrait для файлов, которые визуально определил как вертикальные
// в предположении, что порядок файлов соответствует вашему списку. Если какой-то сертификат
// отобразится "обрезанным" или странным, просто поменяйте 'isPortrait: false' на 'true' для него.
const CERTIFICATES_DATA = [
    { src: img_395488, ...RATIO_LANDSCAPE }, // Ozon Agile
    { src: img_39554, ...RATIO_LANDSCAPE },  // Main Train
    { src: img_4848, ...RATIO_LANDSCAPE },   // Ozon Guru
    { src: img_48851, ...RATIO_LANDSCAPE },  // Start Project
    { src: img_5895959, ...RATIO_LANDSCAPE }, // Close Project
    { src: img_5958, ...RATIO_LANDSCAPE },    // Control
    { src: img_595848, ...RATIO_LANDSCAPE },  // Facilitation
    { src: img_59632, ...RATIO_LANDSCAPE },   // Comm
    { src: img_596552, ...RATIO_LANDSCAPE },  // Risks
    { src: img_59846, ...RATIO_LANDSCAPE },   // Plan
    { src: img_63214, ...RATIO_LANDSCAPE },   // Scope
    { src: img_6559, ...RATIO_LANDSCAPE },    // IBS
    { src: img_66994587, ...RATIO_PORTRAIT }, // Analyst Days (Portrait)
    { src: img_695417, ...RATIO_LANDSCAPE },  // Bauman
    { src: img_84848, ...RATIO_LANDSCAPE },   // Specialist
    { src: img_84848521, ...RATIO_PORTRAIT }, // Patent School (Portrait)
    { src: img_88846, ...RATIO_LANDSCAPE },   // MISIS
    { src: img_9558477, ...RATIO_PORTRAIT },  // Art Terra 1C (Portrait)
    { src: img_956954, ...RATIO_PORTRAIT },   // Runa WFE (Portrait)
    { src: img_959559, ...RATIO_PORTRAIT },   // Project Bureau (Portrait)
    { src: img_9655, ...RATIO_LANDSCAPE },    // Business Studio
    { src: img_966654, ...RATIO_LANDSCAPE },  // Microarch
];

const Certificates: React.FC<CertificatesProps> = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content">
            <h1 style={styles.header}>Дипломы и сертификаты</h1>
            
            {/* Используем CSS Masonry для красивой "кирпичной" раскладки */}
            <div style={styles.masonryGallery}>
                {CERTIFICATES_DATA.map((img, index) => (
                    <div key={index} style={styles.masonryItem}>
                        <div
                            style={{
                                ...styles.imageWrapper,
                                // aspect-ratio резервирует место мгновенно
                                aspectRatio: `${img.w} / ${img.h}` 
                            }}
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
                                    loading="lazy" // Ленивая загрузка для ускорения начального рендера
                                    decoding="async"
                                    style={styles.image}
                                />
                            </button>
                        </div>
                    </div>
                ))}
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

// Типизация для styles (если используете TS и объект стилей)
type StyleSheetCSS = Record<string, React.CSSProperties>;

const styles: StyleSheetCSS = {
    header: {
        marginBottom: 32,
        textAlign: 'center', // Обычно заголовки лучше смотрятся по центру
    },
    // Masonry Layout через CSS Columns - самый надежный способ для разных высот
    masonryGallery: {
        columnCount: 3, // По умолчанию 3 колонки
        columnGap: 24,
        width: '100%',
        // Адаптивность можно добавить через media queries в CSS файле, 
        // но здесь можно использовать JS или просто оставить columnWidth
        // Альтернатива для inline styles:
        columnWidth: '300px', // Браузер сам решит сколько колонок влезет
    },
    masonryItem: {
        breakInside: 'avoid', // Запрещает разрыв элемента между колонками
        marginBottom: 24,
        position: 'relative',
    },
    imageWrapper: {
        border: '2px solid #000',
        padding: 8,
        backgroundColor: '#fff',
        overflow: 'hidden',
        position: 'relative',
    },
    imageButton: {
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'block',
    },
    image: {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover',
        transition: 'transform 0.2s ease',
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
        color: '#000',
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

export default Certificates;

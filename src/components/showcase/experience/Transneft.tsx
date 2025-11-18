import React from 'react';
import { useNavigate } from 'react-router-dom';

const Transneft: React.FC = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/');

    return (
        <div className="site-page-content" style={styles.container}>
            <h2>Транснефть (аутстаф от Ай-Теко)</h2>
            <h3 style={styles.subtitle}>Младший аналитик SAP PS / PM (1,5 года)</h3>

            <div className="text-block">
                <p>
                    Внедрение SAP ERP в "Транснефть Центральная Сибирь", консультирование пользователей на местах, разработка кастомизированного функционала (как отчетов, так и интерфейсов): написание спецификаций, тестирование, сдача функционала заказчику.
                </p>
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
                <button className="site-button" style={styles.homeButton} onClick={goHome} title="На главную">
                    🏠
                </button>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: { maxHeight: '100%', overflowY: 'auto' },
    subtitle: { marginBottom: 32, marginTop: 8 },
    resumeContainer: { marginTop: 48, textAlign: 'center' },
    resumeLink: { padding: 16, fontSize: 18, textDecoration: 'underline', cursor: 'pointer' },
    homeButtonContainer: { marginTop: 32, marginBottom: 32, display: 'flex', justifyContent: 'center' },
    homeButton: { fontSize: 32, padding: 12, minWidth: 64, cursor: 'pointer' },
};

export default Transneft;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../general';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content">
            <h1 style={styles.header}>Опыт</h1>
            <div className="text-block" style={styles.menu}>
                <Link
                    containerStyle={styles.link}
                    to="/experience/promsvyazbank"
                    text="Промсвязьбанк, ПАО - Главный системный аналитик (2 года)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/ozon"
                    text="OZON.ru, Интернет-магазин - Ведущий системный аналитик (2 года и 10 месяцев)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/sber"
                    text="Сбер (аутстаф от Бэлл Интегратор, ООО) - Ведущий системный аналитик (1 год и 3 месяца)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/freelines"
                    text="Free Lines Company - Ведущий системный аналитик (3 года и 10 месяцев)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/cmp"
                    text="Центр Молодежного Парламентаризма - Аналитик и разработчик (6 месяцев)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/transneft"
                    text="Транснефть (аутстаф от Ай-Теко) - Младший аналитик SAP PS / PM (1,5 года)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/misis"
                    text="НИТУ «МИСиС» - Инженер-программист (1 год 11 месяцев)"
                />
                <Link
                    containerStyle={styles.link}
                    to="/experience/cetk"
                    text="ЦеТК - Стажер-аналитик (4 месяца стажировки от ВУЗа)"
                />
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
    menu: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    link: {
        padding: 12,
        fontSize: 16,
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

export default Experience;

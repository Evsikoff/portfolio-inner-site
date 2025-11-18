import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation } from 'react-router';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        setIsHome(location.pathname === '/');
        return () => {};
    }, [location.pathname]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Евсиков</h1>
                <h1 style={styles.headerText}>Андрей</h1>
                <h3 style={styles.headerShowcase}>Системный аналитик</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="Старт" />
                <Link containerStyle={styles.link} to="about" text="Обо мне" />
                <Link containerStyle={styles.link} to="experience" text="Опыт" />
                <Link containerStyle={styles.link} to="certificates" text="Дипломы и сертификаты" />
                <Link containerStyle={styles.link} to="pets" text="Pet-проекты" />
                <Link containerStyle={styles.link} to="contact" text="Контакты" />
            </div>
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: '100%',
        flexDirection: 'column',
        padding: 32,
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 32,
        gap: 4,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 8,
    },
    link: {
        marginBottom: 28,
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
};

export default VerticalNavbar;

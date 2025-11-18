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
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    link: {
        marginBottom: 28,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
};

export default VerticalNavbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../general/HomeIcon';

const CMP: React.FC = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/');

    return (
        <div className="site-page-content" style={styles.container}>
            <h2>Центр Молодежного Парламентаризма</h2>
            <h3 style={styles.subtitle}>Аналитик и разработчик краудсорсинговой web-платформы «Движок» (6 месяцев под проект)</h3>

            <div className="text-block">
                <h3>Ключевые результаты</h3>
                <ul>
                    <li><p>Выступал на проекте одновременно в роли системного аналитика и backend-разработчика, обеспечивая полный цикл создания краудсорсинговой платформы «Движок».</p></li>
                    <li><p>Спроектировал архитектуру серверной части, разработал модели данных и реализовал backend полностью с нуля.</p></li>
                    <li><p>Успешно довёл систему до внедрения, включая тестирование, регрессию и приёмку.</p></li>
                </ul>

                <h3>Аналитика и проектирование</h3>
                <ul>
                    <li><p>Проектирование функциональности платформы, формализация требований, подготовка ТЗ и функциональных спецификаций.</p></li>
                    <li><p>Проработка архитектуры и логики работы модулей, маршрутизации данных, процессов голосования и краудсорсинговых сценариев.</p></li>
                    <li><p>Разработка моделей данных и инфраструктуры хранения: структура таблиц, связи, индексы, ключи, механизмы согласованности.</p></li>
                </ul>

                <h3>Backend-разработка</h3>
                <ul>
                    <li><p>Создание серверной части на <b>Nest.js</b>:</p>
                        <ul>
                            <li><p>разработка контроллеров, сервисов, модулей;</p></li>
                            <li><p>реализация бизнес-логики платформы;</p></li>
                            <li><p>управление сессиями, валидацией, авторизацией;</p></li>
                            <li><p>построение REST API.</p></li>
                        </ul>
                    </li>
                    <li><p>Создание базы данных на <b>PostgreSQL</b>:</p>
                        <ul>
                            <li><p>проектирование ER-модели, создание таблиц/индексов;</p></li>
                            <li><p>оптимизация запросов;</p></li>
                            <li><p>реализация триггеров, constraints и механизмов обеспечения целостности данных.</p></li>
                        </ul>
                    </li>
                    <li><p>Интеграция backend-части с фронтендом и внешними сервисами.</p></li>
                    <li><p>Оптимизация производительности и отказоустойчивости серверного приложения.</p></li>
                </ul>

                <h3>Тестирование и запуск</h3>
                <ul>
                    <li><p>Проведение функционального, интеграционного и регрессионного тестирования разработанных модулей.</p></li>
                    <li><p>Авторская приёмка и контроль качества реализованной функциональности.</p></li>
                    <li><p>Успешное прохождение официальных приёмочных испытаний, подтверждающее соответствие платформы требованиям заказчика и нормативным документам.</p></li>
                    <li><p>Поддержка системы при выходе в продуктивный контур, участие в устранении дефектов.</p></li>
                </ul>
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
                    <HomeIcon size={24} />
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
    homeButton: { padding: 12, minWidth: 64, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
};

export default CMP;

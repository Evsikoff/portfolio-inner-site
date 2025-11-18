import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../general/HomeIcon';

const FreeLines: React.FC = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/');

    return (
        <div className="site-page-content" style={styles.container}>
            <h2>Free Lines Company</h2>
            <h3 style={styles.subtitle}>Ведущий системный аналитик (3 года и 10 месяцев)</h3>

            <div className="text-block">
                <h3>Ключевые результаты</h3>
                <ul>
                    <li><p>Спроектировал и внедрил три полноценных корпоративных системы:</p>
                        <ul>
                            <li><p><b>ERP-систему</b> (модули CRP/SRM/логистика/бухгалтерские контуры),</p></li>
                            <li><p><b>BPM-систему</b> на более чем 500 задач и 40+ исполнимых процессов,</p></li>
                            <li><p><b>BI-систему</b> на базе QlikSense для управленческой отчётности.</p></li>
                        </ul>
                    </li>
                    <li><p>Организовал работу над системами полного цикла: анализ → проектирование → разработка → тестирование → внедрение → поддержка.</p></li>
                    <li><p>Обеспечил глубокую интеграцию созданных систем между собой и с внешними информационными продуктами компании.</p></li>
                </ul>

                <h3>Аналитика и проектирование</h3>
                <ul>
                    <li><p>Проектирование архитектуры ERP-системы: модели данных, бизнес-объекты, жизненные циклы, документооборот, логистические и финансовые модули.</p></li>
                    <li><p>Создание BPM-процессов: маршрутизация, исполнительные правила, SLA, распределение задач, dashboard-ы контроля процессов.</p></li>
                    <li><p>Проработка логики CRP (планирование мощностей) и SRM (работа с поставщиками).</p></li>
                    <li><p>Формирование требований, проектирование интерфейсов, подготовка ФС/ТЗ/дизайн-артефактов.</p></li>
                    <li><p>Проработка edge-cases, сложных сценариев, исключений, альтернативных веток процессов.</p></li>
                </ul>

                <h3>Интеграции</h3>
                <ul>
                    <li><p>Проектирование и реализация интеграций ERP и BPM с внешними системами:</p>
                        <ul>
                            <li><p>складская система Axelot WMS,</p></li>
                            <li><p>системы таможенного оформления Альта-Софт,</p></li>
                            <li><p>внутренние транспортные и логистические сервисы.</p></li>
                        </ul>
                    </li>
                    <li><p>Создание событийной модели обмена данными, управление триггерами и бизнес-событиями.</p></li>
                    <li><p>Обеспечение корректной многосистемной цепочки: заказ → закупка → логистика → склад → доставка → учёт.</p></li>
                </ul>

                <h3>BI-архитектура</h3>
                <ul>
                    <li><p>Создание BI-системы на базе QlikSense: модели данных, витрины, преобразование данных, визуализации.</p></li>
                    <li><p>Формирование KPI и аналитических панелей для руководства.</p></li>
                    <li><p>Оптимизация загрузки данных, проектирование связей, настройка инкрементальных обновлений.</p></li>
                </ul>

                <h3>Сопровождение разработки</h3>
                <ul>
                    <li><p>Поддержка самописной ERP/CRM на Delphi + SQL: анализ дефектов, доработка, оптимизация.</p></li>
                    <li><p>Экспертная поддержка пользователей, доработка алгоритмов, устранение ошибок.</p></li>
                    <li><p>Поддержка интеграций с продуктами Альта-Софт и смежными логистическими сервисами.</p></li>
                </ul>

                <h3>Технологии и инструменты</h3>
                <p>1С:Предприятие 8, Delphi, SQL, QlikSense, BPMN, JSON/XML, WMS Axelot, Альта-Софт, ERP/CRM-разработка, интеграционные события.</p>
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

export default FreeLines;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../general/BackIcon';
import HomeIcon from '../../general/HomeIcon';

const Sber: React.FC = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/');
    const goBack = () => navigate('/experience');

    return (
        <div className="site-page-content" style={styles.container}>
            <h2>Сбер (аутстаф от Бэлл Интегратор, ООО)</h2>
            <h3 style={styles.subtitle}>Ведущий системный аналитик (1 год и 3 месяца)</h3>

            <div className="text-block">
                <h3>Ключевые результаты</h3>
                <ul>
                    <li><p>Участвовал в создании полноценной BPMN-системы на базе Siebel CRM, включающей моделирование процессов, исполнительный движок и комплекс интеграций со смежными системами Сбера.</p></li>
                    <li><p>Спроектировал и внедрил ряд решений в рамках крупной трансформации банковских процессов, повысив скорость обработки операций и прозрачность маршрутизации задач.</p></li>
                    <li><p>Лидировал интеграционные разработки, в которых были задействованы многочисленные команды и доменные области.</p></li>
                </ul>

                <h3>Аналитика и проектирование</h3>
                <ul>
                    <li><p>Проектирование BPMN-процессов, маршрутных схем, правил автоматического и ручного распределения задач.</p></li>
                    <li><p>Определение логики переходов, условий, SLA, бизнес-правил, ролей и участников процессов.</p></li>
                    <li><p>Разработка моделей данных и объектов в Siebel, настройка жизненных циклов сущностей и их связей с процессами.</p></li>
                    <li><p>Проработка сложных сценариев поведения, ветвлений и исключений внутри BPMN-процессов.</p></li>
                    <li><p>Определение нефункциональных требований для стабильного исполнения процессов: нагрузка, транзакционная целостность, производительность, отказоустойчивость.</p></li>
                </ul>

                <h3>Предметная область</h3>
                <ul>
                    <li><p>Банковские операции и сервисные процессы.</p></li>
                    <li><p>Клиентский сервис и операционная поддержка.</p></li>
                    <li><p>Внутренние бизнес-процессы Сбера и взаимодействие подразделений.</p></li>
                </ul>

                <h3>Интеграции и техническая экспертиза</h3>
                <ul>
                    <li><p>Проектирование интеграционных взаимодействий между Siebel CRM, BPMN-движком и смежными банковскими системами.</p></li>
                    <li><p>Работа с синхронными и асинхронными каналами обмена: REST, SOAP, MQ, JMS, взаимодействия через корпоративные интеграционные шины (ESB/SOA).</p></li>
                    <li><p>Настройка и использование Siebel EAI, Workflow Policies, Business Services, Integration Objects, Data Maps, EAI Siebel Adapter.</p></li>
                    <li><p>Проектирование обмена данными на уровнях DTO, XSD-схем, JSON-структур, интерфейсных контрактов, согласование форматов и семантики полей.</p></li>
                    <li><p>Проработка интеграционных механизмов BPMN-процессов: Callback-механизмы, Event-driven взаимодействия, Correlation-ID, маршрутизация и управление состояниями.</p></li>
                </ul>

                <h3>Сопровождение разработки и процессы</h3>
                <ul>
                    <li><p>Подготовка технической документации: схем процессов, спецификаций, технических требований, инструкций.</p></li>
                    <li><p>Авторская приёмка разработок, проведение функционального и интеграционного тестирования.</p></li>
                    <li><p>Участие в релизном цикле: планирование, контроль исполнения, взаимодействие с разработчиками и тестировщиками.</p></li>
                    <li><p>Поддержка внедрения разработанных BPMN-решений в продуктивный контур.</p></li>
                </ul>

                <h3>Технологии и инструменты</h3>
                <p>Siebel CRM, BPMN, SQL, REST/SOAP, XML, JSON, XSD, интеграционные шины Сбера, Confluence, Jira.</p>
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
                <button className="site-button" style={styles.homeButton} onClick={goBack} title="Назад к опыту">
                    <BackIcon size={24} />
                </button>
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
    homeButtonContainer: { marginTop: 32, marginBottom: 32, display: 'flex', justifyContent: 'center', gap: 12 },
    homeButton: { padding: 12, minWidth: 64, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
};

export default Sber;

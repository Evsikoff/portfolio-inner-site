import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../general/HomeIcon';

export interface PromsvyazbankProps {}

const Promsvyazbank: React.FC<PromsvyazbankProps> = (props) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="site-page-content" style={styles.container}>
            <h2>Промсвязьбанк, ПАО</h2>
            <h3 style={styles.subtitle}>Главный системный аналитик (2 года)</h3>

            <div className="text-block">
                <h3>Аналитика и проектирование решений</h3>
                <ul>
                    <li><p>Сбор, формализация и согласование требований с заказчиками и командами разработки.</p></li>
                    <li><p>Проработка архитектурных и функциональных решений, оценка рисков и ограничений.</p></li>
                    <li><p>Подготовка макетов экранных форм (Figma, Balsamiq Mockups).</p></li>
                    <li><p>Нормализация и денормализация данных; проектирование структур данных (PostgreSQL, MS SQL, Yandex Database, файловые БД).</p></li>
                    <li><p>Использование аналитических артефактов для фиксации решений:</p>
                        <ul>
                            <li><p>BPMN, Use Case, Sequence Diagram;</p></li>
                            <li><p>ER-модели и схемы данных;</p></li>
                            <li><p>Схемы интеграционных взаимодействий.</p></li>
                        </ul>
                    </li>
                </ul>

                <h3>Предметные области</h3>
                <ul>
                    <li><p><b>Дистанционное банковское обслуживание (ДБО).</b></p></li>
                    <li><p><b>Автоматизированная банковская система (АБС)</b></p></li>
                    <li><p><b>Криптографическая защита данных:</b> работа с электронными подписями, управление PKI-инфраструктурой (сертификаты, цепочки доверия, ключевые пары), шифрование каналов связи и безопасное хранение ключей.</p></li>
                </ul>

                <h3>Интеграции и техническая экспертиза</h3>
                <ul>
                    <li><p>Проектирование и сопровождение интеграций:</p>
                        <ul>
                            <li><p>синхронные и асинхронные API: REST, SOAP, gRPC, WebSocket, WebHook;</p></li>
                            <li><p>встраиваемые интерфейсы: iFrame, WebView;</p></li>
                            <li><p>транспорт и протоколы обмена: FTP, SMTP, POP3;</p></li>
                            <li><p>корпоративные интеграционные шины: SAP PO, Factor ESB, FormIT.</p></li>
                        </ul>
                    </li>
                    <li><p>Использование брокеров сообщений и очередей (Kafka, RabbitMQ) для построения событийно-ориентированных и очередных интеграций.</p></li>
                    <li><p>Анализ исходного кода для уточнения требований и поиска причин дефектов (C#, .NET, JavaScript, TypeScript).</p></li>
                    <li><p>Создание экспресс-аналитики и быстрых ETL-прототипов на Python, SQL, TypeScript.</p></li>
                    <li><p>Нормализация и денормализация, оптимизация структур для аналитических и транзакционных нагрузок.</p></li>
                    <li><p>Проектирование алгоритмов репликации.</p></li>
                    <li><p>Поиск объектов шардирования.</p></li>
                    <li><p>Работа с различными СУБД: PostgreSQL, MS SQL, Yandex Database, файловые базы данных.</p></li>
                    <li><p>Проектирование вложенных структур данных и схем для их описания:</p>
                        <ul>
                            <li><p>моделирование структур сообщений и конфигураций;</p></li>
                            <li><p>описание и валидация через JSON Schema, XSD, YAML-конфигурации (в т.ч. OpenAPI/Swagger и др.).</p></li>
                        </ul>
                    </li>
                    <li><p>Анализ фронтенда через инструменты разработчика браузера: изучение сетевых запросов (Network), логов и ошибок (Console), профилирование, отслеживание некорректных интеграций и расхождений между фронтом и бэкендом.</p></li>
                </ul>

                <h3>Документация и сопровождение разработки</h3>
                <ul>
                    <li><p>Подготовка проектной документации: ТЗ, требования, спецификации API, архитектурные концепции, модели данных, инструкции, регламенты, проектные планы, roadmaps.</p></li>
                    <li><p>Проектирование требований к логированию, разработка метрик и алёртов (Grafana).</p></li>
                    <li><p>Сопровождение команд разработки, тестирования и внедрения.</p></li>
                    <li><p>Анализ, воспроизведение и проработка дефектов.</p></li>
                </ul>

                <h3>Управление проектами</h3>
                <ul>
                    <li><p>Лидирование сложных интеграционных проектов, включающих взаимодействие десятков сервисов и систем, принадлежащих различным командам и трайбам; координация их работ, согласование API, SLA, форматов данных и графиков релизов.</p></li>
                    <li><p>Планирование этапов разработки и внедрения.</p></li>
                    <li><p>Постановка задач и контроль сроков исполнения.</p></li>
                    <li><p>Взаимодействие со стейкхолдерами, управление ожиданиями и согласование изменений.</p></li>
                    <li><p>Подготовка отчётности о ходе проекта.</p></li>
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

const styles: StyleSheetCSS = {
    container: {
        maxHeight: '100%',
        overflowY: 'auto',
    },
    subtitle: {
        marginBottom: 32,
        marginTop: 8,
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
        marginBottom: 32,
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

export default Promsvyazbank;

import {Link} from "react-router-dom";

export default function ConsultingPage() {
    return (
        <div>
            <h1 className="h1-title">Консалтинг</h1>
            <p>
                ➡️ Закупка прошла успешно, и нужны новые сотрудники для ее выполнения?<br/><br/>
                ➡️ Возникли юридические нюансы во время оформления документов?<br/><br/>
                ➡️ ️️Ищете опытного бухгалтера с опытом работы в закупках?<br/><br/>
                Для удобства пользователей сайта мы сделали подборку на все проверенные системы по консалтингу и поиску сотрудников:<br/><br/>
                <Link to="https://hh.ru" target="_blank">hh.ru</Link><br/><br/>
                <Link to="https://rabota.ru" target="_blank">rabota.ru</Link><br/><br/>
                <Link to="https://superjob.ru/" target="_blank">superjob</Link><br/><br/>
                Наш сайт является посредником и не оказывает консалтинговые услуги!
            </p>
        </div>)
}
import {Link} from "react-router-dom";

export default function BanksPage() {
    return (<div style={{width: '100%'}}>
        <h1 className="h1-title">Банки</h1>
        Подобрали самые актуальные предложения от ведущих российских банков:<br/><br/>
        <Link to="https://sberbank.ru/ru/s_m_business" target="_blank">Сбер</Link><br/><br/>
        <Link to="https://tinkoff.ru/business" target="_blank">Тиньков</Link><br/><br/>
        <Link to="https://alfabank.ru/sme/biznes" target="_blank">Альфа</Link><br/><br/>
    </div>)
}
import {Link} from "react-router-dom";

export default function StatePage() {
    return (<div style={{width: '100%'}}>
        <h1 className="h1-title">Гос поддержка</h1>
        Государственные программы по поддержке и развитию малого бизнеса:<br/><br/>
        <Link to="https://мойбизнес.рф/anticrisis" target="_blank">Мой бизнес</Link><br/><br/>
    </div>)
}
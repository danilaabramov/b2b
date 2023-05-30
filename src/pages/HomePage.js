import {PieChart, Pie, Cell, Legend} from 'recharts';

export default function HomePage() {

    const data1 = [{name: 'Да', value: 46}, {name: 'Нет', value: 50}, {name: 'Не знаю', value: 4}];
    const data2 = [{name: 'Да', value: 38}, {name: 'Нет', value: 62},];
    const data3 = [{name: 'Да', value: 92}, {name: 'Нет', value: 8},];
    const data4 = [{name: 'Да', value: 71}, {name: 'Нет', value: 29},];
    const data5 = [{name: 'Да', value: 68}, {name: 'Нет', value: 32},];
    const data6 = [{name: 'Да', value: 74}, {name: 'Нет', value: 26},];
    const data7 = [{name: 'Да', value: 52}, {name: 'Нет', value: 46}, {name: 'Не знал об этом', value: 2}];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>);
    };

    return (<div style={{width: '100%'}}>
        <h1 className="h1-title">Идея нашего сайта закупок в b2b сегменте:</h1>

        <h2>Это - экосистема:</h2>
        📍основное направление - совместные закупки b2b<br/>
        📍также есть возможность продажи business to business по низким/оптовым ценам<br/>
        📍внутренние сервисы, такие как консалтинг (поиск персонала), информация о получении помощи от<br/>
        государства и предоставление актуальных предложений банков осуществляется совместно с партнерам в данных
        сферах.<br/><br/>

        Для малого бизнеса наш сайт выполняет главную функцию – совместные закупки (прием заявки, составление общего
        списка, оформление и заказ) по особым условиям и тарифам.

        <h2>Также у нас представлены удобные сервисы:</h2>
        🔹подбор и найм персонала (с помощью партнерских сайтов подбора персонала)<br/>
        🔹оказание государственной поддержки (работа с проектом «Мой бизнес»)<br/>
        🔹сотрудничество с банковской сферой (специальные и выгодные предложения от банков-партнеров).<br/><br/>

        Наше самое главное отличие от других платформ и сайтов - все необходимые для малого бизнеса сервисы представлены
        на одной платформе (это и есть экосистема). Это значительно экономит время и ресурсы, ведь малый бизнес хочет
        получать высокую прибыль и быстро развиваться, но ему мешают ограниченность в ресурсах (деньгах, связях,
        времени)<br/><br/>

        <h1 className="h1-title">Cтатистика актуальности</h1>
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        1. Знаете ли Вы про совместные закупки b2b сегменте?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data1}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, alignContent: 'center', display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        2. Осуществляете ли Вы совместные закупки b2b по разным запросам Вашего бизнеса?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data2}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data2.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, alignContent: 'center', display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        3. Были бы Вам интересны покупки и продажи именно в b2b сегменте?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data3}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data3.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, alignContent: 'center', display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        4. Часто ли Вам требуется консалтинговая помощь при совместных закупках?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data4}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data4.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, alignContent: 'center', display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        5. Часто ли Вам требуется банковская консультация при совместных закупках?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data5}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data5.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, alignContent: 'center', display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        6. Часто ли Вам требуется информационная поддержка о государственных мерах поддержки при
                        совместных
                        закупках?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data6}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data6.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
            <div style={{width: 200}}>
                <div style={{width: 200, height: 200, alignContent: 'center', display: 'flex'}}>
                    <p style={{padding: 5, display: 'flex', margin: 'auto'}}>
                        7. Пользуетесь ли Вы сайтом мсп.рф?
                    </p>
                </div>
                <PieChart width={200} height={220}>
                    <Pie
                        data={data7}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data7.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
        </div>
    </div>
)
}
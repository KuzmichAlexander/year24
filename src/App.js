import logo from './logo.svg';
import './App.css';
import {Button, Card, TextField, Typography} from "@mui/material";
import {useState} from "react";

function App() {
    const rightKey = "LK8Bundefinedсимволыподарочки на столешифрBounty";
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [openedReport, setOpenedReport] = useState(false);

    const validateFunc = () => {
        const rignt = [];
        for (let i = 0; i < value.length; i++) {
            rignt.push(<Typography sx={{display: "inline"}} color={value[i] === rightKey[i] ? "#43a047" : "#e53935"}>
                {value[i]}
            </Typography>);
        }
        if (value === rightKey) {
            setIsCorrect(true);
        }
        setResult(rignt);
    }

    const openReport = () => {
        const rignt = [];
        for (let i = 0; i < value.length; i++) {
            rignt.push(<Typography sx={{display: "inline"}} color={value[i] === rightKey[i] ? "#43a047" : "#e53935"}>
                {value[i]}
            </Typography>);
        }
        if (value === rightKey) {
            setIsCorrect(true);
        }
        setResult(rignt);
    }

    if (openedReport) {
        return (
            <Typography sx={{padding: 3}} align={"left"} variant={"h6"}>
                {"  "}Ну что, любименькая, ты прошла моё испытание. Надеюсь тебе было хорошо и весело в процессе искать
                вещички и отгадывать загадки.
                <br/>
                <br/>
                {"  "}В новом году желаю побольше терпения. Осталось недолго. Вот магистратура закончится и я полностью
                буду
                отдан себе и семье
                <br/>
                <br/>
                {"  "}Купить бы дом побольше, чтобы все там жили. И никакой тесноты и обиды. Выходи на работу, чтобы
                быстрее
                осуществить наши планы
                <br/>
                <br/>
                {"  "}Детей в садик, чтобы мы могли порезвится одни, как в самом начале.
                <br/>
                <br/>
                {"  "}Кажется эти 2 года были только началом в нашем совместном океане. Ведь дальше будет куда сложнее и
                интереснее. Покупка домов, путешествие в другие страны. Возможный переезд. Во все это тоже надо будет
                вкладывать много сил и нервов. Но, я уверен что нам их хватит.
                <br/>
                <br/>
                {"  "}И наконец, просто хочу сказать, что безумно люблю тебя, и я верю, что у нас получится осуществить
                все
                наши совместные хотелки!
            </Typography>
        )
    }

    return (
        <Card sx={{
            width: "60%", margin: 20, marginLeft: "auto",
            marginRight: "auto", padding: 10
        }}>
            <Typography align={"center"} variant={"h2"}>
                Введи сюда получившийся код:
            </Typography>
            <br/>
            <br/>
            <br/>
            <TextField size={"medium"} fullWidth={true} value={value} onChange={e => setValue(e.target.value)}
                       id="outlined-basic" label="Шифр бошльшой. Соблюдай все пробелы и заглавные буквы!"
                       variant="outlined"/>
            <br/>
            <br/>
            <Button onClick={validateFunc} fullWidth={true} variant={"contained"} size={"large"}>Проверить</Button>
            <br/>
            <br/>
            <Typography align={"center"} variant={"h5"}>
                Тут будет отображаться правильность ввода после проверки:
            </Typography>

            {result.map(r => r)}

            {isCorrect ? <>
                <Typography align={"center"} variant={"h2"}>
                    Поздравляю, ты успешно ввела кодовую фразу
                </Typography>
                <Button onClick={() => setOpenedReport(true)} fullWidth={true} variant={"contained"} size={"large"}>Открыть
                    послание</Button>
            </> : null}

        </Card>
    );
}

export default App;

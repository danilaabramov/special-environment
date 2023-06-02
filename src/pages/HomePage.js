import Button from "../components/Button";

export default function HomePage() {

    return (<div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: 3}}>
        <div style={{
            paddingBottom: 30, borderBottom: '1px solid #DCE5E5',
        }}>
            <div style={{
                background: '#F7F7F7', width: '100%', display: 'flex', justifyContent: 'center'
            }}>
                <img width={800} src={require('../images/home.jpg')} alt="home"/>
            </div>
        </div>

        <div style={{display: 'flex', width: '100%', gap: 3, marginTop: 15}}>
            <Button to="/disabled-people" text={'Инвалидам'} color={'#F73518'} width={'calc(100% / 3)'}
                    height={50}/>
            <Button text='Работодателям' color={'#053997'} width={'calc(100% / 3)'} height={50}/>
            <Button text='Полезная информация' color={'#60BEFD'} width={'calc(100% / 3)'} height={50}/>
        </div>

        <div style={{display: 'flex', width: '100%', gap: 3}}>
            <Button text='Рекламная деятельность' color={'#053997'} width={'calc(100% / 3)'} height={50}/>
            <Button text='Территория права' color={'#60BEFD'} width={'calc(100% / 3)'} height={50}/>
            <Button text='Сонко' color={'#F73518'} width={'calc(100% / 3)'} height={50}/>
        </div>
    </div>)
}
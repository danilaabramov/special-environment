import {useEffect} from "react";

export default function DisabledPeoplePage() {

    useEffect(() => window.scrollTo(0, 0), [])

    return (<div style={{width: '100%'}}>
        <div className="h1-title" style={{color: '#888A89'}}>Инвалидам - инклюзивная платформа</div>

        <div style={{
            width: 'calc(100vw - 8px)',
            height: 150,
            border: '4px solid #B8DDE4',
            margin: '0 -40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{color: '#E75849', fontSize: 40, fontWeight: 400}}>ИНВАЛИДАМ</div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', alignItems: 'center', height: 100, padding: 20, cursor: 'pointer'}}>
                    <div style={{
                        border: '30px solid transparent', borderLeft: '30px solid #FF1D00', transform: 'scaleX(1.5)'
                    }}/>
                    <div
                        style={{height: 40, display: 'flex', alignItems: 'center', fontSize: 30, color: '#053997'}}>БАНК
                        ВАКАНСИЙ
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', height: 100, padding: 20, cursor: 'pointer'}}>
                    <div style={{
                        border: '30px solid transparent', borderLeft: '30px solid #053997', transform: 'scaleX(1.5)'
                    }}/>
                    <div
                        style={{height: 40, display: 'flex', alignItems: 'center', fontSize: 30, color: '#60BEFD'}}>БАНК
                        ВАКАНСИЙ
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', height: 100, padding: 20, cursor: 'pointer'}}>
                    <div style={{
                        border: '30px solid transparent', borderLeft: '30px solid #60BEFD', transform: 'scaleX(1.5)'
                    }}/>
                    <div
                        style={{height: 40, display: 'flex', alignItems: 'center', fontSize: 30, color: '#FF1D00'}}>БАНК
                        ВАКАНСИЙ
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', alignItems: 'center', height: 100, padding: 20, cursor: 'pointer'}}>
                    <div style={{
                        border: '30px solid transparent', borderLeft: '30px solid #053997', transform: 'scaleX(1.5)'
                    }}/>
                    <div
                        style={{height: 40, display: 'flex', alignItems: 'center', fontSize: 30, color: '#60BEFD'}}>БАНК
                        ВАКАНСИЙ
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', height: 100, padding: 20, cursor: 'pointer'}}>
                    <div style={{
                        border: '30px solid transparent', borderLeft: '30px solid #60BEFD', transform: 'scaleX(1.5)'
                    }}/>
                    <div
                        style={{height: 40, display: 'flex', alignItems: 'center', fontSize: 30, color: '#FF1D00'}}>БАНК
                        ВАКАНСИЙ
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', height: 100, padding: 20, cursor: 'pointer'}}>
                    <div style={{
                        border: '30px solid transparent', borderLeft: '30px solid #FF1D00', transform: 'scaleX(1.5)'
                    }}/>
                    <div
                        style={{height: 40, display: 'flex', alignItems: 'center', fontSize: 30, color: '#053997'}}>БАНК
                        ВАКАНСИЙ
                    </div>
                </div>
            </div>
        </div>


        <div style={{
            width: '100vw',
            padding: '10px 0',
            margin: '0 -40px',
            background: '#3DACE9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap'
        }}>
            <div style={{padding: 10, border: '1px solid #fff', color: '#fff', fontSize: 25, cursor: 'pointer'}}>
                Внести предложение
            </div>
            <div style={{padding: 10, border: '1px solid #fff', color: '#fff', fontSize: 25, cursor: 'pointer'}}>
                Встать на учет с выплатой пособия
            </div>
        </div>
    </div>)
}
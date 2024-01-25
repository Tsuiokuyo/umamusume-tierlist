import React from 'react';
import NumericInput from 'react-numeric-input';
import SpeedIcon from '../icons/utx_ico_obtain_00.png';
import StaminaIcon from '../icons/utx_ico_obtain_01.png';
import PowerIcon from '../icons/utx_ico_obtain_02.png';
import GutsIcon from '../icons/utx_ico_obtain_03.png';
import WisdomIcon from '../icons/utx_ico_obtain_04.png';
import FriendIcon from '../icons/utx_ico_obtain_05.png';
import { lsTest } from '../utils';

function defaultGMState() {
    return {
        version: 26,
        scenario :"GM",
        currentState: "speed",
        show: false,
        general: {
            bondPerDay: 15,
            races: [10,2,0,5],
            unbondedTrainingGain: [
                [10,0,3,0,0,5,19],
                [0,8,0,6,0,5,20],
                [0,4,9,0,0,5,20],
                [2,0,3,9,0,5,20],
                [2,0,0,0,8,5,0]
            ],
            bondedTrainingGain: [
                [13,0,4,0,0,5,23],
                [0,9,0,6,0,5,21],
                [0,4,10,0,0,5,21],
                [3,0,3,12,0,5,24],
                [3,0,0,0,11,5,0]
            ],
            summerTrainingGain: [
                [14,0,5,0,0,5,24],
                [0,12,0,8,0,5,25],
                [0,6,13,0,0,5,25],
                [4,0,4,13,0,5,25],
                [4,0,0,0,12,5,0]
            ],
            umaBonus: [1.06,1.06,1.06,1.06,1.06,1],
            multi: 1.25,
            bonusSpec: 0,
            motivation: 0.2,
            scenarioLink: [
                "ダーレーアラビアン"
            ],
            scenarioBonus: 150,
            fanBonus: 0.1,
        },
        speed: {
            type: 0,
            stats: [1.1,1,2,1,1,2,1.5],
            cap:600,
            minimum: 20,
            prioritize: true,
            onlySummer: false,
        },
        stamina: {
            type: 1,
            stats: [1,1,1,1.1,1,2,1.5],
            cap:550,
            minimum: 20,
            prioritize: false,
            onlySummer: false,
        },
        power: {
            type: 2,
            stats: [1,1.1,1,1,1,2,1.5],
            cap:550,
            minimum: 20,
            prioritize: false,
            onlySummer: false,
        },
        guts: {
            type: 3,
            stats: [2,1,2,1,1,2,1.5],
            cap:550,
            minimum: 20,
            prioritize: true,
            onlySummer: false,
        },
        wisdom: {
            type: 4,
            stats: [1.1,1,1,1,1.1,2,1],
            cap:600,
            minimum: 20,
            prioritize: true,
            onlySummer: false,
        },
        friend: {
            type: 6,
            stats: [1,1,1,1,1,2,0.75],
            cap:500,
            minimum: 20,
        }
    }
}

function defaultGLState() {
    return {
        version: 18,
        scenario : "GL",
        currentState: "speed",
        show: false,
        general: {
            bondPerDay: 20,
            races: [7,2,0,3],
            unbondedTrainingGain: [
                [8,0,4,0,0,2,19],
                [0,8,0,6,0,2,20],
                [0,4,9,0,0,2,20],
                [2,0,2,7,0,2,20],
                [2,0,0,0,6,3,0]
            ],
            bondedTrainingGain: [
                [11,0,5,0,0,2,23],
                [0,9,0,6,0,2,21],
                [0,4,10,0,0,2,21],
                [3,0,2,10,0,2,24],
                [3,0,0,0,9,3,0]
            ],
            summerTrainingGain: [
                [12,0,6,0,0,2,24],
                [0,12,0,8,0,2,25],
                [0,6,13,0,0,2,25],
                [3,0,3,11,0,2,25],
                [4,0,0,0,10,3,0]
            ],
            umaBonus: [1.06,1.06,1.06,1.06,1.06,1],
            multi: 1.4,
            bonusSpec: 15,
            motivation: 0.2,
            scenarioLink: [
                "ミホノブルボン",
                "ライトハロー",
                "スマートファルコン",
                "アグネスタキオン",
                "サイレンススズカ",
            ],
            scenarioBonus: 75,
            fanBonus: 0.05,
        },
        speed: {
            type: 0,
            stats: [1.1,1,1.2,1,1,0.5,1.5],
            cap:600,
            minimum: 35,
            prioritize: true,
            onlySummer: false,
        },
        stamina: {
            type: 1,
            stats: [1,1,1,1.1,1,0.5,1.5],
            cap:550,
            minimum: 35,
            prioritize: false,
            onlySummer: false,
        },
        power: {
            type: 2,
            stats: [1,1.1,1,1,1,0.5,1.5],
            cap:550,
            minimum: 35,
            prioritize: false,
            onlySummer: false,
        },
        guts: {
            type: 3,
            stats: [2,1,2,1,1,0.5,1.5],
            cap:550,
            minimum: 30,
            prioritize: true,
            onlySummer: false,
        },
        wisdom: {
            type: 4,
            stats: [1.1,1,1,1,1.1,0.5,1],
            cap:600,
            minimum: 30,
            prioritize: true,
            onlySummer: false,
        },
        friend: {
            type: 6,
            stats: [1,1,1,1,1,0.5,0.75],
            cap:500,
            minimum: 30,
        }
    }
}

function defaultMANTState() {
    return {
        version: 18,
        scenario:"MANT",
        currentState: "speed",
        show: false,
        general: {
            bondPerDay: 20,
            races: [15,10,2,3],
            unbondedTrainingGain: [
                [8,0,4,0,0,2,19],
                [0,7,0,3,0,2,17],
                [0,4,6,0,0,2,18],
                [3,0,3,6,0,2,20],
                [2,0,0,0,6,3,0]
            ],
            bondedTrainingGain: [
                [10,0,4,0,0,2,21],
                [0,8,0,3,0,2,18],
                [0,4,7,0,0,2,19],
                [4,0,3,9,0,2,24],
                [3,0,0,0,9,3,0]
            ],
            summerTrainingGain: [
                [12,0,6,0,0,2,24],
                [0,11,0,5,0,2,22],
                [0,6,10,0,0,2,23],
                [4,0,4,10,0,2,25],
                [4,0,0,0,10,3,0]
            ],
            umaBonus: [1.06,1.06,1.06,1.06,1.06,1],
            multi: 1.4,
            bonusSpec: 0,
            motivation: 0.2,
            scenarioLink: [],
            scenarioBonus: 0,
            fanBonus: 0.15
        },
        speed: {
            type: 0,
            stats: [1,1,1.1,1,1,0.5,1],
            cap:350,
            minimum: 50,
            prioritize: true,
            onlySummer: false,
        },
        stamina: {
            type: 1,
            stats: [1,1,1,1.1,1,0.5,1],
            cap:350,
            minimum: 40,
            prioritize: false,
            onlySummer: false,
        },
        power: {
            type: 2,
            stats: [1,1.1,1,1,1,0.5,1],
            cap:350,
            minimum: 50,
            prioritize: false,
            onlySummer: false,
        },
        guts: {
            type: 3,
            stats: [2,1,2,1,1,0.5,1],
            cap:350,
            minimum: 50,
            prioritize: true,
            onlySummer: false,
        },
        wisdom: {
            type: 4,
            stats: [1.1,1,1,1,1,0.5,1],
            cap:350,
            minimum: 40,
            prioritize: true,
            onlySummer: false,
        },
        friend: {
            type: 6,
            stats: [1,1,1,1,1,0.5,0.5],
            cap:350,
            minimum: 40,
        }
    }
}

function defaultAoharuState() {
    return {
        version: 18,
        scenario: "Aoharu",
        currentState: "wisdom",
        show: false,
        general: {
            bondPerDay: 20,
            races: [7,2,0,3],
            unbondedTrainingGain: [
                [8,0,4,0,0,4,19],
                [0,8,0,6,0,4,20],
                [0,4,9,0,0,4,20],
                [3,0,3,6,0,4,20],
                [2,0,0,0,6,5,0]
            ],
            bondedTrainingGain: [
                [12,0,5,0,0,4,24],
                [0,12,0,7,0,4,25],
                [0,5,13,0,0,4,25],
                [4,0,3,10,0,4,25],
                [3,0,0,0,10,5,0]
            ],
            summerTrainingGain: [
                [13,0,6,0,0,4,25],
                [0,13,0,8,0,4,26],
                [0,6,14,0,0,4,26],
                [4,0,4,11,0,4,26],
                [4,0,0,0,11,5,0]
            ],
            umaBonus: [1.06,1.06,1.06,1.06,1.06,1],
            multi: 1,
            bonusSpec: 0,
            motivation: 0.2,
            scenarioLink: [
                "マチカネフクキタル",
                "ハルウララ",
                "樫本理子",
                "ライスシャワー",
                "タイキシャトル"
            ],
            scenarioBonus: 40,
            fanBonus: 0.05
        },
        speed: {
            type: 0,
            stats: [1,1.5,1.5,1,1,0.5,1],
            cap:550,
            minimum: 40,
            prioritize: false,
            onlySummer: false,
        },
        stamina: {
            type: 1,
            stats: [1,1.5,1.5,1.1,1,0.5,1],
            cap:400,
            minimum: 30,
            prioritize: false,
            onlySummer: false,
        },
        power: {
            type: 2,
            stats: [1,1.5,1.5,1,1,0.5,1],
            cap:400,
            minimum: 30,
            prioritize: false,
            onlySummer: false,
        },
        guts: {
            type: 3,
            stats: [2,1.5,2,1,1,0.5,1],
            cap:500,
            minimum: 40,
            prioritize: false,
            onlySummer: false,
        },
        wisdom: {
            type: 4,
            stats: [1.2,1,1,1,1.5,1,0.5],
            cap:900,
            minimum: 30,
            prioritize: true,
            onlySummer: false,
        },
        friend: {
            type: 6,
            stats: [1,1.5,1.5,1,1,0.5,0.5],
            cap:500,
            minimum: 40,
        }
    }
}

function defaultURAState() {
    return {
        version: 18,
        scenario: "URA",
        currentState: "speed",
        show: false,
        general: {
            bondPerDay: 20,
            races: [7,2,0,3],
            unbondedTrainingGain: [
                [11,0,6,0,0,4,21],
                [0,10,0,6,0,4,19],
                [0,6,9,0,0,4,20],
                [5,0,5,8,0,4,22],
                [2,0,0,0,10,5,0]
            ],
            bondedTrainingGain: [
                [13,0,6,0,0,4,23],
                [0,11,0,6,0,4,21],
                [0,6,11,0,0,4,22],
                [5,0,5,10,0,4,24],
                [2,0,0,0,12,5,0]
            ],
            summerTrainingGain: [
                [15,0,8,0,0,4,24],
                [0,14,0,7,0,4,25],
                [0,8,13,0,0,4,25],
                [6,0,6,12,0,4,25],
                [4,0,0,0,14,5,0]
            ],
            umaBonus: [1.06,1.06,1.06,1.06,1.06,1],
            multi: 1,
            bonusSpec: 0,
            motivation: 0.2,
            scenarioLink: ["桐生院葵"],
            scenarioBonus: 16,
            fanBonus: 0.05
        },
        speed: {
            type: 0,
            stats: [1,1.5,1.5,1,1,0.5,1],
            cap:500,
            minimum: 40,
            prioritize: true,
            onlySummer: false,
        },
        stamina: {
            type: 1,
            stats: [1,1.5,1.5,1.1,1,0.5,1],
            cap:400,
            minimum: 30,
            prioritize: false,
            onlySummer: false,
        },
        power: {
            type: 2,
            stats: [1,1.5,1.5,1,1,0.5,1],
            cap:400,
            minimum: 30,
            prioritize: false,
            onlySummer: false,
        },
        guts: {
            type: 3,
            stats: [2,1.5,2,1,1,0.5,1],
            cap:500,
            minimum: 40,
            prioritize: true,
            onlySummer: false,
        },
        wisdom: {
            type: 4,
            stats: [1.1,1.5,1.5,1,1,0.5,1],
            cap:500,
            minimum: 30,
            prioritize: true,
            onlySummer: false,
        },
        friend: {
            type: 6,
            stats: [1,1.5,1.5,1,1,0.5,0.5],
            cap:500,
            minimum: 40,
        }
    }
}

function nameToChn(name){
    switch (name){
        case "URA":
            return "URA"
        case "Aoharu":
            return "青春盃"
        case "MANT":
            return "巔峰杯"
        case "GL" :
            return "偶像杯"
        // case "GM":
        //     return "女神杯"
        // case "LARC":
        //     return "凱旋門"
        default:
            return "無"
            
    }
}

class Weights extends React.Component {
    constructor(props) {
        super(props);
        
        this.onSettingChanged = this.onSettingChanged.bind(this);
        this.onGeneralSettingChanged = this.onGeneralSettingChanged.bind(this);
        this.onTypeChanged = this.onTypeChanged.bind(this);
        this.onCapChanged = this.onCapChanged.bind(this);
        this.onMinimumChanged = this.onMinimumChanged.bind(this);
        this.onToggleWeights = this.onToggleWeights.bind(this);
        this.onMotivationChanged = this.onMotivationChanged.bind(this);
        this.onMANTReset = this.onMANTReset.bind(this);
        this.onURAReset = this.onURAReset.bind(this);
        this.onAoharuReset = this.onAoharuReset.bind(this);
        this.onGLReset = this.onGLReset.bind(this);
        this.onGMReset = this.onGMReset.bind(this);

        if(lsTest()) {
            let savedWeights = window.localStorage.getItem("weights");
            if (savedWeights !== null) {
                savedWeights = JSON.parse(savedWeights);
                if (savedWeights.version == defaultMANTState().version) {
                    this.state = savedWeights;
                    return this.props.onChange(this.state[this.state.currentState], this.state.general);
                }
            }
        }

        this.state = defaultGMState();
        this.props.onChange(this.state[this.state.currentState], this.state.general);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState && prevState !== this.state && lsTest()) {
            window.localStorage.setItem("weights", JSON.stringify(this.state));
        }
    }

    onGLReset() {
        let newState = defaultGLState();
        this.setState(newState);
        this.props.onChange(newState[newState.currentState], newState.general);
    }

    onMANTReset() {
        let newState = defaultMANTState();
        this.setState(newState);
        this.props.onChange(newState[newState.currentState], newState.general);
    }

    onURAReset() {
        let newState = defaultURAState();
        this.setState(newState);
        this.props.onChange(newState[newState.currentState], newState.general);
    }

    onAoharuReset() {
        let newState = defaultAoharuState();
        this.setState(newState);
        this.props.onChange(newState[newState.currentState], newState.general);
    }

    onGMReset() {
        let newState = defaultGMState();
        this.setState(newState);
        this.props.onChange(newState[newState.currentState], newState.general);
    }

    onSettingChanged(event, numberString, numberInput) {
        if (!event) return;

        let settings = this.state[this.state.currentState];

        if (typeof event === "number") {
            if (numberInput.id.indexOf('.') > 0) {
                let split = numberInput.id.split('.');
                settings[split[0]][split[1]] = event;
            } else {
                settings[numberInput.id] = event;
            }
        }
        else {
            settings[event.target.id] = !settings[event.target.id];
        }

        let newSettings = {};
        newSettings[this.state.currentState] = settings;
        this.setState(newSettings);

        this.props.onChange(settings, this.state.general);
    }

    onGeneralSettingChanged(event, numberString, numberInput) {
        if (!event) return;

        let settings = this.state.general;

        if (typeof event === "number") {
            if (numberInput.id.indexOf('.') > 0) {
                let split = numberInput.id.split('.');
                settings[split[0]][split[1]] = event;
            } else {
                settings[numberInput.id] = event;
            }
        }
        else {
            settings[event.target.id] = !settings[event.target.id];
        }

        let newSettings = {};
        newSettings.general = settings;
        this.setState(newSettings);

        this.props.onChange(this.state[this.state.currentState], settings);
    }

    onMotivationChanged(event) {
        let settings = this.state.general;
        settings.motivation = event.target.value;
        let newSettings = {};
        newSettings.general = settings;
        this.setState(newSettings);
        this.props.onChange(this.state[this.state.currentState], settings);
    }

    onTypeChanged(event) {
        this.setState({
            currentState: event.target.id
        });

        this.props.onChange(this.state[event.target.id], this.state.general);
    }

    onCapChanged(event) {
        let settings = this.state[this.state.currentState];
        settings.cap = event.target.value;
        let newSettings = {};
        newSettings[this.state.currentState] = settings;
        this.setState(newSettings);
        this.props.onChange(settings, this.state.general);
    }

    onMinimumChanged(event) {
        let settings = this.state[this.state.currentState];
        settings.minimum = event.target.value;
        let newSettings = {};
        newSettings[this.state.currentState] = settings;
        this.setState(newSettings);
        this.props.onChange(settings, this.state.general);
    }

    onToggleWeights(event) {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div className="weights">
                                   <div className="weight-row">
                        <div class="section-header">劇本</div>
                        <div class="section-explanation">
                            點選劇本後會調整所有參數的預設值
                        </div>
                        {/* <button id="reset-weights-GL" type="button" onClick={this.onGMReset}>女神杯</button> */}
                        <button id="reset-weights-GL" type="button" onClick={this.onGLReset}>偶像杯</button>
                        <button id="reset-weights-MANT" type="button" onClick={this.onMANTReset}>巔峰杯</button>
                        <button id="reset-weights-URA" type="button" onClick={this.onAoharuReset}>青春盃</button>
                        <button id="reset-weights-URA" type="button" onClick={this.onURAReset}>URA</button>
                    </div>

                    <div className="weight-row">
                            <button id="weights-toggle" type="button" onClick={this.onToggleWeights}>{this.state.show ? "隱藏參數" : "顯示參數"}</button>
                    </div>
                {
                    this.state.show &&
                    <>
                    <div className="weight-row">
                        <div class="section-header">羈絆比率</div>
                        <div class="section-explanation">
                        在某些牌組中，通常有幾張不需要絆值的卡片，可以將這些視為每回合額外的絆值，1張卡預估為7點。
                        </div>
                        <label for="bondPerDay">每回合獲得的絆值:</label>
                        <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="bondPerDay" value={this.state.general.bondPerDay} min={1} max={50} step={0.1}/>
                    </div>
                    <div className="weight-row">
                        <div class="section-header">特定劇本影響</div>
                        <div class="section-explanation">
                            訓練加成來自巔峰杯(物品)及偶像杯(歌曲)。
                            擅長率來自偶像杯(歌曲)。
                        </div>
                        <label for="multi">訓練加成:</label>
                        <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="multi" value={this.state.general.multi} min={1} max={2.2} step={0.05}/>
                        <label for="bonusSpec">擅長率:</label>
                        <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="bonusSpec" value={this.state.general.bonusSpec} min={-1} max={95} step={5}/>
                    </div>
                    <div className="weight-row">
                        <div class="section-header">屬性權重</div>
                        <div class="section-explanation">
                        {/* 屬性權重以標準的方式設定。<br />
                        意志力是例外， */}
                        速度和力量被有兩倍的權重。增加你關心的屬性，減少你不關心的屬性。例如要跑短英的馬娘，你會減少耐力的權重。
                        </div>
                        <label for="stats.0">速度</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.0" value={this.state[this.state.currentState].stats[0]} min={0} max={3} step={0.1}/>
                        <label for="stats.1">耐力</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.1" value={this.state[this.state.currentState].stats[1]} min={0} max={3} step={0.1}/>
                        <label for="stats.2">力量</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.2" value={this.state[this.state.currentState].stats[2]} min={0} max={3} step={0.1}/>
                        <label for="stats.3">意志力</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.3" value={this.state[this.state.currentState].stats[3]} min={0} max={3} step={0.1}/>
                        <label for="stats.4">智力</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.4" value={this.state[this.state.currentState].stats[4]} min={0} max={3} step={0.1}/>
                        <br/><br/><label for="stats.5">技能點</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.5" value={this.state[this.state.currentState].stats[5]} min={0} max={3} step={0.1}/>
                        <label for="stats.6">體力</label>
                        <NumericInput onChange={this.onSettingChanged} type="number" id="stats.6" value={this.state[this.state.currentState].stats[6]} min={0} max={3} step={0.1}/>
                    </div>
                    <div className="weight-row">
                        <div class="section-header">平均幹勁</div>
                        <div class="section-explanation">
                        極差	-20%，不佳	-10%<br />
                        普通	0%<br />
                        良好	+10%，絕佳	+20%<br />
                        </div>
                        <input type="range" onChange={this.onMotivationChanged} min={-0.2} max={0.2} step={0.05} value={this.state.general.motivation} class="slider" id="motivation"/>
                        <label for="minimum">{this.state.general.motivation * 100}%</label>
                    </div>
                    <div className="weight-row">
                        <div class="section-header">數值上限</div>
                        <div class="section-explanation">
                        限制屬性增益，降低只提升一個屬性的卡牌。<br/>
                        如果你想要盡早限制你的屬性去堆特定屬性，那麼就降低這個數值。
                        </div>
                        <input type="range" onChange={this.onCapChanged} min={300} max={1000} step={20} value={this.state[this.state.currentState].cap} class="slider" id="cap"/>
                        <label for="cap">{this.state[this.state.currentState].cap}</label>
                    </div>
                    <div className="weight-row">
                        <div class="section-header">最小訓練值</div>
                        <div class="section-explanation">
                        低於此值的訓練都將被忽略。<br/>
                        增加此值以忽略你不會點的訓練，例如單彩圈。<br/>
                        而一張滿破小北約為40，視權重而定。
                        </div>
                        <input type="range" onChange={this.onMinimumChanged} min={20} max={100} step={5} value={this.state[this.state.currentState].minimum} class="slider" id="minimum"/>
                        <label for="minimum">{this.state[this.state.currentState].minimum}</label>
                    </div>
                    {this.state.currentState !== "friend" &&
                        <div className="weight-row">
                            <div class="section-header">彩圈調整</div>
                            <div class="section-explanation">
                            如果停用此選項，則全部資料只會計算單一彩圈，
                            如果任何其他統計數據同時出現彩圈，則會被忽略。
                            </div>
                            <input type="checkbox" onChange={this.onSettingChanged} checked={this.state[this.state.currentState].prioritize} id="prioritize"/>
                            <label for="prioritize">優先處理這個數據</label>
                            <div class="section-explanation">
                            如果啟用此選項，則所有彩圈會被忽略，
                            在這個統計數據中。 只會假設在暑假8天訓練。
                            </div>
                            <input type="checkbox" onChange={this.onSettingChanged} checked={this.state[this.state.currentState].onlySummer} id="onlySummer"/>
                            <label for="onlySummer">只在暑假訓練</label>
                        </div>
                    }
                    </>
                }
                    <div className="weight-row">
                        <div class="section-header">自訂賽程</div>
                        <div class="section-explanation">
                            預計要跑的賽程，用於計算比賽獎勵並減去訓練回合，
                            不需要加入出道賽及結算前的三場額外比賽。
                        </div>
                        <label for="races.0">G1</label>
                        <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="races.0" value={this.state.general.races[0]} min={0} max={30} step={1}/>
                        <label for="races.1">G2/G3</label>
                        <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="races.1" value={this.state.general.races[1]} min={0} max={30} step={1}/>
                        <label for="races.2">OP/Pre-OP</label>
                        <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="races.2" value={this.state.general.races[2]} min={0} max={30} step={1}/>
                    </div>
                <div className="weight-row">
                    <div class="section-header">角色成長率</div>
                    <div class="section-explanation">
                    畫面上成長率的百分比，轉換成小數點。< br / >
                    例如:小栗帽 速20% 力10% 是1.20、1.00、1.10、1.00、1.00
                    </div>
                    <label for="umaBonus.0">速度</label>
                    <NumericInput style={{ width: '100px' }} onChange={this.onGeneralSettingChanged} type="number" id="umaBonus.0" value={this.state.general.umaBonus[0]} min={0.7} max={1.3} step={0.01} precision={2}/>
                    <label for="umaBonus.1">耐力</label>
                    <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="umaBonus.1" value={this.state.general.umaBonus[1]} min={0.7} max={1.3} step={0.01} precision={2}/>
                    <label for="umaBonus.2">力量</label>
                    <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="umaBonus.2" value={this.state.general.umaBonus[2]} min={0.7} max={1.3} step={0.01} precision={2}/>
                    <label for="umaBonus.3">意志力</label>
                    <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="umaBonus.3" value={this.state.general.umaBonus[3]} min={0.7} max={1.3} step={0.01} precision={2}/>
                    <label for="umaBonus.4">智力</label>
                    <NumericInput onChange={this.onGeneralSettingChanged} type="number" id="umaBonus.4" value={this.state.general.umaBonus[4]} min={0.7} max={1.3} step={0.01} precision={2}/>
                </div>
                <div className="weight-row">
                <div class="section-header">擅長訓練</div>
                    <input id="speed" type="image" class={this.state.currentState == "speed" ? "image-btn selected" : "image-btn"} src={SpeedIcon} onClick={this.onTypeChanged} alt="Speed"/>
                    <input id="stamina" type="image" class={this.state.currentState == "stamina" ? "image-btn selected" : "image-btn"} src={StaminaIcon} onClick={this.onTypeChanged} alt="Stamina"/>
                    <input id="power" type="image" class={this.state.currentState == "power" ? "image-btn selected" : "image-btn"} src={PowerIcon} onClick={this.onTypeChanged} alt="Power"/>
                    <input id="guts" type="image" class={this.state.currentState == "guts" ? "image-btn selected" : "image-btn"} src={GutsIcon} onClick={this.onTypeChanged} alt="Guts"/>
                    <input id="wisdom" type="image" class={this.state.currentState == "wisdom" ? "image-btn selected" : "image-btn"} src={WisdomIcon} onClick={this.onTypeChanged} alt="Wisdom"/>
                    <input id="friend" type="image" class={this.state.currentState == "friend" ? "image-btn selected" : "image-btn"} src={FriendIcon} onClick={this.onTypeChanged} alt="Friend"/>
                </div>
                改變訓練會自動調整這些屬性收益(屬性權重、數值上限、最小訓練值)
                <div className="weight-row"><br />
                <span style={{ fontWeight: 'bold' }}>
                    目前預設的劇本為 {nameToChn(this.state.scenario)}
                    </span>
                </div>
            </div>
        );
    }
}

export default Weights;
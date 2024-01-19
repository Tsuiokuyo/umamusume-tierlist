import React from 'react';
import cards from '../cards';
import { lsTest } from '../utils';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ssr:[true,true,true,true,true],
            sr:[true,true,true,true,true],
            r: [true,true,true,true,true],
            isMycard: true,
            serverTW: true,
        };

        this.onSettingChanged = this.onSettingChanged.bind(this);

        if(lsTest()) {
            let savedFilters = window.localStorage.getItem("filters");
            if (savedFilters !== null) {
                savedFilters = JSON.parse(savedFilters);
                this.state = savedFilters;
            }
        }

        let availableCards = cards.filter((c) => {
            if (c.rarity === 1) {
                return this.state.r[c.limit_break]
            } else if (c.rarity === 2) {
                return this.state.sr[c.limit_break]
            } else {
                return this.state.ssr[c.limit_break]
            }
        });
        this.props.onCardsChanged(availableCards);
    }

    handleChecksChange = (event, value) => {
        if (value === 'CARD') {
            this.setState({ isMycard: event.target.checked });
        }
            this.props.onClick(value, event.target.checked);
      
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState && prevState !== this.state && lsTest()) {
            window.localStorage.setItem("filters", JSON.stringify(this.state));
        }
    }

    onSettingChanged(event, numberString, numberInput) {
        if (!event) return;

        let settings = {...this.state};

        if (event.target.id.indexOf('.') > 0) {
            let split = event.target.id.split('.');
            settings[split[0]][split[1]] = !settings[split[0]][split[1]];
        } else {
            settings[event.target.id] = !settings[event.target.id];
        }
        
        this.setState(settings);

        let availableCards = cards.filter((c) => {
            if (c.rarity === 1) {
                return this.state.r[c.limit_break]
            } else if (c.rarity === 2) {
                return this.state.sr[c.limit_break]
            } else {
                return this.state.ssr[c.limit_break]
            }
        });
        this.props.onCardsChanged(availableCards);
    }

    onTypeChanged(event) {
        this.setState({
            currentState: event.target.id
        });

        this.props.onChange(this.state[event.target.id]);
    }

    render() {
        const rarities = ["ssr","sr","r"];
        let rows = [];
        rows.push(<tr><th>SSR</th><th>SR</th><th>R</th></tr>);
        for (let i = 4; i >= 0; i--) {
            let data = [];
            let lit_up = "";
            let dark = "";
            for(let j = 0; j < 4; j++) {
                if (j < i) {
                    lit_up += "◆";
                } else {
                    dark += "◆";
                }
            }
            for (let r = 0; r < 3; r++) {
                data.push(<td>
                    <span className="lb-yes">{lit_up}</span><span className="lb-no">{dark}</span>
                    <input type="checkbox" checked={this.state[rarities[r]][i]} id={rarities[r] + "." + i} onChange={this.onSettingChanged}/>
                </td>);
            }
            rows.push(<tr>{data}</tr>);
        }
        
        return (
            <div className="filters">
                <div className="general-filters">
                    <table>
                        {rows}
                    </table>
                </div>
                <div>僅顯示持有的牌組(從最下面設定)
                <input
                    type="checkbox"
                    defaultChecked={true}
                    checked={this.state.isMycard}
                    onChange={(event) => this.handleChecksChange(event, 'CARD')}
/>
                </div>
                {/* <div>僅顯示台服卡片
                                <input
                    type="checkbox"
                    defaultChecked={true}
                    checked={this.state.serverTW}
                    onChange={(event) => this.handleChecksChange(event, 'TW')}
                />
                 </div> */}
                
            </div>
        );
    }
}

export default Filters;
import React from 'react';
import SpeedIcon from '../icons/utx_ico_obtain_00.png';
import StaminaIcon from '../icons/utx_ico_obtain_01.png';
import PowerIcon from '../icons/utx_ico_obtain_02.png';
import GutsIcon from '../icons/utx_ico_obtain_03.png';
import WisdomIcon from '../icons/utx_ico_obtain_04.png';
import FriendIcon from '../icons/utx_ico_obtain_05.png';

class CardsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTypeFilter: '0',
            selectedRarityFilter: '3',
        };
    }

    handleLbChange = (id, value) => {
        this.props.onlbChange(id, value);
    };

    handleChecksChange = (cardId) => {
        const currentChecksStatus = this.props.mycards[cardId].checks;
        // console.log(`Toggle checkbox for card ID ${cardId}`);
        if (currentChecksStatus) {
            this.props.onClick(cardId, false);
        } else {
            this.props.onClick(cardId, true);
        }
    };

    handleTypeFilterChange = (event) => {
        // let val = "all";
        // switch (event.target.id){
        //     case 'c0':
        //         val = 0;
        //         break;
        //     case 'c1':
        //         val = 1;
        //         break;
        //     case 'c2':
        //         val = 2;
        //         break;
        //     case 'c3':
        //         val = 3;
        //         break;
        //     case 'c4':
        //         val = 4;
        //         break;
        //     case 'c6':
        //         val = 6;
        //         break;
        //     default:
        //         break;
        // }
        this.setState({
            // selectedTypeFilter: val,
            selectedTypeFilter: event.target.value,
        });
    };

    handleRarityFilterChange= (event) => {
        this.setState({
            selectedRarityFilter: event.target.value,
        });
    };

    lbColor = (lbValue,bool) => {
        let star = ""
        if(bool){
            for(let i = 0; i < 4; i++) {
                if (i < lbValue) {
                    star += "◆";
                }
            }
        }else{
            for(let i = 0; i <= 4; i++) {
                if (i > lbValue) {
                    star += "◆";
            }
        }
        }
        return star;
    };

    render() {
        const { mycards } = this.props;
        const { selectedTypeFilter, selectedRarityFilter } = this.state;
        const filteredCards = Object.fromEntries(
            Object.entries(mycards)
                .filter(([cardId, card]) => card.type === parseInt(selectedTypeFilter) || selectedTypeFilter === 'all')
                .filter(([cardId, card]) => card.rarity === parseInt(selectedRarityFilter) || selectedRarityFilter === 'all')
        );

        return (
            <div className="cards-table-container">
                <h2>持有的牌組</h2>
                篩選:
                <label>
                 {/* <div class="section-header">擅長訓練</div>
                    <input id="c0" type="image" class={this.state.selectedTypeFilter == "0" ? "image-btn selected" : "image-btn"} src={SpeedIcon} onClick={this.handleTypeFilterChange} alt="Speed"/>
                    <input id="c1" type="image" class={this.state.selectedTypeFilter == "1" ? "image-btn selected" : "image-btn"} src={StaminaIcon} onClick={this.handleTypeFilterChange} alt="Stamina"/>
                    <input id="c2" type="image" class={this.state.selectedTypeFilter == "2" ? "image-btn selected" : "image-btn"} src={PowerIcon} onClick={this.handleTypeFilterChange} alt="Power"/>
                    <input id="c3" type="image" class={this.state.selectedTypeFilter == "3" ? "image-btn selected" : "image-btn"} src={GutsIcon} onClick={this.handleTypeFilterChange} alt="Guts"/>
                    <input id="c4" type="image" class={this.state.selectedTypeFilter == "4" ? "image-btn selected" : "image-btn"} src={WisdomIcon} onClick={this.handleTypeFilterChange} alt="Wisdom"/>
                    <input id="c6" type="image" class={this.state.selectedTypeFilter == "6" ? "image-btn selected" : "image-btn"} src={FriendIcon} onClick={this.handleTypeFilterChange} alt="Friend"/> */}
                     擅長訓練
                    <select value={selectedTypeFilter} onChange={this.handleTypeFilterChange}>
                        <option value="all">不限</option>
                        <option value="0">速度</option>
                        <option value="1">持久力</option>
                        <option value="2">力量</option>
                        <option value="3">意志力</option>
                        <option value="4">智力</option>
                        <option value="6">友人</option>
                    </select>
                </label>
                <label>
                    稀有度
                    <select value={selectedRarityFilter} onChange={this.handleRarityFilterChange}>
                        <option value="all">不限</option>
                        <option value="3">SSR</option>
                        <option value="2">SR</option>
                        <option value="1">R</option>
                    </select>
                </label>
                <label>
                    當前篩選條件下擁有
                        {
                        Object.entries(mycards)
                            .filter(([cardId, card]) => card.checks === true)
                            .filter(([cardId, card]) => card.type === parseInt(selectedTypeFilter) || selectedTypeFilter === 'all')
                            .filter(([cardId, card]) => card.rarity === parseInt(selectedRarityFilter) || selectedRarityFilter === 'all')
                            .length
                        }
                        張卡，尚未擁有的卡有
                        {
                        Object.entries(mycards)
                            .filter(([cardId, card]) => card.checks !== true)
                            .filter(([cardId, card]) => card.type === parseInt(selectedTypeFilter) || selectedTypeFilter === 'all')
                            .filter(([cardId, card]) => card.rarity === parseInt(selectedRarityFilter) || selectedRarityFilter === 'all')
                            .length
                        }張
                </label>
                <table className="cards-table">
                    <thead>
                        <tr>
                            <th>卡面</th>
                            <th>名稱</th>
                            <th>突破</th>
                            <th>擁有</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(filteredCards).map(([cardId, card]) => (
                            <tr key={cardId}>
                                <td>
                                    <div className="support-card">
                                        <img
                                            className={"support-card-image"}
                                            name={cardId}
                                            src={process.env.PUBLIC_URL + "/cardImages/support_card_s_" + cardId + ".png"}
                                            title={card.name}
                                            alt={card.name}
                                        />
                                        <span className="limit-breaks">
                                            <span className="lb-yes">{this.lbColor(card.lb, true)}</span>
                                            <span className="lb-no">{this.lbColor(card.lb, false)}</span>
                                        </span>
                                    </div>
                                </td>
                                <td style={{ whiteSpace: 'pre-line' }}>{splitNameToLines(card.name)}</td>
                                <td>
                                <select value={card.lb} onChange={(event) => this.handleLbChange(card.id, event.target.value)} style={{ fontSize: '18px' }}>
                                    <option value={4}>4</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                    <option value={1}>1</option>
                                    <option value={0}>0</option>
                                </select>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={card.checks}
                                        onChange={() => this.handleChecksChange(cardId)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

function splitNameToLines(name) {
    let replacedName = name.replace(/\[|\]/g, match => match === '[' ? '【' : '】');
    
    let parts = replacedName.split('】');
    let adjustedName = parts.map((part, index) => index === 0 ? part + '】 ' : part.trim()).join('\n');
    return adjustedName;
}

export default CardsTable;

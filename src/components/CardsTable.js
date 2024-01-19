import React from 'react';

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

        console.log(`Toggle checkbox for card ID ${cardId}`);

        if (currentChecksStatus) {
            this.props.onClick(cardId, false);
        } else {
            this.props.onClick(cardId, true);
        }
    };

    handleTypeFilterChange = (event) => {
        this.setState({
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
                <h2>持有的牌</h2>
                篩選:
                <label>
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
        <td>{card.name}</td>
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

export default CardsTable;

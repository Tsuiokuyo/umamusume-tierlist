import React from 'react';
import supportCardsName from "../supportCardsName";
import cards from "../cards";
import SpeedIcon from '../icons/utx_ico_obtain_00.png';
import StaminaIcon from '../icons/utx_ico_obtain_01.png';
import PowerIcon from '../icons/utx_ico_obtain_02.png';
import GutsIcon from '../icons/utx_ico_obtain_03.png';
import WisdomIcon from '../icons/utx_ico_obtain_04.png';
import FriendIcon from '../icons/utx_ico_obtain_05.png';

import RIcon from '../icons/utx_ico_obtain_R.png';
import SRIcon from '../icons/utx_ico_obtain_SR.png';
import SSRIcon from '../icons/utx_ico_obtain_SSR.png';

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
        if(this.props.nowDeck == 0) {
            const currentChecksStatus = this.props.mycardsDeck[cardId].checks;
            // console.log(`Toggle checkbox for card ID ${cardId}`);
            if (currentChecksStatus) {
                this.props.onClick(cardId, false);
            } else {
                this.props.onClick(cardId, true);
            }
        }else{
            const currentChecksStatus = this.props.mycardsDeck[cardId].checks1;
            // console.log(`Toggle checkbox for card ID ${cardId}`);
            if (currentChecksStatus) {
                this.props.onClick(cardId, false);
            } else {
                this.props.onClick(cardId, true);
            }
        }
    };

    handleTypeFilterChange = (event) => {
        this.setState({
            selectedTypeFilter: event.target.id,
        });
        this.props.weights.type = event.target.id;
        this.props.onWeightsChange(this.props.weights);
    };

    handleRarityFilterChange = (rarityValue) => {
        this.setState({
            selectedRarityFilter: rarityValue,
        });
    };

    handleDeckChange = (event) => {
        // const selectedDeck = parseInt(event.target.value);
        this.props.handleDeckChange(event);
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

    exportToJsonFile = () => {
        const { mycardsDeck } = this.props;

        // 將所有卡片的 name 屬性設置為空字符串
        const updatedMycardsDeck = {};
        Object.entries(mycardsDeck).forEach(([id, card]) => {
            const updatedCard = { ...card, name: '' };
            updatedMycardsDeck[id] = updatedCard;
        });

        // 將更新後的 mycardsDeck 轉換為 JSON 字符串
        const jsonData = JSON.stringify(updatedMycardsDeck);

        // 生成時間戳
        const currentDate = new Date();
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const day = ('0' + currentDate.getDate()).slice(-2);
        const hours = ('0' + currentDate.getHours()).slice(-2);
        const minutes = ('0' + currentDate.getMinutes()).slice(-2);
        const seconds = ('0' + currentDate.getSeconds()).slice(-2);
        const dateString = `${month}${day}_${hours}${minutes}${seconds}`;

        // 創建 Blob 對象，並將其轉換為 URL
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // 創建下載連結元素並設置屬性
        const link = document.createElement('a');
        link.href = url;
        link.download = `umaTier_${dateString}.json`;

        // 添加連結元素到文檔中，點擊連結執行下載，然後移除連結元素
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    handleImportJsonFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                const isValidFormat = typeof jsonData === 'object';
                if (isValidFormat) {
                    this.props.onImportJson(jsonData);
                    const fileName = file.name; // 取得檔案名稱
                    alert(`檔案名稱：${fileName} ，匯入成功！`);
                } else {
                    alert('匯入的格式錯誤');
                }
            } catch (error) {
                console.error('解析錯誤：', error);
                alert('解析錯誤');
            }
        };
        reader.readAsText(file);
    };


    render() {
        const { mycardsDeck } = this.props;
        const {nowDeck} = this.props;
        const { selectedTypeFilter, selectedRarityFilter } = this.state;
        const filteredCards = Object.fromEntries(
            Object.entries(mycardsDeck)
                .filter(([cardId, card]) => card.type == parseInt(selectedTypeFilter) || selectedTypeFilter === 'all')
                .filter(([cardId, card]) => card.rarity == parseInt(selectedRarityFilter) || selectedRarityFilter === 'all')
        );

        return (
            
            <div className="cards-table-container">
                <label>持有的牌組</label>
                <div className="button-container">
                    <div className="button-wrapper">
                        <button onClick={this.exportToJsonFile}>匯出JSON牌組</button>
                        <div className="file-input-wrapper">
                            <input type="file" onChange={this.handleImportJsonFile} id="file-input"/>
                            <span className="file-input-label">匯入JSON牌組</span>
                        </div>
                    </div>
                </div>
                <span>
                    <input
                        type="radio"
                        value="0"
                        checked={nowDeck == 0}
                        onChange={this.handleDeckChange}
                    />
                    帳號A牌組
                    <input
                        type="radio"
                        value="1"
                        checked={nowDeck == 1}
                        onChange={this.handleDeckChange}
                    />
                    帳號B牌組
                </span>
                <label>
                    擅長訓練：
                    {/* <select className="deckDrop" value={selectedTypeFilter} onChange={this.handleTypeFilterChange}>
                        <option value="all">不限</option>
                        <option value="0">速度</option>
                        <option value="1">持久力</option>
                        <option value="2">力量</option>
                        <option value="3">意志力</option>
                        <option value="4">智力</option>
                        <option value="6">友人</option>
                    </select>
                     */}
                     <input id="0" type="image" class={this.props.weights.type == "0" ? "image-btn selected" : "image-btn"} src={SpeedIcon} onClick={this.handleTypeFilterChange} alt="Speed"/>
                     <input id="1" type="image" class={this.props.weights.type == "1" ? "image-btn selected" : "image-btn"} src={StaminaIcon} onClick={this.handleTypeFilterChange} alt="Stamina"/>
                    <input id="2" type="image" class={this.props.weights.type == "2" ? "image-btn selected" : "image-btn"} src={PowerIcon} onClick={this.handleTypeFilterChange} alt="Power"/>
                    <input id="3" type="image" class={this.props.weights.type == "3" ? "image-btn selected" : "image-btn"} src={GutsIcon} onClick={this.handleTypeFilterChange} alt="Guts"/>
                    <input id="4" type="image" class={this.props.weights.type == "4" ? "image-btn selected" : "image-btn"} src={WisdomIcon} onClick={this.handleTypeFilterChange} alt="Wisdom"/>
                    <input id="6" type="image" class={this.props.weights.type == "6" ? "image-btn selected" : "image-btn"} src={FriendIcon} onClick={this.handleTypeFilterChange} alt="Friend"/>
                </label>
                <label>
                    稀有度：
                    <input id="SSR" type="image" class={selectedRarityFilter == "3" ? "image-btn selected" : "image-btn"} src={SSRIcon} onClick={() => this.handleRarityFilterChange("3")} alt="SSR"  style={{ width: '35px', height: '35px' }}/>
                    <input id="SR" type="image" class={selectedRarityFilter == "2" ? "image-btn selected" : "image-btn"} src={SRIcon} onClick={() => this.handleRarityFilterChange("2")} alt="SR"  style={{ width: '35px', height: '35px' }}/>
                    <input id="R" type="image" class={selectedRarityFilter == "1" ? "image-btn selected" : "image-btn"} src={RIcon} onClick={() => this.handleRarityFilterChange("1")} alt="R"  style={{ width: '35px', height: '35px' }}/>

                </label>
                <label>
                    {nowDeck == 0 ? (
                        `當前篩選條件下，共有 ${countCardsByDeckAndCondition(mycardsDeck, 0, nowDeck, selectedTypeFilter, selectedRarityFilter, true)} 張卡片，其中未擁有的卡片為 ${countCardsByDeckAndCondition(mycardsDeck, 0, nowDeck, selectedTypeFilter, selectedRarityFilter, false)} 張`
                    ) : (
                        `當前篩選條件下，共有 ${countCardsByDeckAndCondition(mycardsDeck, 1, nowDeck, selectedTypeFilter, selectedRarityFilter, true)} 張卡片，其中未擁有的卡片為 ${countCardsByDeckAndCondition(mycardsDeck, 1, nowDeck, selectedTypeFilter, selectedRarityFilter, false)} 張`
                    )}
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
                            <td style={{whiteSpace: 'pre-line'}}>{splitNameToLines(card.name)}</td>
                            <td>
                                <select value={card.lb}
                                        onChange={(event) => this.handleLbChange(card.id, event.target.value)}
                                        style={{fontSize: '18px'}}>
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
                                    checked={nowDeck == 0 ? card.checks : card.checks1}
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
    let replacedName = name.replace(/\[|\]/g, match => match == '[' ? '【' : '】');
    let parts = replacedName.split('】');
    let adjustedName = parts.map((part, index) => index == 0 ? part + '】 ' : part.trim()).join('\n');
    return adjustedName;
}

function countCardsByDeckAndCondition(mycardsDeck, deckIndex, nowDeck, selectedTypeFilter, selectedRarityFilter, isOwned) {
    return Object.entries(mycardsDeck)
        .filter(([cardId, card]) => {
            if (nowDeck == 0) {
                return (deckIndex == nowDeck) && (isOwned ? card.checks : !card.checks);
            } else if (nowDeck == 1) {
                return (deckIndex == nowDeck) && (isOwned ? card.checks1 : !card.checks1);
            }
            return false;
        })
        .filter(([cardId, card]) => card.type == parseInt(selectedTypeFilter) || selectedTypeFilter === 'all')
        .filter(([cardId, card]) => card.rarity == parseInt(selectedRarityFilter) || selectedRarityFilter === 'all')
        .length;
}


export default CardsTable;

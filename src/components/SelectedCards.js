import React from 'react';
import SpeedIcon from '../icons/utx_ico_obtain_00.png';
import StaminaIcon from '../icons/utx_ico_obtain_01.png';
import PowerIcon from '../icons/utx_ico_obtain_02.png';
import GutsIcon from '../icons/utx_ico_obtain_03.png';
import WisdomIcon from '../icons/utx_ico_obtain_04.png';
import FriendIcon from '../icons/utx_ico_obtain_05.png';
import events from '../card-events';
const raceRewards = [
    10,
    8,
    5
]

const type_to_icon = [
    SpeedIcon,
    StaminaIcon,
    PowerIcon,
    GutsIcon,
    WisdomIcon,
    "",
    FriendIcon,
]

function SelectedCards(props) {
    let cards = [];
    let raceBonus = 0;
    let statsNoTraining = [120,120,120,120,120];
    
    for (let i = 0; i < props.selectedCards.length; i++) {
        let lit_up = "";
        let dark = "";
        let card = props.selectedCards[i];
        raceBonus += card.race_bonus;

        for(let j = 0; j < 4; j++) {
            if (j < card.limit_break) {
                lit_up += "◆";
            } else {
                dark += "◆";
            }
        }

        for (let stat = 0; stat < 5; stat++) {
            if (events[card.id]) {
                statsNoTraining[stat] += events[card.id][stat] * card.effect_size_up;
            }
            statsNoTraining[stat] += card.starting_stats[stat];
        }

        cards.push(
            <div className="support-card">
                <img
                    className="support-card-image"
                    name={card.id}
                    src={process.env.PUBLIC_URL + "/cardImages/support_card_s_" + card.id + ".png"}
                    title={card.id}
                    alt={card.id}
                    onClick={() => props.onClick(card)}
                />
                <img
                    className="type-icon"
                    name="type icon"
                    src={type_to_icon[card.type]}
                    title="type"
                    alt="card type"
                    onClick={() => props.onClick(card)}
                />
                <span className="limit-breaks">
                    <span className="lb-yes">{lit_up}</span>
                    <span className="lb-no">{dark}</span>
                </span>
            </div>
        );
    }

    let raceMultiplier = 1 + (raceBonus / 100);
    for (let i = 0; i < 3; i++) {
        let raceGain = Math.floor(raceRewards[i] * raceMultiplier);
        raceGain = raceGain * props.weights.races[i];
        for (let stat = 0; stat < 5; stat++) {
            statsNoTraining[stat] += raceGain / 5;
        }
    }

    for (let stat = 0; stat < 5; stat++) {
        statsNoTraining[stat] += Math.floor(13.5 * raceMultiplier) * 3;
        statsNoTraining[stat] = Math.round(statsNoTraining[stat]);
    }
    

    return (
        <div className="selected-cards">
            <div className="section-header">支援卡面板</div>
            <div className="section-explanation">
            點擊可移除卡片，然後從下面清單選擇卡片添加<br/>
            分數基於這些卡片進行組合訓練時獲得的統計數據，因此這裡會保留一張卡片。
            </div>
            {cards}
            <div>
                總競賽加成: <b>{raceBonus}</b> 
                {/* <i>(推薦為35,巔峰杯為50 )</i> */}
            </div>
            {/* <div class="link">
                 <a href={getEventHelperURL(props.selectedCards)} target="_blank">Open in Gametora Event Helper</a> 
            </div> */}

        </div>
    );
}



export default SelectedCards;
import React from 'react';
import { supportCardProperties } from '../constants';
import MultiLineText from './MultiLineText'; 

function IsScenarioLink(charName, scenarioLink) {
    return scenarioLink.includes(charName);
}


function SupportCard(props) {
    

    let lit_up = "";
    let dark = "";
    
    for(let i = 0; i < 4; i++) {
        if (i < props.lb) {
            lit_up += "◆";
        } else {
            dark += "◆";
        }
    }

    let statDisplays = ["","",""];
    let isScenarioLink = IsScenarioLink(props.charName,props.scenarioLink);

    let alreadySelected = props.selected.indexOf(props.charName) > -1;
    if ('isMyCard' in props) {
        alreadySelected = props.selected.indexOf(props.id) > -1;

        return (
            <div className="support-card">
                <img
                    className={alreadySelected ? "support-card-image selected" : "support-card-image"}
                    name={props.id}
                    src={process.env.PUBLIC_URL + "/cardImages/support_card_s_" + props.id + ".png"}
                    title={props.charName}
                    alt={props.charName}
                    onClick={alreadySelected ? ()=>{} : props.onClick}
                    style={{ cursor: 'pointer' }}
                />
                <MultiLineText twName={props.twName} 
                isScenarioLink={isScenarioLink}
                />
                <span className="limit-breaks">
                    <span className="lb-yes">{lit_up}</span>
                    <span className="lb-no">{dark}</span>
                </span>
            </div>
        );
    }

    for(let i=0; i<3; i++) {
        let stat = props.stats[i];
        if (stat == "none") continue;
        let value = props.card[stat];
        if (stat == "fs_bonus") {
            value *= props.card["unique_fs_bonus"];
        } else if (stat == "specialty_rate") {
            value = (value + 100) * props.card["unique_specialty"] * props.card["fs_specialty"] - 100;
        }
        if (value < 1) {
            value *= 100;
        } else if (value < 2 && stat != "race_bonus") {
            value -= 1;
            value *= 100;
        }
        value = Math.round(value);
        statDisplays[i] = `${value}${supportCardProperties[stat].shorthand}`;
    }

    return (
        <div className="support-card">
            <img
                className={alreadySelected ? "support-card-image selected" : "support-card-image"}
                name={props.id}
                src={process.env.PUBLIC_URL + "/cardImages/support_card_s_" + props.id + ".png"}
                title={props.charName}
                alt={props.charName}
                onClick={alreadySelected ? ()=>{} : props.onClick}
                style={{ cursor: 'pointer' }}
            />
            <span className="limit-breaks">
                <span className="lb-yes">{lit_up}</span>
                <span className="lb-no">{dark}</span>
            </span>
            <MultiLineText twName={props.twName}
                         isScenarioLink={isScenarioLink}/>
            <span className="score">
                {Math.round(props.score)}
            </span>
            <span className="stat-1">
                {statDisplays[0]}
            </span>
            <span className="stat-2">
                {statDisplays[1]}
            </span>
            <span className="stat-3">
                {statDisplays[2]}
            </span>
        </div>
    );
}

export default SupportCard;
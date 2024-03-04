import React from 'react';

function ParamTable(props) {
    const { id, trainValue, twName } = props.nowSelect;

    if (!id || !trainValue || !twName) {
        return <p>尚無資料</p>;
    }

    const adjustedTwName = twName.replace(/\[|\]/g, match => (match === '[' ? '【' : '】'));

    const translationMap = {
        limitBreakLevel: '突破等級',

        basicSpecialtyRate: '基礎擅長率',
        bonusSpecWeight: '擅長率加成權重(特定劇本)',
        cardUniqueSpecialty: '卡片固有擅長率',
        cardFSSpecialty: '卡片擅長率加成',
        specialtySum: '擅長率總和',
        finalSpecialtyRate: '卡片最終擅長率',
        trainingDays: '實際訓練天數',
        energyGain: '體力增益',
        bondNeeded: '需要的羈絆值',
        daysToBond: '羈絆所需天數',
        rainbowDays: '彩圈天數',
        finalScore: '最終分數',
    };

    return (
        <div className="selected-cards">
            <table className="custom-table">
                <tbody>
                    <tr>
                        <th>名稱</th>
                        <td>{adjustedTwName}
                        <div className="support-card">
                        <img
                            className={"support-card-image"}
                            name={id}
                            src={process.env.PUBLIC_URL + "/cardImages/support_card_s_" + id + ".png"}
                            title={adjustedTwName}
                            alt={twName}
                        />
                        <span className="limit-breaks">
                            <span className="lb-yes">{lbColor(trainValue.limitBreakLevel, true)}</span>
                            <span className="lb-no">{lbColor(trainValue.limitBreakLevel, false)}</span>
                        </span>
                            <span className="score">
                                {Math.round(trainValue.finalScore)}
                            </span>
                        </div>
                        
                        </td>
                    </tr>
                    <tr>
                        <th>一些參數</th>
                        <td>
                            <table className="inner-table">
                                <tbody>
                                    {Object.entries(trainValue).map(([key, value]) => (
                                        <tr key={key}>
                                            <th>{translationMap[key]}</th>
                                            <td>{formatValue(key,value)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* <tr>
                        <th>名稱</th>
                        <td>{twName}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

function formatValue(key,value) {
    if (Array.isArray(value)) {
        return value.map(item => formatItem(item)).join(', ');
    } else {
        if(key === "cardType" || key === "finalSpecialtyRate"){
            return customLogic(key,value)
        }
        return formatItem(value);
    }
}

function formatItem(item) {
    if (typeof item === 'number') {
        const formattedValue = parseFloat(item.toFixed(2));
        return Number.isInteger(formattedValue) ? formattedValue.toString() : formattedValue.toFixed(2);
    }
    return item;
}

function customLogic(key, value) {
    if(key === "typeCount"){
    switch (String(value)) {
        case '0':
            return "速卡";
        case '1':
            return "耐卡";
        case '2':
            return "力卡";
        case '3':
            return "意志卡";
        case '4':
            return "智卡";
        case '6':
            return "友人卡";
        default:
            return "無資料";
    }
}if (key === "finalSpecialtyRate") {
    value = parseFloat(value);
    return (value * 100).toFixed(2) + '%';
}
}
function lbColor(lbValue,bool){
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



export default ParamTable;

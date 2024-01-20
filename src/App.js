import './App.css';
import cards from './cards';
import supportCardsName from './supportCardsName'
import TierList from './components/TierList';
import Weights from './components/Weights';
import SelectedCards from './components/SelectedCards';
import Filters from './components/Filters';
import CardsTable from './components/CardsTable';
import ParamTable from './components/ParamTable';

import React from 'react';

// const ordinal = ["1", "2", "3", "4", "5", "6", "7"];
// const type_names = ["速卡", "耐卡", "力卡", "根卡", "智卡", "", "友人卡"];

class App extends React.Component {
    constructor(props) {
        super(props);

        const supportCardsCopy = JSON.parse(JSON.stringify(supportCardsName));
        const mycardsDeck = {};
        Object.entries(supportCardsName).forEach(([id, name]) => {
            const matchingCard = cards.find(card => card.id === parseInt(id, 10));
            mycardsDeck[id] = {
                id:id,
                name: name,
                checks: true,
                lb: 4,
                type: matchingCard ? matchingCard.type : null,
                rarity:matchingCard ? matchingCard.rarity : null,
            };
        });


        this.state = {
            weights: {
                type: 0,
                bondPerDay: 3.5,
                trainingDays: 50,
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
                stats: [1,1,1.1,1,1,0.5,1.5],
                multi: 1.4,
                bonusFS: 0,
                bonusSpec: 15,
                motivation: 0.2,
                scenarioLink: [],
                scenario: "",
                scenarioBonus: 75,
                fanBonus: 0.05,
                prioritize: true,
                onlySummer: false,
            },
            selectedCards: [
                cards.find((c) => c.id === 30052 && c.limit_break === 4),
                cards.find((c) => c.id === 30101 && c.limit_break === 4),
            ],
            availableCards: cards,
            twCardNames: supportCardsName,
            mycardsDeck: mycardsDeck,
            checkcBox:{'CARD': true,
                        'TW':true,},
            nowSelect: {
                id:'',
                trainValue:{},
                twName:'',
            },
            label: ""
        }


        this.onWeightsChanged = this.onWeightsChanged.bind(this);
        this.onCardSelected = this.onCardSelected.bind(this);
        this.onCardRemoved = this.onCardRemoved.bind(this);
        this.onCardsChanged = this.onCardsChanged.bind(this);
        this.onLoadPreset = this.onLoadPreset.bind(this);

    }

    componentDidMount() {
        const savedMycardsDeck = localStorage.getItem('mycardsDeck');
        if (savedMycardsDeck) {
            this.setState({ mycardsDeck: JSON.parse(savedMycardsDeck) });
        }
        // localStorage.clear(); 
    }

    ownClick = (id,bool) => {
        this.setState((prevState) => {
            const updatedMycardsDeck = { ...prevState.mycardsDeck };
            updatedMycardsDeck[id].checks = bool;

            localStorage.setItem('mycardsDeck', JSON.stringify(updatedMycardsDeck));


            return { mycardsDeck: updatedMycardsDeck };
        });
    };

    lbChange = (id,value) => {
        this.setState((prevState) => {
            const updatedMycardsDeck = { ...prevState.mycardsDeck };
            updatedMycardsDeck[id].lb = value;

            localStorage.setItem('mycardsDeck', JSON.stringify(updatedMycardsDeck));

            return { mycardsDeck: updatedMycardsDeck };
        });
    };

    handletTrainValue = (id,trainValue,twName) => {
        this.setState({
          nowSelect: {
            // ...this.state.nowSelect,
            id : id,
            trainValue: trainValue,
            twName:twName,
          }
        });
      }
      


    onWeightsChanged(statWeights, generalWeights) {
        let combinedWeights = {...statWeights, ...generalWeights};
        this.setState({weights: combinedWeights});
    }

    onCardSelected(card) {
        if (this.state.selectedCards.length > 5) return;
        let cards = this.state.selectedCards.slice();
        let index = this.state.selectedCards.findIndex((c) => c.id === card.id);

        if (index > -1) {
            cards[index] = card;
        } else {
            cards.push(card);
        }
        this.setState({selectedCards:cards});
    }


    onCardRemoved(card) {
        if (this.state.selectedCards.length === 1) return;
        let cards = this.state.selectedCards.slice();
        let cardIndex = cards.findIndex((c) => c.id === card.id);
        cards.splice(cardIndex, 1);
        this.setState({selectedCards:cards});
        this.setState({
            nowSelect: {
              id: card.id,
              trainValue: this.state.nowSelect.trainValue,
            }
          });
    }


    onCardsChanged(cards) {
        this.setState({availableCards: cards});
    }

    handleChecksChange = (value, bool) => {
        this.setState((prevState) => {
            const updatedCheckBox = { ...prevState.checkcBox, [value]: bool };
            return { checkcBox: updatedCheckBox };
        });
    }

    onLoadPreset(presetCards) {
        let selectedCards = [];
        for(let i = 0; i < presetCards.length; i++) {
            selectedCards.push(cards.find((c) => c.id === presetCards[i] && c.limit_break === 4));
        }
        this.setState({selectedCards:selectedCards});
    }

    findName(jp) {
        let processedText = jp.map(part => {
            if (cards && cards.length > 0) {
                let card = cards.find(c => c.char_name === part);
                if (card) {
                    let splitText = supportCardsName[card.id].split(/(\[[^\]]+\])/)[2];
                    return splitText
                }
            } else {
                return "卡名異常";
            }
        });
        return processedText;
    };
      

    render() {
        return (
            <div className="App">
                <h1>賽馬娘支援卡訓練排名表</h1>
                <span className="section-explanation">
  計算回合數為65回合，不考慮技能，只考慮卡面數值、事件以及劇本連結加成。<br/>

</span>


                <Weights
                    onChange={this.onWeightsChanged}
                    />
<div style={{ display: 'flex' }}>

    <div style={{ flex: 1 }}></div>

  
    <div style={{ flex: 1, marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
        <SelectedCards
            selectedCards={this.state.selectedCards}
            onClick={this.onCardRemoved}
            onLoadPreset={this.onLoadPreset}
            weights={this.state.weights}
        />
        <Filters
            onCardsChanged={this.onCardsChanged}
            onClick={this.handleChecksChange}
        />
    </div>

    <div style={{ flex: 1 }}>
        <ParamTable
            nowSelect={this.state.nowSelect}
        />
    </div>
</div>

                
                <TierList 
                    cards={this.state.availableCards}
                    weights={this.state.weights}
                    selectedCards={this.state.selectedCards}
                    cardSelected={this.onCardSelected}
                    twCardNames={this.state.twCardNames}
                    mycardsDeck={this.state.mycardsDeck}
                    checkBox={this.state.checkcBox}
                    nowSelectId={this.state.nowSelect.id}
                    onGetTrainValue={this.handletTrainValue}
                />

                <CardsTable mycards={this.state.mycardsDeck}
                 onClick={this.ownClick} 
                 onlbChange={this.lbChange}/>
            </div>
        );
    }
}

export default App;

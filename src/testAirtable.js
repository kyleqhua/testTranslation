import React from "react";

class TestAirtable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //translations: [],
            en: {},
            burm: {},
            zag: {},
        };

    }

    componentDidMount() {
        //this is burner airtable account with burner keys.
        fetch('https://api.airtable.com/v0/appsy6Qs9uZA8ZskK/Table%201?api_key=keyIol9Z3RTY1PZr7&view=Grid%20view')
            .then(res => res.json())
            .then(res => res.records)
            .then(res => res.map(record => record.fields))
            .then(res => {
                this.bulkAddTranDict(res)
            })
            .catch(error => console.log(error))
    }

    bulkAddTranDict(records) {
        let enDict = {}
        let burmDict = {}
        let zagDict = {}

        for (let i = 0; i < records.length; i++) {
            let fields = records[i]

            let label = fields['label']
            let en = fields['En']
            let burm = fields['Burm']
            let zag = fields['Zag']

            enDict[label] = en
            burmDict[label] = burm
            zagDict[label] = zag
        }
        // console.log(enDict)
        // console.log(burmDict)
        // console.log(zagDict)
        this.setState({ en: enDict, burm: burmDict, zag: zagDict });
    }

    render() {
        console.log('this is en')
        console.log(this.state.en)
        console.log('this is burm')
        console.log(this.state.burm)
        console.log('this is zag')
        console.log(this.state.zag)
        return (
            <div>
                hi
            </div>)
    }
}

export default TestAirtable;

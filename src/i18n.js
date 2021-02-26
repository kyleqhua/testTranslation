import i18next from 'i18next';

let enDict = {}
let burmDict = {}
let zagDict = {}

let bulkAddTranDict = function (records) {
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
}

let fetchAndFormat = function () {
  //this is burner airtable account with burner keys.
  fetch('https://api.airtable.com/v0/appsy6Qs9uZA8ZskK/Table%201?api_key=keyIol9Z3RTY1PZr7&view=Grid%20view')
    .then(res => res.json())
    .then(res => res.records)
    .then(res => res.map(record => record.fields))
    .then(res => {
      bulkAddTranDict(res)
    })
    .catch(error => console.log(error))
}

fetchAndFormat()

let trans = {
  en: {
    translation: {
      age: 'Age',
      home: 'Home',
      name: 'Name',
    },
  },
  burm: {
    translation: {
      age: 'Asss',
      home: 'Casa',
      name: 'Nombre',
    },
  },
};

let airTrans = {
  en: {
    translation:
      enDict
  },
  burm: {
    translation:
      burmDict
  },
  zag: {
    translation:
      zagDict
  }
};
console.log('this is fetched')
console.log(airTrans)
console.log('hardcoded')
console.log(trans)
i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'es'
    // Using simple hardcoded resources for simple example
    resources: trans,
  })

export default i18next
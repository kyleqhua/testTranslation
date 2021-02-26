import React from 'react';

// Import a pre-configured instance of i18next
import i18n from './i18n';
import TestAirtable from './testAirtable'

class Gator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lng: 'burm'
    }
    this.onLanguageChanged = this.onLanguageChanged.bind(this)
  }

  componentDidMount() {
    i18n.on('languageChanged', this.onLanguageChanged)
  }

  componentWillUnmount() {
    i18n.off('languageChanged', this.onLanguageChanged)
  }

  onLanguageChanged(lng) {
    this.setState({
      lng: lng
    })
  }

  render() {
    let gator = this.props,
      lng = this.state.lng

    return (
      <div>
        <label>{i18n.t('name', { lng })}</label>
        <span>{gator.name} 🐊</span>
        <label>{i18n.t('age', { lng })}</label>
        <span>{gator.age}</span>
        <label>{i18n.t('home', { lng })}</label>
        <span>{gator.home}</span>
      </div>
    )
  }
}
export default Gator
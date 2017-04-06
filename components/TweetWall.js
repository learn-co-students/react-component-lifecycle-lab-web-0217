const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }

 shouldComponentUpdate(nextProps, nextState){
  return (nextProps.newTweets.length > 0)
 }

 componentWillReceiveProps(nextProps, nextState){
  this.setState({
    tweets: [...nextProps.newTweets, ...this.state.tweets,]
  })
 }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;

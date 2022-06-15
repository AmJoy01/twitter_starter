import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  
  const handleOnTweetTextChange = (evt) => {
    props.setTweetText(evt.target.value);
  }

  const handleOnSubmit = () =>{
    const newTweet ={
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments:0,
       retweets: 0, 
       likes: 0,
      id: props.tweets.length
    }
    props.setTweets(props.tweets.concat(newTweet));
    props.setTweetText("");
  }
    const disabled = (props.tweetText.length === 0 || props.tweetText.length > 140);
 

  return (
    <div className="tweet-box">
      <TweetInput userProfile = {props.userProfile} 
      setTweets = {props.setTweets} 
      value = {props.tweetText}
      handleOnChange = {handleOnTweetTextChange} 
      handleOnSubmit={handleOnSubmit}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton disabled = {disabled} handleOnSubmit = {handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}


export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled ={props.disabled} onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}

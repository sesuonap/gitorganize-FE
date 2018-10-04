import React from 'react';
const { HandleThing, RepoTitle, SeemsUnused } = require('./lineOneDependencies.js')
/**
 * A counter button: tap the button to increase the count.
 */

const LineOneHandleAndTitle = ({}) => (
  <span className="d-block position-relative">
    <input type="hidden" name="repo_ids[]" id="pinned-repo-reorder-147890778" value="147890778" className="form-control" />
    <HandleThing/>
    <RepoTitle/>
    <SeemsUnused/>
  </span>
)

const LineTwoDescription = ({name}) => (
  <p className="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
    stdout to error
  </p>
)

const LineThreeLanguageAndStar = ({name}) => (
  <p className="mb-0 f6 text-gray">
    <span className="repo-language-color pinned-repo-meta" style={{backgroundColor:"#89e051"}}></span>
    Shell
    <a href="/MichaelDimmitt/ERRORSCREAM/stargazers" className="pinned-repo-meta muted-link">
      <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14"
        height="16" role="img">
        <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
      1
    </a>
  </p>
)

const PinnedElement = ({}) => (
  <div className="pinned-repo-item-content">
    <LineOneHandleAndTitle/>
    <LineTwoDescription/>
    <LineThreeLanguageAndStar/>
  </div>
)

const ListItem = ({name}) => (
    <li  className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
      <PinnedElement/>
    </li>
);

class PinnedScrollbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{padding: '10px 0px 0px 10px'}}>
        <link crossOrigin="anonymous" media="all" integrity="sha512-mjQPRAh2Y9A0sPdZzipNfPO7PT4g06mk0uZs15DbL/vsNCRGx1uRzWVzls9MJCoy2yRNjaMmEVFKJDpCui00mA=="
          rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-df973073d880f28fbbae0263fb1ef62b.css" />
        <link crossOrigin="anonymous" media="all" integrity="sha512-sFylaerRMF2QvD7BxrJw3uWMZbqMvqlbTqActs2xcnXpypTqYf80W6OJdQHsx2GJrcmQhxU1paT9sUNjcsm/3g=="
          rel="stylesheet" href="https://assets-cdn.github.com/assets/github-c8b7f8ba21d8ea4aac7a0e4f3db4a01c.css" />
        <script crossOrigin="anonymous" integrity="sha512-j7P2Pw3104HznNqyNm7WuCF8Lstcf/sPX5meP6e5RFF177kmi6SAbkZ52A3ttKj0cRHLRrUbk7C1w1xtwh52zA=="
          type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-c163002918ede72971a36e0025f67a4a.js"></script>
        <script crossOrigin="anonymous" async="async" integrity="sha512-mKirltAYIDdLyjM6JXq3/pDWd9Hq8ZxXzbioLqfaYCw+za8uLbbYxQ/hD1+/i4zlZo0E9Cm9A6qRyU665FfQnA=="
          type="application/javascript" src="https://assets-cdn.github.com/assets/github-648fd55067472ce5fae41cdf92f72074.js"></script>

        <div className="col-10 float-left">

            <div className="js-pinned-repos-reorder-container">

            <form className="js-pinned-repos-reorder-form" id="user-11463275-pinned-repos-reorder-form" action="/users/MichaelDimmitt/reorder_pinned_repositories"
              acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
              name="_method" value="put" /><input type="hidden" name="authenticity_token" value="ZPGZVl0xvQsVNRLfBda3s0M0/ktKPUH3MUUP9Ije3rIQMF3yEFbK7nja8x/SBhbWvgsQWEQ/9ySjoAeRmBJwTA==" />
              <ol className="pinned-repos-list  mb-4 js-pinned-repos-reorder-list" >

                <ListItem/>
                <ListItem/>

                {/*}
                  <ListItem/>
                */}
              </ol>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PinnedScrollbar;


import React from 'react';
import Article from './Article';

export default class Featured extends React.Component {
    render() {
        const Articles = [
            'Some Article',
            'Some Other Article',
            'Yet Another Article',
            'Still More',
        ].map((title, i) => <Article key={i} title={title} />);

        const adText = [
            'Ad Spot #1',
            'Ad Spot #2',
            'Ad Spot #3',
            'Ad Spot #4',
            'Ad Spot #5'
        ];

        const randomAd = adText[Math.round(Math.random() * (adText.length - 1))];

        return (
            <div>
            	<div class='row'>
            		<div class='col-lg-12'>
            			<div id='randomAd' class='well text-center'>
            			{randomAd}
            			</div>
            		</div>
            	</div>

            	<div class='row'> {Articles} </div> 
            </div>
            );
    }
}
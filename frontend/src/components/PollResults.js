import React, { useEffect, useState } from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, ChartLabel } from 'react-vis';
import axios from 'axios';

const PollResults = () => {
  const [pollResults, setPollResults] = useState([]);

  useEffect(() => {
    const fetchPollResults = async () => {
      try {
        const response = await axios.get('http://localhost:4000/studentRoute/re');
        setPollResults(response.data);
      } catch (error) {
        console.error('Error fetching poll results:', error);
      }
    };

    fetchPollResults();
  }, []);

  // Convert votes to percentages
  const totalVotes = pollResults.reduce((sum, result) => sum + result.votes, 0);
  const data = pollResults.map(result => ({
    x: result.option,
    y: (result.votes / totalVotes) * 100,
  }));

  return (
    <center>
    <div>
      <h2>Poll Results</h2>
      <XYPlot xType="ordinal" width={500} height={300} xDistance={100}>
        <VerticalBarSeries data={data} />
        <XAxis />
        <YAxis />
        <ChartLabel
          
          className="alt-x-label"
          includeMargin={false}
          xPercent={0.5}
          yPercent={1.15}
        />
        <ChartLabel
          text="Votes (%)"
          className="alt-y-label"
          includeMargin={false}
          xPercent={-0.15}
          yPercent={-0.1}  
          style={{
            transform: 'rotate(-90)',
            textAnchor: 'end',
          }}
        />
      </XYPlot>
    </div>
    </center>
  );
};
export default PollResults;

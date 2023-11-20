import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, ChartLabel } from 'react-vis';

const Finalresults = () => {
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

  // Calculate total votes
  const totalVotes = pollResults.reduce((sum, result) => sum + result.votes, 0);

  // Convert votes to percentages for the Finalresults component
  const finalResultsData = pollResults.map(result => ({
    option: result.option,
    votes: result.votes,
    percentage: ((result.votes / totalVotes) * 100).toFixed(2),
  }));

  // Convert votes to percentages for the PollResults component
  const pollResultsData = pollResults.map(result => ({
    x: result.option,
    y: (result.votes / totalVotes) * 100,
  }));

  return (
    <div>
      <h2>Combined Poll Results</h2>

      {/* Render Finalresults component */}
      <div>
        <h3>Final Results</h3>
        <ul>
          {finalResultsData.map(result => (
            <li key={result.option}>
              Option: {result.option}, Votes: {result.votes}, Percentage: {result.percentage}%
            </li>
          ))}
        </ul>
      </div>

      {/* Render PollResults component */}
      <div>
        <h3>Poll Results Chart</h3>
        <XYPlot xType="ordinal" width={500} height={300} xDistance={100}>
          <VerticalBarSeries data={pollResultsData} />
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
    </div>
  );
};

export default Finalresults;

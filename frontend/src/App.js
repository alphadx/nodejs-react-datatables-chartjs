import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
import 'datatables.net';

const App = () => {
  const [data, setData] = useState({ chart1: [], chart2: [] });

  useEffect(() => {
    fetch('http://localhost:4000/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }, []);

  return (
    <div>
      <h1>Interactive Charts</h1>
      <Bar
        data={{
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              label: 'Chart 1',
              data: data.chart1,
              backgroundColor: 'rgba(75, 192, 192, 0.6)'
            },
            {
              label: 'Chart 2',
              data: data.chart2,
              backgroundColor: 'rgba(153, 102, 255, 0.6)'
            }
          ]
        }}
      />
      <table id="example" className="display">
        <thead>
          <tr>
            <th>Month</th>
            <th>Chart 1</th>
            <th>Chart 2</th>
          </tr>
        </thead>
        <tbody>
          {['January', 'February', 'March', 'April'].map((month, index) => (
            <tr key={index}>
              <td>{month}</td>
              <td>{data.chart1[index]}</td>
              <td>{data.chart2[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

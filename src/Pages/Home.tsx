import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, selectCount} from '../Redux/slices/counterSlice';
import { ThemeContext } from '../Layout/PageStart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: '# of Votes',
        data: [19000,13245 ],
        backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        
        ],
        borderWidth: 1,
      },
    ],
  };


function Home() {
    const count:number = useSelector(selectCount);
    const nsbStatus:boolean = useSelector((state:any) => state.stockItem.stockBar )
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext)
    const pieOption:any = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position:'right',
                labels:{
                    generateLabels: (chart:any) => {
                        const datasets = chart.data.datasets;
                        return datasets[0].data.map((data:any, i:number) => ({
                            text: `${chart.data.labels[i]} ${Math.round(data/datasets[0].data.reduce((a:number,b:number)=>a+b)*100).toFixed(0)}%`,
                            fillStyle: datasets[0].backgroundColor[i],
                            strokeStyle: datasets[0].borderColor[i],
                            fontColor: theme=="dark"?"white":"black"
                        }))
                    },
                    
                }
            },
            tooltip:{
                callbacks: {
                    label: function (context:any) {
                        return "$"+context.formattedValue;
                    }
                }
            },
        }
    }
    return (
        <div className={`${theme} overflow-hidden`}>
            {nsbStatus?
            <div className={` d-flex pt-1 justify-content-between border-bottom border-2 border-secondary-1 bar ${theme}`}>
                <div className='col-sm-12 d-flex  scroll justify-content-around'>
                    <h6 className='fw-bold align-self-center text-danger'>HSI : 22442 (-2.56%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>AAPL : 150.82 (+1.36%)</h6>
                    <h6 className='fw-bold align-self-center text-danger'>DOJ : 34054 (-1.56%)</h6>
                    <h6 className='fw-bold align-self-center text-normal'>NKE : 129.06 (0.00%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>TSLA : 175.02 (+1.26%)</h6>
                </div>
                <div className='col-sm-12 d-flex scroll2 justify-content-around'>
                    <h6 className='fw-bold align-self-center text-danger'>HSI : 22442 (-2.56%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>AAPL : 150.82 (+1.36%)</h6>
                    <h6 className='fw-bold align-self-center text-danger'>DOJ : 34054 (-1.56%)</h6>
                    <h6 className='fw-bold align-self-center text-normal'>NKE : 129.06 (0.00%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>TSLA : 175.02 (+1.26%)</h6>
                </div>
            </div>:""}
            
            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className={`${theme} block p-5 rounded-5`}>
                            <h5 className='text-decoration-underline'>Statistics of Personal Finance </h5>
                            <Doughnut data={data} options={pieOption} />
                        </div>
                    </div>
                    <div className='col-sm-8 '>
                        <div className={`${theme} block p-5 rounded-5`}>
                            <table className={theme=="dark"?"table table-dark table-striped table-bordered":"table table-striped table-bordered" }>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Home
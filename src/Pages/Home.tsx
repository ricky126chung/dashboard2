import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from '../Layout/PageStart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, } from 'chart.js';
import { Doughnut,Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

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
    const sbStatus:boolean = useSelector((state:any) => state.stockItem.stockBar )
    const stStatus:boolean=useSelector((state:any) => state.stockItem.stockTable)
    const theme = useContext(ThemeContext)
    ChartJS.defaults.color=theme=="dark"?"white":"black"
        const fetchData = async() =>{
            
        const {data} = await axios.get("/api")
        console.log(data)
        setMSFT_Stock(data["MSFT"].hist.map((x:any)=>x.close.toFixed(2)))
        setTSLA_Stock(data["TSLA"].hist.map((x:any)=>x.close.toFixed(2)))
        setMSFT_Price(data["MSFT"].curr.Price)
        setMSFT_Percent(data["MSFT"].curr.Percent)
        setTSLA_Price(data["TSLA"].curr.Price)
        setTSLA_Percent(data["TSLA"].curr.Percent)
    }
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
    const pieText:any = {
        id:"textCenter",
        beforeDatasetsDraw(chart:any, args:any, pluginOptions:any){
            const {ctx, data}= chart
            ctx.save();
            ctx.font = "bolder 13px sans-serif"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("Remain: $"+`${data.datasets[0].data[0]-data.datasets[0].data[1]}`,chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

    const [MSFT_Stock,setMSFT_Stock] = useState([0])
    const [TSLA_Stock,setTSLA_Stock] = useState([0])
    const [MSFT_Price, setMSFT_Price] = useState(0)
    const [MSFT_Percent, setMSFT_Percent] = useState(0)
    const [TSLA_Price, setTSLA_Price] = useState(0)
    const [TSLA_Percent, setTSLA_Percent] = useState(0)
    const labels:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Augest','Setember','October','November','December'];
    const MonthlyData: any = {
        labels,
        datasets: [
            {
                label: 'MSFT',
                data: MSFT_Stock,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'TSLA',
                data: TSLA_Stock,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    const loptions: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            maintainAspectRatio: false,
            title: {
                display: true,
                text:'Monthly Chart in 2023',
                color: "#FFFFFF",
                font: {
                    family: "AvenirNextLTW01-Regular",
                    size: 20,
                    style: 'bold'
                }
            },
        },
        scales:{
            x: {
                grid:{
                    color: "#808080"
                }
            },
            y:{
                grid:{
                    color: "#808080"
                }
            }
        }
    };

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className={`${theme} overflow-hidden`}>
            {sbStatus?
            <div className={` d-flex pt-1 justify-content-between border-bottom border-2 border-secondary-1 bar ${theme}`}>
                <div className='col-sm-12 d-flex  scroll justify-content-around'>
                    <h6 className='fw-bold align-self-center text-danger'>HSI : 22442 (-2.56%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>MSFT : 150.82 (+1.36%)</h6>
                    <h6 className='fw-bold align-self-center text-danger'>DOJ : 34054 (-1.56%)</h6>
                    <h6 className='fw-bold align-self-center text-normal'>NKE : 129.06 (0.00%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>TSLA : 175.02 (+1.26%)</h6>
                </div>
                <div className='col-sm-12 d-flex scroll2 justify-content-around'>
                    <h6 className='fw-bold align-self-center text-danger'>HSI : 22442 (-2.56%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>MSFT : 150.82 (+1.36%)</h6>
                    <h6 className='fw-bold align-self-center text-danger'>DOJ : 34054 (-1.56%)</h6>
                    <h6 className='fw-bold align-self-center text-normal'>NKE : 129.06 (0.00%)</h6>
                    <h6 className='fw-bold align-self-center text-success'>TSLA : 175.02 (+1.26%)</h6>
                </div>
            </div>:""}
            
            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className={`${theme} block p-5 rounded-5 h-100`}>
                            <h5 className='text-decoration-underline'>Ratio of Income and Expense </h5>
                            <Doughnut data={data} options={pieOption} 
                            plugins ={[pieText]}/>
                        </div>
                    </div>
                    <div className='col-sm-8 '>
                        {stStatus?
                        <div className={`${theme} px-5 pb-4 rounded-5 mb-3 block `}>
                            
                            <div className='row align-items-center'>
                                <div className='col-sm-5 pt-5 '>
                                    <ul className={theme=="dark"?"border p-3 cursor-pointer":"border border-2 cursor-pointer" }>
                                        <li className='fw-bold text-danger'>HSI : 22442 (-2.56%)</li>
                                        <li className='fw-bold text-success'>MSFT : {MSFT_Price} {MSFT_Percent>0?"+":"-"}{MSFT_Percent}%</li>
                                        <li className='fw-bold text-danger'>DOJ : 34054 (-1.56%)</li>
                                        <li className='fw-bold text-normal'>NKE : 129.06 (0.00%)</li>
                                        <li className='fw-bold text-success'>MSFT : {TSLA_Price} {TSLA_Percent>0?"+":"-"}{TSLA_Percent}%</li>
                                    </ul>
                                </div>
                                <div className='col-sm-7 pt-2'>
                                    <Line className=''  data={MonthlyData} options={loptions}/>
                                </div>
                            </div>
                        </div>:""}
                        <div className={`${theme} block p-5 rounded-5 mb-3`}>
                            {/*<h5 className='text-decoration-underline'>Monthly Chart in 2023 </h5>*/}
                            <Line data={MonthlyData} options={loptions}/>
                        </div>
                        <div className={`${theme} block p-5 rounded-5`}>
                            <h5 className='text-decoration-underline'>Summary of Personal Finance</h5>
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
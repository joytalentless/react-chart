import "./styles.css";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

export default function App() {
  const options: ApexOptions = {
    chart: {
      animations: {
        enabled: true,
        easing: "easeinout"
      },
      foreColor: "#4E4E4E",
      fontFamily: "",
      height: 287,
      id: "8ityw",
      toolbar: {
        show: false
      },
      type: "bar",
      width: 598
      // fontUrl: null
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 1,
        colors: {
          backgroundBarColors: [null, null],
          backgroundBarOpacity: 0
        },
        dataLabels: {
          position: "top"
        }
      },
      radialBar: {
        hollow: {
          background: "#fff"
        },
        dataLabels: {
          name: {},
          value: {},
          total: {}
        }
      },
      pie: {
        donut: {
          labels: {
            name: {},
            value: {},
            total: {}
          }
        }
      }
    },
    // colors: ["#9548B1", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"],
    dataLabels: {
      enabled: false,
      offsetX: 1,
      offsetY: -25,
      style: {
        fontWeight: 800,
        colors: ["#4A36B2"]
      },
      background: {
        enabled: false,
        foreColor: "#8C1010"
      }
    },
    fill: {
      type: "image",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.15,
        opacityFrom: 0.85,
        opacityTo: 1,

        colorStops: [
          {
            offset: 0,
            color: "#4A36B2",
            opacity: 0.9
          },
          {
            offset: 20,
            color: "#4A36B2",
            opacity: 0.8
          },
          {
            offset: 70,
            color: "#BB58A0",
            opacity: 1
          },
          {
            offset: 100,
            color: "#BB58A0",
            opacity: 1
          }
        ]
      },
      image: {
        src: ["/image/image1.png"],
        width: 66,
        height: 220
      }
    },
    grid: {
      strokeDashArray: 4,
      row: {},
      padding: {
        top: 9,
        right: 30,
        bottom: -3,
        left: 25
      }
    },
    legend: {
      fontSize: "27px",
      offsetX: 4,
      offsetY: -1,
      // markers: {
      //   shape: "square",
      //   size: 8
      // },
      itemMargin: {
        horizontal: 12,
        vertical: 0
      }
    },
    series: [
      {
        name: "Column",
        data: [
          {
            x: "2019",
            y: "667"
          },
          {
            x: "2020",
            y: "896"
          },
          {
            x: "2021",
            y: "1600"
          },
          {
            x: "2022",
            y: "2200"
          }
        ]
      }
    ],
    stroke: {
      show: true,
      width: 0
    },
    tooltip: {
      shared: false,
      intersect: true
    },
    xaxis: {
      offsetY: -3,
      labels: {
        trim: true,
        style: {
          fontSize: "13px",
          fontWeight: 600
        }
      },
      axisBorder: {
        show: false,
        color: "#8B1414"
      },
      tickPlacement: "between",
      title: {
        text: "Year",
        offsetX: -4,
        offsetY: 100,
        style: {
          fontSize: "15px",
          fontWeight: 700
        }
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 5,
      max: 2500,
      min: 0,
      labels: {
        show: false,
        offsetX: 2,
        style: {
          fontSize: "12px",
          fontWeight: 700
        }
      },
      axisTicks: {
        color: "#CF0000"
      },
      title: {
        text: "",
        offsetY: 4,
        offsetX: -30,
        style: {
          fontSize: "16px",
          fontWeight: 700
        }
      }
    },
    theme: {
      palette: "palette5"
    },
    responsive: [
      {
        breakpoint: 700,
        options: {
          chart: {
            type: "bar",
            height: 450,
            width: 400
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: "50%",
              borderRadius: 1
            },
            dataLabels: {
              position: "right"
            }
          },
          dataLabels: {
            offsetX: 50,
            offsetY: 0,
            position: "top",
            style: {
              fontSize: 20,
              fontWeight: 100,
              colors: ["#4A36B2"]
            },
            background: {
              enabled: false
            }
          },
          xaxis: {
            position: "top",
            title: {
              text: ""
            },
            labels: {
              show: false
            }
          },
          yaxis: {
            tickAmount: 6,
            max: 3000,
            min: 0,
            title: {
              text: ""
            },
            labels: {
              offsetX: 70,
              offsetY: 50,
              style: {
                fontSize: 20,
                fontWeight: 700
              }
            }
          },
          grid: {
            show: true,
            strokeDashArray: 6,
            borderColor: "#e0e0e0",
            position: "back",
            xaxis: {
              lines: {
                show: true
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            },
            padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 10
            }
          },
          fill: {
            type: "image",
            gradient: {
              type: "horizontal"
            },
            image: {
              type: "horizontal",
              src: ["/image/image2.png"],
              width: 300,
              height: 100
            }
          }
        }
      }
    ]
  };

  return (
    <div className="App">
      <div>
        <h1 style={{ color: "#4A36B2" }}>Consumer Finalcial Loss</h1>
      </div>
      <div
        id="chart"
        style={{
          margin: "auto",
          width: 600,
          display: "flex"
        }}
      >
        <div className="label" style={{ position: "absolute" }}>
          <h4
            style={{
              position: "relative",
              top: "130px",
              left: "180px",
              color: "#4A36B2"
            }}
          >
            667m
          </h4>
          <h4
            style={{
              position: "relative",
              top: "75px",
              left: "320px",
              color: "#4A36B2"
            }}
          >
            896m
          </h4>
          <h4
            style={{
              position: "relative",
              top: "-15px",
              left: "450px",
              color: "#4A36B2"
            }}
          >
            1.6B
          </h4>
          <h4
            style={{
              position: "relative",
              top: "-100px",
              left: "580px",
              color: "#4A36B2"
            }}
          >
            2.2B
          </h4>
        </div>
        <div className="label2" style={{ position: "absolute" }}>
          <h4
            style={{
              position: "relative",
              top: "100px",
              left: "160px",
              color: "#4A36B2"
            }}
          >
            667m
          </h4>
          <h4
            style={{
              position: "relative",
              top: "195px",
              left: "140px",
              color: "#4A36B2"
            }}
          >
            896m
          </h4>
          <h4
            style={{
              position: "relative",
              top: "295px",
              left: "165px",
              color: "#4A36B2"
            }}
          >
            1.6B
          </h4>
          <h4
            style={{
              position: "relative",
              top: "395px",
              left: "190px",
              color: "#4A36B2"
            }}
          >
            2.2B
          </h4>
        </div>
        <div className="label">
          <p
            style={{
              writingMode: "vertical-rl",
              rotate: "180deg",
              textOrientation: "mixed",
              marginRight: "30px",
              marginTop: "110px",
              fontWeight: 600,
              color: "#4e4e4e"
            }}
          >
            Loss
          </p>
        </div>
        <div
          style={{
            height: options.chart.height,
            marginTop: "15px",
            marginRight: "-5px"
          }}
          className="label"
        >
          <p style={{ paddingTop: "2px", float: "right" }}>$2.5B</p>
          <p style={{ marginTop: "2px", float: "right" }}>$2B</p>
          <p style={{ marginTop: "2px", float: "right" }}>$1.5B</p>
          <p style={{ marginTop: "2px", float: "right" }}>$1B</p>
          <p style={{ marginTop: "3px", float: "right" }}>$0.5B</p>
          <p style={{ marginTop: "3px", float: "right" }}>$0</p>
        </div>
        <div style={{ height: options.chart.height, marginBottom: "15px" }}>
          <span className="label2" style={{ marginLeft: "75px" }}>
            <p style={{ marginRight: "25px" }}>$0</p>
            <p style={{ marginRight: "25px" }}>$0.5B</p>
            <p style={{ marginRight: "25px" }}>$1B</p>
            <p style={{ marginRight: "25px" }}>$1.5B</p>
            <p style={{ marginRight: "25px" }}>$2B</p>
            <p style={{}}>$2.5B</p>
          </span>
          <ReactApexChart
            options={options}
            series={options.series}
            // type={options.chart.type}
            type="bar"
            height={options.chart.height}
            width={options.chart.width}
          />
        </div>
        <div
          className="label"
          style={{ marginTop: "80px", marginLeft: "-50px" }}
        >
          <svg
            width="60"
            height="30"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9625 18.75L60 18.75L60 11.25L14.9625 11.25L14.9625 -3.9373e-06L1.31134e-06 15L14.9625 30L14.9625 18.75Z"
              fill="url(#paint0_radial_415_5710)"
            />
            <path
              d="M14.9625 18.25L14.4625 18.25L14.4625 18.75L14.4625 28.7907L0.706224 15L14.4625 1.20924L14.4625 11.25L14.4625 11.75L14.9625 11.75L59.5 11.75L59.5 18.25L14.9625 18.25Z"
              stroke="#EAEAEA"
              stroke-opacity="0.5"
            />
            <defs>
              <radialGradient
                id="paint0_radial_415_5710"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(60 14.6667) rotate(180) scale(60 925.926)"
              >
                <stop stop-color="#4A36B3" />
                <stop offset="1" stop-color="#BB58A0" />
              </radialGradient>
            </defs>
          </svg>
          <p style={{ marginLeft: "10px", marginTop: "8px", width: "120px" }}>
            So far this year
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
/*Include in index.js*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Card, CardText, Row, Col } from "reactstrap";
import "./Overview.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import RankTable from "../RankTable";
import Loader from "../../../pages/Loader";
import { baseURL } from "../../../Apis";
import { Slide, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const COLORS = ["#18A88C", "#FF5656", "#0286FF"];

function millisToMinutesAndSeconds(minutes){
  var sign = minutes < 0 ? "-" : "";
  var min = Math.floor(Math.abs(minutes));
  var sec = Math.floor((Math.abs(minutes) * 60) % 60);
  return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
 }

function Overview({ quizId,setquizname }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState(null);
  let history = useHistory();
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };

  useEffect(() => {
    fetch(`${baseURL}/quiz/${quizId}/analysis?queryParam=0`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.success) {
            setData(result.data);
            setquizname(result.data.quizName)
          } else {
            notify("error", result.message);
            history.push("/");
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data) {
      setChartData([
        { name: "Correct", value: data.totalCorrectPercentage },
        { name: "Incorrect", value: data.totalIncorrectPercentage },
        { name: "Skipped", value: data.totalSkippedPercentage },
      ]);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      data &&
      chartData && (
        <div>
          <Row>
            <Col sm="6">
              <div className="overview__leadline">
                <span className="overview__general">General Stats</span>
                <span className="overview__view"> View Details</span>
              </div>
              <Card body className="overview__card1">
                <ResponsiveContainer width="100%" className="overview__pie1">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx={130}
                      cy={100}
                      innerRadius={55}
                      outerRadius={85}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                      <Label
                        style={{ fontSize: 25 }}
                        value={Math.round(data.obtainedMarks * 100) / 100}
                        position="center"
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <CardText>
                  <span className="overview__total">Out of {data.maxMarks}</span>
                </CardText>
                <Card className="overview__legends">
                  <Row>
                    <Col sm="4">
                      <span>
                        <div className="overview__name">Correct</div>
                        <span className="overview__screen">
                          <button className="overview__bt"> Oo</button>
                        </span>{" "}
                        <span className="overview__per">
                          {" "}
                          {Math.round(data.totalCorrectPercentage * 100) / 100}%
                        </span>
                      </span>
                    </Col>
                    <Col sm="4">
                      <div className="overview__name">Incorrect</div>
                      <div>
                        <span>
                          <button className="overview__bt" id="bt1">
                            {" "}
                            Oo
                          </button>
                        </span>
                        <span className="overview__per">
                          {" "}
                          {Math.round(data.totalIncorrectPercentage * 100) / 100}%
                        </span>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="overview__name">Skipped</div>
                      <div>
                        <span>
                          <button className="overview__bt" id="bt2">
                            {" "}
                            Oo
                          </button>
                        </span>
                        <span className="overview__per">
                          {" "}
                          {Math.round(data.totalSkippedPercentage * 100) / 100}%
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Card>
            </Col>
            <Col sm="6">
              <div className="overview__leadline">
                <span className="overview__general">Time Distribution</span>
                <span className="overview__view"> View Details</span>
              </div>
              <Card body className="overview__card2">
                <div className="overview__table__one">
                  <Row>
                    <Col>
                      <CardText id="txt">
                        {" "}
                        <span className="overview__t1">Total Time taken</span>
                      </CardText>
                    </Col>
                    <Col>
                      <CardText>
                        <span className="overview__time1">
                          {" "}
                          {millisToMinutesAndSeconds(data.totalTimeTaken)} min
                        </span>
                      </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <CardText id="txt">
                        {" "}
                        <span className="overview__t1">
                          Total time spent per question(Average)
                        </span>
                      </CardText>
                    </Col>
                    <Col>
                      <CardText>
                        <span className="overview__time2">
                          {" "}
                          {millisToMinutesAndSeconds(Math.round(data.timeSpentPerQuestion * 100) / 100)} min
                        </span>
                      </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <CardText id="txt">
                        {" "}
                        <span className="overview__t1">
                          Total time spent per question(Advised)
                        </span>
                      </CardText>
                    </Col>
                    <Col>
                      <CardText>
                        <span className="overview__time3">
                          {" "}
                          {Math.round(data.advisedTimePerQuestion * 100) / 100} min
                        </span>
                      </CardText>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col sm="6">
              <Card body className="overview__card1">
                <RankTable rank={data.sortedRank} />
              </Card>
            </Col>
            <Col sm="6">
              <Card body className="overview__card2">
                <div className="overview__table__one">
                  <CardText className="overview__heading">
                    {data.totalIncorrect} incorrect answer
                    {data.totalIncorrect > 1 ? "s" : ""}{" "}
                  </CardText>
                  <Row>
                    <Col>
                      <CardText id="txt">
                        {" "}
                        <span className="overview__t1">
                          You did not attempt most questions
                        </span>
                      </CardText>
                    </Col>
                    <Col>
                      <CardText>
                        <span className="overview__time2">{data.maxSkippedTopic}</span>
                      </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <CardText id="txt">
                        {" "}
                        <span className="overview__t1">
                          You attempted most questions incorrect from
                        </span>
                      </CardText>
                    </Col>
                    <Col>
                      <CardText>
                        <span className="overview__time2">{data.maxIncorrectTopic}</span>
                      </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <CardText id="txt">
                        {" "}
                        <span className="overview__t1">
                          Additional topics you need to work on
                        </span>
                      </CardText>
                    </Col>
                    <Col>
                      <CardText>
                        <span className="overview__time2"> {data.additionalTopics}</span>
                      </CardText>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      )
    );
  }
}

export default Overview;

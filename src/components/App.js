import React from "react";

class App extends React.Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    btnDisabled: false,
    interval: "",
    intervalsStorage: [],
  };
  startClicked = () => {
    this.setState({
      btnDisabled: true,
    });
    let timer = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
        this.setState({
          second: 0,
          minute: minute + 1,
        });
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 1000);
    this.setState({
      interval: timer,
    });
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };

  intervalClicked = () => {
    const { second, minute, hour, intervalsStorage } = this.state;
    intervalsStorage.push(`${hour}: ${minute}: ${second}:`);
    this.setState({
      intervalsStorage,
    });
  };

  clearClicked = () => {
    this.stopClicked();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      intervalsStorage: [],
    });
  };

  render() {
    const { second, minute, hour, btnDisabled, intervalsStorage } = this.state;
    return (
      <div className="container mt-5 p-5 bg-light">
        <div className="row py-3 bg-primary">
          <div className="col-sm-12">
            <div className="card bg-info m-3">
              <h1 className="logo text-center text-light m-3 p-3 border-0 bg-danger">
                Online Timer Watch
              </h1>
              <div className="card-header m-2 bg-warning">
                <div className="box">
                  <div className="btn-group-xl text-center p-2">
                    <button className="btn btn-dark w-25 p-3">{hour}</button>
                    <button className="btn btn-dark w-25 p-3 m-3">
                      {minute}
                    </button>
                    <button className="btn btn-dark w-25 p-3">{second}</button>
                    <br />
                    <button className="btn text-info w-25 p-2">
                      <b>HOURS</b>
                    </button>
                    <button className="btn text-info w-25 p-2 m-3">
                      <b>MINUTES</b>
                    </button>
                    <button className="btn text-info w-25 p-2">
                      <b>SECONDS</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body m-2 text-center bg-dark">
                <div className="btn-group-lg">
                  <button
                    className="btn btn-success w-25"
                    onClick={this.startClicked}
                    disabled={btnDisabled}
                  >
                    START
                  </button>
                  <button
                    className="btn btn-danger w-25 m-3"
                    onClick={this.stopClicked}
                  >
                    STOP!
                  </button>
                  <button
                    className="btn btn-secondary w-25"
                    onClick={this.intervalClicked}
                    disabled={!btnDisabled}
                  >
                    INTER
                  </button>
                  <button
                    className="btn btn-primary w-25"
                    onClick={this.clearClicked}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
              <div className="card-footer bg-dark m-2 text-center text-light p-2">
                {intervalsStorage.map((item, index) => (
                  <h5>
                    {index + 1} =&gt; {item}{" "}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

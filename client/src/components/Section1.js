import icon from '../images/wsbet.jpg';
import users from '../images/sec1users.jpg';


function Section1() {

  return (
      <div className="section">
        <div className="item text-sec">
          <h2>A data scraper that presents data efficiently</h2>
          <p>Comment Hunter was designed with the purpose of allowing users to track mentions of certain keywords from any particular sub Reddit. Therefore, the application is developed to retireve information and present the data broken down into a graph that users will be able to understand and analyze.</p>
        </div>
        <div className="item img-sec">
          <img className="imgSection" src={users}></img>
        </div>
      </div>
  );
}

export default Section1;